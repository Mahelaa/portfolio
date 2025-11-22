export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-gray-900 to-black px-6 text-white">
      <div className="relative z-10 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-zinc-500">
          Automation
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">
          Shane
        </h1>
        <p className="mt-6 text-lg text-zinc-300">
          Automation Engineer &amp; AI Wizard
        </p>
      </div>
      
      {/* Dot matrix overlay */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></span>

      {/* Scanning lines */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
          animation: "scan 8s linear infinite",
          width: "200%",
        }}
      ></div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)",
          animation: "scan 12s linear infinite",
          animationDelay: "4s",
          width: "200%",
        }}
      ></div>

      {/* Pulsing automation nodes */}
      <div className="pointer-events-none absolute left-[10%] top-[20%] h-3 w-3 rounded-full bg-white/40" style={{ animation: "pulse-glow 2s ease-in-out infinite" }}></div>
      <div className="pointer-events-none absolute left-[15%] top-[30%] h-2 w-2 rounded-full bg-white/40" style={{ animation: "pulse-glow 2.5s ease-in-out infinite", animationDelay: "0.5s" }}></div>
      <div className="pointer-events-none absolute right-[10%] top-[25%] h-3 w-3 rounded-full bg-white/40" style={{ animation: "pulse-glow 2.2s ease-in-out infinite", animationDelay: "1s" }}></div>
      <div className="pointer-events-none absolute right-[15%] top-[35%] h-2 w-2 rounded-full bg-white/40" style={{ animation: "pulse-glow 2.7s ease-in-out infinite", animationDelay: "1.5s" }}></div>
      <div className="pointer-events-none absolute left-[20%] bottom-[25%] h-3 w-3 rounded-full bg-white/40" style={{ animation: "pulse-glow 2.3s ease-in-out infinite", animationDelay: "0.3s" }}></div>
      <div className="pointer-events-none absolute right-[20%] bottom-[30%] h-2 w-2 rounded-full bg-white/40" style={{ animation: "pulse-glow 2.6s ease-in-out infinite", animationDelay: "0.8s" }}></div>

      {/* Connecting paths */}
      <svg className="pointer-events-none absolute inset-0 opacity-30" style={{ width: "100%", height: "100%" }}>
        <path
          d="M 10% 20% Q 30% 10%, 50% 50% T 90% 25%"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="10,5"
          style={{ animation: "connect 6s ease-in-out infinite" }}
        />
        <path
          d="M 15% 30% Q 40% 20%, 50% 50% T 85% 35%"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="10,5"
          style={{ animation: "connect 8s ease-in-out infinite", animationDelay: "2s" }}
        />
        <path
          d="M 20% 75% Q 35% 65%, 50% 50% T 80% 70%"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="10,5"
          style={{ animation: "connect 7s ease-in-out infinite", animationDelay: "1s" }}
        />
      </svg>

      {/* Floating automation icons */}
      <div className="pointer-events-none absolute left-[8%] top-[15%] opacity-20" style={{ animation: "float 4s ease-in-out infinite" }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 6v6l4 2"></path>
        </svg>
      </div>
      <div className="pointer-events-none absolute right-[8%] top-[20%] opacity-20" style={{ animation: "float 5s ease-in-out infinite", animationDelay: "1s" }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2"></rect>
          <path d="M9 9h6v6H9z"></path>
        </svg>
      </div>
      <div className="pointer-events-none absolute left-[12%] bottom-[20%] opacity-20" style={{ animation: "float 4.5s ease-in-out infinite", animationDelay: "0.5s" }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        </svg>
      </div>
      <div className="pointer-events-none absolute right-[12%] bottom-[25%] opacity-20" style={{ animation: "float 5.5s ease-in-out infinite", animationDelay: "1.5s" }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M12 1v6m0 6v6M23 12h-6m-6 0H1"></path>
        </svg>
      </div>

      {/* Rotating gear */}
      <div className="pointer-events-none absolute left-[5%] top-[50%] opacity-10" style={{ animation: "rotate-slow 20s linear infinite" }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.4-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/>
        </svg>
      </div>
      <div className="pointer-events-none absolute right-[5%] top-[50%] opacity-10" style={{ animation: "rotate-slow 15s linear infinite reverse" }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.4-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/>
        </svg>
      </div>
    </main>
  );
}
