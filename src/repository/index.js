import { prisma } from "../service/prisma";
import bcrypt from "bcrypt";

async function createUser(params) {
  const passwordHash = await bcrypt.hash(params.password, 10);
  const user = await prisma.users.create({
    data: {
      name: params.name,
      age: params.age,
      email: params.email,
      password: passwordHash,
    },
  });
  return user;
}

async function getUserByEmail(email) {
  const user = await prisma.users.findUnique({
    where: { email: email },
  });
  if (user) {
    return "email ja cadastrado";
  }
  return null;
}

export { createUser, getUserByEmail };
