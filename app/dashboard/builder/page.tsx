import { DashboardHeader } from "@/components/dashboard/header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, BookOpen, Lightbulb, Rocket, Terminal } from "lucide-react"
import Link from "next/link"

export default function BuilderPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader title="LFS Builder" />
      <div className="flex-1 p-6">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Welcome to LFS Builder</CardTitle>
            <CardDescription>Choose how you want to build your Linux From Scratch system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="flex flex-col border-2 border-primary/20 transition-all hover:border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Learning Path
                  </CardTitle>
                  <CardDescription>Step-by-step guided learning experience</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    Follow a structured learning path to understand each component of Linux From Scratch. Perfect for
                    beginners who want to learn how Linux works from the ground up.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-primary" />
                      <span>Detailed explanations for each step</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-primary" />
                      <span>Learn about package dependencies</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-primary" />
                      <span>Understand the build process</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/dashboard/builder/learning-path">
                      Start Learning
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col border-2 border-primary/20 transition-all hover:border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-primary" />
                    Start From Scratch
                  </CardTitle>
                  <CardDescription>Build your LFS system from the ground up</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    Configure every aspect of your Linux From Scratch build manually. Ideal for experienced users who
                    want complete control over the build process.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-primary" />
                      <span>Full control over package selection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-primary" />
                      <span>Customize build flags and options</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-primary" />
                      <span>Advanced configuration options</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/dashboard/builder/scratch">
                      Start Building
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col border-2 border-primary/20 transition-all hover:border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Rocket className="h-5 w-5 text-primary" />
                    Quick Build
                  </CardTitle>
                  <CardDescription>Use templates to build quickly</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    Get started quickly with pre-configured templates. Perfect for users who want a working LFS system
                    without diving into all the details.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-primary" />
                      <span>Pre-configured build options</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-primary" />
                      <span>Community-tested templates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-primary" />
                      <span>Faster build process</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/dashboard/builder/quick">
                      Quick Build
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basic">Basic Configuration</TabsTrigger>
            <TabsTrigger value="advanced">Advanced Options</TabsTrigger>
            <TabsTrigger value="packages">Package Selection</TabsTrigger>
          </TabsList>
          <TabsContent value="basic" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Basic Configuration</CardTitle>
                <CardDescription>Configure the essential settings for your LFS build</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="build-name">Build Name</Label>
                    <Input id="build-name" placeholder="My LFS Build" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="version">LFS Version</Label>
                    <Select defaultValue="11.3">
                      <SelectTrigger id="version">
                        <SelectValue placeholder="Select version" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="11.3">LFS 11.3</SelectItem>
                        <SelectItem value="11.2">LFS 11.2</SelectItem>
                        <SelectItem value="11.1">LFS 11.1</SelectItem>
                        <SelectItem value="11.0">LFS 11.0</SelectItem>
                        <SelectItem value="10.1">LFS 10.1</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="target">Target Architecture</Label>
                  <Select defaultValue="x86_64">
                    <SelectTrigger id="target">
                      <SelectValue placeholder="Select architecture" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="x86_64">x86_64</SelectItem>
                      <SelectItem value="i686">i686</SelectItem>
                      <SelectItem value="arm64">ARM64</SelectItem>
                      <SelectItem value="armhf">ARM (hard float)</SelectItem>
                      <SelectItem value="riscv64">RISC-V 64</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="template">Base Template</Label>
                  <Select defaultValue="minimal">
                    <SelectTrigger id="template">
                      <SelectValue placeholder="Select template" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="minimal">Minimal</SelectItem>
                      <SelectItem value="desktop">Desktop</SelectItem>
                      <SelectItem value="server">Server</SelectItem>
                      <SelectItem value="development">Development</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Build Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your LFS build and its purpose"
                    className="min-h-[100px]"
                  />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Build Environment</CardTitle>
                <CardDescription>Configure the environment for building LFS</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cpu-cores">CPU Cores</Label>
                    <Select defaultValue="4">
                      <SelectTrigger id="cpu-cores">
                        <SelectValue placeholder="Select cores" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Core</SelectItem>
                        <SelectItem value="2">2 Cores</SelectItem>
                        <SelectItem value="4">4 Cores</SelectItem>
                        <SelectItem value="8">8 Cores</SelectItem>
                        <SelectItem value="16">16 Cores</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="memory">Memory</Label>
                    <Select defaultValue="4">
                      <SelectTrigger id="memory">
                        <SelectValue placeholder="Select memory" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2">2 GB</SelectItem>
                        <SelectItem value="4">4 GB</SelectItem>
                        <SelectItem value="8">8 GB</SelectItem>
                        <SelectItem value="16">16 GB</SelectItem>
                        <SelectItem value="32">32 GB</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="disk-space">Disk Space</Label>
                  <Select defaultValue="20">
                    <SelectTrigger id="disk-space">
                      <SelectValue placeholder="Select disk space" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10 GB</SelectItem>
                      <SelectItem value="20">20 GB</SelectItem>
                      <SelectItem value="50">50 GB</SelectItem>
                      <SelectItem value="100">100 GB</SelectItem>
                      <SelectItem value="200">200 GB</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="parallel-build" defaultChecked />
                  <Label htmlFor="parallel-build">Enable parallel build</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="cache-packages" defaultChecked />
                  <Label htmlFor="cache-packages">Cache downloaded packages</Label>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Save as Template</Button>
                <Button>Start Build</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="advanced" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Configuration</CardTitle>
                <CardDescription>Fine-tune your LFS build with advanced options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="kernel-version">Kernel Version</Label>
                  <Select defaultValue="6.1.1">
                    <SelectTrigger id="kernel-version">
                      <SelectValue placeholder="Select kernel version" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6.1.1">Linux 6.1.1</SelectItem>
                      <SelectItem value="6.0.12">Linux 6.0.12</SelectItem>
                      <SelectItem value="5.15.85">Linux 5.15.85 (LTS)</SelectItem>
                      <SelectItem value="5.10.162">Linux 5.10.162 (LTS)</SelectItem>
                      <SelectItem value="5.4.228">Linux 5.4.228 (LTS)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="compiler">Compiler Toolchain</Label>
                  <Select defaultValue="gcc-12.2.0">
                    <SelectTrigger id="compiler">
                      <SelectValue placeholder="Select compiler" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gcc-12.2.0">GCC 12.2.0</SelectItem>
                      <SelectItem value="gcc-11.3.0">GCC 11.3.0</SelectItem>
                      <SelectItem value="gcc-10.4.0">GCC 10.4.0</SelectItem>
                      <SelectItem value="clang-15.0.6">Clang 15.0.6</SelectItem>
                      <SelectItem value="clang-14.0.6">Clang 14.0.6</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="libc">C Library</Label>
                  <Select defaultValue="glibc-2.36">
                    <SelectTrigger id="libc">
                      <SelectValue placeholder="Select C library" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="glibc-2.36">glibc 2.36</SelectItem>
                      <SelectItem value="glibc-2.35">glibc 2.35</SelectItem>
                      <SelectItem value="musl-1.2.3">musl 1.2.3</SelectItem>
                      <SelectItem value="musl-1.2.2">musl 1.2.2</SelectItem>
                      <SelectItem value="uclibc-ng-1.0.41">uClibc-ng 1.0.41</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="init-system">Init System</Label>
                  <Select defaultValue="sysvinit">
                    <SelectTrigger id="init-system">
                      <SelectValue placeholder="Select init system" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sysvinit">SysVinit</SelectItem>
                      <SelectItem value="systemd">systemd</SelectItem>
                      <SelectItem value="openrc">OpenRC</SelectItem>
                      <SelectItem value="runit">runit</SelectItem>
                      <SelectItem value="s6">s6</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="custom-patches">Custom Patches</Label>
                  <Textarea
                    id="custom-patches"
                    placeholder="Enter URLs to custom patches, one per line"
                    className="min-h-[100px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="build-flags">Build Flags</Label>
                  <Input id="build-flags" placeholder="e.g. CFLAGS='-O2 -pipe'" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="packages" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Package Selection</CardTitle>
                <CardDescription>Select the packages to include in your LFS build</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-sm font-medium">Base System</h3>
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                      {[
                        "Bash",
                        "Binutils",
                        "Bison",
                        "Coreutils",
                        "Diffutils",
                        "Findutils",
                        "Gawk",
                        "GCC",
                        "Glibc",
                        "Grep",
                        "Gzip",
                        "Make",
                        "Patch",
                        "Perl",
                        "Python",
                        "Sed",
                        "Tar",
                        "Texinfo",
                        "Util-linux",
                        "Vim",
                        "Xz",
                      ].map((pkg) => (
                        <div key={pkg} className="flex items-center space-x-2">
                          <Checkbox id={`pkg-${pkg.toLowerCase()}`} defaultChecked />
                          <Label htmlFor={`pkg-${pkg.toLowerCase()}`}>{pkg}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-medium">Networking</h3>
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                      {[
                        "DHCP",
                        "Iproute2",
                        "IPutils",
                        "NetworkManager",
                        "OpenSSH",
                        "Wget",
                        "Wireless Tools",
                        "WPA Supplicant",
                      ].map((pkg) => (
                        <div key={pkg} className="flex items-center space-x-2">
                          <Checkbox id={`pkg-${pkg.toLowerCase().replace(/\s+/g, "-")}`} />
                          <Label htmlFor={`pkg-${pkg.toLowerCase().replace(/\s+/g, "-")}`}>{pkg}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-medium">Desktop Environment</h3>
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                      {[
                        "Xorg",
                        "Wayland",
                        "GNOME",
                        "KDE Plasma",
                        "XFCE",
                        "LXDE",
                        "LXQt",
                        "i3",
                        "Sway",
                        "Openbox",
                        "Fluxbox",
                      ].map((pkg) => (
                        <div key={pkg} className="flex items-center space-x-2">
                          <Checkbox id={`pkg-${pkg.toLowerCase().replace(/\s+/g, "-")}`} />
                          <Label htmlFor={`pkg-${pkg.toLowerCase().replace(/\s+/g, "-")}`}>{pkg}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-medium">Development</h3>
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                      {[
                        "Autoconf",
                        "Automake",
                        "CMake",
                        "Git",
                        "Meson",
                        "Ninja",
                        "Rust",
                        "Go",
                        "Node.js",
                        "LLVM/Clang",
                      ].map((pkg) => (
                        <div key={pkg} className="flex items-center space-x-2">
                          <Checkbox id={`pkg-${pkg.toLowerCase().replace(/\s+/g, "-")}`} />
                          <Label htmlFor={`pkg-${pkg.toLowerCase().replace(/\s+/g, "-")}`}>{pkg}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Reset to Default</Button>
                <Button>Save Selection</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
