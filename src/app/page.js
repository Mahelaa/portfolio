'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('ai');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Shane
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#about" className="text-sm hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="text-sm hover:text-blue-400 transition-colors">Skills</a>
              <a href="#experience" className="text-sm hover:text-blue-400 transition-colors">Experience</a>
              <a href="#projects" className="text-sm hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="text-sm hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm">
              AI Expert & Automation Engineer
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Building Intelligent
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Automation Systems
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Transforming businesses with AI-powered solutions, intelligent workflows, and cutting-edge automation. 
              Specializing in machine learning, NLP, and end-to-end process automation.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 font-medium"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border border-slate-700 rounded-lg hover:border-blue-500 transition-all font-medium"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 lg:px-8 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">50+</div>
              <div className="text-sm text-slate-400">AI Models Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">200+</div>
              <div className="text-sm text-slate-400">Automation Workflows</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">95%</div>
              <div className="text-sm text-slate-400">Efficiency Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">10+</div>
              <div className="text-sm text-slate-400">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm text-blue-400 mb-4 font-medium">ABOUT</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Expertise in AI & Automation</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                I'm a seasoned AI expert and automation engineer with over a decade of experience building 
                intelligent systems that solve complex business challenges. My expertise spans machine learning, 
                natural language processing, computer vision, and end-to-end automation architectures.
              </p>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                I specialize in creating AI-powered solutions that automate workflows, enhance decision-making, 
                and drive business value. From training custom ML models to designing scalable automation pipelines, 
                I bring technical expertise and strategic thinking to every project.
              </p>
              <div className="flex gap-4">
                <div className="flex-1 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                  <div className="text-2xl font-bold mb-1 text-blue-400">AI Focus</div>
                  <div className="text-sm text-slate-400">ML, NLP, CV, LLMs</div>
                </div>
                <div className="flex-1 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                  <div className="text-2xl font-bold mb-1 text-purple-400">Automation</div>
                  <div className="text-sm text-slate-400">Workflows, APIs, RPA</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl border border-blue-500/30">
                <div className="text-3xl mb-2">🤖</div>
                <div className="font-semibold mb-1">AI Development</div>
                <div className="text-sm text-slate-400">Custom ML models & neural networks</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl border border-purple-500/30">
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-semibold mb-1">Automation</div>
                <div className="text-sm text-slate-400">End-to-end workflow automation</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-pink-500/20 to-pink-600/10 rounded-xl border border-pink-500/30">
                <div className="text-3xl mb-2">🧠</div>
                <div className="font-semibold mb-1">NLP</div>
                <div className="text-sm text-slate-400">Language models & text processing</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-xl border border-cyan-500/30">
                <div className="text-3xl mb-2">🔧</div>
                <div className="font-semibold mb-1">MLOps</div>
                <div className="text-sm text-slate-400">Production ML pipelines</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm text-blue-400 mb-4 font-medium">SKILLS</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Technical Expertise</h2>
          
          <div className="mb-8 flex gap-4 border-b border-slate-800">
            <button
              onClick={() => setActiveTab('ai')}
              className={`pb-4 px-2 font-medium transition-colors ${
                activeTab === 'ai' 
                  ? 'text-blue-400 border-b-2 border-blue-400' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              AI & Machine Learning
            </button>
            <button
              onClick={() => setActiveTab('automation')}
              className={`pb-4 px-2 font-medium transition-colors ${
                activeTab === 'automation' 
                  ? 'text-blue-400 border-b-2 border-blue-400' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Automation & DevOps
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`pb-4 px-2 font-medium transition-colors ${
                activeTab === 'tools' 
                  ? 'text-blue-400 border-b-2 border-blue-400' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Tools & Platforms
            </button>
          </div>

          {activeTab === 'ai' && (
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Python', level: 'Expert' },
                { name: 'TensorFlow', level: 'Advanced' },
                { name: 'PyTorch', level: 'Advanced' },
                { name: 'Scikit-learn', level: 'Expert' },
                { name: 'NLP (Transformers)', level: 'Advanced' },
                { name: 'Computer Vision', level: 'Advanced' },
                { name: 'LLMs (GPT, Claude)', level: 'Expert' },
                { name: 'LangChain', level: 'Advanced' },
                { name: 'Hugging Face', level: 'Advanced' },
                { name: 'OpenAI API', level: 'Expert' },
                { name: 'RAG Systems', level: 'Advanced' },
                { name: 'Vector Databases', level: 'Advanced' },
              ].map((skill, idx) => (
                <div key={idx} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-xs text-blue-400">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'automation' && (
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'n8n', level: 'Expert' },
                { name: 'Airflow', level: 'Advanced' },
                { name: 'Prefect', level: 'Advanced' },
                { name: 'REST APIs', level: 'Expert' },
                { name: 'Webhooks', level: 'Expert' },
                { name: 'Docker', level: 'Advanced' },
                { name: 'Kubernetes', level: 'Advanced' },
                { name: 'CI/CD', level: 'Expert' },
                { name: 'AWS', level: 'Advanced' },
                { name: 'GCP', level: 'Advanced' },
                { name: 'Terraform', level: 'Advanced' },
                { name: 'Git', level: 'Expert' },
              ].map((skill, idx) => (
                <div key={idx} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-purple-500/50 transition-all">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-xs text-purple-400">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'tools' && (
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Jupyter Notebooks', level: 'Expert' },
                { name: 'VS Code', level: 'Expert' },
                { name: 'PostgreSQL', level: 'Advanced' },
                { name: 'MongoDB', level: 'Advanced' },
                { name: 'Redis', level: 'Advanced' },
                { name: 'Elasticsearch', level: 'Intermediate' },
                { name: 'Grafana', level: 'Advanced' },
                { name: 'Prometheus', level: 'Advanced' },
                { name: 'FastAPI', level: 'Expert' },
                { name: 'Flask', level: 'Expert' },
                { name: 'React', level: 'Advanced' },
                { name: 'Next.js', level: 'Advanced' },
              ].map((skill, idx) => (
                <div key={idx} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-pink-500/50 transition-all">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-xs text-pink-400">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm text-blue-400 mb-4 font-medium">EXPERIENCE</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Professional Journey</h2>
          
          <div className="space-y-8">
            <div className="relative pl-8 border-l-2 border-blue-500/30">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="mb-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Senior AI & Automation Engineer</h3>
                    <p className="text-blue-400">Tech Innovation Corp</p>
                  </div>
                  <span className="text-sm text-slate-400 mt-2 md:mt-0">2021 — Present</span>
                </div>
                <p className="text-slate-300 mb-4">
                  Leading AI initiatives and automation strategies for enterprise clients. Designing and deploying 
                  production ML systems with 99.9% uptime.
                </p>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Built and deployed 50+ ML models for NLP, computer vision, and predictive analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Designed AI-powered automation workflows reducing manual work by 95%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Implemented LLM-based RAG systems for enterprise knowledge management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Created MLOps pipelines enabling continuous model deployment and monitoring</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-purple-500/30">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
              <div className="mb-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">ML Engineer & Automation Specialist</h3>
                    <p className="text-purple-400">Data Dynamics Inc</p>
                  </div>
                  <span className="text-sm text-slate-400 mt-2 md:mt-0">2019 — 2021</span>
                </div>
                <p className="text-slate-300 mb-4">
                  Developed machine learning solutions and automated data processing pipelines for financial services.
                </p>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▸</span>
                    <span>Developed fraud detection models with 98% accuracy using ensemble methods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▸</span>
                    <span>Built automated ETL pipelines processing 10M+ records daily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▸</span>
                    <span>Created NLP-based document classification system for compliance automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▸</span>
                    <span>Implemented real-time prediction APIs serving 1M+ requests per day</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-pink-500/30">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-pink-500 rounded-full"></div>
              <div className="mb-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Data Scientist & Automation Developer</h3>
                    <p className="text-pink-400">Innovate Solutions</p>
                  </div>
                  <span className="text-sm text-slate-400 mt-2 md:mt-0">2017 — 2019</span>
                </div>
                <p className="text-slate-300 mb-4">
                  Applied machine learning to solve business problems and automated repetitive workflows.
                </p>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">▸</span>
                    <span>Built predictive models for customer churn and lifetime value analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">▸</span>
                    <span>Automated reporting dashboards reducing manual work by 80%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">▸</span>
                    <span>Developed recommendation systems improving conversion rates by 25%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm text-blue-400 mb-4 font-medium">PROJECTS</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Featured Work</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI-Powered Document Processing',
                desc: 'LLM-based system for intelligent document extraction, classification, and data extraction using RAG architecture',
                tags: ['Python', 'LangChain', 'OpenAI', 'Vector DB'],
                gradient: 'from-blue-500/20 to-cyan-500/20',
                border: 'border-blue-500/30'
              },
              {
                title: 'Predictive Maintenance System',
                desc: 'ML model predicting equipment failures using IoT sensor data, reducing downtime by 40%',
                tags: ['TensorFlow', 'Time Series', 'Python', 'AWS'],
                gradient: 'from-purple-500/20 to-pink-500/20',
                border: 'border-purple-500/30'
              },
              {
                title: 'Intelligent Chatbot Platform',
                desc: 'Enterprise chatbot with custom fine-tuned LLM, multi-turn conversations, and integration APIs',
                tags: ['LLMs', 'NLP', 'FastAPI', 'React'],
                gradient: 'from-pink-500/20 to-red-500/20',
                border: 'border-pink-500/30'
              },
              {
                title: 'Automated Workflow Engine',
                desc: 'Event-driven automation platform processing 1M+ tasks daily with 99.9% reliability',
                tags: ['n8n', 'Airflow', 'Kubernetes', 'Docker'],
                gradient: 'from-green-500/20 to-emerald-500/20',
                border: 'border-green-500/30'
              },
              {
                title: 'Computer Vision Quality Control',
                desc: 'Real-time defect detection system using CNNs, processing 1000+ images per minute',
                tags: ['PyTorch', 'OpenCV', 'TensorRT', 'GCP'],
                gradient: 'from-yellow-500/20 to-orange-500/20',
                border: 'border-yellow-500/30'
              },
              {
                title: 'MLOps Pipeline Platform',
                desc: 'End-to-end ML lifecycle management with automated training, deployment, and monitoring',
                tags: ['MLflow', 'Kubeflow', 'Prometheus', 'Grafana'],
                gradient: 'from-indigo-500/20 to-purple-500/20',
                border: 'border-indigo-500/30'
              },
            ].map((project, idx) => (
              <div 
                key={idx}
                className={`p-6 bg-gradient-to-br ${project.gradient} rounded-xl border ${project.border} hover:scale-105 transition-all cursor-pointer group`}
              >
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-800/50 rounded-full text-xs border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-sm text-blue-400 mb-4 font-medium">CONTACT</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Amazing</h2>
          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
            Interested in AI solutions, automation, or collaboration? I'd love to hear from you.
          </p>
          
          <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <h3 className="font-bold mb-4 text-lg">Get In Touch</h3>
                <div className="space-y-3">
                  <a href="mailto:hello@shanes.me" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors">
                    <span className="text-2xl">📧</span>
                    <span>hello@shanes.me</span>
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors">
                    <span className="text-2xl">💻</span>
                    <span>GitHub</span>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors">
                    <span className="text-2xl">🔗</span>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
              <div className="text-left">
                <h3 className="font-bold mb-4 text-lg">Available For</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">▸</span>
                    <span>AI Consulting & Strategy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">▸</span>
                    <span>Custom ML Model Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">▸</span>
                    <span>Automation Implementation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">▸</span>
                    <span>Full-time Opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
            <a 
              href="mailto:hello@shanes.me"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 font-medium"
            >
              Send Message
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-slate-400">
            © 2024 Shane. AI Expert & Automation Engineer. Building the future, one algorithm at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}
