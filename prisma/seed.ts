import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.engagement.createMany({
    data: [
      { user: 'Alice', actions: 'login, view, logout' },
      { user: 'Bob', actions: 'login, click, purchase' },
    ],
  });
  console.log('✅ Seeded engagement data!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
