import express from 'express';
import { SalesController } from '../controllers';

const router = express.Router();
const salesController = new SalesController();

router.get('/', salesController.getAllSales);
router.post('/', salesController.createSale);
router.put('/:id', salesController.updateSale);
router.delete('/:id', salesController.deleteSale);

export default router;