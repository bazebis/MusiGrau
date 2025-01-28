import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  clerkId: {
    type: String,
    required: true,
    unique: true
  }, 
}, { timestamps: true });   // serve para registrar horario de determinada atividade do usuario
// createdAt, updatedAt




export const User = mongoose.model("User", userSchema);