"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { getSupabaseClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import type { User } from "@supabase/supabase-js"

type AuthContextType = {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signIn: async () => ({ error: null }),
  signOut: async () => {},
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = getSupabaseClient()

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      setUser(session?.user || null)
      setLoading(false)

      const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
        setUser(session?.user || null)
        setLoading(false)

        if (event === "SIGNED_IN") {
          router.refresh()
        }

        if (event === "SIGNED_OUT") {
          router.push("/login")
        }
      })

      return () => {
        authListener.subscription.unsubscribe()
      }
    }

    getUser()
  }, [supabase, router])

  // Update the signIn function to better handle errors
  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        console.error("Auth error:", error)
        return { error }
      }

      if (data?.user) {
        router.push("/dashboard")
        return { error: null }
      } else {
        return { error: new Error("No user returned from authentication") }
      }
    } catch (err) {
      console.error("Unexpected auth error:", err)
      return { error: err instanceof Error ? err : new Error("Unknown authentication error") }
    }
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    router.push("/login")
  }

  return <AuthContext.Provider value={{ user, loading, signIn, signOut }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
