import api from "@/lib/api";
import {
  CreateUserRequest,
  UpdateProfileRequest,
  VerifyUserRequest,
  UserResponse,
} from "@/types/user";

export async function registerUser(
  data: CreateUserRequest
): Promise<UserResponse> {
  const res = await api.post<UserResponse>("/api/users/register", data);
  return res.data;
}

export async function verifyUser(data: VerifyUserRequest) {
  const params = new URLSearchParams({
    email: data.email,
    token: data.token,
  });

  const res = await api.post("/api/users/verifyUser?" + params.toString());
  return res.data;
}

export async function getCurrentUser(token: string): Promise<UserResponse> {
  const res = await api.get<UserResponse>("/api/users/getCurrentUser", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

export async function updateProfile(
  token: string,
  data: UpdateProfileRequest
): Promise<UserResponse> {
  const res = await api.post<UserResponse>("/api/users/updateProfile", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
}
