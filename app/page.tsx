import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-green-500 selection:text-black">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-24 md:grid md:grid-cols-2 md:gap-12 md:text-left">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />

        {/* Left Column: Headline & CTA */}
        <div className="flex flex-col items-center md:items-start z-10">
          <h1 className="mb-6 text-5xl font-bold tracking-tighter sm:text-4xl bg-linear-to-b from-white to-zinc-500 bg-clip-text text-transparent text-center md:text-left">
            <span className="text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.4)]">#1</span>{" "}
            <span className="text-white">AI</span>{" "}
            <span className="text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.4)]">Financial</span>{" "}
            advisor in Uzbekistan
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-zinc-400 sm:text-xl text-center md:text-left">
            This app helps you to save & spend & invest smarter while understanding your financial situation. 
            {/* maybe goals and risk tolerance */}
          </p>
          <button className="rounded-full border border-zinc-800 bg-black px-8 py-3 font-semibold text-white transition hover:bg-zinc-900">
            Learn More
          </button>
        </div>

        {/* Right Column: iPhone Video Demo */}
        <div className="relative mt-12 flex justify-center md:mt-0 z-10">
          <div className="relative mx-auto border-zinc-800 bg-zinc-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
            <div className="w-[148px] h-[18px] bg-zinc-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
            <div className="h-[32px] w-[3px] bg-zinc-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-zinc-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-zinc-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-zinc-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-zinc-900 relative">
              {/* Video Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-950 text-zinc-700">
                <span className="sr-only">App Demonstration Video</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
              </div>
              {/* Actual Video Element (Uncomment and add source when available) */}
              {/* <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                <source src="/demo-video.mp4" type="video/mp4" />
              </video> */}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight sm:text-5xl">
            The Problem: Lack of Financial Literacy
          </h2>
          <p className="text-2xl text-zinc-400 leading-relaxed">
            Nobody teaches people how to actually manage money, so most people figure it out the hard way. This leads to financial stress, poor decisions, and cycles of debt.
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
              <h3 className="text-xl font-bold text-white">Abdussomad Mahmud</h3>
              <p className="text-blue-400 mb-2">Software Engineer</p>
              <p className="text-zinc-400 text-sm">Software Engineer with expertise in React Native, TypeScript, and modern web technologies for 3 years.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
              <div className="w-24 h-24 bg-zinc-800 rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-zinc-600">SJ</div>
              <h3 className="text-xl font-bold text-white">Umar Ibragimov</h3>
              <p className="text-purple-400 mb-2">Backend Developer & UI/UX Designer</p>
              <p className="text-zinc-400 text-sm">Full Stack developer with expertise in backend systems and intuitive UI/UX design.</p>
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
              <div className="mt-1.5 shrink-0 text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Idea</h3>
                <p className="text-zinc-400">We identified the problem of financial literacy and poor decision-making among most people in Uzbekistan. We share our vision that we are seeing in this product</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-4 h-4 mt-1.5 rounded-full bg-green-500 shrink-0 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              <div>
                <h3 className="text-lg font-bold text-white">Prototype (Current)</h3>
                <p className="text-zinc-400">Integrated AI with Mobile application. </p>
              </div>
            </div>
            <div className="flex gap-4 items-start opacity-50">
              <div className="w-4 h-4 mt-1.5 rounded-full bg-zinc-700 shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white">MVP</h3>
                <p className="text-zinc-400"></p>
              </div>
            </div>
            <div className="flex gap-4 items-start opacity-50">
              <div className="w-4 h-4 mt-1.5 rounded-full bg-zinc-700 shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white">Launched</h3>
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
