import React from "react";

export default function SelfGrowth() {
  const tips = [
    {
      title: "🌱 Daily Habit: Digital Detox",
      description: "Spend 30 minutes a day without screens. Step outside, breathe, reflect.",
    },
    {
      title: "📚 Weekly Read: Atomic Habits",
      description: "Learn how tiny changes can lead to massive personal growth.",
    },
    {
      title: "🧘 Morning Focus",
      description: "Start your day with 5 minutes of journaling or meditation for mental clarity.",
    },
    {
      title: "🎯 Goal Reminder",
      description: "Write your monthly goal and stick it on your wall. Visual targets boost action!",
    },
    {
      title: "💬 Quote of the Week",
      description: "“Confidence comes not from always being right, but from not fearing to be wrong.”",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-green-100 via-lime-50 to-emerald-100 p-6 md:p-12 font-sans"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/green-fibers.png')",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="max-w-4xl mx-auto bg-white bg-opacity-80 p-8 rounded-3xl shadow-lg border border-green-200">
        <h1 className="text-4xl font-bold text-center text-emerald-800 mb-6">🌿 Self-Growth Zone</h1>
        <p className="text-center text-emerald-700 mb-8 text-lg">
          Tips, blogs & habits for confidence, focus, and positivity. Created with heart for growing  minds.
        </p>

        <div className="space-y-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="p-5 bg-white bg-opacity-90 rounded-xl shadow hover:shadow-xl border-l-4 border-green-300 transition"
            >
              <h2 className="text-xl font-semibold text-green-800">{tip.title}</h2>
              <p className="text-gray-700">{tip.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center italic text-emerald-700 font-medium">
  🐦 “Take care of yourself. You’re not a machine. You’re someone’s inspiration.” – <b>SwapSmart</b><br />
  <span className="text-sm text-green-500">Inspired by the grace and calm of a soul whose name begins with S 🌸</span>
</div>

      </div>
    </div>
  );
}
