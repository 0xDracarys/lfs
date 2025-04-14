"use client"

import { useState, useEffect } from "react"
import { Bell, User } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"
import { useDummyAuth } from "@/contexts/dummy-auth-context"
import { Badge } from "@/components/ui/badge"

interface HeaderProps {
  title: string
}

export function DashboardHeader({ title }: HeaderProps) {
  const [notifications, setNotifications] = useState(3)
  const { user: realUser, signOut: realSignOut } = useAuth()
  const { user: dummyUser, signOut: dummySignOut } = useDummyAuth()
  const [userName, setUserName] = useState<string>("User")
  const [isDummy, setIsDummy] = useState(false)

  useEffect(() => {
    if (dummyUser) {
      setUserName(dummyUser.name || dummyUser.email?.split("@")[0] || "Dummy User")
      setIsDummy(true)
    } else if (realUser) {
      setUserName(realUser.email?.split("@")[0] || "User")
      setIsDummy(false)
    }
  }, [dummyUser, realUser])

  const handleSignOut = () => {
    if (isDummy) {
      dummySignOut()
    } else {
      realSignOut()
    }
  }

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border/40 bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <h1 className="text-xl font-bold tracking-tight">{title}</h1>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {notifications > 0 && (
            <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground">
              {notifications}
            </span>
          )}
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="flex flex-col">
              <span>{userName}</span>
              {isDummy && (
                <Badge variant="outline" className="mt-1 text-xs">
                  Dummy Account
                </Badge>
              )}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/dashboard/settings">Profile Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleSignOut}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
