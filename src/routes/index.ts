import { Router } from 'express';
import placeRouter from '@/routes/place';
import deepAIRouter from '@/routes/deepAI';

const router = Router();

/**
 * server health check
 */
router.get('/', (req, res) => {
  res.send(
    '<h1>channel talk app</h1> <h4>Message: Server is alive</h4> <p>Version 1.0</p>',
  );
});

router.use('/place', placeRouter);
router.use('/deepAI', deepAIRouter);

export default router;
