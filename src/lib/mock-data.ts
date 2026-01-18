// Mock data for demo purposes
// This is fake data - no real database

export interface Project {
  id: string;
  name: string;
  description: string;
  status: "active" | "archived";
  tags: string[];
  createdAt: string;
}

export interface Node {
  id: string;
  label: string;
  type: "frontend" | "backend" | "database" | "service";
  tech: string;
}

export const mockProjects: Project[] = [
  {
    id: "proj-1",
    name: "E-Commerce Platform",
    description: "Full-stack e-commerce with payments",
    status: "active",
    tags: ["Next.js", "Stripe", "Postgres"],
    createdAt: "2024-01-15",
  },
  {
    id: "proj-2",
    name: "SaaS Dashboard",
    description: "Analytics dashboard with auth",
    status: "active",
    tags: ["React", "FastAPI", "Redis"],
    createdAt: "2024-01-10",
  },
  {
    id: "proj-3",
    name: "Mobile API",
    description: "REST API for mobile apps",
    status: "archived",
    tags: ["Express", "MongoDB"],
    createdAt: "2024-01-05",
  },
];

export const mockNodes: Node[] = [
  {
    id: "node-1",
    label: "FastAPI",
    type: "backend",
    tech: "Fastapi",
  },
  {
    id: "node-2",
    label: "React",
    type: "frontend",
    tech: "React",
  },
  {
    id: "node-3",
    label: "PostgreSQL",
    type: "database",
    tech: "Postgres",
  }
];

// Mock user for auth
export const mockUser = {
  id: "user-1",
  email: "demo@example.com",
  name: "Demo User",
};
