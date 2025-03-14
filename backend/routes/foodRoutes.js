import express from "express";
import multer from "multer";
import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/foodcontrollers.js";

const foodRouter = express.Router();

//Image Search Engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const uploads = multer({ storage: storage });

foodRouter.post("/add", uploads.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.delete("/remove", removeFood);

export default foodRouter;
