import { Users, create } from "../models/users";

export class UsersController
{
    static createUsers(req, res)//req requisicao e res de resposta
    {
        const {name, password, email} = req.body//const nao tem como alterar depois de criado, o body vem do json da api
       if(!name || !password || !email)
       {
        res.status(400).json({error:"Campos obrigatorios"});//resposta da api caso falte algo
       }
    return;


    const users = new Users(name, password, email);//instanciando classe Users e seu construtor
    try //toda operacao com bd precisa de um bloco try-catch
    {
    create(users)//chamando o metodo de criar
    res.json(users)//resposta
    }
    catch {
        res.status(500).json({error: 'erro'})
    }
    }
}