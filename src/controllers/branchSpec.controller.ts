import { Response, Request, NextFunction } from "express";
import { BranchSpecService } from "../services/branchSpec.service";
import { BranchSpecRequest } from "../dtos/branchSpec.dto";
import { StatusCodes } from "http-status-codes";
import { MSG } from "../dtos/message.dto";

export class BranchSpecController {
  static async CREATE(req: Request, res: Response, next: NextFunction) {
    try {
      const request: BranchSpecRequest = req.body as BranchSpecRequest;
      const response = await BranchSpecService.createBranchSpec(request);
      res.status(StatusCodes.CREATED).json({
        status: true,
        message: MSG.MESSAGE_SUCCESS_BRANCHWITHSERVICE_CREATE,
        data: response,
      });
    } catch (err) {
      next(err);
    }
  }

  static async GET_ALL(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await BranchSpecService.getAllBranchSpec();
      res.status(StatusCodes.OK).json({
        status: true,
        data: response,
      });
    } catch (err) {
      next(err);
    }
  }
}
