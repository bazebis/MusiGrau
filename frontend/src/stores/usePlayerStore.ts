import { create } from "zustand";
import { Song } from "@/types";
import { useChatStore } from "./useChatStore";

interface PlayerStore {
  currentSong: Song | null;
  isPlaying: boolean;
  queue: Song[];
  currentIndex: number;

  initializeQueue: (songs: Song[]) => void;
  playAlbum: (songs: Song[], startIndex?: number) => void;
  setCurrentSong: (song: Song | null) => void;
  togglePlay: () => void;
  playNext: () => void;
  playPrevious: () => void;

  addToQueue: (song: Song) => void;
  removeFromQueue: (songId: string) => void;
  clearQueue: () => void;
  reorderQueue: (startIndex: number, endIndex: number) => void;
}

export const usePlayerStore = create<PlayerStore>((set, get) => {
  const socket = useChatStore.getState().socket;

  return {
    currentSong: null,
    isPlaying: false,
    queue: [],
    currentIndex: -1,

    // Inicializa a fila de músicas
    initializeQueue: (songs: Song[]) => {
      if (get().queue.length > 0) return; // ⚠ Se já existe uma fila, não substitui
      set({
        queue: songs,
        currentSong: get().currentSong || songs[0],
        currentIndex: get().currentIndex === -1 ? 0 : get().currentIndex,
      });
    },

    // Inicia a reprodução de um álbum a partir de uma música específica
    playAlbum: (songs: Song[], startIndex = 0) => {
      if (songs.length === 0) return;
      const song = songs[startIndex];
      // Notifica o servidor sobre a música em reprodução
      if (socket.auth) {
        socket.emit("update_activity", {
          userId: socket.auth.userId,
          activity: `Playing ${song.title} by ${song.artist}`,
        });
      }
      set({ queue: songs, currentSong: song, currentIndex: startIndex, isPlaying: true });
    },

    // Adiciona uma música ao final da fila
    addToQueue: (song: Song) => {
      const updatedQueue = [...get().queue, song];
      set({ queue: updatedQueue });
      socket.emit("update_queue", updatedQueue);
    },

    // Remove uma música da fila pelo ID
    removeFromQueue: (songId: string) => {
      const updatedQueue = get().queue.filter(song => song._id !== songId);
      set({ queue: updatedQueue });
      socket.emit("update_queue", updatedQueue);
    },

    // Limpa toda a fila de músicas
    clearQueue: () => {
      set({ queue: [], currentSong: null, currentIndex: -1, isPlaying: false });
      socket.emit("update_queue", []);
    },

    // Reordena a fila de músicas
    reorderQueue: (startIndex: number, endIndex: number) => {
      const queueCopy = [...get().queue];
      const [movedSong] = queueCopy.splice(startIndex, 1);
      queueCopy.splice(endIndex, 0, movedSong);
      set({ queue: queueCopy });
      socket.emit("update_queue", queueCopy);
    },

    // Define a música atual em reprodução
    setCurrentSong: (song: Song | null) => {
      if (!song) return;
      // Notifica o servidor sobre a música atual
      if (socket.auth) {
        socket.emit("update_activity", {
          userId: socket.auth.userId,
          activity: `Playing ${song.title} by ${song.artist}`,
        });
      }
      const songIndex = get().queue.findIndex(s => s._id === song._id);
      set({
        currentSong: song,
        isPlaying: true,
        currentIndex: songIndex !== -1 ? songIndex : get().currentIndex,
      });
    },

    // Alterna entre tocar e pausar a música atual
    togglePlay: () => {
      const willStartPlaying = !get().isPlaying;
      const currentSong = get().currentSong;
      // Notifica o servidor sobre a mudança de estado
      if (socket.auth) {
        socket.emit("update_activity", {
          userId: socket.auth.userId,
          activity: willStartPlaying && currentSong ? `Playing ${currentSong.title} by ${currentSong.artist}` : "Idle",
        });
      }
      set({ isPlaying: willStartPlaying });
    },

    // Avança para a próxima música na fila
    playNext: () => {
      const { currentIndex, queue } = get();
      const nextIndex = currentIndex + 1;
      if (nextIndex < queue.length) {
        const nextSong = queue[nextIndex];
        // Atualiza a atividade do usuário
        if (socket.auth) {
          socket.emit("update_activity", {
            userId: socket.auth.userId,
            activity: `Playing ${nextSong.title} by ${nextSong.artist}`,
          });
        }
        set({ currentSong: nextSong, currentIndex: nextIndex, isPlaying: true });
      } else {
        set({ isPlaying: false });
        if (socket.auth) {
          socket.emit("update_activity", { userId: socket.auth.userId, activity: "Idle" });
        }
      }
    },

    // Retorna para a música anterior na fila
    playPrevious: () => {
      const { currentIndex, queue } = get();
      const prevIndex = currentIndex - 1;
      if (prevIndex >= 0) {
        const prevSong = queue[prevIndex];
        // Atualiza a atividade do usuário
        if (socket.auth) {
          socket.emit("update_activity", {
            userId: socket.auth.userId,
            activity: `Playing ${prevSong.title} by ${prevSong.artist}`,
          });
        }
        set({ currentSong: prevSong, currentIndex: prevIndex, isPlaying: true });
      } else {
        set({ isPlaying: false });
        if (socket.auth) {
          socket.emit("update_activity", { userId: socket.auth.userId, activity: "Idle" });
        }
      }
    },
  };
});
