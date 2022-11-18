import { Request, Response, NextFunction } from "express";
import StatusCodes from "http-status-codes";
import { apiResponse, failedResponse } from "./response";
import {
  validateLogin,
  validateUserRegistration,
  validateProduct,
} from "./validator";

export interface FailedResponse<T = any> {
  success: false;
  data: T;
}

export function validateUser(req: Request, res: Response, next: NextFunction) {
  try {

    const valid = validateUserRegistration(req.body);

    if (valid.length > 0) {
      apiResponse<FailedResponse>(
        res,
        failedResponse(valid),
        StatusCodes.BAD_REQUEST
      );
    } else {
      next();
    }
  } catch (error) {
    throw error;
  }
}
export function validatingLogin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {

    const valid = validateLogin(req.body);

    if (valid.length > 0) {
      apiResponse<FailedResponse>(
        res,
        failedResponse(valid),
        StatusCodes.BAD_REQUEST
      );
    } else {
      next();
    }
  } catch (error) {
    throw error;
  }
}

export function validatingProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {

    const valid = validateProduct(req.body);

    if (valid.length > 0) {
      apiResponse<FailedResponse>(
        res,
        failedResponse(valid),
        StatusCodes.BAD_REQUEST
      );
    } else {
      next();
    }
  } catch (error) {
    throw error;
  }
}
