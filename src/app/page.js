export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-gray-900 to-black px-6 text-white">
      <div className="text-center">
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
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></span>
    </main>
  );
}
