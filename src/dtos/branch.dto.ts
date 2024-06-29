import { Branch } from "@prisma/client";

export type BranchRequest = {
  name: string;
  address: string;
  open_time: string;
  close_time: string;
};

export type BranchResponse = {
  id: string;
  name: string;
  address: string;
  open_time: string;
  close_time: string;
};

export function ToBranchResponse(branch: Branch): BranchResponse {
  return {
    id: branch.id,
    name: branch.name,
    address: branch.address,
    open_time: branch.open_time,
    close_time: branch.close_time,
  };
}

// model Branch {
//   id String @id @default(uuid())
//   name String
//   address String
//   open_time String
//   close_time String
//   created_at DateTime @default(now())
//   updated_at DateTime @updatedAt
//   deleted_at DateTime?

//   @@map(name: "branches")
//   branch_services BranchWithService[]
//   reservations Reservation[]
// }
