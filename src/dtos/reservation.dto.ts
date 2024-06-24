import { Reservation } from "@prisma/client";

export type ReservationRequest = {
  user_id: string;
  customer_name: string;
  customer_phone: string;
  service: string;
};

export type ReservationResponse = {
  user_id: string;
  customer_name: string;
  customer_phone: string;
  service: string;
};

export function ToReservationResponse(
  reservation: Reservation
): ReservationResponse {
  return {
    user_id: reservation.user_id,
    customer_name: reservation.customer_name,
    customer_phone: reservation.customer_phone,
    service: reservation.service,
  };
}
