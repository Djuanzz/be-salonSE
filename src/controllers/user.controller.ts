import { NextFunction, Request, Response } from "express";
import { UserLoginRequest, UserRegisterRequest } from "../dtos/user.dto";
import { UserService } from "../services/user.service";
import { MSG } from "../dtos/message.dto";
import { StatusCodes } from "http-status-codes";

declare module "express" {
  interface Request {
    user?: {
      id: string;
      email: string;
      fullname: string;
      phone: string;
      role: string;
    };
  }
}

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

      res.cookie("token", response, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 2,
      });

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

  static async CURRENT_USER(req: Request, res: Response, next: NextFunction) {
    try {
      const curUser = req.user?.id;
      const response = await UserService.getCurrentUser(curUser!);
      res.status(StatusCodes.OK).json({
        status: true,
        data: response,
      });
    } catch (err) {
      next(err);
    }
  }

  static async LOGOUT(req: Request, res: Response, next: NextFunction) {
    try {
      res.clearCookie("token");
      res.status(StatusCodes.OK).json({
        status: true,
        message: MSG.MESSAGE_SUCCESS_USER_LOGOUT,
      });
    } catch (err) {
      next(err);
    }
  }
}
