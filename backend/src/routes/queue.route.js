import express from "express";
import { getIo } from "../lib/socket.js"; // Para sincronização via socket.io

const router = express.Router();

// Simulação de um armazenamento temporário da fila (idealmente, seria um banco de dados)
let queue = [];

// Adicionar uma música ao final da fila
router.post("/add", (req, res) => {
  const { song } = req.body;
  if (!song) return res.status(400).json({ message: "Música inválida" });

  queue.push(song);
  getIo().emit("queue_updated", queue); // Notificar os clientes via socket.io
  res.status(201).json({ message: "Música adicionada à fila", queue });
});

// Remover uma música específica da fila
router.delete("/remove/:id", (req, res) => {
  const { id } = req.params;
  queue = queue.filter(song => song.id !== id);
  
  getIo().emit("queue_updated", queue);
  res.json({ message: "Música removida", queue });
});

// Reordenar a fila
router.put("/reorder", (req, res) => {
  const { startIndex, endIndex } = req.body;
  if (
    startIndex < 0 || startIndex >= queue.length ||
    endIndex < 0 || endIndex >= queue.length
  ) {
    return res.status(400).json({ message: "Índices inválidos" });
  }

  const [movedSong] = queue.splice(startIndex, 1);
  queue.splice(endIndex, 0, movedSong);

  getIo().emit("queue_updated", queue);
  res.json({ message: "Fila reordenada", queue });
});

// Limpar a fila inteira
router.delete("/clear", (req, res) => {
  queue = [];
  
  getIo().emit("queue_updated", queue);
  res.json({ message: "Fila de músicas limpa", queue });
});

export default router;
