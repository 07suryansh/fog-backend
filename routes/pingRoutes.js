import express from 'express';
import {
    getAllPings,
    createPing,
    getPingById,
    updatePingById,
    deletePingById
} from '../controllers/pingController.js';

const router = express.Router();
router.get('/', getAllPings);
router.post('/', createPing);
router.get('/:id', getPingById);
router.put('/:id', updatePingById);
router.delete('/:id', deletePingById);

export default router;