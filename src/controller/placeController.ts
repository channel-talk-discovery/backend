import { NextFunction, Request, Response } from 'express';
import { getPlaces } from '@/service/placeService';

export const getPlaceList = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const response = await getPlaces();

    res.send({ data: response });
  } catch (err) {
    next(err);
  }
};