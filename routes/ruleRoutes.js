
import express from 'express';
import {
    getAllRules,
    createRule,
    getRuleById,
    updateRuleById,
    deleteRuleById
} from '../controllers/ruleController.js';

const router = express.Router();
router.get('/', getAllRules);
router.post('/', createRule);
router.get('/:id', getRuleById);
router.put('/:id', updateRuleById);
router.delete('/:id', deleteRuleById);

export default router;