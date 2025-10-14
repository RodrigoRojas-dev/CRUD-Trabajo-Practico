import express from "express";
import { connectDB } from "./database/connection.ts";
import { createUser, getAllUsers } from "./controllers/UserControllers.ts";

const app = express();

app.use(express.json());

const PORT = 3000

connectDB()

app.get("/", (request, response) => {
  response.json({ message: 'API Status: OK' })
})

app.get("/users", getAllUsers)

app.post("/users", createUser)

app.listen(PORT, () => {
  console.log(`🚀 Servidor Express escuchando en http://localhost:${PORT}`);
})