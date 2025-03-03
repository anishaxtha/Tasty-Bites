import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load .env variables

console.log("MongoDB URI:", process.env.MONGODB_URI); // Debugging line

const connectDB = async () => {
  try {
    // if (!process.env.MONGODB_URI) {
    //   throw new Error("MONGODB_URI is not defined in .env file");
    // }

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database  Connected...");
  } catch (error) {
    console.error(" Connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
