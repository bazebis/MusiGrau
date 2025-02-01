import {create} from "zustand";
import {Song} from "@/types";

interface PlayerStore {
  currentSong: Song | null;
  isPlaying: boolean;
  queue: Song[];
  currentIndex: number;

  initializeQueue: (songs: Song[]) => void;
  PlayAlbum: (song: Song[], startIndex?: number) => void;
  setcurrentSong: (song: Song | null) => void;
  togglePlay: () => void;
  playNext: () => void;
  playPrevious: () => void;
}

export const usePlayerStore = create<PlayerStore> ((set, get) => ({
  currentSong: null,
  isPlaying: false,
  queue:[],
  currentIndex: -1,

  initializeQueue: (songs: Song[]) => {
    set({
      queue:songs,
      currentSong: get().currentSong || songs[0],
      currentIndex: get().currentIndex === -1 ? 0 : get().currentIndex
    })
  },
  PlayAlbum: (songs: Song[], startIndex=0) => {
    if(songs.length === 0) return;

    const song = songs[startIndex];

    set({
      queue: songs,
      currentSong: song,
      currentIndex: startIndex,
      isPlaying: true,
    })
  },
  setCurrentSong: (song: Song | null) => {
    if(!song) return;

    const songIndex = get().queue.findIndex(s => s._id === song._id);
    set({
      currentSong: song,
      isPlaying: true,
      currentIndex: songIndex !== -1 ? songIndex : get().currentIndex
    })
  },
  togglePlay: () => {},   //parou aki no toggle
  playNext: () => {},
  playPrevious: () => {},
}))