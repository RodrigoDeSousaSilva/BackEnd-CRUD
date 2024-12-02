import { prisma } from "../service/prisma";

async function createUser(params) {
  const user = await prisma.users.create({
    data: {
      name: params.name,
      email: params.email,
      password: params.password,
    },
  });
  return user;
}

export { createUser };
