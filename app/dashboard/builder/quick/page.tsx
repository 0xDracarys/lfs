import { DashboardHeader } from "@/components/dashboard/header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, Download, Info, Search, Star } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function QuickBuildPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader title="Quick Build" />
      <div className="flex-1 p-6">
        <Alert className="mb-6">
          <Info className="h-4 w-4" />
          <AlertTitle>Quick Build Mode</AlertTitle>
          <AlertDescription>
            Select a template to quickly build your LFS system with pre-configured settings.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="popular" className="w-full">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <TabsList className="mb-2 sm:mb-0">
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="minimal">Minimal</TabsTrigger>
              <TabsTrigger value="desktop">Desktop</TabsTrigger>
              <TabsTrigger value="server">Server</TabsTrigger>
            </TabsList>
            <div className="ml-auto flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search templates..." className="pl-8" />
              </div>
            </div>
          </div>

          <TabsContent value="popular" className="space-y-4 pt-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  id: "template-1",
                  name: "Minimal LFS",
                  author: "LFS Team",
                  description: "A minimal LFS system with essential packages only.",
                  category: "Minimal",
                  downloads: 1245,
                  stars: 87,
                  version: "11.3",
                  buildTime: "~3 hours",
                  packages: 42,
                  verified: true,
                },
                {
                  id: "template-2",
                  name: "Desktop LFS",
                  author: "LFS Team",
                  description: "LFS with XFCE desktop environment and common applications.",
                  category: "Desktop",
                  downloads: 982,
                  stars: 76,
                  version: "11.3",
                  buildTime: "~6 hours",
                  packages: 128,
                  verified: true,
                },
                {
                  id: "template-3",
                  name: "Server LFS",
                  author: "LFS Team",
                  description: "Optimized for server deployments with networking tools.",
                  category: "Server",
                  downloads: 1056,
                  stars: 92,
                  version: "11.3",
                  buildTime: "~4 hours",
                  packages: 78,
                  verified: true,
                },
                {
                  id: "template-4",
                  name: "Development LFS",
                  author: "LFS Team",
                  description: "Full development environment with compilers and tools.",
                  category: "Development",
                  downloads: 876,
                  stars: 68,
                  version: "11.3",
                  buildTime: "~5 hours",
                  packages: 112,
                  verified: true,
                },
                {
                  id: "template-8",
                  name: "Web Server",
                  author: "ServerAdmin",
                  description: "Optimized for web hosting with NGINX and PHP.",
                  category: "Server",
                  downloads: 832,
                  stars: 71,
                  version: "11.3",
                  buildTime: "~4 hours",
                  packages: 86,
                  verified: false,
                },
                {
                  id: "template-9",
                  name: "Database Server",
                  author: "DBAdmin",
                  description: "Configured for database hosting with PostgreSQL and MySQL.",
                  category: "Server",
                  downloads: 612,
                  stars: 48,
                  version: "11.2",
                  buildTime: "~4.5 hours",
                  packages: 92,
                  verified: false,
                },
              ].map((template) => (
                <Card key={template.id} className="flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {template.name}
                          {template.verified && <Check className="h-4 w-4 text-green-500" />}
                        </CardTitle>
                        <CardDescription>by {template.author}</CardDescription>
                      </div>
                      <Badge>{template.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">{template.description}</p>
                    <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Download className="h-4 w-4" />
                        <span>{template.downloads}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Star className="h-4 w-4" />
                        <span>{template.stars}</span>
                      </div>
                      <div className="text-muted-foreground">v{template.version}</div>
                      <div className="text-muted-foreground">{template.buildTime}</div>
                      <div className="text-muted-foreground">{template.packages} packages</div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <a href={`/dashboard/builder/quick/configure/${template.id}`}>
                        Use Template
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="minimal" className="pt-4">
            {/* Minimal templates would go here */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Similar card structure as above, filtered for minimal templates */}
            </div>
          </TabsContent>

          <TabsContent value="desktop" className="pt-4">
            {/* Desktop templates would go here */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Similar card structure as above, filtered for desktop templates */}
            </div>
          </TabsContent>

          <TabsContent value="server" className="pt-4">
            {/* Server templates would go here */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Similar card structure as above, filtered for server templates */}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
