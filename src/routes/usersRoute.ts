import express from 'express';
import UsersController from '../controllers/UsersController'

const usersrouter = express.Router();

usersrouter.post('/save', UsersController.createUsers); //rota para salvar 
//get para listar
//put para atualizar
//delete para apagar

export default usersrouter;