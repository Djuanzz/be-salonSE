import { NextFunction, Request, Response } from "express";
import { UserLoginRequest, UserRegisterRequest } from "../dtos/user.dto";
import { UserService } from "../services/user.service";
import { MSG } from "../dtos/message.dto";
import { StatusCodes } from "http-status-codes";

export class UserController {
  static async REGISTER(req: Request, res: Response, next: NextFunction) {
    try {
      const request: UserRegisterRequest = req.body as UserRegisterRequest;
      const response = await UserService.registerUser(request);
      res.status(StatusCodes.CREATED).json({
        status: true,
        message: MSG.MESSAGE_SUCCESS_USER_REGISTER,
        data: response,
      });
    } catch (err) {
      next(err);
    }
  }

  static async LOGIN(req: Request, res: Response, next: NextFunction) {
    try {
      const request: UserLoginRequest = req.body as UserLoginRequest;
      const response = await UserService.loginUser(request);
      res.status(StatusCodes.OK).json({
        status: true,
        message: MSG.MESSAGE_SUCCESS_USER_LOGIN,
        data: response,
      });
    } catch (err) {
      next(err);
    }
  }

  static async GET_ALL(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await UserService.getAllUser();
      res.status(StatusCodes.OK).json({
        status: true,
        data: response,
      });
    } catch (err) {
      next(err);
    }
  }
}
