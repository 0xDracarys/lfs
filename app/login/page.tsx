"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Eye, EyeOff, Terminal, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/contexts/auth-context"
import { useDummyAuth } from "@/contexts/dummy-auth-context"
import { useToast } from "@/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const plan = searchParams.get("plan")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("demo@example.com")
  const [password, setPassword] = useState("password")
  const [authMode, setAuthMode] = useState<"real" | "dummy">("real")
  const { signIn } = useAuth()
  const { signIn: dummySignIn } = useDummyAuth()
  const { toast } = useToast()

  // Check if user is already logged in with dummy auth
  useEffect(() => {
    const storedUser = localStorage.getItem("dummyAuthUser")
    if (storedUser) {
      router.push("/dashboard")
    }
  }, [router])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      if (authMode === "dummy") {
        // Use dummy authentication
        await dummySignIn(email, password)
        toast({
          title: "Login successful",
          description: "Welcome to the demo! You're using a dummy account.",
        })
      } else {
        // Use real authentication
        const { error } = await signIn(email, password)

        if (error) {
          console.error("Login error:", error)
          toast({
            title: "Login failed",
            description: error.message || "Invalid credentials",
            variant: "destructive",
          })
        } else {
          toast({
            title: "Login successful",
            description: "Welcome back!",
          })
        }
      }
    } catch (error) {
      console.error("Unexpected error during login:", error)
      toast({
        title: "Login failed",
        description: "An unexpected error occurred",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary neon-border">
            <Terminal className="h-6 w-6 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight neon-text">LFS Builder</h1>
          <p className="text-sm text-muted-foreground">Build and customize Linux From Scratch</p>
        </div>

        {plan && (
          <Card className="mb-6 border-primary/60 neon-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-center">
                {plan === "weekly" ? "Weekly Explorer Plan" : "Monthly Pro Plan"}
              </CardTitle>
              <CardDescription className="text-center">
                {plan === "weekly" ? "€3.99 for 7 days access" : "€9.99 per month for premium access"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {(plan === "weekly"
                  ? ["Full access to all templates", "Build and customize LFS", "Standard tutorial access"]
                  : [
                      "Premium LFS build features",
                      "Advanced tutorials and guides",
                      "Priority support access",
                      "Unlimited saved builds",
                    ]
                ).map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        <Card className="border-border/60">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              {plan
                ? "Enter your credentials to access your subscription"
                : "Enter your credentials to access your account"}
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <Tabs defaultValue="real" onValueChange={(value) => setAuthMode(value as "real" | "dummy")}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="real">Real Auth</TabsTrigger>
                  <TabsTrigger value="dummy">Dummy Account</TabsTrigger>
                </TabsList>
                <TabsContent value="real">
                  <p className="text-xs text-muted-foreground mb-4">
                    Use real Supabase authentication (requires setup)
                  </p>
                </TabsContent>
                <TabsContent value="dummy">
                  <p className="text-xs text-muted-foreground mb-4">
                    Use a dummy account for testing (no authentication required)
                  </p>
                </TabsContent>
              </Tabs>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                  </Button>
                </div>
              </div>

              {plan && authMode === "real" && (
                <div className="space-y-2">
                  <Label htmlFor="card">Card Information</Label>
                  <Input id="card" placeholder="1234 5678 9012 3456" required />
                  <div className="grid grid-cols-2 gap-2">
                    <Input id="expiry" placeholder="MM/YY" required />
                    <Input id="cvc" placeholder="CVC" required />
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full neon-button" disabled={isLoading}>
                {isLoading
                  ? "Processing..."
                  : authMode === "dummy"
                    ? "Enter with Dummy Account"
                    : plan
                      ? `Subscribe & Login (€${plan === "weekly" ? "3.99" : "9.99"})`
                      : "Login"}
              </Button>
              <div className="text-center text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link
                  href={plan ? `/login?plan=${plan}` : "/pricing"}
                  className="font-medium text-primary hover:text-primary/90"
                >
                  {plan ? "Sign up" : "See pricing"}
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}
