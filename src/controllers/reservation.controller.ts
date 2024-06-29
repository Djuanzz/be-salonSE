import { Response, Request, NextFunction } from "express";
import { ReservationRequest } from "../dtos/reservation.dto";
import { ReservationService } from "../services/reservation.service";
import { StatusCodes } from "http-status-codes";
import { MSG } from "../dtos/message.dto";

export class ReservationController {
  static async CREATE(req: Request, res: Response, next: NextFunction) {
    try {
      const user_id = req.user?.id;
      const request: ReservationRequest = {
        user_id,
        ...req.body,
      };

      const response = await ReservationService.createReservation(request);

      res.status(StatusCodes.CREATED).json({
        status: true,
        message: MSG.MESSAGE_SUCCESS_RESERVATION_CREATE,
        data: response,
      });
    } catch (err) {
      next(err);
    }
  }

  static async GET_ALL(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await ReservationService.getAllReservation();
      res.status(StatusCodes.OK).json({
        status: true,
        data: response,
      });
    } catch (err) {
      next(err);
    }
  }
}
