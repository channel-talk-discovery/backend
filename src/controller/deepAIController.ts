import { Request, Response } from 'express';
import calculateImageSimilarity from '@/util/image_similarity_calculator';

export const getImageSimilarity = async (req: Request, res: Response): Promise<void> => {
  const { placeId, uploadImageUrl } = req.body;

  const response = await calculateImageSimilarity(placeId, uploadImageUrl);

  res.status(200).json({ response });
};