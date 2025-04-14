import { NextResponse } from "next/server"

// Simulated Docker images data
const dockerImages = [
  {
    id: "sha256:a1b2c3d4e5f6",
    name: "cyberlfs/minimal",
    tag: "latest",
    size: "124MB",
    created: "2 days ago",
    ports: ["22/tcp", "80/tcp"],
    status: "Ready",
  },
  {
    id: "sha256:f6e5d4c3b2a1",
    name: "cyberlfs/development",
    tag: "1.2.0",
    size: "356MB",
    created: "1 week ago",
    ports: ["22/tcp", "80/tcp", "443/tcp"],
    status: "Ready",
  },
  {
    id: "sha256:1a2b3c4d5e6f",
    name: "cyberlfs/security",
    tag: "latest",
    size: "210MB",
    created: "3 days ago",
    ports: ["22/tcp", "8080/tcp"],
    status: "Ready",
  },
]

export async function GET() {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json(dockerImages)
  } catch (error) {
    console.error("Error fetching Docker images:", error)
    return NextResponse.json({ error: "Failed to fetch Docker images" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, tag } = body

    // Validate input
    if (!name || !tag) {
      return NextResponse.json({ error: "Name and tag are required" }, { status: 400 })
    }

    // Simulate creating a new Docker image
    const newImage = {
      id: `sha256:${Math.random().toString(36).substring(2, 15)}`,
      name,
      tag,
      size: `${Math.floor(Math.random() * 500)}MB`,
      created: "Just now",
      ports: ["22/tcp", "80/tcp"],
      status: "Ready",
    }

    // In a real app, this would interact with Docker API

    return NextResponse.json(newImage, { status: 201 })
  } catch (error) {
    console.error("Error creating Docker image:", error)
    return NextResponse.json({ error: "Failed to create Docker image" }, { status: 500 })
  }
}
