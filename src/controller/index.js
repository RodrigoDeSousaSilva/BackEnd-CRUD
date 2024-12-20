import {
  createUser,
  getUserByEmail,
  compareHash,
  updateUser,
  deleteUser,
  getUserById,
} from "../repository";
import {
  validateUserData,
  validateLogin,
  validateUpdate,
  validateDelete,
} from "../validate";
import * as yup from "yup";

export const createUserData = async (req, res) => {
  try {
    const params = req.body;
    await validateUserData.validate(params, { abortEarly: false });
    const email = await getUserByEmail(params.email);
    if (!email) {
      const data = await createUser(params);
      res.status(200).send("Usuário criado com sucesso");
    } else {
      res.status(400).send("email ja cadastrado");
    }
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      res.status(400).send(error.errors);
    } else {
      res.status(500).send("Ocorre um erro interno");
    }
  }
};

export const authenticateUser = async (req, res) => {
  try {
    const data = req.body;
    await validateLogin.validate(data, { abortEarly: false });

    const email = await getUserByEmail(data.email);

    if (email) {
      const unHash = await compareHash(data.password, email);
      if (unHash) {
        res.status(200).send(email);
      } else {
        res.status(400).send("senha incorreta");
      }
    } else {
      res.status(400).send("email incorretos");
    }
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      res.status(400).send(error.errors);
    } else {
      res.status(500).send("Ocorre um erro interno");
    }
  }
};

export const updateUserData = async (req, res) => {
  try {
    const data = req.body;
    await validateUpdate.validate(data, { abortEarly: false });
    const update = await updateUser(data);

    res.status(200).send(`usuário ${update.name} atualizado `);
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      res.status(400).send(error.errors);
    } else {
      res.status(500).send("Ocorre um erro interno");
    }
  }
};

export const deleteUserData = async (req, res) => {
  try {
    const data = req.body;
    await validateDelete.validate(data, { abortEarly: false });

    const id = await getUserById(data.id);
    if (id) {
      const email = await getUserByEmail(data.email);

      if (email) {
        const hashTest = await compareHash(data.password, email);
        if (hashTest) {
          const remove = await deleteUser(data);
          res.status(200).send(`usuario ${email.name} deletado`);
        } else {
          res.status(400).send("senha ivalido");
        }
      } else {
        res.status(400).send("email ivalido");
      }
    } else {
      res.status(400).send("id invalido");
    }
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      res.status(400).send(error.errors);
    } else {
      res.status(500).send("Ocorre um erro interno");
    }
  }
};
