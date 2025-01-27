import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Auth route with GET method");
  console.log("Rota de autenticação com método GET");
});

export default router;