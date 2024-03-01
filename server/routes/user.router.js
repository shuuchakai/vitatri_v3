import express from 'express';

import { deleteUser, getUser, login, register, updateUser } from '../controllers/user.controller.js';
import auth from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/get", auth, getUser);

router.delete("/delete", deleteUser);

router.patch("/update", updateUser);

export default router;