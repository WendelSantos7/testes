import mysql, { Pool, QueryError, RowDataPacket } from 'mysql2';
import { pool } from "../database/ormconfig";

export class Users {
    constructor(public name: string, public password: string, public email: string) {}
}

// Método de criar usuário
export const create = (users: Users): Promise<void> => {
    const query = `INSERT INTO Users (name, password, email) VALUES ("${users.name}", "${users.password}", "${users.email}")`; // Comando para criar um usuário no banco

    return new Promise<void>((resolve, reject) => {
        pool.query(query, (err: QueryError | null, result: RowDataPacket[] | undefined) => {
            if (err) {
                console.error('Erro ao executar a consulta', err);
                reject(err);
            } else {
                console.log('Usuário criado');
                resolve();
            }
        });
    });
};
