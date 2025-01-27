import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Admin route with GET method");
  console.log("Rota de adminisrtador com método GET");
});

export default router;