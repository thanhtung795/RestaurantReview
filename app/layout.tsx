"use client";

import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/theme-provider";
import { Banner } from "./components/banner";
import { SidebarMenu } from "./components/sidebar-menu";
import { SidebarToggleButton } from "./components/sidebar-toggle-button";
import { useEffect, useState } from "react";

// Sử dụng font Inter
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    // Set initial window height
    setWindowHeight(window.innerHeight);

    // Update on resize
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Banner />
          <SidebarMenu isOpen={isSidebarOpen} onToggle={toggleSidebar} />
          {!isSidebarOpen ? (
            <SidebarToggleButton
              isOpen={isSidebarOpen}
              onToggle={toggleSidebar}
              className="top-[205px] left-4"
            />
          ) : null}
         <>
          {children}
         </>
          
        </ThemeProvider>
      </body>
    </html>
  );
}
