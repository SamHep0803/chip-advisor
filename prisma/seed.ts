import { PrismaClient } from "@prisma/client"
import { chips } from "../data/chips"

const prisma = new PrismaClient();

const main = async () => {
  await prisma.user.create({
    data: {
      id: "ca349f2c-7044-45d7-afdc-ee152eaf0c3d",
      email: "samhep0803@gmail.com",
      username: "samhep0803",
      role: "ADMIN",
    }
  })

  await prisma.chip.createMany({
    data: chips
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(0)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
