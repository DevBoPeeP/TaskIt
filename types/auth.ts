export interface LoginRequest {
  usernameOrEmail: string;
  password: string;
}

export interface AuthResponse {
  responseCode: string;
  responseMessage: string;
  token?: string;
}

export interface AuthContextType {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}
