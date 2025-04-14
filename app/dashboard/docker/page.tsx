import { DashboardHeader } from "@/components/dashboard/header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Play, Square, RefreshCw, Trash2, Plus } from "lucide-react"

export default function DockerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader title="Docker Management" />
      <div className="flex-1 p-6">
        <Tabs defaultValue="containers" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="containers">Containers</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
          </TabsList>
          <TabsContent value="containers" className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <div className="relative w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search containers..." className="pl-8" />
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Container
              </Button>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Running Containers</CardTitle>
                <CardDescription>Manage your active Docker containers</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Container ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Image</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "a1b2c3d4",
                        name: "lfs-build-1",
                        image: "lfs-builder:latest",
                        status: "running",
                        created: "2 hours ago",
                      },
                      {
                        id: "e5f6g7h8",
                        name: "lfs-build-2",
                        image: "lfs-builder:latest",
                        status: "running",
                        created: "3 hours ago",
                      },
                      {
                        id: "i9j0k1l2",
                        name: "lfs-test-1",
                        image: "lfs-tester:latest",
                        status: "running",
                        created: "1 day ago",
                      },
                    ].map((container) => (
                      <TableRow key={container.id}>
                        <TableCell className="font-mono">{container.id.substring(0, 8)}</TableCell>
                        <TableCell>{container.name}</TableCell>
                        <TableCell>{container.image}</TableCell>
                        <TableCell>
                          <Badge variant="default" className="bg-green-500">
                            {container.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{container.created}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="icon" title="Stop">
                              <Square className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon" title="Restart">
                              <RefreshCw className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon" title="Delete">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Stopped Containers</CardTitle>
                <CardDescription>Manage your inactive Docker containers</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Container ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Image</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "m3n4o5p6",
                        name: "lfs-build-old",
                        image: "lfs-builder:1.0",
                        status: "exited",
                        created: "5 days ago",
                      },
                      {
                        id: "q7r8s9t0",
                        name: "lfs-test-old",
                        image: "lfs-tester:1.0",
                        status: "exited",
                        created: "1 week ago",
                      },
                    ].map((container) => (
                      <TableRow key={container.id}>
                        <TableCell className="font-mono">{container.id.substring(0, 8)}</TableCell>
                        <TableCell>{container.name}</TableCell>
                        <TableCell>{container.image}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{container.status}</Badge>
                        </TableCell>
                        <TableCell>{container.created}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="icon" title="Start">
                              <Play className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon" title="Delete">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="images" className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <div className="relative w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search images..." className="pl-8" />
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Pull Image
              </Button>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Docker Images</CardTitle>
                <CardDescription>Manage your Docker images</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Repository</TableHead>
                      <TableHead>Tag</TableHead>
                      <TableHead>Image ID</TableHead>
                      <TableHead>Size</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        repo: "lfs-builder",
                        tag: "latest",
                        id: "sha256:a1b2c3d4",
                        size: "1.2 GB",
                        created: "2 days ago",
                      },
                      { repo: "lfs-builder", tag: "1.0", id: "sha256:e5f6g7h8", size: "1.1 GB", created: "1 week ago" },
                      {
                        repo: "lfs-tester",
                        tag: "latest",
                        id: "sha256:i9j0k1l2",
                        size: "800 MB",
                        created: "3 days ago",
                      },
                      { repo: "lfs-tester", tag: "1.0", id: "sha256:m3n4o5p6", size: "750 MB", created: "2 weeks ago" },
                      { repo: "ubuntu", tag: "22.04", id: "sha256:q7r8s9t0", size: "72 MB", created: "1 month ago" },
                    ].map((image, index) => (
                      <TableRow key={index}>
                        <TableCell>{image.repo}</TableCell>
                        <TableCell>{image.tag}</TableCell>
                        <TableCell className="font-mono">{image.id.substring(7, 15)}</TableCell>
                        <TableCell>{image.size}</TableCell>
                        <TableCell>{image.created}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="icon" title="Delete">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="ml-auto">
                  Prune Unused Images
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
