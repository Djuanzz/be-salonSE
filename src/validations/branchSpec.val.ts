import { z, ZodType } from "zod";

export class BranchSpecValidation {
  static readonly CREATE: ZodType = z.object({
    branch_id: z.string().uuid(),
    service_id: z.string().uuid(),
  });
}
