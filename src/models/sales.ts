import mysql, { Pool, QueryError, RowDataPacket } from 'mysql2';
import { pool } from "../database/ormconfig";

export class Sales {
    constructor(public date: Date, public chassi: string, public fiscal: string) {}
}

// Método de cadastro de vendas
export const create = (sales: Sales): Promise<void> => {
    const query = `INSERT INTO Users (date, chassi, fiscal) VALUES ("${sales.date}", "${sales.chassi}", "${sales.fiscal}")`; // Comando para cadastrar uma venda no banco

    return new Promise<void>((resolve, reject) => {
        pool.query(query, (err: QueryError | null, result: RowDataPacket[] | undefined) => {
            if (err) {
                console.error('Erro ao executar a consulta', err);
                reject(err);
            } else {
                console.log('Venda Cadastrada');
                resolve();
            }
        });
    });
};
