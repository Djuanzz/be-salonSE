import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { MSG } from "../dtos/message.dto";
import { ReviewService } from "../services/review.service";
import { ReviewRequest } from "../dtos/review.dto";

export class ReviewController {
  static async CREATE(req: Request, res: Response, next: NextFunction) {
    try {
      const user_id = req.user?.id;
      const request: ReviewRequest = {
        user_id,
        ...req.body,
      };
      const response = await ReviewService.createReview(request);
      res.status(StatusCodes.CREATED).json({
        status: true,
        message: MSG.MESSAGE_SUCCESS_REVIEW_CREATE,
        data: response,
      });
    } catch (err) {
      next(err);
    }
  }

  static async GET_ALL(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await ReviewService.getAllReview();
      res.status(StatusCodes.OK).json({
        status: true,
        data: response,
      });
    } catch (err) {
      next(err);
    }
  }
}
