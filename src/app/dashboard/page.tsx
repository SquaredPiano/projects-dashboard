"use client";

import Link from "next/link";
import { mockProjects } from "@/lib/mock-data";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950 pointer-events-none"></div>
      
      {/* Navigation */}
      <nav className="relative z-10 border-b border-white/10 backdrop-blur bg-slate-950/50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Projects-dashboard
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
              Projects
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-sm font-medium">
                D
              </div>
              <span className="text-gray-300 text-sm">demo@example.com</span>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="relative z-10 container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back 👋</h1>
          <p className="text-gray-400">Here's what's happening with your projects.</p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-400 text-sm">Total Projects</span>
              <span className="text-2xl">📊</span>
            </div>
            <p className="text-3xl font-bold">{mockProjects.length}</p>
            <p className="text-green-400 text-sm mt-1">↑ 12% this month</p>
          </div>
          
          <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-green-500/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-400 text-sm">Active</span>
              <span className="text-2xl">🚀</span>
            </div>
            <p className="text-3xl font-bold text-green-400">
              {mockProjects.filter(p => p.status === "active").length}
            </p>
            <p className="text-gray-400 text-sm mt-1">Running smoothly</p>
          </div>
          
          <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-400 text-sm">Generated Files</span>
              <span className="text-2xl">📁</span>
            </div>
            <p className="text-3xl font-bold text-indigo-400">142</p>
            <p className="text-gray-400 text-sm mt-1">Across all projects</p>
          </div>
          
          <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-400 text-sm">Time Saved</span>
              <span className="text-2xl">⚡</span>
            </div>
            <p className="text-3xl font-bold text-amber-400">48h</p>
            <p className="text-gray-400 text-sm mt-1">vs manual coding</p>
          </div>
        </div>
        
        {/* Recent Projects */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Recent Projects</h2>
          <Link href="/projects" className="text-purple-400 hover:text-purple-300 text-sm">
            View all →
          </Link>
        </div>
        
        <div className="space-y-3">
          {mockProjects.slice(0, 5).map((project, i) => (
            <Link 
              key={project.id}
              href={`/projects/${project.id}`}
              className="group flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-white/10 flex items-center justify-center text-lg">
                  {["🏗️", "📱", "🌐", "💳", "🔐"][i % 5]}
                </div>
                <div>
                  <h3 className="font-medium group-hover:text-purple-300 transition-colors">{project.name}</h3>
                  <p className="text-sm text-gray-500">{project.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-purple-500/10 text-purple-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  project.status === "active" 
                    ? "bg-green-500/10 text-green-400 border border-green-500/30" 
                    : "bg-gray-500/10 text-gray-400 border border-gray-500/30"
                }`}>
                  {project.status}
                </span>
                <span className="text-gray-500 group-hover:text-purple-400 transition-colors">→</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
