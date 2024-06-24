import { BranchRepository } from "../repository/branch.repo";
import {
  BranchRequest,
  BranchResponse,
  ToBranchResponse,
} from "../dtos/branch.dto";
import { Validation } from "../validations/validation";
import { BranchValidation } from "../validations/branch.val";
import { MSG } from "../dtos/message.dto";

export class BranchService {
  static async createBranch(req: BranchRequest): Promise<BranchResponse> {
    const branchReq = Validation.validate(BranchValidation.CREATE, req);
    const branchData = await BranchRepository.createBranch(branchReq);
    return ToBranchResponse(branchData);
  }

  static async getAllBranch(): Promise<BranchResponse[]> {
    const branchData = await BranchRepository.getAllBranch();
    return branchData.map((branch) => ToBranchResponse(branch));
  }
}
