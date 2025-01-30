import dotenv from "dotenv";
import express from "express";
import { clerkMiddleware } from "@clerk/express";
import fileUpload from "express-fileupload";
import path from "path";
import cors from "cors";


import { connectDB } from "./lib/db.js";
import userRoutes from "./routes/user.route.js";
import adminRoutes from "./routes/admin.route.js";
import authRoutes from "./routes/auth.route.js";
import songRoutes from "./routes/song.route.js";
import albumRoutes from "./routes/album.route.js";
import statRoutes from "./routes/stat.route.js";

dotenv.config();

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT;

app.use(cors(
  {
    origin: "http://localhost:3000",
    credentials: true,
  }
));

app.use(express.json()); // to parse req.body
app.use(clerkMiddleware()); // this will add the auth key to the request object as req.auth. assim podemos pegar coisas como req.auth.userId
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "tmp"), //dirname eh o diretorio atual, e nele vamos criar um tmp que armazenara os files ateh serem uploaded pro cloudinary
    createParentPath: true, // se o diretorio nao existir ele cria
    limits: {
      fileSize: 10 * 1024 * 1024, // 10MB max file size
    },
  })
);

app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statRoutes);

// error handler
app.use((err, req, res, next) => {
  res.status(500).json({ message: process.env.NODE_ENV === "production" ? "Internal Server Error" : err.message });
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
  connectDB();
});
