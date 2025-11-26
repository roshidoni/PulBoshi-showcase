import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-green-500 selection:text-black">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
        <h1 className="mb-6 text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
          Stop Surviving. <br /> Start Thriving.
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-zinc-400 sm:text-xl">
          The first financial AI that adapts to your reality. Whether you're scraping by or scaling up, we have a mode for you.
        </p>
        <div className="flex gap-4">
          <button className="rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:bg-zinc-200">
            Join Waitlist
          </button>
          <button className="rounded-full border border-zinc-800 bg-black px-8 py-3 font-semibold text-white transition hover:bg-zinc-900">
            Learn More
          </button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl text-red-500">
            The Problem: "Hungry Days"
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Financial mismanagement isn't just about numbers; it's about instability.
            For students and young professionals, "hungry days" are a real consequence of
            poor planning. We're here to end that cycle.
          </p>
        </div>
      </section>

      {/* Solution / Modes Section */}
      <section className="py-24 px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight sm:text-5xl">
            One App. Three Modes.
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Survival Mode */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition hover:border-red-500/50">
              <div className="mb-4 inline-block rounded-full bg-red-500/10 p-3 text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-white">Survival Mode</h3>
              <p className="text-zinc-400">
                Critically low funds? We lock down unnecessary spending and guide you to safety until your next paycheck.
              </p>
            </div>

            {/* Growth Mode */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition hover:border-blue-500/50">
              <div className="mb-4 inline-block rounded-full bg-blue-500/10 p-3 text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-white">Growth Mode</h3>
              <p className="text-zinc-400">
                Stable ground? We help you balance living expenses with smart self-investment to fuel your future.
              </p>
            </div>

            {/* Wealth Mode */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition hover:border-emerald-500/50">
              <div className="mb-4 inline-block rounded-full bg-emerald-500/10 p-3 text-emerald-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-white">Wealth Mode</h3>
              <p className="text-zinc-400">
                High net worth? Advanced strategies to grow your assets and optimize your portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Meet the Team
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
              <div className="w-24 h-24 bg-zinc-800 rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-zinc-600">AC</div>
              <h3 className="text-xl font-bold text-white">Alex Chen</h3>
              <p className="text-blue-400 mb-2">Lead Developer</p>
              <p className="text-zinc-400 text-sm">Full Stack Wizard specializing in React Native and TypeScript.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
              <div className="w-24 h-24 bg-zinc-800 rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-zinc-600">SJ</div>
              <h3 className="text-xl font-bold text-white">Sarah Jones</h3>
              <p className="text-purple-400 mb-2">Product Designer & AI</p>
              <p className="text-zinc-400 text-sm">UX Strategy expert with a focus on AI-driven interfaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">Why Us?</h2>
          <p className="text-xl text-zinc-400 leading-relaxed">
            We don't just write code; we understand the psychology of money.
            By combining deep technical expertise with behavioral finance, we're building
            a tool that actually changes habits.
          </p>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight sm:text-4xl">Roadmap</h2>
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="w-4 h-4 mt-1.5 rounded-full bg-green-500 shrink-0 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              <div>
                <h3 className="text-lg font-bold text-white">Prototyping (Current)</h3>
                <p className="text-zinc-400">Core mechanics and AI model integration.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start opacity-50">
              <div className="w-4 h-4 mt-1.5 rounded-full bg-zinc-700 shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white">MVP Release</h3>
                <p className="text-zinc-400">Beta launch for university students.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start opacity-50">
              <div className="w-4 h-4 mt-1.5 rounded-full bg-zinc-700 shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white">Public Launch</h3>
                <p className="text-zinc-400">Full release with all three modes active.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 px-4 border-t border-zinc-900">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-8 text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Powered By
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale transition duration-500 hover:grayscale-0">
            {/* Simple text placeholders for logos for now */}
            <span className="text-xl font-bold text-zinc-300">React Native</span>
            <span className="text-xl font-bold text-zinc-300">Expo</span>
            <span className="text-xl font-bold text-zinc-300">TypeScript</span>
            <span className="text-xl font-bold text-zinc-300">AI SDK</span>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-zinc-600 text-sm border-t border-zinc-900">
        <p>© 2024 AI500 Hackathon Team. All rights reserved.</p>
      </footer>
    </main>
  );
}
