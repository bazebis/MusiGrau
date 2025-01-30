import { Router } from "express";
import { getAllAlbums, getAlbumById } from "../controller/album.controller.js";

const router = Router();

// router.use(protectRoute);  ele diz q eh melhor deixar liberado tocar musica sem logar....

router.get("/", getAllAlbums);
router.get("/:albumId", getAlbumById);

export default router;