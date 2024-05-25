import { Request, Response } from "express"; // Importe os tipos Request e Response do Express
import { Checklist, create } from "../models/checklists";

export default class ChecklistController {
    static async createChecklist(req: Request, res: Response) {
        const { dateCheck, status, observ, evidence } = req.body;

        // Verifique se todos os campos obrigatórios estão presentes
        if (!dateCheck || !status || !observ || !evidence) {
            return res.status(400).json({ error: "Campos obrigatórios faltando" });
        }

        // Crie uma nova instância de checklist
        const checklist = new Checklist(dateCheck, status, observ, evidence);

        try {
            // Chame o método de criação
            await create(checklist);
            // Envie uma resposta de sucesso com o usuário criado
            return res.status(201).json(checklist);
        } catch (error) {
            // Em caso de erro, envie uma resposta com o status 400 e uma mensagem de erro
            return res.status(400).json({ error: 'Erro ao criar checklist' });
        }
    }
}
