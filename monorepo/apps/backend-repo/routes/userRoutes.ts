import express from 'express';
import { updateUser, fetchUser } from '../controller/api';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.put('/update-user-data/:userId', authMiddleware, updateUser);
router.get('/fetch-user-data/:userId', authMiddleware, fetchUser);

export default router;