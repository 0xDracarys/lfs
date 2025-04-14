import { DashboardHeader } from "@/components/dashboard/header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AlertCircle, HelpCircle, Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ScratchBuildPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader title="Build From Scratch" />
      <div className="flex-1 p-6">
        <Alert className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Advanced Mode</AlertTitle>
          <AlertDescription>
            You are building LFS from scratch with full control over all options. This mode is recommended for
            experienced users.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="system" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="system">System</TabsTrigger>
            <TabsTrigger value="toolchain">Toolchain</TabsTrigger>
            <TabsTrigger value="packages">Packages</TabsTrigger>
            <TabsTrigger value="configuration">Configuration</TabsTrigger>
            <TabsTrigger value="build">Build</TabsTrigger>
          </TabsList>

          <TabsContent value="system" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>System Configuration</CardTitle>
                <CardDescription>Define the core system parameters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="build-name">Build Name</Label>
                    <Input id="build-name" placeholder="My Custom LFS Build" />
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

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="partition">
                    <AccordionTrigger>Partition Layout</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="root-size">Root Partition Size (GB)</Label>
                            <Input id="root-size" type="number" defaultValue="20" min="5" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="swap-size">Swap Partition Size (GB)</Label>
                            <Input id="swap-size" type="number" defaultValue="2" min="0" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="filesystem">Root Filesystem</Label>
                          <Select defaultValue="ext4">
                            <SelectTrigger id="filesystem">
                              <SelectValue placeholder="Select filesystem" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ext4">ext4</SelectItem>
                              <SelectItem value="ext3">ext3</SelectItem>
                              <SelectItem value="ext2">ext2</SelectItem>
                              <SelectItem value="xfs">XFS</SelectItem>
                              <SelectItem value="btrfs">Btrfs</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="separate-home" />
                          <Label htmlFor="separate-home">Create separate /home partition</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="separate-boot" />
                          <Label htmlFor="separate-boot">Create separate /boot partition</Label>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="space-y-2">
                  <Label htmlFor="description">Build Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your custom LFS build and its purpose"
                    className="min-h-[100px]"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" className="gap-2">
                  <HelpCircle className="h-4 w-4" />
                  Help
                </Button>
                <Button>Next: Toolchain</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="toolchain" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Toolchain Configuration</CardTitle>
                <CardDescription>Configure the compiler and build tools</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="compiler">Compiler</Label>
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
                  <Label htmlFor="binutils">Binutils Version</Label>
                  <Select defaultValue="2.39">
                    <SelectTrigger id="binutils">
                      <SelectValue placeholder="Select binutils version" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2.39">Binutils 2.39</SelectItem>
                      <SelectItem value="2.38">Binutils 2.38</SelectItem>
                      <SelectItem value="2.37">Binutils 2.37</SelectItem>
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
                  <Label htmlFor="build-flags">Global Build Flags</Label>
                  <Input id="build-flags" placeholder="e.g. CFLAGS='-O2 -pipe'" />
                  <p className="text-xs text-muted-foreground">
                    These flags will be used for all package builds unless overridden
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="parallel-build" defaultChecked />
                  <Label htmlFor="parallel-build">Enable parallel build</Label>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="parallel-jobs">Number of Parallel Jobs</Label>
                  <Input id="parallel-jobs" type="number" defaultValue="4" min="1" />
                  <p className="text-xs text-muted-foreground">
                    Set to the number of CPU cores for optimal performance
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Previous: System</Button>
                <Button>Next: Packages</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="packages" className="pt-4">
            {/* Packages tab content would go here */}
            <Card>
              <CardHeader>
                <CardTitle>Package Selection</CardTitle>
                <CardDescription>Select the packages to include in your LFS build</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">{/* Package selection content similar to the original builder page */}</div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Previous: Toolchain</Button>
                <Button>Next: Configuration</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="configuration" className="pt-4">
            {/* Configuration tab content would go here */}
            <Card>
              <CardHeader>
                <CardTitle>System Configuration</CardTitle>
                <CardDescription>Configure your LFS system settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">{/* System configuration content */}</div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Previous: Packages</Button>
                <Button>Next: Build</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="build" className="pt-4">
            {/* Build tab content would go here */}
            <Card>
              <CardHeader>
                <CardTitle>Build Process</CardTitle>
                <CardDescription>Start and monitor your LFS build</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Ready to Build</AlertTitle>
                    <AlertDescription>
                      Your LFS build configuration is complete. Review all settings before starting the build process.
                    </AlertDescription>
                  </Alert>

                  <div className="rounded-md border p-4">
                    <h3 className="mb-2 font-medium">Build Summary</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">LFS Version:</span>
                        <span>11.3</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Architecture:</span>
                        <span>x86_64</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Compiler:</span>
                        <span>GCC 12.2.0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">C Library:</span>
                        <span>glibc 2.36</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Packages:</span>
                        <span>87 selected</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Estimated Build Time:</span>
                        <span>~8 hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Previous: Configuration</Button>
                <Button>Start Build</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
