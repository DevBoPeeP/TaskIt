"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function OtpLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isVerified = pathname.includes("/otp");
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-blue-100 via-pink-50 to-purple-100 p-4">
      {isVerified && (
        <>
          <div className="relative z-10 w-[700px] h-[600px] rounded-2xl bg-white p-6 shadow-2xl backdrop-blur-sm sm:p-8">
            {children}
          </div>
        </>
      )}
    </div>
  );
}
