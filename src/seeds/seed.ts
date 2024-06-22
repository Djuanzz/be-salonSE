import { userSeeds } from "./user.seed";
import { prisma } from "../config/database";
import bcrypt from "bcrypt";

async function main() {
  for (const user of userSeeds) {
    user.password = await bcrypt.hash(user.password, 10);
    await prisma.user.create({
      data: user,
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
