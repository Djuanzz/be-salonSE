import { z, ZodType } from "zod";

export class ReservationValidation {
  static readonly CREATE: ZodType = z.object({
    user_id: z.string().uuid(),
    customer_name: z.string().min(3).max(191),
    customer_phone: z.string().min(3).max(191),
    branch_id: z.string().uuid(),
    service_id: z.string().uuid(),
  });
}
