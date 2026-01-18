"use client";

import Link from "next/link";
import { mockProjects } from "@/lib/mock-data";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950 pointer-events-none"></div>
      
      {/* Navigation */}
      <nav className="relative z-10 border-b border-white/10 backdrop-blur bg-slate-950/50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Projects-dashboard
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="text-gray-400 hover:text-white transition-colors">
              Dashboard
            </Link>
            <Link href="/projects" className="text-purple-400 font-medium">
              Projects
            </Link>
          </div>
        </div>
      </nav>
      
      <main className="relative z-10 container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Projects</h1>
            <p className="text-gray-400">Manage your architecture projects</p>
          </div>
          <button className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl font-medium hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-purple-500/20">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            New Project
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProjects.map((project, i) => (
            <Link 
              key={project.id}
              href={`/projects/${project.id}`}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-white/10 flex items-center justify-center text-xl">
                  {["🏗️", "📱", "🌐", "💳", "🔐"][i % 5]}
                </div>
                <span className={`px-2.5 py-1 text-xs rounded-full ${
                  project.status === "active" 
                    ? "bg-green-500/10 text-green-400 border border-green-500/30" 
                    : "bg-gray-500/10 text-gray-400 border border-gray-500/30"
                }`}>
                  {project.status}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-purple-500/10 text-purple-300 text-xs rounded-full border border-purple-500/20">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-sm text-gray-500">
                <span>Created {project.createdAt}</span>
                <span className="text-purple-400 group-hover:text-purple-300">Open →</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
