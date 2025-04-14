"use client"

import { useEffect, useState } from "react"
import { getSupabaseClient } from "@/lib/supabase/client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function AuthDebug() {
  const [session, setSession] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const supabase = getSupabaseClient()

  useEffect(() => {
    async function getSession() {
      try {
        const { data, error } = await supabase.auth.getSession()
        if (error) {
          setError(error.message)
        } else {
          setSession(data.session)
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error")
      }
    }

    getSession()
  }, [supabase])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    window.location.reload()
  }

  return (
    <Card className="w-full max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle>Auth Debug</CardTitle>
        <CardDescription>Current authentication state</CardDescription>
      </CardHeader>
      <CardContent>
        {error ? (
          <div className="text-red-500 mb-4">Error: {error}</div>
        ) : session ? (
          <div>
            <div className="mb-4">
              <p className="font-semibold">Authenticated as:</p>
              <p className="text-sm">{session.user?.email}</p>
              <p className="text-sm">User ID: {session.user?.id}</p>
            </div>
            <Button onClick={handleSignOut} variant="destructive" size="sm">
              Sign Out
            </Button>
          </div>
        ) : (
          <div className="text-amber-500">Not authenticated</div>
        )}
      </CardContent>
    </Card>
  )
}
