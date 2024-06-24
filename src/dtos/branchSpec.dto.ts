import { BranchWithService } from "@prisma/client";

export type BranchSpecRequest = {
  branch_id: string;
  service_id: string;
};

export type BranchSpecResponse = {
  branch_id: string;
  service_id: string;
};

export function ToBranchSpecResponse(
  branchSpec: BranchWithService
): BranchSpecResponse {
  return {
    branch_id: branchSpec.branch_id,
    service_id: branchSpec.service_id,
  };
}
