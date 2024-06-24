import { BranchSpecRepository } from "../repository/branchSpec.repo";
import {
  BranchSpecRequest,
  BranchSpecResponse,
  ToBranchSpecResponse,
} from "../dtos/branchSpec.dto";
import { Validation } from "../validations/validation";
import { BranchSpecValidation } from "../validations/branchSpec.val";

export class BranchSpecService {
  static async createBranchSpec(
    req: BranchSpecRequest
  ): Promise<BranchSpecResponse> {
    const branchSpecReq = Validation.validate(BranchSpecValidation.CREATE, req);

    const branchSpec = await BranchSpecRepository.createBranchSpec(
      branchSpecReq
    );

    return ToBranchSpecResponse(branchSpec);
  }

  static async getAllBranchSpec(): Promise<BranchSpecResponse[]> {
    const branchSpecs = await BranchSpecRepository.getAllBranchSpec();
    return branchSpecs.map((branchSpec) => ToBranchSpecResponse(branchSpec));
  }
}
