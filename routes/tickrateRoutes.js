import express from 'express';
import {
    getAllTickrates,
    createTickrate,
    getTickrateById,
    updateTickrateById,
    deleteTickrateById
} from '../controllers/tickrateController.js';

const router = express.Router();
router.get('/', getAllTickrates);
router.post('/', createTickrate);
router.get('/:id', getTickrateById);
router.put('/:id', updateTickrateById);
router.delete('/:id', deleteTickrateById);

export default router;