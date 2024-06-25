import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

export const adminAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      status: false,
      message: "unauthorized Access",
    });
  }

  const role = req.user.role;
  if (role !== "ADMIN") {
    return res.status(StatusCodes.FORBIDDEN).json({
      status: false,
      message: "forbidden Access",
    });
  }

  next();
};
