import { BranchRequest } from "../dtos/branch.dto";
import { Branch } from "@prisma/client";
import { prisma } from "../config/database";

export class BranchRepository {
  static async createBranch(branch: BranchRequest): Promise<Branch> {
    return await prisma.branch.create({
      data: branch,
    });
  }

  static async getAllBranch(): Promise<Branch[]> {
    return await prisma.branch.findMany();
  }
}
