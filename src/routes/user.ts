import express from 'express';
import * as user from '@/controller/userController';

const router = express.Router();
router.get('/my-page', user.getMyPage);

export default router;