import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ToastContainer } from "react-toastify";
import Notifications from "@/components/Notifications";
import LoginSuccessToast from "@/components/shared/LoginSuccessToast";
import LogoutSuccessToast from "@/components/shared/LogoutSuccessToast";
import { Toaster } from "sonner";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";

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
  icons: {
    icon: '/logo.ico', 
  },
  description:
    "Find trusted travel buddies, create travel plans, join trips, and explore destinations together with BestBuddies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning >
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="antialiased bg-[#f8f8f5] dark:bg-black min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className={`${geistSans.variable} ${geistMono.variable} min-h-screen`}>
            {children}
            <Toaster position="top-right" richColors />
            <Notifications />
            <ToastContainer />
            <Suspense fallback={null}>
              <LogoutSuccessToast />
              <LoginSuccessToast />
            </Suspense>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
