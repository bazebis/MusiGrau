import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Stats route with GET method");
  console.log("Rota de estatus com método GET");
});

export default router;