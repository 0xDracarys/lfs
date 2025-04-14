"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

// Dummy user data
const DUMMY_USER = {
  id: "dummy-user-id",
  email: "dummy@example.com",
  name: "Dummy User",
  role: "user",
  aud: "authenticated",
  created_at: new Date().toISOString(),
}

type DummyAuthContextType = {
  user: typeof DUMMY_USER | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signOut: () => Promise<void>
  isDummyAuth: boolean
}

const DummyAuthContext = createContext<DummyAuthContextType>({
  user: null,
  loading: false,
  signIn: async () => ({ error: null }),
  signOut: async () => {},
  isDummyAuth: true,
})

export const DummyAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<typeof DUMMY_USER | null>(null)
  const router = useRouter()

  const signIn = async (_email: string, _password: string) => {
    // Always succeed with dummy user
    setUser(DUMMY_USER)

    // Store in localStorage to persist across page refreshes
    localStorage.setItem("dummyAuthUser", JSON.stringify(DUMMY_USER))

    // Redirect to dashboard
    router.push("/dashboard")
    return { error: null }
  }

  const signOut = async () => {
    setUser(null)
    localStorage.removeItem("dummyAuthUser")
    router.push("/login")
  }

  // Check localStorage on mount to restore session
  useEffect(() => {
    const storedUser = localStorage.getItem("dummyAuthUser")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (e) {
        console.error("Failed to parse stored user:", e)
      }
    }
  }, [])

  return (
    <DummyAuthContext.Provider value={{ user, loading: false, signIn, signOut, isDummyAuth: true }}>
      {children}
    </DummyAuthContext.Provider>
  )
}

export const useDummyAuth = () => useContext(DummyAuthContext)
