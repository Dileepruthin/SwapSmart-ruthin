import React from "react";
import { useNavigate } from "react-router-dom";

export default function ResourceHome() {
  const navigate = useNavigate();

  const sections = [
    {
      id: "journals",
      title: "🦊 Journals",
      description: "Dive into top engineering and tech journals shared by students.",
      bg: "bg-amber-100",
    },
    {
      id: "researches",
      title: "🦉 Researches",
      description: "Explore real-world research papers with student-friendly notes.",
      bg: "bg-sky-100",
    },
    {
      id: "notes",
      title: "🐿️ Notes",
      description: "BTech notes shared by toppers & friendly peers.",
      bg: "bg-lime-100",
    },
    {
      id: "useful-websites",
      title: "🐇 Useful Websites",
      description: "Cool, helpful tools & websites to make your journey easier.",
      bg: "bg-rose-100",
    },
       {
      id: "SelfGrowth",
      title: "💖 SelfGrowth",
      description: "Tips, blogs & habits for confidence, focus, and positivity.",
      color: "from-rose-100 to-rose-300",
    },
  ];

  const quotes = [
    "“Grow through what you go through.”",
    "“Even the smallest step towards your dream matters.”",
    "“Kindness, creativity, and knowledge make the perfect blend.”",
    "“In a world full of noise, choose to learn with love.”",
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-50 to-green-200 p-6 md:p-12 font-sans"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/green-dust-and-scratches.png')",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-2">
          🌿 Explore Our Friendly Resources
        </h1>
        <p className="text-green-700 max-w-2xl mx-auto text-lg">
          Curated with love for every curious BTech soul — nature-inspired, student-powered.
        </p>
        <div className="mt-6 italic text-green-600 font-medium text-md">
          {
            quotes[Math.floor(Math.random() * quotes.length)] // Random quote for every visit
          }
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {sections.map(({ id, title, description, bg }) => (
          <div
            key={id}
            onClick={() => navigate(`/resources/${id}`)}
            className={`cursor-pointer p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 ${bg} border-2 border-green-300`}
          >
            <h2 className="text-2xl font-semibold text-green-900 mb-2">{title}</h2>
            <p className="text-green-800">{description}</p>
            <div className="mt-3 text-green-600 font-medium underline hover:text-green-800">
              Tap to explore
            </div>
          </div>
        ))}
      </div>

      {/* Personal Advice Section */}
      <div className="max-w-5xl mx-auto mt-16 p-8 bg-green-50 rounded-3xl border border-green-300 shadow-lg text-green-900">
        <h2 className="text-3xl font-bold mb-4 text-center">💡 Personal Advice from SwapSmart</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto text-center">
          Always stay curious and never hesitate to ask questions. Collaboration is the key — use SwapSmart to connect, share ideas, and build projects together. Remember, consistent small steps beat occasional big leaps. Prioritize understanding over memorization, and focus on applying knowledge in real projects.
          <br /><br />
          Your journey as a BTech student is unique — embrace challenges as learning opportunities, and keep your passion alive. Keep exploring, keep growing! 🌱
        </p>
      </div>
    </div>
  );
}
