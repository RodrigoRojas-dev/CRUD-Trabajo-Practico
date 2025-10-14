import { type Request, type Response } from "express";
import { createUserDB, deleteUserDB, getAllUsersDB, getUserByIdDB, updateUserDB } from "../services/UserService.ts";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsersDB()
    res.status(200).json(users)
  } catch (error) {
    console.log('Error al obtener usuarios:', error);
    res.status(500).json({ message: 'Error interno del servidor al procesar la solicitud.' });
  }
}

const getUserById = async (req: Request, res: Response) => {
  try {
    const { id: userId } = req.params;

    if (!userId) {
      return res.status(400).json({ message: "El ID del usuario es requerido en la ruta" })
    }

    const userFound = await getUserByIdDB(userId)

    if (!userFound) {
      return res.status(404).json({ message: "El usuario que buscas no existe" })
    }

    res.status(200).json(userFound)
  } catch (error) {
    console.log("Error al buscar el usuario", error);
    res.status(500).json({ message: 'Error interno del servidor.' })
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

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id: userId } = req.params;

    const modUserData = req.body;

    if (!userId) {
      return res.status(400).json({ message: "El ID del usuario es requerido en la ruta." });
    }

    const modUser = await updateUserDB(userId, modUserData)

    if (!modUser) {
      return res.status(404).json({ message: "El usuario no ha sido encontrado." })
    }

    res.status(200).json(modUser)
  } catch (error) {
    console.log("Error al modificar el usuario", error);
    res.status(500).json({ message: 'Error interno del servidor.' })
  }
}

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id: userId } = req.params;

    if (!userId) {
      return res.status(400).json({ message: "El ID del usuario es requerido en la ruta." })
    }

    const selUser = await deleteUserDB(userId)

    if (!selUser) {
      return res.status(404).json({ message: "El usuario que deseas borrar no existe" })
    }
    res.status(200).json(selUser)
  } catch (error) {
    console.log("Error al eliminar el usuario", error);
    res.status(500).json({ message: 'Error interno del servidor.' })
  }
}

export { getAllUsers, createUser, updateUser, deleteUser, getUserById }