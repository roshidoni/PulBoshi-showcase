"use client";

import Link from 'next/link';
import posthog from 'posthog-js';
import { useRef } from 'react';

const weeks = [
    {
        title: "Venchur va Startup Fikrlash",
        tasks: ["Networking with founders", "Mahalliy supermarketlarda narxlarni yig'ish (kamida qo'lda)", "Kategoriyalar xarajatlarini to'liqroq ochib berish"],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
                <path d="M9 18h6" />
                <path d="M10 22h4" />
            </svg>
        )
    },
    {
        title: "Maxsulot va texnologiya",
        tasks: ["Freemium tarifi uchun xarajatni tracking qiluvchi feature qo'shish", "Haftalik AI rejalashni ham qo'shish",],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.1 6.27a1 1 0 0 0 0 1.83l9.07 4.09a2 2 0 0 0 1.66 0l9.07-4.09a1 1 0 0 0 0-1.83z" />
                <path d="m2.1 11.27 9.07 4.09a2 2 0 0 0 1.66 0l9.07-4.09" />
                <path d="m2.1 16.27 9.07 4.09a2 2 0 0 0 1.66 0l9.07-4.09" />
            </svg>
        )
    },
    {
        title: "Marketing va Sotuv",
        tasks: ["Bozor narxlarini taqqoslash va Premium tarifdagi imkoniyatlarni ajratish", "Obuna tizimini yaratish", "Dastur ko'rinishi rivojlantirish"],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
            </svg>
        )
    },
    {
        title: "O'sish va analitika",
        tasks: ["Xaridorlarni odatini o'rganish uchun analitika toollarni qo'shish", "Online Forumlar imkoniyatini qo'shish (social engangement)"],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
            </svg>
        )
    },
    {
        title: "Taqdimot qilish san'ati",
        tasks: ["Taqdimot maxoratini oshirish", "Birinchi foydalanuvchilar bilan beta test qilish va feedback'lar ustida ishlash",],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                <rect width="20" height="14" x="2" y="3" rx="2" />
                <line x1="8" x2="16" y1="21" y2="21" />
                <line x1="12" x2="12" y1="17" y2="21" />
            </svg>
        )
    },
    {
        title: "Branding & Demo day",
        tasks: ["Branding rivojlantirish", "Ready to rock"],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3" />
                <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5" />
            </svg>
        )
    },
];

export default function Plan45Day() {
    // Track page view once per page load using a ref to avoid duplicate tracking
    const hasTrackedPageView = useRef(false);
    if (!hasTrackedPageView.current && typeof window !== 'undefined') {
        posthog.capture("viewed_45_day_plan_page", {
            page_title: "45 kunlik moliyaviy rivojlanish rejasi",
            total_weeks: weeks.length,
        });
        hasTrackedPageView.current = true;
    }

    const handleBackToHomeClick = () => {
        posthog.capture("clicked_back_to_home", {
            from_page: "45-day-plan",
        });
    };

    const handleWeekCardClick = (weekTitle: string, weekNumber: number) => {
        posthog.capture("viewed_week_details", {
            week_title: weekTitle,
            week_number: weekNumber,
        });
    };

    return (
        <main className="min-h-screen bg-black text-white selection:bg-emerald-500 selection:text-black font-sans">
            {/* Background Decor */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute top-[10%] left-[10%] h-[400px] w-[400px] rounded-full bg-blue-900/20 blur-[120px]" />
                <div className="absolute bottom-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-emerald-900/10 blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 py-12">
                {/* Navigation */}
                <Link
                    href="/"
                    onClick={handleBackToHomeClick}
                    className="group mb-12 inline-flex items-center gap-2 text-zinc-400 transition hover:text-white"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1">
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                    Asosiy sahifaga qaytish
                </Link>

                {/* Header */}
                <header className="mb-20 text-center">
                    <h1 className="mb-6 text-5xl font-bold tracking-tight bg-linear-to-b from-white to-zinc-500 bg-clip-text text-transparent sm:text-6xl">
                        45 kunlik moliyaviy <span className="text-emerald-400">rivojlanish</span> rejasi
                    </h1>
                    <p className="text-2xl text-zinc-400 leading-relaxed">
                        6 hafta ichida qiladigan ishlar ko'p. Lekin bir narsa o'zgarmaydi: <b>Dastur rivojlanishi</b>
                    </p>
                </header>

                {/* Grid of Weeks */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {weeks.map((week, index) => (
                        <div
                            key={index}
                            onClick={() => handleWeekCardClick(week.title, index + 1)}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-emerald-500/50 hover:bg-white/[0.08] cursor-pointer"
                        >
                            <div className="mb-6 flex items-center justify-between">
                                <div className="rounded-2xl bg-white/5 p-3 group-hover:bg-emerald-500/10 transition-colors">
                                    {week.icon}
                                </div>
                                <span className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Hafta {index + 1}</span>
                            </div>

                            <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                                {week.title}
                            </h3>

                            <ul className="space-y-3 border-t border-white/5 pt-6">
                                {week.tasks.map((task, taskIndex) => (
                                    <li key={taskIndex} className="flex items-center gap-3 text-sm text-zinc-300">
                                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/50" />
                                        {task}
                                    </li>
                                ))}
                            </ul>

                            {/* Decorative gradient overlay */}
                            <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-emerald-500/5 blur-3xl transition group-hover:bg-emerald-500/15" />
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}
