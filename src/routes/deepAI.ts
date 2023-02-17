import express from 'express';
import * as deepAI from '@/controller/deepAIController';

const router = express.Router();
router.post('/image-similarity', deepAI.getImageSimilarity);

export default router;