import { User } from "@prisma/client";

export type UserResponse = {
  email: string;
  fullname: string;
  role: string;
};

export type UserRegisterRequest = {
  fullname: string;
  email: string;
  password: string;
  phone: string;
  role: Role;
};

enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}

export type UserLoginRequest = {
  email: string;
  password: string;
};

export function ToUserResponse(user: User): UserResponse {
  return {
    email: user.email,
    fullname: user.fullname,
    role: user.role,
  };
}
