import express from "express";
import cookieParser from "cookie-parser";
import multer from "multer";
import authRoutes from "./routes/auth.js";
import cors from 'cors'

const app = express();
app.use(cors())

app.use(express.json());
app.use(cookieParser());
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../client/public/upload");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  });

  const upload = multer({ storage });

  app.post("/api/upload", upload.single("file"), function (req, res) {
    const file = req.file;
      res.status(200).json(file?.filename);
  });

  app.use("/server/auth",authRoutes)

  app.listen(8800, () => {
    console.log("Connected!");
  });