import { DashboardHeader } from "@/components/dashboard/header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Download, Star, Copy } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TemplatesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader title="Templates" />
      <div className="flex-1 p-6">
        <Tabs defaultValue="community" className="w-full">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <TabsList className="mb-2 sm:mb-0">
              <TabsTrigger value="community">Community</TabsTrigger>
              <TabsTrigger value="my-templates">My Templates</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
            </TabsList>
            <div className="ml-auto flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search templates..." className="pl-8" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Filter by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="minimal">Minimal</SelectItem>
                  <SelectItem value="desktop">Desktop</SelectItem>
                  <SelectItem value="server">Server</SelectItem>
                  <SelectItem value="development">Development</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Template
              </Button>
            </div>
          </div>
          <TabsContent value="community" className="space-y-4 pt-4">
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
                },
                {
                  id: "template-5",
                  name: "Embedded LFS",
                  author: "EmbeddedDev",
                  description: "Minimal system optimized for embedded devices.",
                  category: "Minimal",
                  downloads: 543,
                  stars: 45,
                  version: "11.2",
                },
                {
                  id: "template-6",
                  name: "GNOME Desktop",
                  author: "GnomeUser",
                  description: "LFS with GNOME desktop environment and applications.",
                  category: "Desktop",
                  downloads: 721,
                  stars: 59,
                  version: "11.3",
                },
                {
                  id: "template-7",
                  name: "KDE Plasma Desktop",
                  author: "KDEUser",
                  description: "LFS with KDE Plasma desktop environment and applications.",
                  category: "Desktop",
                  downloads: 689,
                  stars: 54,
                  version: "11.3",
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
                },
              ].map((template) => (
                <Card key={template.id} className="flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{template.name}</CardTitle>
                        <CardDescription>by {template.author}</CardDescription>
                      </div>
                      <Badge>{template.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">{template.description}</p>
                    <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        <span>{template.downloads}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        <span>{template.stars}</span>
                      </div>
                      <div>v{template.version}</div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Star className="mr-2 h-4 w-4" />
                      Favorite
                    </Button>
                    <Button size="sm">
                      <Copy className="mr-2 h-4 w-4" />
                      Use Template
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="my-templates" className="space-y-4 pt-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  id: "my-template-1",
                  name: "Custom Desktop",
                  description: "My customized desktop environment with development tools.",
                  category: "Desktop",
                  created: "Mar 10, 2023",
                  version: "1.2",
                },
                {
                  id: "my-template-2",
                  name: "Minimal Server",
                  description: "Stripped down server configuration for VPS hosting.",
                  category: "Server",
                  created: "Feb 25, 2023",
                  version: "1.0",
                },
                {
                  id: "my-template-3",
                  name: "Development Environment",
                  description: "Full stack development environment with all my tools.",
                  category: "Development",
                  created: "Jan 15, 2023",
                  version: "2.1",
                },
              ].map((template) => (
                <Card key={template.id} className="flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{template.name}</CardTitle>
                        <CardDescription>Created on {template.created}</CardDescription>
                      </div>
                      <Badge>{template.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">{template.description}</p>
                    <div className="mt-4 text-sm text-muted-foreground">
                      <div>Version {template.version}</div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button size="sm">Use Template</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="favorites" className="space-y-4 pt-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  id: "template-3",
                  name: "Server LFS",
                  author: "LFS Team",
                  description: "Optimized for server deployments with networking tools.",
                  category: "Server",
                  downloads: 1056,
                  stars: 92,
                  version: "11.3",
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
                },
              ].map((template) => (
                <Card key={template.id} className="flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{template.name}</CardTitle>
                        <CardDescription>by {template.author}</CardDescription>
                      </div>
                      <Badge>{template.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">{template.description}</p>
                    <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        <span>{template.downloads}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>{template.stars}</span>
                      </div>
                      <div>v{template.version}</div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Star className="mr-2 h-4 w-4 text-yellow-500" />
                      Unfavorite
                    </Button>
                    <Button size="sm">
                      <Copy className="mr-2 h-4 w-4" />
                      Use Template
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
