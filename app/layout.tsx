import type { Metadata } from "next";
import "./globals.css";
import { Gilda_Display } from "next/font/google";

const gilda = Gilda_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={gilda.className}>{children}</body>
    </html>
  );
}
