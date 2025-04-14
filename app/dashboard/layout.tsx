"use client"

import type React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DummyAuthCheck } from "@/components/dummy-auth-check"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DummyAuthCheck>
      <div className="flex min-h-screen bg-background">
        <SidebarProvider>
          <DashboardSidebar />
          <div className="flex-1 overflow-auto">
            <main className="flex-1">{children}</main>
          </div>
        </SidebarProvider>
      </div>
    </DummyAuthCheck>
  )
}
