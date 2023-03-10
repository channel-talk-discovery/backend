import { NextFunction, Request, Response } from 'express';
import winston from 'winston';
import { CustomError } from '@/common/errorCode';

const errorHandler = (err: CustomError, _: Request, res: Response, next: NextFunction) => {
  const status = err.status ?? 500;
  if (status === 500) {
    winston.error(err.stack || '');
  }
  res.status(status as number).json({
    error: {
      message: err.message,
      code: err.code,
    },
  });
};
export default errorHandler;
