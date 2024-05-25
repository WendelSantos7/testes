import express from 'express';
import SalesController from '../controllers/SalesController'

const salesrouter = express.Router();

salesrouter.post('/save', SalesController.createSale); //rota para salvar 
//get para listar
//put para atualizar
//delete para apagar

export default salesrouter;