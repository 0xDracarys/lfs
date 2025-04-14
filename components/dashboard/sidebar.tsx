"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Terminal, DockIcon as Docker, History, Settings, FileCode, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Builder",
    href: "/dashboard/builder",
    icon: Terminal,
  },
  {
    title: "Docker",
    href: "/dashboard/docker",
    icon: Docker,
  },
  {
    title: "Templates",
    href: "/dashboard/templates",
    icon: FileCode,
  },
  {
    title: "History",
    href: "/dashboard/history",
    icon: History,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar
      variant="floating"
      className="border-r border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <SidebarHeader className="flex h-14 items-center border-b border-border/40 px-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="relative size-8 overflow-hidden rounded-md bg-primary">
            <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-primary-foreground">
              LFS
            </div>
          </div>
          <div className="font-bold tracking-tight text-foreground">LFS Builder</div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                <Link href={item.href} className="flex items-center gap-2">
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t border-border/40 p-4">
        <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground" asChild>
          <Link href="/login">
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </Link>
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}
