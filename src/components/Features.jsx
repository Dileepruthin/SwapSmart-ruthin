// src/components/Features.jsx
import React from "react";

const features = [
  {
    icon: (
      <svg className="w-12 h-12 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 20v-6M16 10V6a4 4 0 0 0-8 0v4" />
        <rect x="6" y="10" width="12" height="10" rx="2" ry="2" />
      </svg>
    ),
    title: "Secure & Reliable",
    description: "Your data is protected with state-of-the-art security measures, ensuring reliability and peace of mind.",
  },
  {
    icon: (
      <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Time Efficient",
    description: "Plan your tasks and projects smartly to save valuable time and boost productivity.",
  },
  {
    icon: (
      <svg className="w-12 h-12 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M4 7h16M4 12h8m-8 5h16" />
      </svg>
    ),
    title: "Collaborative",
    description: "Work with peers effortlessly on projects, sharing ideas and resources seamlessly.",
  },
  {
    icon: (
      <svg className="w-12 h-12 text-sky-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 20v-4m0 0a4 4 0 0 1-4-4V4a4 4 0 0 1 8 0v8a4 4 0 0 1-4 4z" />
      </svg>
    ),
    title: "Journals & Research",
    description: "Access academic resources, publish findings, and support your MS dreams through SwapSmart’s research ecosystem.",
  },
];

export default function Features() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 via-purple-50 to-rose-100 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-violet-900 mb-6 tracking-tight font-[Poppins]">
          🔍 Explore What Makes <span className="text-pink-500">SwapSmart</span> Unique
        </h2>
        <p className="text-violet-700 text-lg max-w-3xl mx-auto mb-12 leading-relaxed font-[Nunito]">
          Designed for research, collaboration, and campus innovation — everything a student creator needs.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon, title, description }, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-purple-100 shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
            >
              <div className="mb-4 flex justify-center">{icon}</div>
              <h3 className="text-2xl font-bold text-purple-900 mb-2">{title}</h3>
              <p className="text-purple-700 leading-relaxed text-sm md:text-base">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
