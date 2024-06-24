import { userSeeds } from "./user.seed";
import { serviceSeed } from "./service.seed";
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

  for (const service of serviceSeed) {
    await prisma.service.create({
      data: {
        name: service.name,
        price: service.price,
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
