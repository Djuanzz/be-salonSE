import { User } from "@prisma/client";

export type UserResponse = {
  email: string;
  name: string;
};

export type UserRegisterRequest = {
  email: string;
  password: string;
  name: string;
};

export type UserLoginRequest = {
  email: string;
  password: string;
};

export function ToUserResponse(user: User): UserResponse {
  return {
    email: user.email,
    name: user.name,
  };
}
