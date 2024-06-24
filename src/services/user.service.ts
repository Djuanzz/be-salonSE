import { StatusCodes } from "http-status-codes";
import {
  ToUserResponse,
  UserLoginRequest,
  UserRegisterRequest,
  UserResponse,
} from "../dtos/user.dto";
import { ResponseError } from "../error/error";
import { UserRepo } from "../repository/user.repo";
import { UserValidation } from "../validations/user.val";
import { Validation } from "../validations/validation";
import bcrypt from "bcrypt";
import { MSG } from "../dtos/message.dto";

export class UserService {
  static async registerUser(req: UserRegisterRequest): Promise<UserResponse> {
    const userReq = Validation.validate(UserValidation.REGISTER, req);

    const countUser = await UserRepo.countUserByEmail(userReq.email);
    if (countUser > 0) {
      throw new ResponseError(
        StatusCodes.BAD_REQUEST,
        MSG.MESSAGE_ERROR_USER_REGISTER
      );
    }

    userReq.password = await bcrypt.hash(userReq.password, 10);
    const user = await UserRepo.createUser(userReq);

    return ToUserResponse(user);
  }

  static async loginUser(req: UserLoginRequest): Promise<UserResponse> {
    const userLogin = Validation.validate(UserValidation.LOGIN, req);
    const user = await UserRepo.findUserByEmail(userLogin.email);
    if (!user) {
      throw new ResponseError(
        StatusCodes.BAD_REQUEST,
        MSG.MESSAGE_ERROR_USER_LOGIN
      );
    }

    const match = await bcrypt.compare(userLogin.password, user.password);
    if (!match) {
      throw new ResponseError(
        StatusCodes.BAD_REQUEST,
        MSG.MESSAGE_ERROR_USER_LOGIN
      );
    }

    return ToUserResponse(user);
  }

  static async getAllUser(): Promise<UserResponse[]> {
    const users = await UserRepo.getAllUser();
    return users.map((user) => ToUserResponse(user));
  }
}
