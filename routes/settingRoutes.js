import express from 'express';
import {
    getAllSettings,
    createSetting,
    getSettingById,
    updateSettingById,
    deleteSettingById
} from '../controllers/settingsController.js';

const router = express.Router();
router.get('/', getAllSettings);
router.post('/', createSetting);
router.get('/:id', getSettingById);
router.put('/:id', updateSettingById);
router.delete('/:id', deleteSettingById);

export default router;