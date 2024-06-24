import { Request, Response, NextFunction } from "express";
import { BranchService } from "../services/branch.service";
import { BranchRequest } from "../dtos/branch.dto";
import { MSG } from "../dtos/message.dto";
import { StatusCodes } from "http-status-codes";

export class BranchController {
  static async CREATE(req: Request, res: Response, next: NextFunction) {
    try {
      const request: BranchRequest = req.body as BranchRequest;
      const response = await BranchService.createBranch(request);
      res.status(StatusCodes.CREATED).json({
        status: true,
        message: MSG.MESSAGE_SUCCESS_BRANCH_CREATE,
        data: response,
      });
    } catch (err) {
      next(err);
    }
  }

  static async GET_ALL(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await BranchService.getAllBranch();
      res.status(StatusCodes.OK).json({
        status: true,
        data: response,
      });
    } catch (err) {
      next(err);
    }
  }
}
