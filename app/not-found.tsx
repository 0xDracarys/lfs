import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Terminal } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-md bg-primary">
        <Terminal className="h-8 w-8 text-primary-foreground" />
      </div>
      <h1 className="mb-2 text-4xl font-bold tracking-tight">404</h1>
      <h2 className="mb-4 text-2xl font-semibold">Page Not Found</h2>
      <p className="mb-8 max-w-md text-muted-foreground">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Button asChild>
        <Link href="/dashboard">Return to Dashboard</Link>
      </Button>
    </div>
  )
}
