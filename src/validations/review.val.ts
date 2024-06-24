import { z, ZodType } from "zod";

export class ReviewValidation {
  static readonly CREATE: ZodType = z.object({
    user_id: z.string().uuid(),
    star: z.number().int().min(1).max(5),
    comment: z.string().min(5).max(191),
  });
}
