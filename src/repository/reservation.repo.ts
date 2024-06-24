import { Reservation } from "@prisma/client";
import { prisma } from "../config/database";
import { ReservationRequest } from "../dtos/reservation.dto";

export class ReservationRepo {
  static async createReservation(
    reservation: ReservationRequest
  ): Promise<Reservation> {
    return await prisma.reservation.create({
      data: reservation,
    });
  }

  static async getAllReservation(): Promise<Reservation[]> {
    return await prisma.reservation.findMany();
  }
}
