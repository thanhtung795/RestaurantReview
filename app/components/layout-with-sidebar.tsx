"use client"

import type React from "react"

import { useState } from "react"
import { SidebarMenu } from "@/app/components/sidebar-menu"

interface LayoutWithSidebarProps {
  children: React.ReactNode
}

export function LayoutWithSidebar({ children }: LayoutWithSidebarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="flex min-h-screen">
      <SidebarMenu isOpen={isSidebarOpen} onToggle={toggleSidebar} />

      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "md:ml-[240px]" : "ml-0"}`}>{children}</div>
    </div>
  )
}

