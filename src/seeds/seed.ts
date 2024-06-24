import { userSeeds } from "./user.seed";
import { serviceSeeds } from "./service.seed";
import { branchSeeds } from "./branch.seed";
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

  for (const service of serviceSeeds) {
    await prisma.service.create({
      data: {
        name: service.name,
        price: service.price,
      },
    });
  }

  for (const branch of branchSeeds) {
    await prisma.branch.create({
      data: {
        name: branch.name,
        address: branch.address,
        open_time: branch.open_time,
        close_time: branch.close_time,
      },
    });
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
