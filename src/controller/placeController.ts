import { NextFunction, Request, Response } from 'express';
import { getPlaces } from '@/service/placeService';

export const getPlaceList = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const category = req.query.category;
    const response = await getPlaces(category);

    res.send({ data: response });
  } catch (err) {
    next(err);
  }
};