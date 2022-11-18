import { NextFunction, Request, Response } from "express";
import StatusCodes, {
  BAD_REQUEST,
  getStatusText,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  OK,
} from "http-status-codes";
import { UserService } from "../services";
import { encryptPassword, isEqualPassword } from "../utils/encrypter";
import { createToken } from "../utils/passpost";
import {
  apiResponse,
  failedResponse,
  successResponse,
} from "../utils/response";

export interface UserRegister {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export class UserController {
  public constructor(private userService: UserService) {
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  public async register(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      const user = <UserRegister>req.body;

      const isEmailExist = await this.userService.getUserByEmail(user.email);

      if (isEmailExist !== null) {
        return apiResponse(
          res,
          failedResponse(StatusCodes.BAD_REQUEST),
          StatusCodes.BAD_REQUEST
        );
      }

      user.password = await encryptPassword(user.password, 10);

      const newUser = await this.userService.save(user);

      return apiResponse(res, successResponse(newUser), StatusCodes.OK);
    } catch (error) {
      throw error;
    }
  }

  public async login(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      const loginCredentials = req.body;

      const stored = await this.userService.getUserByEmail(
        loginCredentials.email
      );

      if (stored === null) {
        return apiResponse(
          res,
          failedResponse("Email not found"),
          StatusCodes.NOT_FOUND
        );
      }

      const samePassword = await isEqualPassword(
        stored.password,
        loginCredentials.password
      );

      if (!samePassword) {
        return apiResponse(
          res,
          failedResponse("User Not Found"),
          StatusCodes.NOT_FOUND
        );
      }

      const loginedUser = {
        id: stored.id,
        email: stored.email,
        first_name: stored.first_name,
        last_name: stored.last_name,
      };

      const token = createToken(loginedUser);

      return apiResponse(
        res,
        successResponse({
          ...loginedUser,
          token: `Bearer ${token}`,
        }),
        StatusCodes.OK
      );
    } catch (error) {
      throw error;
    }
  }
}
