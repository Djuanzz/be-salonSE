import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../config/database";
import { User } from "@prisma/client";

declare module "express" {
  interface Request {
    user?: {
      id: User["id"];
      email: User["email"];
      fullname: User["fullname"];
      phone: User["phone"];
      role: User["role"];
    };
  }
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      status: false,
      message: "Access Denied",
    });
  }

  try {
    const claim = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
    const user = await prisma.user.findUnique({ where: { id: claim.id } });

    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }

    req.user = {
      id: user.id,
      email: user.email,
      fullname: user.fullname,
      phone: user.phone,
      role: user.role,
    };

    next();
  } catch (err) {
    console.error("Error verifying token:", err);
    return res.status(400).json({
      status: false,
      message: "Invalid Token",
    });
  }
};
