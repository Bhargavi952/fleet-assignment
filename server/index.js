import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import commitsIdRoute from './routes/commitsById.js'

const app = express();
dotenv.config();
app.use(cors());
app.use(json());

app.use("/commits" , commitsIdRoute)

const PORT = 8000;

const CONNECTION_URL = process.env.CONNECTION_URL

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running at port:${PORT}`))
  )
  .catch((err) => console.log(err));