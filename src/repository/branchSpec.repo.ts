import { prisma } from "../config/database";
import { BranchWithService } from "@prisma/client";
import { BranchSpecRequest } from "../dtos/branchSpec.dto";

export class BranchSpecRepository {
  static async createBranchSpec(
    branchSpec: BranchSpecRequest
  ): Promise<BranchWithService> {
    return await prisma.branchWithService.create({
      data: branchSpec,
    });
  }

  static async getAllBranchSpec(): Promise<BranchWithService[]> {
    return await prisma.branchWithService.findMany();
  }
}
