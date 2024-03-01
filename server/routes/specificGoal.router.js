import express from 'express';

import { createSpecificGoal, deleteSpecificGoal, getSpecificGoals, updateSpecificGoal } from '../controllers/specificGoal.controller.js';
import auth from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/set', auth, createSpecificGoal);

router.get('/get', auth, getSpecificGoals);

router.patch('/update', auth, updateSpecificGoal);

router.delete('/delete', auth, deleteSpecificGoal);

export default router;