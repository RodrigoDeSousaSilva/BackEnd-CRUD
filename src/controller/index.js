import { createUser } from "../repository";

export const createUserData = async (req, res) => {
  try {
    const params = req.body;
    if (0 == 0) {
      console.log("entrou");
      const data = await createUser(params);
      console.log(data);
      res.status(200).send(data);
    } else {
      res.status(400).send(error.errors);
    }
  } catch (error) {
    res.status(500).send("Ocorre um erro interno");
  }
};
