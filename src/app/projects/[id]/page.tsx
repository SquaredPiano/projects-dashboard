"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { mockProjects, mockNodes } from "@/lib/mock-data";

export default function ProjectCanvasPage() {
  const params = useParams();
  const project = mockProjects.find(p => p.id === params.id) || mockProjects[0];
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  
  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setGenerated(true);
    }, 3000);
  };
  
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Subtle gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950 pointer-events-none"></div>
      
      {/* Navigation */}
      <nav className="relative z-20 border-b border-white/10 bg-slate-900/80 backdrop-blur">
        <div className="px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/projects" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Back
            </Link>
            <span className="text-gray-600">|</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <h1 className="font-semibold">{project.name}</h1>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition text-sm flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>
              Save
            </button>
            <button 
              onClick={handleGenerate}
              disabled={generating}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg hover:from-purple-500 hover:to-indigo-500 transition text-sm font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-500/20"
            >
              {generating ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  Generating...
                </>
              ) : generated ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Generated!
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  Generate
                </>
              )}
            </button>
          </div>
        </div>
      </nav>
      
      <div className="relative z-10 flex h-[calc(100vh-57px)]">
        {/* Sidebar */}
        <aside className="w-72 bg-slate-900/50 border-r border-white/10 flex flex-col">
          <div className="p-4 border-b border-white/10">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Components</h2>
            <div className="space-y-1">
              
            <div className="group flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/10 cursor-pointer transition-colors">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sm group-hover:scale-110 transition-transform">
                ⚙️
              </div>
              <div>
                <span className="text-sm font-medium block">FastAPI</span>
                <span className="text-xs text-green-400">Fastapi</span>
              </div>
            </div>

            <div className="group flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/10 cursor-pointer transition-colors">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sm group-hover:scale-110 transition-transform">
                🌐
              </div>
              <div>
                <span className="text-sm font-medium block">React</span>
                <span className="text-xs text-blue-400">React</span>
              </div>
            </div>

            <div className="group flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/10 cursor-pointer transition-colors">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sm group-hover:scale-110 transition-transform">
                💾
              </div>
              <div>
                <span className="text-sm font-medium block">PostgreSQL</span>
                <span className="text-xs text-purple-400">Postgres</span>
              </div>
            </div>
            </div>
          </div>
          
          <div className="p-4 flex-1">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Architecture</h2>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>Frontend</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Backend</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span>Database</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                <span>Services</span>
              </div>
            </div>
          </div>
          
          {/* Generation Status */}
          {generating && (
            <div className="p-4 border-t border-white/10 bg-purple-500/10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 rounded-full border-2 border-purple-500 border-t-transparent animate-spin"></div>
                <span className="text-sm font-medium text-purple-300">Generating code...</span>
              </div>
              <div className="space-y-1 text-xs text-gray-400 ml-9">
                <p className="animate-pulse">→ Translating architecture...</p>
                <p className="opacity-50">→ Creating file structure...</p>
                <p className="opacity-30">→ Writing components...</p>
              </div>
            </div>
          )}
          
          {generated && !generating && (
            <div className="p-4 border-t border-white/10 bg-green-500/10">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <div>
                  <p className="text-sm font-medium text-green-300">Code Generated!</p>
                  <p className="text-xs text-gray-400">17 files created</p>
                </div>
              </div>
            </div>
          )}
        </aside>
        
        {/* Canvas */}
        <main className="flex-1 relative overflow-hidden">
          {/* Grid background */}
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }}></div>
          
          {/* Nodes */}
          <div className="relative p-8">
            <div className="flex flex-wrap gap-6">
              {mockNodes.map((node, i) => (
                <div 
                  key={node.id}
                  className="group relative bg-slate-800/80 backdrop-blur border border-white/10 rounded-xl p-5 w-56 cursor-move hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
                  style={{ transform: `translate(${(i % 3) * 20}px, ${Math.floor(i / 3) * 15}px)` }}
                >
                  {/* Connection dots */}
                  <div className="absolute -right-2 top-1/2 w-4 h-4 bg-slate-700 border-2 border-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute -left-2 top-1/2 w-4 h-4 bg-slate-700 border-2 border-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${
                      node.type === "frontend" ? "bg-blue-500/20 border border-blue-500/30" :
                      node.type === "backend" ? "bg-green-500/20 border border-green-500/30" :
                      node.type === "database" ? "bg-purple-500/20 border border-purple-500/30" :
                      "bg-amber-500/20 border border-amber-500/30"
                    }`}>
                      {node.type === "frontend" ? "🌐" :
                        node.type === "backend" ? "⚙️" :
                        node.type === "database" ? "💾" : "🔌"}
                    </div>
                    <div>
                      <span className="font-medium block">{node.label}</span>
                      <span className={`text-xs ${
                        node.type === "frontend" ? "text-blue-400" :
                        node.type === "backend" ? "text-green-400" :
                        node.type === "database" ? "text-purple-400" :
                        "text-amber-400"
                      }`}>{node.tech}</span>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-500">
                    Drag to connect
                  </div>
                </div>
              ))}
            </div>
            
            {/* Placeholder for empty canvas */}
            {mockNodes.length === 0 && (
              <div className="flex items-center justify-center h-96 text-gray-500">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎨</div>
                  <p className="text-lg">Drag components here to start</p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
