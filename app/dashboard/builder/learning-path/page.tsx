import { DashboardHeader } from "@/components/dashboard/header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  Clock,
  FileText,
  Lightbulb,
  Terminal,
  Laptop,
  Code,
  Server,
  HardDrive,
  Cpu,
  Settings,
} from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play } from "lucide-react"

export default function LearningPathPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader title="Learning Path" />
      <div className="flex-1 p-6">
        <div className="mb-6 flex flex-col gap-2">
          <h1 className="text-2xl font-bold neon-text">Linux From Scratch Learning Path</h1>
          <p className="text-muted-foreground">
            Follow this structured learning path to understand how Linux works from the ground up
          </p>
          <div className="mt-2">
            <Progress value={25} className="h-2 w-full" />
            <div className="mt-1 flex justify-between text-xs text-muted-foreground">
              <span>Progress: 25%</span>
              <span>3/12 modules completed</span>
            </div>
          </div>
        </div>

        <Tabs defaultValue="modules" className="w-full mb-6">
          <TabsList>
            <TabsTrigger value="modules">Learning Modules</TabsTrigger>
            <TabsTrigger value="roadmap">LFS Roadmap</TabsTrigger>
            <TabsTrigger value="community">Community Help</TabsTrigger>
          </TabsList>

          <TabsContent value="roadmap" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Your LFS Journey</CardTitle>
                <CardDescription>Visual representation of the Linux From Scratch build process</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border-2 border-muted p-4 bg-card/30">
                  <div className="space-y-8">
                    {/* Interactive Roadmap */}
                    <div className="relative">
                      <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/80 to-primary/20"></div>

                      {[
                        {
                          title: "Host System Preparation",
                          icon: Laptop,
                          description: "Set up the development environment on your host system",
                          status: "completed",
                        },
                        {
                          title: "Partition and File Systems",
                          icon: HardDrive,
                          description: "Create partitions and file systems for your LFS build",
                          status: "completed",
                        },
                        {
                          title: "Package Collection",
                          icon: FileText,
                          description: "Download and verify all necessary packages and patches",
                          status: "completed",
                        },
                        {
                          title: "Temporary Tools Construction",
                          icon: Terminal,
                          description: "Build the temporary set of tools in a separate environment",
                          status: "current",
                        },
                        {
                          title: "Chroot Environment",
                          icon: Code,
                          description: "Enter the chroot environment to isolate the build process",
                          status: "pending",
                        },
                        {
                          title: "Basic System Software",
                          icon: Server,
                          description: "Build the core system packages and utilities",
                          status: "pending",
                        },
                        {
                          title: "System Configuration",
                          icon: Settings,
                          description: "Configure bootscripts, networking, and system settings",
                          status: "pending",
                        },
                        {
                          title: "Bootloader Setup",
                          icon: Cpu,
                          description: "Install and configure the bootloader",
                          status: "pending",
                        },
                      ].map((step, index) => (
                        <div key={index} className="relative flex items-start mb-8">
                          <div
                            className={`
                          flex-shrink-0 size-16 rounded-full flex items-center justify-center z-10 border-2 
                          ${
                            step.status === "completed"
                              ? "bg-primary border-primary text-primary-foreground neon-border"
                              : step.status === "current"
                                ? "bg-background border-primary text-primary neon-pulse"
                                : "bg-background border-muted text-muted-foreground"
                          }
                        `}
                          >
                            <step.icon className="h-6 w-6" />
                          </div>
                          <div className="ml-4 flex-1">
                            <div className="flex items-center">
                              <h3
                                className={`text-lg font-semibold ${step.status === "pending" ? "text-muted-foreground" : ""}`}
                              >
                                {step.title}
                              </h3>
                              {step.status === "completed" && (
                                <Badge variant="default" className="ml-2">
                                  Completed
                                </Badge>
                              )}
                              {step.status === "current" && (
                                <Badge variant="secondary" className="ml-2 bg-primary/20 text-primary">
                                  In Progress
                                </Badge>
                              )}
                            </div>
                            <p className={`mt-1 text-sm ${step.status === "pending" ? "text-muted-foreground" : ""}`}>
                              {step.description}
                            </p>
                            {step.status === "completed" && (
                              <Button variant="link" className="p-0 h-auto mt-1 text-primary">
                                Review
                              </Button>
                            )}
                            {step.status === "current" && (
                              <Button variant="link" className="p-0 h-auto mt-1 text-primary">
                                Continue
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Community Support</CardTitle>
                <CardDescription>Get help from the LFS community</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold mb-2">LFS Mailing Lists</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Subscribe to the LFS mailing lists to get help from experienced users.
                    </p>
                    <Button variant="outline" className="w-full">
                      Join Mailing Lists
                    </Button>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold mb-2">Discord Community</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Join our Discord server for real-time help and discussions.
                    </p>
                    <Button variant="outline" className="w-full">
                      Join Discord
                    </Button>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold mb-2">FAQ & Wiki</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Browse our comprehensive FAQ and community-maintained wiki.
                    </p>
                    <Button variant="outline" className="w-full">
                      Browse Resources
                    </Button>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get priority support from LFS experts (Monthly Pro subscribers).
                    </p>
                    <Button variant="outline" className="w-full">
                      Contact Support
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="modules" className="space-y-6 pt-4">
            {/* Module 1 */}
            <Card className="border-2 border-primary neon-border overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Module 1: Introduction to LFS
                  </CardTitle>
                  <Badge variant="default">Completed</Badge>
                </div>
                <CardDescription>Understanding the Linux From Scratch project</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 rounded-md overflow-hidden border">
                  <div className="aspect-video relative bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Play className="mx-auto h-12 w-12 text-primary/80" />
                        <p className="mt-2 text-sm">Introduction to LFS Video</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>What is Linux From Scratch?</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Benefits of building your own Linux system</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Overview of the build process</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/builder/learning-path/module/1">
                    Review Module
                    <FileText className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Module 2 */}
            <Card className="border-2 border-primary neon-border overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-primary" />
                    Module 2: Preparing the Build Environment
                  </CardTitle>
                  <Badge variant="default">Completed</Badge>
                </div>
                <CardDescription>Setting up the host system and partition</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div className="rounded-md overflow-hidden border">
                    <div className="aspect-video relative bg-muted">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <Terminal className="mx-auto h-12 w-12 text-primary/80" />
                          <p className="mt-2 text-sm">Host System Requirements</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-md overflow-hidden border">
                    <div className="aspect-video relative bg-muted">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <HardDrive className="mx-auto h-12 w-12 text-primary/80" />
                          <p className="mt-2 text-sm">Partition Management</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Host system requirements</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Creating a new partition</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Setting up the file system</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/builder/learning-path/module/2">
                    Review Module
                    <FileText className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Module 3 */}
            <Card className="border-2 border-primary neon-border overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-primary" />
                    Module 3: Packages and Patches
                  </CardTitle>
                  <Badge variant="default">Completed</Badge>
                </div>
                <CardDescription>Downloading and preparing the necessary packages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 rounded-md overflow-hidden border">
                  <div className="bg-black text-green-400 font-mono text-sm p-4 h-[120px] overflow-auto">
                    <p className="opacity-70">$ mkdir -p ~/lfs/sources</p>
                    <p className="opacity-70">$ chmod -v a+wt ~/lfs/sources</p>
                    <p className="mt-2 opacity-70">
                      $ wget http://www.linuxfromscratch.org/lfs/downloads/stable/wget-list
                    </p>
                    <p className="opacity-70">
                      $ wget --input-file=wget-list --continue --directory-prefix=~/lfs/sources
                    </p>
                    <p className="mt-2 opacity-100">
                      Downloading packages... <span className="text-primary animate-pulse">■</span>
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Understanding package dependencies</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Downloading source packages</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Verifying package integrity</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/builder/learning-path/module/3">
                    Review Module
                    <FileText className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Module 4 */}
            <Card className="border-2 border-muted neon-pulse overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-primary" />
                    Module 4: Temporary Tools
                  </CardTitle>
                  <Badge variant="outline">In Progress</Badge>
                </div>
                <CardDescription>Building the temporary tools needed for the LFS system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2 rounded-md overflow-hidden border">
                    <div className="bg-black text-green-400 font-mono text-sm p-4 h-[160px] overflow-auto">
                      <p className="opacity-70">$ cd ~/lfs/sources</p>
                      <p className="opacity-70">$ tar -xf binutils-2.37.tar.xz</p>
                      <p className="opacity-70">$ cd binutils-2.37</p>
                      <p className="opacity-70">$ mkdir -v build && cd build</p>
                      <p className="opacity-70">$ ../configure --prefix=/tools \</p>
                      <p className="opacity-70"> --with-sysroot=$LFS \</p>
                      <p className="opacity-70"> --target=$LFS_TGT \</p>
                      <p className="opacity-70"> --disable-nls \</p>
                      <p className="opacity-70"> --disable-werror</p>
                      <p className="mt-2 opacity-100">
                        Building binutils... <span className="text-primary animate-pulse">■</span>
                      </p>
                    </div>
                  </div>
                  <div className="rounded-md overflow-hidden border">
                    <div className="aspect-video relative bg-muted">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <Code className="mx-auto h-12 w-12 text-primary/80" />
                          <p className="mt-2 text-sm">Cross-compiler toolchain</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-amber-500" />
                    <span>Building the cross-compiler toolchain</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-amber-500" />
                    <span>Compiling temporary tools</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-amber-500" />
                    <span>Entering the chroot environment</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full neon-button" asChild>
                  <Link href="/dashboard/builder/learning-path/module/4">
                    Continue Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Module 5 */}
            <Card className="border-2 border-muted/40">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-muted-foreground">
                    <Terminal className="h-5 w-5" />
                    Module 5: Building the LFS System
                  </CardTitle>
                  <Badge variant="outline">Locked</Badge>
                </div>
                <CardDescription>Installing and configuring the base system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ChevronRight className="h-4 w-4" />
                    <span>Installing basic system software</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ChevronRight className="h-4 w-4" />
                    <span>System configuration</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ChevronRight className="h-4 w-4" />
                    <span>Making the LFS system bootable</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" disabled>
                  Complete Previous Module First
                  <Lightbulb className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* More modules would continue here */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
