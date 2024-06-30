import { userSeeds } from "./user.seed";
import { serviceSeeds } from "./service.seed";
import { branchSeeds } from "./branch.seed";
import { branchServicesSeeds } from "./branchServices.seed";
import { prisma } from "../config/database";
import bcrypt from "bcrypt";

async function main() {
  for (const user of userSeeds) {
    user.password = await bcrypt.hash(user.password, 10);
    await prisma.user.create({
      data: {
        fullname: user.fullname,
        email: user.email,
        password: user.password,
        phone: user.phone,
        role: user.role,
      },
    });
  }

  const createdServices = [];
  for (const service of serviceSeeds) {
    const createdService = await prisma.service.create({
      data: {
        name: service.name,
        price: service.price,
      },
    });
    createdServices.push(createdService);
  }

  const createdBranches = [];
  for (const branch of branchSeeds) {
    const createdBranch = await prisma.branch.create({
      data: {
        name: branch.name,
        address: branch.address,
        open_time: branch.open_time,
        close_time: branch.close_time,
      },
    });
    createdBranches.push(createdBranch);
  }

  for (const { branchName, serviceNames } of branchServicesSeeds) {
    const branch = createdBranches.find((b) => b.name === branchName);
    if (!branch) continue; // Skip if branch is not found

    for (const serviceName of serviceNames) {
      const service = createdServices.find((s) => s.name === serviceName);
      if (!service) continue; // Skip if service is not found

      await prisma.branchWithService.create({
        data: {
          branch_id: branch.id,
          service_id: service.id,
        },
      });
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
