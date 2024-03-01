import express from 'express';

import { createDietPlan, createPersonalizedDietPlan, deleteDietPlan, getDietPlans, updateDietPlan } from '../controllers/dietPlan.controller.js';
import auth from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/create', auth, createDietPlan);

router.post('/create-personalized', auth, createPersonalizedDietPlan);

router.get('/get', auth, getDietPlans);

router.patch('/update', auth, updateDietPlan);

router.delete('/delete', auth, deleteDietPlan);

export default router;