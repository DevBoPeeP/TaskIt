import api from "@/lib/api";

export async function verifyOtp(email: string, code: string) {
  const res = await api.post("/api/otp/verify", {
    email,
    code,
  });
  return res.data;
}

export async function resendOtp(email: string) {
  const res = await api.post("/api/otp/send", null, {
    params: { email },
  });
  return res.data;
}
