import { NextResponse } from "next/server"

// Simulated user settings data
const userSettings = {
  name: "Neo Anderson",
  email: "neo@matrix.com",
  bio: "Cybersecurity specialist and Linux enthusiast. Building custom distributions since 2018.",
  avatar: "/placeholder.svg?height=100&width=100",
  timezone: "America/Los_Angeles",
  theme: "cyberpunk",
  twoFactorEnabled: true,
  notifications: {
    buildComplete: true,
    buildFailed: true,
    securityAlerts: true,
    newsletter: false,
    emailNotifications: true,
    browserNotifications: true,
  },
  security: {
    passwordLastChanged: "2023-03-10",
    loginAttempts: [
      { date: "2023-04-15T10:30:00Z", ip: "192.168.1.1", location: "San Francisco, CA", status: "Success" },
      { date: "2023-04-14T08:15:00Z", ip: "192.168.1.1", location: "San Francisco, CA", status: "Success" },
      { date: "2023-04-12T22:45:00Z", ip: "209.85.220.41", location: "New York, NY", status: "Failed" },
    ],
    sessionTimeout: 60,
    ipWhitelist: ["192.168.1.0/24"],
  },
}

export async function GET() {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json(userSettings)
  } catch (error) {
    console.error("Error fetching user settings:", error)
    return NextResponse.json({ error: "Failed to fetch user settings" }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json()

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    // In a real app, this would update the user settings in a database

    // Return updated settings
    return NextResponse.json({
      ...userSettings,
      ...body,
    })
  } catch (error) {
    console.error("Error updating user settings:", error)
    return NextResponse.json({ error: "Failed to update user settings" }, { status: 500 })
  }
}
