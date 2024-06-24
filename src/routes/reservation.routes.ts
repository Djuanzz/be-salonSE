import express from "express";
import { ReservationController } from "../controllers/reservation.controller";

export const reservationRouter = express.Router();

reservationRouter.post("/", ReservationController.CREATE);
reservationRouter.get("/", ReservationController.GET_ALL);
