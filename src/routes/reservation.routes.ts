import express from "express";
import { ReservationController } from "../controllers/reservation.controller";
import { auth } from "../middleware/auth.mid";

export const reservationRouter = express.Router();

reservationRouter.post("/", auth, ReservationController.CREATE);
reservationRouter.get("/", ReservationController.GET_ALL);
