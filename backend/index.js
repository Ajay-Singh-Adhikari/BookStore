import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./routes/book.route.js";
import userRoute from "./routes/user.route.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const port = process.env.PORT || 3000;
const URL = process.env.MONGODBURL;

try {
  mongoose.connect(URL);
  console.log("connected to mongodb");
} catch (error) {
  console.log("Error: ", error);
}

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`✅ Server is listening on http://localhost:${port}`);
});
