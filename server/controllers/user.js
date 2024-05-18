// com express
import express from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());


const getUsers = async (_, res) => {
  try {
    const users = await prisma.user.findMany({orderBy:{id:'desc'}});
    return res.status(200).json(users);
  } 
  catch (error) {
    return res.status(500).json(error);
  }
};

const addUser = async (req, res) => {
  const createUserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    fone: z.string(),
    data_nascimento: z.string()
  });

  try {
    const { name, email, fone, data_nascimento } = createUserSchema.parse(req.body);

    await prisma.user.create({
      data: {
        name: name,
        email,
        fone,
        data_nascimento
      }
    });

    return res.status(201).send('Usuário criado.');
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateUser = async (req, res) => {
  const updateUserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    fone: z.string(),
    data_nascimento: z.string()
  });

  try {
    const { name, email, fone, data_nascimento } = updateUserSchema.parse(req.body);
    const userId = req.params.id;

    await prisma.user.update({
      where: { id: userId },
      data: {
        name: name,
        email,
        fone,
        data_nascimento
      }
    });

    return res.status(200).send('Usuário atualizado.');
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await prisma.user.delete({ where: { id: userId } });
    return res.status(200).send('Usuário deletado.');
  } catch (error) {
    return res.status(500).json(error);
  }
};


export { getUsers, addUser, updateUser, deleteUser };



