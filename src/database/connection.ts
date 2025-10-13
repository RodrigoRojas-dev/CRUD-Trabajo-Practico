import mongoose, { connect } from "mongoose";

const URI_DB = "mongodb://localhost:27017/crud_practico"

const connectDB = async () => {
  try {
    await connect(URI_DB)
    console.log("Conectado a MongoDB ✅");
} catch (error) {
    console.log("Error de conecxión con la base de datos ❌", error);
  }
}

export { connectDB }