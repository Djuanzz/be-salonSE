import { Request, Response, NextFunction } from "express";

export const adminAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const role = req.user?.role;
  if (role !== "ADMIN") {
    return res.status(403).json({
      status: false,
      message: "Forbidden Access",
    });
  }
};
