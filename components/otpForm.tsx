"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function OtpForm() {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "your email";

  const handleInput = (e: React.FormEvent<HTMLInputElement>, index: number) => {
    const value = e.currentTarget.value;
    if (!/^[0-9]?$/.test(value)) return;

    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);

    // Move focus to next input automatically
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
      arr.forEach((digit, i) => {
        if (inputRefs.current[i]) inputRefs.current[i]!.value = digit;
      });
    }
  };

  const handleSubmit = () => {
    const code = otp.join("");
    if (code.length === 6) {
      alert(`Entered OTP: ${code}`);
    } else {
      alert("Please enter all 6 digits");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  py-[4rem]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className=" p-4 sm:p-10  w-[500px] text-center mt-8"
      >
        <BadgeCheck className="mx-auto text-purple-400 w-12 h-12 mb-3" />
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
          Verify Your Account
        </h2>
        <p className="text-gray-500 text-sm sm:text-base mb-6">
          Please enter the 6-digit verification code sent to {email}
        </p>

        <div className="flex justify-center gap-2 sm:gap-4 mb-8">
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

        <button
          onClick={handleSubmit}
          className="bg-purple-300 hover:bg-purple-500 text-gray-800 font-bold rounded-full px-8 py-2 sm:py-3 text-sm sm:text-base transition-colors"
        >
          Confirm
        </button>
      </motion.div>
    </div>
  );
}
