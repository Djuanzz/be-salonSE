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

  static async getAllServicesNameOnBranchByBranchId(branch_id: string) {
    return await prisma.branchWithService.findMany({
      where: {
        branch_id: branch_id,
      },
      select: {
        // branch_id: true,
        branch: {
          select: {
            id: true,
            name: true,
          },
        },
        // service_id: true,
        service: {
          select: {
            id: true,
            name: true,
            price: true,
          },
        },
      },
    });
  }
}
