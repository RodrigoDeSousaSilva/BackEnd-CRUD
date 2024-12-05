import { createUser, getUserByEmail } from "../repository";
import { validateUserData } from "../validate";
import * as yup from "yup";

export const createUserData = async (req, res) => {
  try {
    const params = req.body;
    await validateUserData.validate(params, { abortEarly: false });
    const email = await getUserByEmail(params.email);
    if (!email) {
      const data = await createUser(params);
      res.status(200).send(data);
    } else {
      res.status(400).send(email);
    }
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      res.status(400).send(error.errors);
    } else {
      res.status(500).send("Ocorre um erro interno");
    }
  }
};
