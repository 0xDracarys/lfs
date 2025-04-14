import { DashboardHeader } from "@/components/dashboard/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Download, Eye } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function HistoryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader title="Build History" />
      <div className="flex-1 p-6">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <TabsList className="mb-2 sm:mb-0">
              <TabsTrigger value="all">All Builds</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="failed">Failed</TabsTrigger>
            </TabsList>
            <div className="ml-auto flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search builds..." className="pl-8" />
              </div>
              <Select defaultValue="recent">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Filter by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                  <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <TabsContent value="all" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Build History</CardTitle>
                <CardDescription>View and manage your previous LFS builds</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Build ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Template</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "build-127",
                        name: "Custom LFS 5.2",
                        template: "Custom",
                        status: "completed",
                        duration: "3h 24m",
                        date: "Mar 15, 2023",
                      },
                      {
                        id: "build-126",
                        name: "Minimal LFS 4.0",
                        template: "Minimal",
                        status: "failed",
                        duration: "1h 12m",
                        date: "Mar 14, 2023",
                      },
                      {
                        id: "build-125",
                        name: "Development LFS",
                        template: "Development",
                        status: "completed",
                        duration: "4h 56m",
                        date: "Mar 12, 2023",
                      },
                      {
                        id: "build-124",
                        name: "Server LFS 3.1",
                        template: "Server",
                        status: "completed",
                        duration: "2h 45m",
                        date: "Mar 10, 2023",
                      },
                      {
                        id: "build-123",
                        name: "Desktop LFS 4.1",
                        template: "Desktop",
                        status: "completed",
                        duration: "5h 32m",
                        date: "Mar 8, 2023",
                      },
                      {
                        id: "build-122",
                        name: "Minimal LFS 3.9",
                        template: "Minimal",
                        status: "completed",
                        duration: "1h 58m",
                        date: "Mar 5, 2023",
                      },
                      {
                        id: "build-121",
                        name: "Custom Server",
                        template: "Custom",
                        status: "failed",
                        duration: "2h 03m",
                        date: "Mar 3, 2023",
                      },
                      {
                        id: "build-120",
                        name: "Development LFS 2.0",
                        template: "Development",
                        status: "completed",
                        duration: "4h 12m",
                        date: "Mar 1, 2023",
                      },
                    ].map((build) => (
                      <TableRow key={build.id}>
                        <TableCell className="font-mono">{build.id}</TableCell>
                        <TableCell>{build.name}</TableCell>
                        <TableCell>{build.template}</TableCell>
                        <TableCell>
                          <Badge variant={build.status === "completed" ? "default" : "destructive"}>
                            {build.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{build.duration}</TableCell>
                        <TableCell>{build.date}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="icon" title="View Details">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon" title="Download Logs">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Builds</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">127</div>
                  <p className="text-xs text-muted-foreground">All time</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">94.2%</div>
                  <p className="text-xs text-muted-foreground">Last 30 days</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Average Duration</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3h 12m</div>
                  <p className="text-xs text-muted-foreground">Per build</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="completed" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Completed Builds</CardTitle>
                <CardDescription>View all your successful builds</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Build ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Template</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "build-127",
                        name: "Custom LFS 5.2",
                        template: "Custom",
                        duration: "3h 24m",
                        date: "Mar 15, 2023",
                      },
                      {
                        id: "build-125",
                        name: "Development LFS",
                        template: "Development",
                        duration: "4h 56m",
                        date: "Mar 12, 2023",
                      },
                      {
                        id: "build-124",
                        name: "Server LFS 3.1",
                        template: "Server",
                        duration: "2h 45m",
                        date: "Mar 10, 2023",
                      },
                      {
                        id: "build-123",
                        name: "Desktop LFS 4.1",
                        template: "Desktop",
                        duration: "5h 32m",
                        date: "Mar 8, 2023",
                      },
                      {
                        id: "build-122",
                        name: "Minimal LFS 3.9",
                        template: "Minimal",
                        duration: "1h 58m",
                        date: "Mar 5, 2023",
                      },
                      {
                        id: "build-120",
                        name: "Development LFS 2.0",
                        template: "Development",
                        duration: "4h 12m",
                        date: "Mar 1, 2023",
                      },
                    ].map((build) => (
                      <TableRow key={build.id}>
                        <TableCell className="font-mono">{build.id}</TableCell>
                        <TableCell>{build.name}</TableCell>
                        <TableCell>{build.template}</TableCell>
                        <TableCell>{build.duration}</TableCell>
                        <TableCell>{build.date}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="icon" title="View Details">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon" title="Download Logs">
                              <Download className="h-4 w-4" />
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
          <TabsContent value="failed" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Failed Builds</CardTitle>
                <CardDescription>View all your failed builds</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Build ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Template</TableHead>
                      <TableHead>Error</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "build-126",
                        name: "Minimal LFS 4.0",
                        template: "Minimal",
                        error: "Compilation error in gcc-12.2.0",
                        date: "Mar 14, 2023",
                      },
                      {
                        id: "build-121",
                        name: "Custom Server",
                        template: "Custom",
                        error: "Missing dependencies",
                        date: "Mar 3, 2023",
                      },
                    ].map((build) => (
                      <TableRow key={build.id}>
                        <TableCell className="font-mono">{build.id}</TableCell>
                        <TableCell>{build.name}</TableCell>
                        <TableCell>{build.template}</TableCell>
                        <TableCell className="text-destructive">{build.error}</TableCell>
                        <TableCell>{build.date}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="icon" title="View Details">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon" title="Download Logs">
                              <Download className="h-4 w-4" />
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
        </Tabs>
      </div>
    </div>
  )
}
