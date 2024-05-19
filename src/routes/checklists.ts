import express from 'express';
import { checklistController } from '../controllers';

const router = express.Router();
const checklistController = new checklistController();

router.get('/', checklistController.getAllItems);
router.post('/', checklistController.createItem);
router.put('/:id', checklistController.updateItem);
router.delete('/:id', checklistController.deleteItem);

export default router;
