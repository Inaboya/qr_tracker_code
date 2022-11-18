import bcrypt from "bcrypt";

export async function encryptPassword(
  password: string,
  salt: number
): Promise<string> {
  try {
    const salted = await bcrypt.genSalt(salt);
    return await bcrypt.hash(password, salted);
  } catch (error) {
    throw error;
  }
}

export function isEqualPassword(
  encrypted: string,
  text: string
): Promise<boolean> {
  return bcrypt.compare(text, encrypted);
}
