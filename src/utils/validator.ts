import Validator from "validator";
import { UserRegister } from "../controllers/user.controller";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface ProductCredentials {
  name: string;
  description: string;
  price: number;
}

export function validateLogin(credentials: LoginCredentials) {
  const errors: any = [];

  const { email = "", password = "" } = credentials;

  if (Validator.isEmpty(email)) {
    errors.push({ email: "email is required" });
  } else if (Validator.isEmail(email)) {
    errors.push({ email: "please provide a valid email" });
  }

  if (Validator.isEmpty(password)) {
    errors.push({ password: "password is required" });
  } else if (!Validator.isLength(password, { min: 5, max: 15 })) {
    errors.push({ password: "passwords must be from 5 to 15 characters" });
  }

  return errors;
}

export function validateUserRegistration(data: UserRegister) {
  const errors: any = [];

  const { first_name = "", last_name = "", email = "", password = "" } = data;

  if (Validator.isEmpty(first_name)) {
    errors.push({ first_name: "first name is required" });
  }

  if (Validator.isEmpty(last_name)) {
    errors.push({ last_name: "last name is required" });
  }

  if (Validator.isEmpty(email)) {
    errors.push({ email: "email is required" });
  }

  if (Validator.isEmpty(password)) {
    errors.push({ password: "password is required" });
  }

  if (!Validator.isEmpty(password)) {
    if (!Validator.isLength(password, { min: 5, max: 15 })) {
      errors.push({ password: "passwords must be from 5 to 15 characters" });
    }
  }

  return errors;
}

export function validateProduct(data: ProductCredentials) {
  const errors: any = [];

  const { name = "", price = "", description = "" } = data;

  if (Validator.isEmpty(name)) {
    errors.push({ name: "name is required" });
  }

  if (Validator.isEmpty(price as string)) {
    errors.push({ price: "price is required" });
  }

  if (Validator.isEmpty(description)) {
    errors.push({ description: "quantity is required" });
  }

  return errors;
}
