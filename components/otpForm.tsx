"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { verifyOtp, resendOtp } from "@/services/otpService";

export default function OtpForm() {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  const email = searchParams.get("email") || "";

  const isOtpComplete = otp.every((digit) => digit !== "");

  const handleInput = (e: React.FormEvent<HTMLInputElement>, index: number) => {
    const value = e.currentTarget.value;
    if (!/^[0-9]?$/.test(value)) return;

    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);

    if (value && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").slice(0, 6);
    if (/^\d+$/.test(pasted)) {
      const arr = pasted.split("");
      setOtp(arr.concat(Array(6 - arr.length).fill("")));
    }
  };

  const handleSubmit = async () => {
    const code = otp.join("");

    if (code.length !== 6) return;

    try {
      setLoading(true);
      setError("");

      const res = await verifyOtp(email, code);

      if (res.responseCode === "00" && res.token) {
        localStorage.setItem("token", res.token);

        router.push("/dashboard");
      } else {
        setError(res.responseMessage);
      }
    } catch {
      setError("OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    try {
      await resendOtp(email);
      setError("OTP resent successfully");
    } catch {
      setError("Failed to resend OTP");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white shadow-lg rounded-3xl p-4 sm:p-10 w-[500px] text-center mt-8"
      >
        <BadgeCheck className="mx-auto text-purple-400 w-12 h-12 mb-3" />

        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
          Verify Your Account
        </h2>

        <p className="text-gray-500 text-sm sm:text-base mb-6">
          Enter the 6-digit code sent to <b>{email}</b>
        </p>

        <div className="flex justify-center gap-2 sm:gap-4 mb-4">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              inputMode="numeric"
              maxLength={1}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              value={value}
              onInput={(e) => handleInput(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              className="w-10 h-10 sm:w-12 sm:h-12 text-center border border-gray-200 rounded-lg shadow-sm text-lg font-medium focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          ))}
        </div>

        {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`font-bold rounded-full px-8 py-2 sm:py-3 w-full transition-colors mb-3 ${
            isOtpComplete
              ? "bg-purple-500 hover:bg-purple-600 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {loading ? "Verifying..." : "Confirm"}
        </button>

        <button
          onClick={handleResend}
          className="text-sm text-purple-500 underline"
        >
          Resend OTP
        </button>
      </motion.div>
    </div>
  );
}
