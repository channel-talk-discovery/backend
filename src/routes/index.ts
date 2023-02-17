import { Router } from 'express';
import placeRouter from '@/routes/place';
import deepAIRouter from '@/routes/deepAI';
import userRouter from '@/routes/user';
import { upload } from '@/middleware/multer';

const router = Router();

/**
 * server health check
 */
router.get('/', (req, res) => {
  res.send(
    '<h1>channel talk app</h1> <h4>Message: Server is alive</h4> <p>Version 1.0</p>',
  );
});
router.post('/upload', upload.single('imgUpload'), (req, res) => {
  res.status(200).send({
    fileInfo: req.file.filename
  })
})

router.use('/place', placeRouter);
router.use('/deepAI', deepAIRouter);
router.use('/user', userRouter);

export default router;
