import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(
      `mongodb+srv://admin:${process.env.password}@cluster0.g1z7t4t.mongodb.net/?retryWrites=true&w=majority`,
      { dbName: "Users" }
    )
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log(e));
};
