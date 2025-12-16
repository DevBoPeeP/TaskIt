export interface SendOtpResponse {
  responseCode: string;
  responseMessage: string;
}

export interface VerifyOtpRequest {
  email: string;
  code: string;
}

export interface VerifyOtpResponse {
  responseCode: string;
  responseMessage: string;
}
