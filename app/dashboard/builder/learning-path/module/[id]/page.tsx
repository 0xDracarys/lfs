import { DashboardHeader } from "@/components/dashboard/header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, Check, Copy, ExternalLink, Info, Lightbulb, Play, Terminal } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

// Mock data for modules
const modules = [
  {
    id: "1",
    title: "Introduction to LFS",
    description: "Understanding the Linux From Scratch project",
    status: "completed",
    content: {
      overview:
        "Linux From Scratch (LFS) is a project that provides you with step-by-step instructions for building your own custom Linux system, entirely from source code. By building LFS, you'll learn how Linux works underneath the hood, how different components fit together, and gain deep knowledge of system internals.",
      objectives: [
        "Understand the purpose and benefits of LFS",
        "Learn about the LFS project history and philosophy",
        "Get familiar with the prerequisites for building LFS",
        "Understand the overall build process",
      ],
      sections: [
        {
          title: "What is Linux From Scratch?",
          content:
            "Linux From Scratch is a project that provides you with step-by-step instructions for building your own custom Linux system from source code. It's both an educational resource and a practical methodology for creating a tailored operating system that meets your exact requirements. By following LFS, you build a complete, bootable Linux system using only source code, without relying on pre-compiled binaries from existing distributions.",
        },
        {
          title: "Why Build LFS?",
          content:
            "There are numerous benefits to building your own Linux system:\n\n- **Learning**: Gain deep understanding of how a Linux system works internally\n- **Control**: Create a system with exactly what you need, no more and no less\n- **Security**: Understand every component installed on your system\n- **Customization**: Optimize for your specific hardware and use cases\n- **Independence**: Free yourself from distribution-specific design choices\n- **Minimal Resource Usage**: Build a lean system without unnecessary bloat",
        },
        {
          title: "Prerequisites",
          content:
            "Before starting an LFS build, you need:\n\n- A working Linux system (host system)\n- Basic Linux/Unix command line knowledge\n- Understanding of compilation concepts\n- Patience and attention to detail\n- At least 10 GB of free disk space\n- A reliable internet connection for downloading source packages",
        },
      ],
      code: `# Example commands to check host system readiness
gcc --version     # Check compiler version
python3 --version # Check Python version
makeinfo --version # Check texinfo version

# Create LFS environment variable
export LFS=/mnt/lfs

# Create partition (example)
fdisk /dev/sda

# Create file system
mkfs.ext4 /dev/sda1`,
      quiz: [
        {
          question: "What is the main purpose of Linux From Scratch?",
          options: [
            "To provide a pre-compiled Linux distribution",
            "To teach how Linux systems work by building one from source",
            "To hack into existing Linux systems",
            "To create a graphical user interface for Linux",
          ],
          answer: 1,
        },
        {
          question: "What is required before starting an LFS build?",
          options: ["A Windows computer", "A Mac with Boot Camp", "A working Linux system", "A supercomputer"],
          answer: 2,
        },
      ],
    },
  },
  {
    id: "2",
    title: "Preparing the Build Environment",
    description: "Setting up the host system and partition",
    status: "completed",
    content: {
      // Content for module 2
    },
  },
  {
    id: "3",
    title: "Packages and Patches",
    description: "Downloading and preparing the necessary packages",
    status: "completed",
    content: {
      // Content for module 3
    },
  },
  {
    id: "4",
    title: "Temporary Tools",
    description: "Building the temporary tools needed for the LFS system",
    status: "in-progress",
    content: {
      // Content for module 4
    },
  },
]

export default function ModulePage({ params }: { params: { id: string } }) {
  const moduleId = params.id
  const module = modules.find((m) => m.id === moduleId)

  if (!module) {
    return (
      <div className="flex min-h-screen flex-col">
        <DashboardHeader title="Module Not Found" />
        <div className="flex-1 p-6">
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <h2 className="text-xl font-semibold mb-2">Module not found</h2>
              <p className="text-muted-foreground mb-4">The requested module doesn't exist.</p>
              <Button asChild>
                <Link href="/dashboard/builder/learning-path">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Learning Path
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Find next and previous modules
  const currentIndex = modules.findIndex((m) => m.id === moduleId)
  const prevModule = currentIndex > 0 ? modules[currentIndex - 1] : null
  const nextModule = currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader title={`Module ${moduleId}: ${module.title}`} />
      <div className="flex-1 p-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center">
            <Button variant="outline" size="sm" asChild>
              <Link href="/dashboard/builder/learning-path">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Learning Path
              </Link>
            </Button>
            <Badge className="ml-4" variant={module.status === "completed" ? "default" : "outline"}>
              {module.status === "completed" ? "Completed" : "In Progress"}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            {prevModule && (
              <Button variant="outline" size="sm" asChild>
                <Link href={`/dashboard/builder/learning-path/module/${prevModule.id}`}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Link>
              </Button>
            )}
            {nextModule && (
              <Button variant="outline" size="sm" asChild>
                <Link href={`/dashboard/builder/learning-path/module/${nextModule.id}`}>
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>

        <Tabs defaultValue="learn" className="w-full">
          <TabsList>
            <TabsTrigger value="learn">Learn</TabsTrigger>
            <TabsTrigger value="practice">Practice</TabsTrigger>
            <TabsTrigger value="quiz">Quiz</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="learn" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>
                  Module {moduleId}: {module.title}
                </CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {module.content?.overview && (
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Overview</h2>
                    <p className="text-muted-foreground">{module.content.overview}</p>
                  </div>
                )}

                {module.content?.objectives && (
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Learning Objectives</h2>
                    <ul className="space-y-1 pl-6 list-disc">
                      {module.content.objectives.map((objective, i) => (
                        <li key={i}>{objective}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {module.content?.sections && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Content</h2>
                    <Accordion type="single" collapsible className="w-full">
                      {module.content.sections.map((section, i) => (
                        <AccordionItem key={i} value={`section-${i}`}>
                          <AccordionTrigger className="text-lg font-medium hover:no-underline">
                            {section.title}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="prose prose-sm max-w-none dark:prose-invert mt-2">
                              {section.content.split("\n\n").map((paragraph, j) => (
                                <p key={j}>{paragraph}</p>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                )}

                {module.content?.code && (
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Code Examples</h2>
                    <div className="relative">
                      <pre className="bg-black text-green-400 font-mono rounded-md p-4 overflow-x-auto">
                        <code>{module.content.code}</code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 h-6 w-6 text-muted-foreground hover:text-foreground"
                      >
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Copy code</span>
                      </Button>
                    </div>
                  </div>
                )}

                <div className="bg-secondary/50 rounded-lg p-4 flex items-start gap-4">
                  <div className="mt-1">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Pro Tip</h3>
                    <p className="text-sm text-muted-foreground">
                      Always make sure to carefully follow the exact version requirements for the host system.
                      Incompatible versions can lead to hard-to-diagnose build failures.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">
                  <Terminal className="mr-2 h-4 w-4" />
                  Open Terminal
                </Button>
                <Button>
                  Mark as Completed
                  <Check className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="practice" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Interactive Practice</CardTitle>
                <CardDescription>Apply what you've learned with hands-on exercises</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-black text-green-400 font-mono rounded-md p-4 h-[300px] overflow-auto">
                  <p className="opacity-70">$ export LFS=/mnt/lfs</p>
                  <p className="opacity-70">$ echo $LFS</p>
                  <p className="opacity-70">/mnt/lfs</p>
                  <p className="opacity-70">$ mkdir -pv $LFS</p>
                  <p className="opacity-70">mkdir: created directory '/mnt/lfs'</p>
                  <p className="opacity-70">$ _</p>
                  <p className="mt-4 opacity-100">
                    Try these commands yourself: <span className="text-primary animate-pulse">■</span>
                  </p>
                  <p className="opacity-70">1. Create the LFS environment variable</p>
                  <p className="opacity-70">2. Create the LFS directory</p>
                  <p className="opacity-70">3. Check disk space with: df -h</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Play className="mr-2 h-4 w-4" />
                  Start Interactive Terminal
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="quiz" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Knowledge Check</CardTitle>
                <CardDescription>Test your understanding of the module content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {module.content?.quiz ? (
                  module.content.quiz.map((question, i) => (
                    <div key={i} className="space-y-3 border rounded-lg p-4">
                      <h3 className="font-medium">
                        Question {i + 1}: {question.question}
                      </h3>
                      <div className="space-y-2">
                        {question.options.map((option, j) => (
                          <div key={j} className="flex items-center gap-2">
                            <input
                              type="radio"
                              id={`q${i}-option${j}`}
                              name={`question${i}`}
                              className="size-4 border border-primary/50 text-primary focus:ring-primary/50"
                            />
                            <label htmlFor={`q${i}-option${j}`} className="text-sm">
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-6 text-muted-foreground">No quiz available for this module yet.</div>
                )}
              </CardContent>
              <CardFooter>
                <Button className="w-full">Check Answers</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Additional Resources</CardTitle>
                <CardDescription>Explore more learning materials and references</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <ExternalLink className="h-4 w-4 text-primary" />
                    Official Documentation
                  </h3>
                  <ul className="space-y-2 pl-6 list-disc">
                    <li>
                      <a href="#" className="text-primary hover:underline">
                        LFS Project Homepage
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-primary hover:underline">
                        LFS Book - Version 11.3
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-primary hover:underline">
                        Beyond Linux From Scratch (BLFS)
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-primary" />
                    Command Reference
                  </h3>
                  <div className="relative">
                    <pre className="bg-black text-green-400 font-mono rounded-md p-4 overflow-x-auto">
                      <code>{`# Check system information
uname -a  # Shows kernel version and system info
lsb_release -a  # Shows distribution info
cat /etc/os-release  # Another way to check distro

# Disk management
fdisk -l  # List all disks and partitions
df -h  # Show disk space usage
du -sh directory_name  # Show directory size`}</code>
                    </pre>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-6 w-6 text-muted-foreground hover:text-foreground"
                    >
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy code</span>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <Info className="h-4 w-4 text-primary" />
                    Community Resources
                  </h3>
                  <ul className="space-y-2 pl-6 list-disc">
                    <li>
                      <a href="#" className="text-primary hover:underline">
                        LFS Mailing Lists
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-primary hover:underline">
                        LFS Subreddit
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-primary hover:underline">
                        LFS Discord Server
                      </a>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
