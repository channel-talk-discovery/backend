import { customErrorFactory, CustomErrorInterface, CustomErrorProperties } from 'ts-custom-error';

export type CustomError = CustomErrorInterface & CustomErrorProperties;

const TokenError = customErrorFactory(
  function TokenError(code: number, message: string) {
    this.message = message;
    this.status = 400;
    this.code = code;
  },
);
export const TOKEN_EMPTY_ERROR = new TokenError(2000, 'token is empty');
export const TOKEN_VERIFICATION_FAILURE = new TokenError(3000, 'fail to verify token');

const ValidationError = customErrorFactory(
  function ValidationError(code: number, message: string) {
    this.message = message;
    this.status = 400;
    this.code = code;
  },
);

// example
export const SIGNUP_USER_ALREADY_EXISTS = new ValidationError(2001, 'user already exists');

const DBError = customErrorFactory(
  function DBError(code: number, message: string) {
    this.message = message;
    this.status = 400;
    this.code = code;
  },
);
export const DB_ERROR = new DBError(4000, 'database error');
