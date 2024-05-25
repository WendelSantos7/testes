import mysql, { Pool, QueryError, RowDataPacket } from 'mysql2';
import { pool } from "../database/ormconfig";

export class Checklist {
    constructor(public dateCheck: string, public status: string, public observ: string, public evidence: string) {}
}

// Método de criar usuário
export const create = (checklist: Checklist): Promise<void> => {
    const query = `INSERT INTO Users (dateCheck, status, observ, evidence) VALUES ("${checklist.dateCheck}", 
    "${checklist.status}", "${checklist.observ}","${checklist.evidence}")`; // Comando para criar um usuário no banco

    return new Promise<void>((resolve, reject) => {
        pool.query(query, (err: QueryError | null, result: RowDataPacket[] | undefined) => {
            if (err) {
                console.error('Erro ao executar a consulta', err);
                reject(err);
            } else {
                console.log('Checklist Realizado');
                resolve();
            }
        });
    });
};
