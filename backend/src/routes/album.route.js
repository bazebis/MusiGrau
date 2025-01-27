import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Album route with GET method");
  console.log("Rota de álbum com método GET");
});

export default router;