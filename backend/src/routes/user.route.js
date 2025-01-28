import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  req.auth.userId
  res.send("User route with GET method");
  console.log("Rota de usuário com método GET");
});

export default router;