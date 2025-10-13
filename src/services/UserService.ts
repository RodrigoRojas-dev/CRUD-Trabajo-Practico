import { User, type IUser } from "../models/User.ts";

const getAllUsers = async (): Promise<IUser[]> => {
  const users = await User.find()
  return users;
}

const getUserById = async (id: string): Promise<IUser | null> => {
  const user = await User.findById(id)
  return user
}

const createUser = async (userData: Omit<IUser, "_id">): Promise<IUser | null> => {
  try {
    const newUser = await User.create(userData)
    console.log("Usuario creado con exito ✅");
    return newUser;
  } catch (error) {
    console.log("Error al crear el usuario ❌", error);
    return null;
  }
}

export { getAllUsers }