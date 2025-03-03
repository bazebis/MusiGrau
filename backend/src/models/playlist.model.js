import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema({
  queue: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Song", // 🔗 Referência ao modelo de músicas existente
    },
  ],
}, { timestamps: true }); // 🕒 Adiciona createdAt e updatedAt automaticamente

export const Playlist = mongoose.model("Playlist", playlistSchema);
