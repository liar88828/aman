import express from "express";
import userRoutes from "./routes/userRoutes.js";
import { errorhandler, notFoundError } from "./middleware/errorMiddleware.js";
import connectDb from "./config/db.js";

import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();
connectDb();
const port = process.env.PORT | 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.get("/", (req, res) => {
  return res.send("ok");
});

app.use("/api/user", userRoutes);

app.use(errorhandler);
app.use(notFoundError);

app.listen(port, () => {
  console.log("server is running in localhost: " + port);
});
