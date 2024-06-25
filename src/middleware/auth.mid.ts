import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../config/database";
import { StatusCodes } from "http-status-codes";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      status: false,
      message: "unauthorized Access",
    });
  }

  try {
    const claim = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
    const user = await prisma.user.findUnique({ where: { id: claim.id } });

    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({
        status: false,
        message: "user not found",
      });
    }

    req.user = {
      id: user.id,
      email: user.email,
      fullname: user.fullname,
      phone: user.phone,
      role: user.role,
    };

    // console.log(req.user.role);

    next();
  } catch (err) {
    console.error("error verifying token:", err);
    return res.status(StatusCodes.BAD_REQUEST).json({
      status: false,
      message: "invalid Token",
    });
  }
};
