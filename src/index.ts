import express from "express";
import { connectDB } from "./database/connection.ts";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "./controllers/UserControllers.ts";

const app = express();

app.use(express.json());

const PORT = 3000

connectDB()

app.get("/", (request, response) => {
  response.json({ message: 'API Status: OK' })
})

app.get("/users", getAllUsers)

app.get("/users/:id", getUserById)

app.post("/users", createUser)

app.patch("/users/:id", updateUser)

app.delete("/users/:id", deleteUser)

app.listen(PORT, () => {
  console.log(`🚀 Servidor Express escuchando en http://localhost:${PORT}`);
})