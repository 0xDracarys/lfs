import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    const category = searchParams.get("category")

    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

    if (id) {
      // Return specific template
      const { data, error } = await supabase.from("templates").select("*").eq("id", id).single()

      if (error) {
        return NextResponse.json({ error: "Template not found" }, { status: 404 })
      }

      return NextResponse.json(data)
    } else if (category) {
      // Filter by category
      const { data, error } = await supabase.from("templates").select("*").eq("category", category)

      if (error) {
        return NextResponse.json({ error: "Failed to fetch templates" }, { status: 500 })
      }

      return NextResponse.json(data)
    } else {
      // Return all templates
      const { data, error } = await supabase.from("templates").select("*").order("popularity", { ascending: false })

      if (error) {
        return NextResponse.json({ error: "Failed to fetch templates" }, { status: 500 })
      }

      return NextResponse.json(data)
    }
  } catch (error) {
    console.error("Error fetching templates:", error)
    return NextResponse.json({ error: "Failed to fetch templates" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, description, category, packages, kernelVersion } = body

    // Validate input
    if (!name || !description || !category || !packages || !kernelVersion) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
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

    // Create new template
    const { data, error } = await supabase
      .from("templates")
      .insert({
        name,
        description,
        category,
        popularity: 0,
        downloads: 0,
        author: user.id,
        verified: false,
        packages,
        kernel_version: kernelVersion,
        docker: body.docker || false,
      })
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: "Failed to create template" }, { status: 500 })
    }

    return NextResponse.json(data, { status: 201 })
  } catch (error) {
    console.error("Error creating template:", error)
    return NextResponse.json({ error: "Failed to create template" }, { status: 500 })
  }
}
