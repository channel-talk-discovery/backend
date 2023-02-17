import { NextFunction, Request, Response } from 'express';
import { getMyInfo } from '@/service/userService';


export const getMyPage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // 로그인-회원가입 미구현으로 인해 인증 수단 x -> 1번 user로 고정
    const userId = 1;
    const response = await getMyInfo(userId);

    res.send({ data: response });
  } catch (err) {
    next(err);
  }
};