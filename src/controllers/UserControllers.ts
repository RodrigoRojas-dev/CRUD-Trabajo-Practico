import type { Request, Response } from "express";
import { createUserDB, getAllUsersDB } from "../services/UserService.ts";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsersDB()
    res.status(200).json(users)
  } catch (error) {
    console.log('Error al obtener usuarios:', error);
    res.status(500).json({ message: 'Error interno del servidor al procesar la solicitud.' });
  }
}

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body
    const createdUser = await createUserDB(userData)

    if (!createdUser) {
      return res.status(400).json({
        message: 'Error al crear usuario: Asegúrese que todos los campos sean válidos y el email no esté en uso.'
      });
    }

    res.status(201).json(createdUser);
  } catch (error) {
    console.log("Error al crear Usuario", error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
}

export { getAllUsers, createUser }