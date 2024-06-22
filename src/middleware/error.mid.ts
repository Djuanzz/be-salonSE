import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { ResponseError } from "../error/error";

export const errorMiddleware = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ZodError) {
    res.status(400).json({
      status: false,
      error: `validation error: ${JSON.stringify(err)}`,
    });
  } else if (err instanceof ResponseError) {
    res.status(err.statusCode).json({
      status: false,
      error: err.message,
    });
  } else {
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
