import { NextResponse } from "next/server"

// Simulated Docker containers data
const dockerContainers = [
  {
    id: "a1b2c3d4e5f6",
    name: "cyberlfs-minimal-1",
    image: "cyberlfs/minimal:latest",
    status: "Running",
    created: "1 day ago",
    ports: "0.0.0.0:8022->22/tcp, 0.0.0.0:8080->80/tcp",
    cpu: "0.5%",
    memory: "42MB / 512MB",
  },
  {
    id: "f6e5d4c3b2a1",
    name: "cyberlfs-dev-1",
    image: "cyberlfs/development:1.2.0",
    status: "Stopped",
    created: "5 days ago",
    ports: "0.0.0.0:9022->22/tcp, 0.0.0.0:9080->80/tcp",
    cpu: "0%",
    memory: "0MB / 1024MB",
  },
]

export async function GET() {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json(dockerContainers)
  } catch (error) {
    console.error("Error fetching Docker containers:", error)
    return NextResponse.json({ error: "Failed to fetch Docker containers" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { image, name } = body

    // Validate input
    if (!image) {
      return NextResponse.json({ error: "Image is required" }, { status: 400 })
    }

    // Generate container name if not provided
    const containerName = name || `${image.split("/")[1].split(":")[0]}-${Math.floor(Math.random() * 1000)}`

    // Simulate creating a new Docker container
    const newContainer = {
      id: Math.random().toString(36).substring(2, 10),
      name: containerName,
      image,
      status: "Running",
      created: "Just now",
      ports: "0.0.0.0:8022->22/tcp, 0.0.0.0:8080->80/tcp",
      cpu: "0.5%",
      memory: "42MB / 512MB",
    }

    // In a real app, this would interact with Docker API

    return NextResponse.json(newContainer, { status: 201 })
  } catch (error) {
    console.error("Error creating Docker container:", error)
    return NextResponse.json({ error: "Failed to create Docker container" }, { status: 500 })
  }
}
