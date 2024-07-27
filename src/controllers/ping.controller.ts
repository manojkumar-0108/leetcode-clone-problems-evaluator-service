import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

type MiddlewareFunction = (req: Request, res: Response, next: NextFunction) => void;

function pingCheck(message: string): MiddlewareFunction {
  return (_req: Request, res: Response, _next: NextFunction): void => {
    res.status(StatusCodes.OK).json({
      success: true,
      message: message,
      error: [],
      data: [],
    });
  };
}

export default pingCheck;
