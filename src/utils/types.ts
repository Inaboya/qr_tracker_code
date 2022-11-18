export interface SuccessResponse<T = any> {
  success: true;
  data: T;
}

export interface FailedResponse<T = any> {
  success: false;
  data: T;
}

export interface ProductRegister {
  name: string;
  description: string;
  price: number;
  qrcodeId: string;
}

export const applicationJson = "application/json";
export const applicationXml = "application/xml";