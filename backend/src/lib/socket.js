import { Server } from "socket.io";
import { Message } from "../models/message.model.js";
import { Playlist } from "../models/playlist.model.js"; // 🔄 Importamos o modelo da playlist


export const initializeSocket = (server) => {
	const io = new Server(server, {
		cors: {
			origin: "http://localhost:3000",
			credentials: true,
		},
	});

	const userSockets = new Map(); // { userId: socketId}
	const userActivities = new Map(); // {userId: activity}

	io.on("connection", (socket) => {
		socket.on("user_connected", (userId) => {
			userSockets.set(userId, socket.id);
			userActivities.set(userId, "Idle");

			// broadcast to all connected sockets that this user just logged in
			io.emit("user_connected", userId);

			socket.emit("users_online", Array.from(userSockets.keys()));

			io.emit("activities", Array.from(userActivities.entries()));
		});

		socket.on("update_activity", ({ userId, activity }) => {
			console.log("activity updated", userId, activity);
			userActivities.set(userId, activity);
			io.emit("activity_updated", { userId, activity });
		});

		socket.on("send_message", async (data) => {
			try {
				const { senderId, receiverId, content } = data;

				const message = await Message.create({
					senderId,
					receiverId,
					content,
				});

				// send message to receiver in realtime, if they are online
				const receiverSocketId = userSockets.get(receiverId);
				if (receiverSocketId) {
					io.to(receiverSocketId).emit("receive_message", message);
				}

				socket.emit("message_sent", message);
			} catch (error) {
				console.error("Message error", error);
				socket.emit("message_error", error.message);
			}
		});

				// 🔄 NOVOS EVENTOS: SINCRONIZAÇÃO DA PLAYLIST
				socket.on("getPlaylist", async () => {
					const playlist = await Playlist.findOne().populate("queue");
					socket.emit("playlistUpdated", playlist); // 🔄 Envia a playlist ao cliente que solicitou
				});
		
				socket.on("addSong", async (id) => {
					const playlist = await Playlist.findOneAndUpdate(
						{},
						{ $push: { queue: id } },
						{ new: true, upsert: true }
					).populate("queue");
		
					io.emit("playlistUpdated", playlist); // 🔄 Atualiza a playlist para todos os usuários
				});
		
				socket.on("removeSong", async (id) => {
					const playlist = await Playlist.findOneAndUpdate(
						{},
						{ $pull: { queue: id } },
						{ new: true }
					).populate("queue");
		
					io.emit("playlistUpdated", playlist); // 🔄 Atualiza a playlist para todos os usuários
				});

		socket.on("disconnect", () => {
			let disconnectedUserId;
			for (const [userId, socketId] of userSockets.entries()) {
				// find disconnected user
				if (socketId === socket.id) {
					disconnectedUserId = userId;
					userSockets.delete(userId);
					userActivities.delete(userId);
					break;
				}
			}
			if (disconnectedUserId) {
				io.emit("user_disconnected", disconnectedUserId);
			}
		});
	});
};
