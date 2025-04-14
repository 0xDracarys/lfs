import { DashboardHeader } from "@/components/dashboard/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Clock, DockIcon as Docker, FileCode, Terminal } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader title="Dashboard" />
      <div className="flex-1 space-y-6 p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Builds</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127</div>
              <p className="text-xs text-muted-foreground">+5.2% from last month</p>
              <Progress value={65} className="mt-3 h-1" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active Containers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">+2 from last week</p>
              <Progress value={40} className="mt-3 h-1" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Templates Used</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">3 custom templates</p>
              <Progress value={60} className="mt-3 h-1" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Build Success Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94.2%</div>
              <p className="text-xs text-muted-foreground">+1.2% from last month</p>
              <Progress value={94} className="mt-3 h-1" />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Recent Builds</CardTitle>
              <CardDescription>Your last 5 build processes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { id: "build-127", name: "Custom LFS 5.2", status: "completed", time: "2 hours ago" },
                  { id: "build-126", name: "Minimal LFS 4.0", status: "failed", time: "1 day ago" },
                  { id: "build-125", name: "Development LFS", status: "completed", time: "2 days ago" },
                  { id: "build-124", name: "Server LFS 3.1", status: "completed", time: "3 days ago" },
                  { id: "build-123", name: "Desktop LFS 4.1", status: "completed", time: "5 days ago" },
                ].map((build) => (
                  <div
                    key={build.id}
                    className="flex items-center justify-between rounded-lg border border-border/40 p-3"
                  >
                    <div className="flex items-center gap-3">
                      <Terminal className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">{build.name}</p>
                        <p className="text-xs text-muted-foreground">{build.time}</p>
                      </div>
                    </div>
                    <Badge variant={build.status === "completed" ? "default" : "destructive"}>{build.status}</Badge>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-end">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/dashboard/history">
                    View all builds
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Start building or manage resources</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start gap-2" asChild>
                <Link href="/dashboard/builder">
                  <Terminal className="h-5 w-5" />
                  Start New Build
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2" asChild>
                <Link href="/dashboard/docker">
                  <Docker className="h-5 w-5" />
                  Manage Containers
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2" asChild>
                <Link href="/dashboard/templates">
                  <FileCode className="h-5 w-5" />
                  Browse Templates
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2" asChild>
                <Link href="/dashboard/history">
                  <Clock className="h-5 w-5" />
                  View Build History
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
