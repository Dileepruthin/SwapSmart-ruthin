import React from "react";

const steps = [
  {
    title: "Discover Ideas",
    description: "Explore innovative student projects and ideas within the community.",
    icon: (
      <svg
        className="w-14 h-14 text-pink-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Collaborate Seamlessly",
    description: "Connect with teammates and work on projects together effortlessly.",
    icon: (
      <svg
        className="w-14 h-14 text-purple-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21a8.38 8.38 0 0 1 13 0" />
      </svg>
    ),
  },
  {
    title: "Publish & Grow",
    description: "Showcase your research and projects, and grow your professional network.",
    icon: (
      <svg
        className="w-14 h-14 text-blue-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 20h9" />
        <path d="M16 4h4v4" />
        <path d="M4 12h4v4" />
        <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      </svg>
    ),
  },
];

export default function OnboardingSection() {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-20 px-6 md:px-20 rounded-lg shadow-xl max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold mb-12 text-center font-fantasy">
        How SwapSmart Works
      </h2>

      <div className="grid gap-12 md:grid-cols-3">
        {steps.map(({ title, description, icon }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white/10 rounded-xl p-8 text-center hover:bg-white/20 transition cursor-default"
          >
            <div className="mb-6">{icon}</div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm md:text-base max-w-xs">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
