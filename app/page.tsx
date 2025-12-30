"use client";

import Link from "next/link";
import posthog from "posthog-js";

export default function Home() {
  const handleWhyPulboshiClick = () => {
    posthog.capture("clicked_why_pulboshi", {
      button_location: "hero_section",
      button_text: "Nega Pulboshi?",
    });
  };

  const handlePlanClick = () => {
    posthog.capture("clicked_45_day_plan", {
      button_location: "hero_section",
      button_text: "45 kunlik reja",
    });
  };

  const handleDemoVideoInteraction = () => {
    posthog.capture("watched_demo_video", {
      video_source: "youtube",
      video_id: "OlDjJMbc4Sg",
    });
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-green-500 selection:text-black">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />

        <div className="container mx-auto px-6 w-full text-center">
          {/* Left Column: Headline & CTA */}
          <div className="flex flex-col justify-center z-10">
            <h1 className="mb-6 text-5xl font-bold tracking-tighter sm:text-4xl text-white">
              <span className="text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.4)]">PulBoshi - </span>
              <span className="text-white">O'zbekistondagi</span>{" "}
              <span className="text-white">#1</span>{" "}
              <span className="text-white">AI</span>{" "}
              moliyaviy maslahatchi
            </h1>
            <p className="mb-8 mx-auto max-w-2xl text-lg text-zinc-400 sm:text-xl">
              Ushbu mobil ilova moliyaviy holatingizni tushunish bilan birga tejashingiz, sarflashingiz va aqlli sarmoya kiritishingizga yordam beradi.
            </p>
            <p className="mb-8 text-gray-400 max-w-xl mx-auto">
              *Bu Pulboshi ilovasini rasmiy vebsayti emas. Vebsayt Uzcombinator dasturi uchun ilova va uni kelajakdagi maqsadlarini tanishtirish uchun yaratilgan.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#solution" onClick={handleWhyPulboshiClick} className="rounded-full border border-zinc-800 bg-black px-8 py-3 font-semibold text-white transition hover:bg-zinc-900 w-fit">
                Nega Pulboshi?
              </a>
              <Link href="/45-day-plan" onClick={handlePlanClick} className="rounded-full bg-emerald-500 px-8 py-3 font-bold text-black transition hover:bg-emerald-400 hover:scale-105 active:scale-95 w-fit">
                45 kunlik reja
              </Link>
              <a href="#demo" onClick={handleDemoVideoInteraction} className="rounded-full border border-zinc-800 bg-zinc-900/50 px-8 py-3 font-semibold text-white transition hover:bg-zinc-800 w-fit flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                Watch demo
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo" className="py-24 px-4 bg-zinc-950/50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Demo <span className="text-emerald-400">Video</span>
          </h2>
          <div
            className="relative aspect-video w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl shadow-emerald-500/10 transition-transform hover:scale-[1.01]"
          >
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/OlDjJMbc4Sg?si=pLLWuv6L8Oeo8UwF"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <p className="mt-6 text-zinc-400 text-sm">
            PulBoshi qanday ishlashini 5 daqiqada bilib oling. tavsiya etilgan tezlik 1.25x
          </p>
        </div>
      </section>

      {/* Solution Section - Comparison Table */}
      <section id="solution" className="py-24 px-4 bg-zinc-950">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Nima uchun <span className="text-emerald-400">PulBoshi</span>?
          </h2>

          {/* Comparison Table */}
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
            {/* Table Header */}
            <div className="grid grid-cols-3 border-b border-zinc-800 bg-zinc-900">
              <div className="p-6"></div>
              <div className="p-6 text-center border-l border-zinc-800">
                <span className="text-lg font-semibold text-zinc-400">Oddiy byudjet ilovalari</span>
              </div>
              <div className="p-6 text-center border-l border-zinc-800">
                <span className="text-lg font-bold text-emerald-400">PulBoshi</span>
              </div>
            </div>
            <div
              className="grid grid-cols-3 hover:bg-zinc-800/30 transition-colors"
            >
              <div className="p-6 flex items-center">
                <span className="text-lg text-zinc-300">Xarajatlarni kuzatish</span>
              </div>
              <div className="p-6 flex items-center justify-center border-l border-zinc-800">
                <span className="text-2xl text-emerald-500">✔</span>
              </div>
              <div className="p-6 flex items-center justify-center border-l border-zinc-800">
                <span className="text-2xl text-emerald-500">✔ (jarayonida)</span>
              </div>
            </div>
            <div
              className="grid grid-cols-3 hover:bg-zinc-800/30 transition-colors"
            >
              <div className="p-6 flex items-center">
                <span className="text-lg text-zinc-300">AI moliyaviy maslahatchi</span>
              </div>
              <div className="p-6 flex items-center justify-center border-l border-zinc-800">
                <span className="text-2xl text-orange-500">✖</span>
              </div>
              <div className="p-6 flex items-center justify-center border-l border-zinc-800">
                <span className="text-2xl text-emerald-500">✔</span>
              </div>
            </div>
            <div
              className={`grid grid-cols-3 hover:bg-zinc-800/30 transition-colors`}
            >
              <div className="p-6 flex items-center">
                <span className="text-lg text-zinc-300">Shaxsiylashtirilgan rejalar</span>
              </div>
              <div className="p-6 flex items-center justify-center border-l border-zinc-800">
                <span className="text-2xl text-orange-500">✖</span>
              </div>
              <div className="p-6 flex items-center justify-center border-l border-zinc-800">
                <span className="text-2xl text-emerald-500">✔</span>
              </div>
            </div>
            <div
              className={`grid grid-cols-3 hover:bg-zinc-800/30 transition-colors`}
            >
              <div className="p-6 flex items-center">
                <span className="text-lg text-zinc-300">Bozor narxlarini tahlil qilish</span>
              </div>
              <div className="p-6 flex items-center justify-center border-l border-zinc-800">
                <span className="text-2xl text-orange-500">✖</span>
              </div>
              <div className="p-6 flex items-center justify-center border-l border-zinc-800">
                <span className="text-2xl text-emerald-500">✔ (jarayonida)</span>
              </div>
            </div>
            <div
              className={`grid grid-cols-3 hover:bg-zinc-800/30 transition-colors`}
            >
              <div className="p-6 flex items-center">
                <span className="text-lg text-zinc-300">Byudjet kategoriyalari</span>
              </div>
              <div className="p-6 flex items-center justify-center border-l border-zinc-800">
                <span className="text-2xl text-emerald-500">✔</span>
              </div>
              <div className="p-6 flex items-center justify-center border-l border-zinc-800">
                <span className="text-2xl text-emerald-500">✔</span>
              </div>
            </div>
            <div
              className={`grid grid-cols-3 hover:bg-zinc-800/30 transition-colors`}
            >
              <div className="p-6 flex items-center">
                <span className="text-lg text-zinc-300">AI moliyaviy maslahatchi</span>
              </div>
              <div className="p-6 flex items-center justify-center border-l border-zinc-800">
                <span className="text-2xl text-orange-500">✖</span>
              </div>
              <div className="p-6 flex items-center justify-center border-l border-zinc-800">
                <span className="text-2xl text-emerald-500">✔</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution / Modes Section */}
      <section className="py-24 px-4" >
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight sm:text-5xl">
            Tejang, Sarflang va Sarmoya qiling
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Survival Mode */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition hover:border-red-500/50">
              <div className="mb-4 inline-block rounded-full bg-red-500/10 p-3 text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-white">Tejash</h3>
              <p className="text-zinc-400">
                Mablag'ingiz juda kammi? Biz bozorning eng arzon variantlarini taklif qilamiz, toki siz "omon qolishingiz" uchun.
              </p>
            </div>

            {/* Growth Mode */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition hover:border-blue-500/50">
              <div className="mb-4 inline-block rounded-full bg-blue-500/10 p-3 text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-white">Sarflash</h3>
              <p className="text-zinc-400">
                Moliyaviy holatingiz barqarormi? Bizning AI vositalarimiz sizga bozordagi eng maqbul narxlarni topishga va pulingizni behuda sarflamaslikka yordam beradi.
              </p>
            </div>

            {/* Wealth Mode */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition hover:border-emerald-500/50">
              <div className="mb-4 inline-block rounded-full bg-emerald-500/10 p-3 text-emerald-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-white">Sarmoya</h3>
              <p className="text-zinc-400">
                Kapitalingizni oshirmoqchimisiz? Biz sizga aqlli investitsiya imkoniyatlarini taqdim etamiz.
              </p>
            </div>
          </div>
        </div>
      </section >

      {/* Roadmap Section */}
      <section className="py-24 px-4 bg-zinc-950" >
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight sm:text-4xl">Dastur boshqichi</h2>
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="mt-1.5 shrink-0 text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Prototip</h3>
                <p className="text-zinc-400">Sun'iy intellekt mobil ilovaga integratsiya qilindi va AI imkoniyatlari sinovdan o'tkazildi.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-4 h-4 mt-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white">MVP</h3>
                <p className="text-zinc-400"><b>Faqat talabalar</b> uchun sun'iy intellekt moliyaviy maslahatchisi</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-4 h-4 mt-1.5 rounded-full bg-zinc-700 shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white">Birinchi foydalanuvchi</h3>
                <p className="text-zinc-400">Birinchi foydalanuvchilar bu 15-25 yoshdagi o'smirlar</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-4 h-4 mt-1.5 rounded-full bg-zinc-700 shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white">Universal ilova</h3>
                <p className="text-zinc-400">Barcha kasb va yoshdagi foydalanuvchilar uchun</p>
              </div>
            </div>
          </div>
        </div>
      </section >
    </main >
  );
}
