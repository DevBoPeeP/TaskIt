export interface CreateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface VerifyUserRequest {
  email: string;
  token: string;
}

export interface UpdateProfileRequest {
  username: string;
  phoneNumber: string;
  jobTitle: string;
}

export interface UserResponse {
  id: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  jobTitle?: string;
  active: boolean;
  verified: boolean;
  createdAt?: string;
}

export interface ApiResponse {
  responseCode: string;
  responseMessage: string;
}
