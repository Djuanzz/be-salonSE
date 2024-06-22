import { z, ZodType } from "zod";

export class UserValidation {
  static readonly REGISTER: ZodType = z.object({
    fullname: z.string().min(5).max(191),
    email: z.string().email(),
    password: z.string().min(5),
    phone: z.string().min(10).max(191),
    role: z.string().optional(),
  });

  static readonly LOGIN: ZodType = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });
}
