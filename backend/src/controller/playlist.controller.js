import { Playlist } from "../models/playlist.model.js";

// Obtém a playlist global com detalhes das músicas
export const getPlaylist = async (req, res, next) => {
  try {
    let playlist = await Playlist.findOne().populate("queue");

    if (!playlist) {
      playlist = await Playlist.create({ queue: [] });
    }

    res.status(200).json(playlist);
  } catch (error) {
    console.log("Error in getPlaylist", error);
    next(error);
  }
};

// Adiciona uma música à playlist
export const addSongToPlaylist = async (req, res, next) => {
  try {
    const { id } = req.body; // Correção: Usar "id" para manter o padrão

    const playlist = await Playlist.findOneAndUpdate(
      {},
      { $push: { queue: id } }, // Correção: Usar $push como no admin.controller.js
      { new: true, upsert: true } // Se não existir playlist, cria uma nova
    ).populate("queue");

    res.status(200).json(playlist);
  } catch (error) {
    console.log("Error in addSongToPlaylist", error);
    next(error);
  }
};

// Remove uma música da playlist
export const removeSongFromPlaylist = async (req, res, next) => {
  try {
    const { id } = req.body;

    const playlist = await Playlist.findOneAndUpdate(
      {},
      { $pull: { queue: id } }, // Correção: Usar $pull para remover o ID da lista
      { new: true }
    ).populate("queue");

    res.status(200).json(playlist);
  } catch (error) {
    console.log("Error in removeSongFromPlaylist", error);
    next(error);
  }
};
