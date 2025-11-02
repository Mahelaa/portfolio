'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated gradient background */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 107, 107, 0.15), transparent 50%)`
        }}
      />

      {/* Floating orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 backdrop-blur-md bg-black/20 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">Shane</div>
          <div className="flex gap-8">
            <a href="#work" className="text-sm hover:text-orange-400 transition-colors">Work</a>
            <a href="#skills" className="text-sm hover:text-orange-400 transition-colors">Skills</a>
            <a href="#contact" className="text-sm hover:text-orange-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 relative z-10">
        <div className="max-w-6xl w-full">
          <div className="inline-block mb-6 px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-sm">
            n8n Automation Engineer
          </div>
          <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Building the Future
            <br />
            of Automation
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
            Transforming business processes with intelligent workflows, seamless API integrations, and cutting-edge automation solutions.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#work" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-4 border border-gray-700 rounded-lg hover:border-orange-500 transition-all">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-8 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="card bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-orange-500/50 transition-all transform hover:scale-105">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">500+</div>
              <div className="text-sm text-gray-400">Workflows Built</div>
            </div>
            <div className="card bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-orange-500/50 transition-all transform hover:scale-105">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">80%</div>
              <div className="text-sm text-gray-400">Time Saved</div>
            </div>
            <div className="card bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-orange-500/50 transition-all transform hover:scale-105">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">50+</div>
              <div className="text-sm text-gray-400">API Integrations</div>
            </div>
            <div className="card bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-orange-500/50 transition-all transform hover:scale-105">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">99.9%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="work" className="px-8 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-orange-400 mb-4">EXPERIENCE</div>
          <h2 className="text-5xl font-bold mb-16">Recent Roles</h2>
          
          <div className="space-y-8">
            <div className="card bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Senior n8n Automation Engineer</h3>
                  <p className="text-gray-400">Designing and implementing complex automation workflows</p>
                </div>
                <span className="px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-sm">2021 — Present</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2" />
                  <span className="text-sm text-gray-400">Built 500+ n8n workflows automating business processes across multiple departments</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2" />
                  <span className="text-sm text-gray-400">Designed custom n8n nodes and extensions for specialized integrations</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2" />
                  <span className="text-sm text-gray-400">Implemented webhook-based event-driven architectures reducing manual work by 80%</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2" />
                  <span className="text-sm text-gray-400">Managed self-hosted n8n infrastructure with 99.9% uptime</span>
                </div>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Automation Specialist</h3>
                  <p className="text-gray-400">API integration and workflow optimization</p>
                </div>
                <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm">2019 — 2021</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2" />
                  <span className="text-sm text-gray-400">Migrated manual processes to automated n8n workflows</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2" />
                  <span className="text-sm text-gray-400">Developed REST API integrations connecting 50+ services</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2" />
                  <span className="text-sm text-gray-400">Created error handling and retry mechanisms for robust automation</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2" />
                  <span className="text-sm text-gray-400">Trained teams on n8n best practices and workflow design patterns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-8 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-orange-400 mb-4">FEATURED WORK</div>
          <h2 className="text-5xl font-bold mb-16">Notable Automations</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Lead Generation Pipeline",
                desc: "End-to-end automation from lead capture to CRM updates with email notifications",
                tags: ["n8n", "Webhooks", "REST APIs", "JSON Transform"],
                gradient: "from-orange-500/20 to-red-500/20"
              },
              {
                title: "Data Synchronization System",
                desc: "Bidirectional sync between Salesforce, HubSpot, and internal database",
                tags: ["n8n", "Salesforce API", "HubSpot API", "PostgreSQL"],
                gradient: "from-blue-500/20 to-cyan-500/20"
              },
              {
                title: "E-commerce Fulfillment",
                desc: "Shopify order processing, inventory management, and shipping notifications",
                tags: ["n8n", "Shopify", "ShipStation", "IFTTT"],
                gradient: "from-purple-500/20 to-pink-500/20"
              },
              {
                title: "Social Media Scheduler",
                desc: "Multi-platform content distribution with analytics tracking",
                tags: ["n8n", "Twitter API", "LinkedIn", "Buffer"],
                gradient: "from-green-500/20 to-emerald-500/20"
              },
              {
                title: "Finance & Accounting",
                desc: "Invoice processing, payment reconciliation, and automated reporting",
                tags: ["n8n", "QuickBooks", "Stripe", "Google Sheets"],
                gradient: "from-yellow-500/20 to-orange-500/20"
              },
              {
                title: "Customer Support Automation",
                desc: "Ticket routing, SLA tracking, and automated follow-ups",
                tags: ["n8n", "Zendesk", "Intercom", "Slack"],
                gradient: "from-indigo-500/20 to-purple-500/20"
              }
            ].map((project, idx) => (
              <div 
                key={idx} 
                className="card bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all transform hover:scale-[1.02] group cursor-pointer"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-xl mb-6 flex items-center justify-center text-2xl`}>
                  ⚡
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs hover:border-orange-500 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-8 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-orange-400 mb-4">CORE SKILLS</div>
          <h2 className="text-5xl font-bold mb-16">Technologies I Work With</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "n8n Platform", "API Integration", "Webhooks", "Workflow Design",
              "JSON/XPath", "Python", "JavaScript", "REST APIs",
              "PostgreSQL", "MySQL", "Docker", "Git",
              "Node.js", "Express", "AWS", "MongoDB"
            ].map((skill, idx) => (
              <div 
                key={idx}
                className="card bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 text-center hover:border-orange-500/50 transition-all transform hover:scale-105 cursor-pointer"
              >
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="px-8 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-orange-400 mb-4">INTEGRATION EXPERIENCE</div>
          <h2 className="text-5xl font-bold mb-16">Platforms & Services</h2>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              "Salesforce", "HubSpot", "Shopify", "Stripe", "QuickBooks", 
              "Slack", "Discord", "Google Workspace", "Microsoft 365", 
              "Airtable", "Notion", "Zapier", "Mailchimp", "SendGrid", 
              "Twitter", "LinkedIn", "AWS Services", "GitHub", "Jira",
              "Trello", "Monday.com", "Typeform", "Calendly", "Zoom"
            ].map((integration, idx) => (
              <div 
                key={idx}
                className="px-4 py-2 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg text-sm hover:border-orange-500/50 transition-all transform hover:scale-105 cursor-pointer"
              >
                {integration}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-12">
            <div className="text-sm text-orange-400 mb-4">GET IN TOUCH</div>
            <h2 className="text-5xl font-bold mb-6">Let's Automate Together</h2>
            <p className="text-gray-400 mb-10 text-lg">
              Available for n8n consulting, custom workflow development, and automation strategy
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a 
                href="mailto:hello@shanes.me" 
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105"
              >
                Send Email
              </a>
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-gray-700 rounded-lg hover:border-orange-500 transition-all"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 border-t border-gray-800 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            © 2024 Shane. Building automation solutions with n8n.
          </p>
        </div>
      </footer>
    </div>
  );
}
