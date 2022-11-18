import fs from "fs";
import { sign, verify } from "jsonwebtoken";
import path from "path";

export function createToken(userData: any) {
  return sign(userData, process.env.privateKey as string, {
    algorithm: "HS512",
    expiresIn: "1d",
  });
}
