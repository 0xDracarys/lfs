import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { osName, kernelVersion, ramAllocation, diskSize, packages, dockerEnabled, dockerOptions } = body

    // Validate required fields
    if (!osName || !kernelVersion) {
      return NextResponse.json({ error: "OS name and kernel version are required" }, { status: 400 })
    }

    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

    // Get current user
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Authentication required" }, { status: 401 })
    }

    // Create a new build
    const { data, error } = await supabase
      .from("builds")
      .insert({
        user_id: user.id,
        name: body.name || `${osName} ${kernelVersion}`,
        description: body.description || "",
        os_name: osName,
        kernel_version: kernelVersion,
        ram_allocation: ramAllocation || 1024,
        disk_size: diskSize || 10,
        packages: packages || [],
        docker_enabled: dockerEnabled || false,
        docker_options: dockerOptions || {},
        status: "queued",
        progress: 0,
        logs: [],
      })
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: "Failed to create build" }, { status: 500 })
    }

    // In a real app, you would trigger a build process here
    // For now, we'll simulate it by updating the build status after a delay
    simulateBuildProcess(supabase, data.id)

    return NextResponse.json({ buildId: data.id, status: "queued" })
  } catch (error) {
    console.error("Error creating build:", error)
    return NextResponse.json({ error: "Failed to create build" }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const buildId = searchParams.get("id")

    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

    // Get current user
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Authentication required" }, { status: 401 })
    }

    if (buildId) {
      // Return specific build
      const { data, error } = await supabase
        .from("builds")
        .select("*")
        .eq("id", buildId)
        .eq("user_id", user.id)
        .single()

      if (error) {
        return NextResponse.json({ error: "Build not found" }, { status: 404 })
      }

      return NextResponse.json(data)
    } else {
      // Return all builds for the user
      const { data, error } = await supabase
        .from("builds")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })

      if (error) {
        return NextResponse.json({ error: "Failed to fetch builds" }, { status: 500 })
      }

      return NextResponse.json({
        builds: data,
      })
    }
  } catch (error) {
    console.error("Error fetching builds:", error)
    return NextResponse.json({ error: "Failed to fetch builds" }, { status: 500 })
  }
}

// Simulated build process
async function simulateBuildProcess(supabase: any, buildId: string) {
  // Simulate build steps
  const buildSteps = [
    "Preparing build environment...",
    "Downloading source packages...",
    "Verifying package integrity...",
    "Building temporary tools...",
    "Entering chroot environment...",
    "Building basic system software...",
    "Installing kernel...",
    "Configuring bootloader...",
    "Installing selected packages...",
    "Performing final system configuration...",
    "Generating ISO image...",
  ]

  // Update build to in_progress
  await supabase
    .from("builds")
    .update({
      status: "in_progress",
      started_at: new Date().toISOString(),
    })
    .eq("id", buildId)

  const logs: string[] = []

  // Process each step
  for (let i = 0; i < buildSteps.length; i++) {
    logs.push(buildSteps[i])

    // Update progress and logs
    await supabase
      .from("builds")
      .update({
        progress: Math.round(((i + 1) / buildSteps.length) * 100),
        logs: logs,
      })
      .eq("id", buildId)

    // Simulate step processing time
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Randomly fail some builds (10% chance)
    if (Math.random() < 0.1 && i > 3 && i < buildSteps.length - 1) {
      logs.push(`Error: Build failed during ${buildSteps[i]}`)

      await supabase
        .from("builds")
        .update({
          status: "failed",
          logs: logs,
          completed_at: new Date().toISOString(),
        })
        .eq("id", buildId)

      return
    }
  }

  // Build completed successfully
  await supabase
    .from("builds")
    .update({
      status: "completed",
      progress: 100,
      logs: [...logs, "Build complete!"],
      completed_at: new Date().toISOString(),
    })
    .eq("id", buildId)
}
