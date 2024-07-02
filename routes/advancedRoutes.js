import express from 'express';
import {
    getAllAdvanced,
    createAdvanced,
    getAdvancedById,
    updateAdvancedById,
    deleteAdvancedById
} from '../controllers/advancedController.js';

const router = express.Router();

router.get('/', getAllAdvanced);
router.post('/', createAdvanced);
router.get('/:id', getAdvancedById);
router.put('/:id', updateAdvancedById);
router.delete('/:id', deleteAdvancedById);

export default router;