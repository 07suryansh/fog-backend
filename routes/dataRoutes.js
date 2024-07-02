// routes/dataRoutes.js
import express from 'express';
import {
    getAllData,
    getDataById,
    createData,
    updateDataById,
    deleteDataById
} from '../controllers/dataController.js';

const router = express.Router();

router.get('/', getAllData);
router.get('/:id', getDataById);
router.post('/', createData);
router.put('/:id', updateDataById);
router.delete('/:id', deleteDataById);

export default router;