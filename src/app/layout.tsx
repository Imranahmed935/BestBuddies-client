import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ToastContainer} from 'react-toastify';

import Notifications from "@/components/Notifications";
import LoginSuccessToast from "@/components/shared/LoginSuccessToast";
import { Toaster } from "sonner";
import { Suspense } from "react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BestBuddies",
    template: "%s | BestBuddies",
  },
  description:
    "Find trusted travel buddies, create travel plans, join trips, and explore destinations together with BestBuddies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f8f8f5] min-h-screen`}
      >
        {children}
        <Toaster position="top-right" richColors />
        <Notifications/>
        <ToastContainer/>
        <Suspense fallback={null}>
            <LoginSuccessToast/>
           </Suspense>
      </body>
    </html>
  );
}