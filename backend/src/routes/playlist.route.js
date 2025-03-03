import { Router } from "express";
import { getPlaylist, addSongToPlaylist, removeSongFromPlaylist } from "../controller/playlist.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();
router.use(protectRoute);

router.get("/", getPlaylist); // 🔄 Obtém a playlist global
router.post("/add", addSongToPlaylist); // 🔄 Adiciona uma música à playlist
router.post("/remove", requireAdmin, removeSongFromPlaylist); // 🔄 Remove uma música da playlist

export default router;
