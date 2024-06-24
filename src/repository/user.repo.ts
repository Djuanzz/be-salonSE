import { User } from "@prisma/client";
import { prisma } from "../config/database";
import { UserLoginRequest, UserRegisterRequest } from "../dtos/user.dto";
import jwt from "jsonwebtoken";

export class UserRepo {
  static async countUserByEmail(email: string): Promise<number> {
    return await prisma.user.count({
      where: {
        email: email,
      },
    });
  }

  static async createUser(user: UserRegisterRequest): Promise<User> {
    return await prisma.user.create({
      data: user,
    });
  }

  static async findUserById(id: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  static async findUserByEmail(email: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  static async getAllUser(): Promise<User[]> {
    return await prisma.user.findMany();
  }

  static async generateToken(user: User): Promise<string> {
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });
  }
}
