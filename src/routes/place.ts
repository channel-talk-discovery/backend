import express from 'express';
import * as place from '@/controller/placeController';

const router = express.Router();
router.get('/', place.getPlaceList);

export default router;