
import { NextFunction, Request, Response } from 'express';

export const getPlaces = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // todo - service 연결
    const response = { "hi": 1 };

    res.send(response);
  } catch (err) {
    next(err);
  }
};