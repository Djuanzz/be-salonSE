import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { userRouter } from "./routes/user.routes";
import { errorMiddleware } from "./middleware/error.mid";

dotenv.config();

const app: Application = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", userRouter);
app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Server started on http://localhost:${process.env.PORT}`);
});
