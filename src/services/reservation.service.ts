import { ReservationRepo } from "../repository/reservation.repo";
import {
  ReservationRequest,
  ReservationResponse,
  ToReservationResponse,
} from "../dtos/reservation.dto";
import { Validation } from "../validations/validation";
import { ReservationValidation } from "../validations/reservation.val";

export class ReservationService {
  static async createReservation(
    reservation: ReservationRequest
  ): Promise<ReservationResponse> {
    const reservationReq = Validation.validate(
      ReservationValidation.CREATE,
      reservation
    );

    const reservationData = await ReservationRepo.createReservation(
      reservationReq
    );
    return ToReservationResponse(reservationData);
  }

  static async getAllReservation(): Promise<ReservationResponse[]> {
    const reservationData = await ReservationRepo.getAllReservation();
    return reservationData.map((reservation) =>
      ToReservationResponse(reservation)
    );
  }
}
