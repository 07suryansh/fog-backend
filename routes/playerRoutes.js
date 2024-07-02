import express from 'express';
import {
    getAllPlayers,
    createPlayer,
    getPlayerById,
    updatePlayerById,
    deletePlayerById
} from '../controllers/playerController.js';

const router = express.Router();
router.get('/', getAllPlayers);
router.post('/', createPlayer);
router.get('/:id', getPlayerById);
router.put('/:id', updatePlayerById);
router.delete('/:id', deletePlayerById);

export default router;