import { NextResponse } from "next/server";
import { mockProjects } from "@/lib/mock-data";

// Fake projects API
export async function GET() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 200));
  
  return NextResponse.json({
    projects: mockProjects,
    total: mockProjects.length,
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  
  const newProject = {
    id: "proj-" + Date.now(),
    name: body.name || "New Project",
    description: body.description || "",
    status: "active" as const,
    tags: body.tags || [],
    createdAt: new Date().toISOString(),
  };
  
  return NextResponse.json({
    project: newProject,
    message: "Project created (mock)",
  });
}
