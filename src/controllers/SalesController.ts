import { Request, Response } from "express"; // Importe os tipos Request e Response do Express
import { Sales, create } from "../models/sales";//importção de itens

export default class SalesController {
    static async createSales(req: Request, res: Response) {
        const { date, chassi, fiscal } = req.body;

        // Verifique se todos os campos obrigatórios estão presentes
        if (!date || !chassi || !fiscal) {
            return res.status(400).json({ error: "Campos obrigatórios faltando" });
        }

        // Crie uma nova instância de Sales
        const sales = new Sales(date, chassi, fiscal);

        try {
            // Chame o método de criação
            await create(sales);
            // Envie uma resposta de sucesso com o usuário criado
            return res.status(201).json(sales);
        } catch (error) {
            // Em caso de erro, envie uma resposta com o status 400 e uma mensagem de erro
            return res.status(400).json({ error: 'Erro ao cadastrar sua venda' });
        }
    }
}
