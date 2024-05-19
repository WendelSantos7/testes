import { pool } from "../database/ormconfig"

export class Users {
    constructor(name, password, email)//variaveis do banco
    {
    this.name = name;
    this.password = password;
    this.email = email;
    }
   
}

//metodo de criar usuario
export const create = (users) => {
    const query = `Insert into Users (name, password, email) values ("${users.name}", "${users.password}", "${users.email}")`; //aqui esta o comando para criar um usuario no banco

    return new Promise((resolve, reject) => {
        pool.query(query, values, (err, result) => {
            if(err)
                {
                    reject(console.error('Erro ao executar a consulta', err))
                }
                else
            {
                console.log('Usuario criado');
                resolve()
            }
        })
    }
)

}




