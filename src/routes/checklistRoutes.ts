import express from 'express';
import ChecklistController from '../controllers/ChecklistController'

const checklistrouter = express.Router();

checklistrouter.post('/save', ChecklistController.createChecklist); //rota para salvar 
//get para listar
//put para atualizar
//delete para apagar

export default checklistrouter;