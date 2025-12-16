import api from "@/lib/api";
import { LoginRequest, AuthResponse } from "@/types/auth";

export async function loginUser(payload: LoginRequest): Promise<AuthResponse> {
  const res = await api.post<AuthResponse>("/api/auth/login", payload);
  return res.data;
}
