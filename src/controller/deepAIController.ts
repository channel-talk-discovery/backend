import { NextFunction, Request, Response } from 'express';
import calculateImageSimilarity from '@/util/image_similarity_calculator';
import { getPlaceInfo } from '@/service/placeService';
import { infoDto } from '@/dto/placeInfoDto';

export const getImageSimilarity = async (req: Request, res: Response, next: NextFunction,): Promise<void> => {
  try {
    const { placeId, uploadImageUrl } = req.body;

    const response = await calculateImageSimilarity(placeId, uploadImageUrl);

    res.send(response);
  } catch (err) {
    next(err)
  }
};