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
    return user;
  }
  return null;
}

async function compareHash(password, user) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, user.password, function (err, resultado) {
      if (err) {
        console.error("Erro ao comparar senhas", err);
        reject(err);
      } else {
        resolve(resultado);
      }
    });
  });
}

async function updateUser(data){
  // const passwordHash = await bcrypt.hash(data.password, 10);
  if (data.password){
    const passwordHash = await bcrypt.hash(data.password, 10);
    data.password = passwordHash
  }

  const update = await prisma.users.update({
    where: {id: data.id},
    data: data

  })
  return update
}

export { createUser, getUserByEmail, compareHash, updateUser };