"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = createTheme({
    typography: {
      fontFamily: ["Gilda Display", "serif"].join(","),
      fontWeightBold: 900,
      fontSize: 16,
    },
  });
  const pathname = usePathname();
  const isDashboard = pathname.includes("/dashboard");
  return (
    <ThemeProvider theme={theme}>
      <div className="w-full h-screen flex">
        {isDashboard ? (
          <div className="w-full h-screen">
            <div className="w-full flex h-screen">{children}</div>
          </div>
        ) : null}
      </div>
    </ThemeProvider>
  );
}
