import { Request, Response } from "express"; // Importe os tipos Request e Response do Express
import { Users, create } from "../models/users";

export default class UsersController {
    static async createUsers(req: Request, res: Response) {
        const { name, password, email } = req.body;

        // Verifique se todos os campos obrigatórios estão presentes
        if (!name || !password || !email) {
            return res.status(400).json({ error: "Campos obrigatórios faltando" });
        }

        // Crie uma nova instância de Users
        const users = new Users(name, password, email);

        try {
            // Chame o método de criação
            await create(users);
            // Envie uma resposta de sucesso com o usuário criado
            return res.status(201).json(users);
        } catch (error) {
            // Em caso de erro, envie uma resposta com o status 400 e uma mensagem de erro
            return res.status(400).json({ error: 'Erro ao criar usuário' });
        }
    }
}
