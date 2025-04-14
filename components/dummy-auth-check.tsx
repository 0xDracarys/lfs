"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useDummyAuth } from "@/contexts/dummy-auth-context"
import { useAuth } from "@/contexts/auth-context"

export function DummyAuthCheck({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { user: dummyUser } = useDummyAuth()
  const { user: realUser } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated with either real or dummy auth
    if (dummyUser || realUser) {
      setIsAuthenticated(true)
    } else {
      // Redirect to login if not authenticated
      router.push("/login")
    }
  }, [dummyUser, realUser, router])

  // Show nothing while checking authentication
  if (!isAuthenticated) {
    return null
  }

  return <>{children}</>
}
