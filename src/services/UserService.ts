import { User, type IUser } from "../models/User.ts";

const getAllUsersDB = async (): Promise<IUser[]> => {
  const users = await User.find()
  return users;
}

const getUserByIdDB = async (id: string): Promise<IUser | null> => {
  const user = await User.findById(id)
  return user
}

const createUserDB = async (userData: Omit<IUser, "_id">): Promise<IUser | null> => {
  try {
    const newUser = await User.create(userData)
    console.log("Usuario creado con exito ✅");
    return newUser;
  } catch (error) {
    console.log("Error al crear el usuario ❌", error);
    return null;
  }
}

const updateUserDB = async (id: string, updateData: Partial<IUser>): Promise<IUser | null> => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true }
    )
    console.log(`El usuario ${updatedUser?.name} se actualizo exitosamente ✅`);
    return updatedUser
  } catch (error) {
    console.log("Error al actualizar el usuario ❌", error);
    return null
  }
}

const deleteUserDB = async (id: string): Promise<IUser | null> => {
  try {
    const deletedUser = await User.findByIdAndDelete(id)
    console.log(`El usuario ${deletedUser?.name} se borro exitosamente ✅`);
    return deletedUser
  } catch (error) {
    console.log("Error al borrar el usuario ❌", error);
    return null
  }
}

export { getAllUsersDB, getUserByIdDB, createUserDB, updateUserDB, deleteUserDB }