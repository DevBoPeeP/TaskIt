"use client";

import { usePathname } from "next/navigation";
import { AuthProvider } from "@/context/AuthContext";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLogin = pathname.includes("/login");

  return (
    <div className="w-full h-screen flex items-start">
      {isLogin ? (
        <>
          <div className="min-h-screen w-1/2 flex items-center justify-center bg-gray-50">
            <AuthProvider>{children}</AuthProvider>
          </div>

          <div className="hidden lg:flex w-[520px] h-[720px] flex-col gradient active:scale-95 border-2 border-[#f0f0f0] rounded-[5%] m-8 relative overflow-hidden">
            <div className="text-white m-10 py-16 z-10">
              <h1 className="font-bold text-4xl leading-tight">
                The Best way to manage your life
              </h1>
              <p className="mt-2 text-lg">Work life balance</p>
            </div>

            <div className="absolute -translate-x-1/2 top-60 w-[80%] xl:bottom-[10%] 2xl:w-[90%] 2xl:bottom-[40%] 2xl:left-[50%]">
              <img
                src="/tms.png"
                alt="TMS dashboard"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="absolute right-[8%] top-[27%] w-[12%] xl:w-[10%] 2xl:w-[8%]">
              <img
                src="/one.png"
                alt="decor top"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="absolute bottom-[25%] left-[15%] w-[12%] xl:w-[10%] 2xl:w-[8%]">
              <img
                src="/one.png"
                alt="decor bottom left"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="absolute bottom-[8%] right-[8%] w-[18%] xl:w-[15%] 2xl:w-[12%]">
              <img
                src="/two.png"
                alt="decor bottom right"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col lg:flex-row w-full h-screen  ">
            <div className="w-1/2 items-center justify-center hidden lg:flex ">
              <div className="hidden lg:flex w-[520px] h-[720px] flex-col gradient-n active:scale-95 border-2 border-[#f0f0f0] rounded-[5%] m-8 relative overflow-hidden">
                <div className="text-white m-10 py-16 z-10">
                  <h1 className="font-bold text-4xl leading-tight">
                    The Best way to manage your life
                  </h1>
                  <p className="mt-2 text-lg">Work life balance</p>
                </div>

                <div className="absolute -translate-x-1/2 top-60 w-[80%] xl:bottom-[10%] 2xl:w-[90%] 2xl:bottom-[40%] 2xl:left-[50%]">
                  <img
                    src="/tms.png"
                    alt="TMS dashboard"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="absolute right-[8%] top-[27%] w-[12%] xl:w-[10%] 2xl:w-[8%]">
                  <img
                    src="/one.png"
                    alt="decor top"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="absolute bottom-[25%] left-[15%] w-[12%] xl:w-[10%] 2xl:w-[8%]">
                  <img
                    src="/one.png"
                    alt="decor bottom left"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="absolute bottom-[8%] right-[8%] w-[18%] xl:w-[15%] 2xl:w-[12%]">
                  <img
                    src="/two.png"
                    alt="decor bottom right"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center bg-gray-50 px-4 sm:px-8">
              {children}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
