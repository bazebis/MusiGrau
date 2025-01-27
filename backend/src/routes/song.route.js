import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Song route with GET method");
  console.log("Rota de música com método GET");
});

export default router;