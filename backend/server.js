import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

// import { EventEmitter } from "events";
// EventEmitter.defaultMaxListeners = 15; // Set to 0 for unlimited
//app config
const app = express();
const port = 4000;

//db connection
connectDB();

//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API Working...");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Browse to http://localhost:${port}`);
});
