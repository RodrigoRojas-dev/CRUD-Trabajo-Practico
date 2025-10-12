import mongoose, { Schema, Document, model } from "mongoose";

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

const User = model<IUser>("User", userSchema)

interface IUser {
  name: string,
  email: string,
  password: string
}