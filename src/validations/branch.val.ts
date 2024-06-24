import { z, ZodType } from "zod";

export class BranchValidation {
  static readonly CREATE: ZodType = z.object({
    name: z.string().min(3),
    address: z.string().min(3),
    open_time: z.string().min(3),
    close_time: z.string().min(3),
  });
}
