import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.mdb_uri);
    console.log("db is connected");
  } catch (error) {
    console.log(error.message);
  }
};
