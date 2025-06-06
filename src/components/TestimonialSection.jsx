import React from "react";

const testimonials = [
  {
    name: "Ruthin D.",
    feedback: "SwapSmart helped me find teammates and bring my project idea to life!",
    role: "AI/ML Enthusiast",
  },
  {
    name: "Lokesh O.",
    feedback: "The best place to share ideas and grow your skills together.",
    role: "Web Dev Learner",
  },
  {
    name: "Easwar M.B.",
    feedback: "It's not just an app — it's a student movement. Absolutely love it!",
    role: "NSS Member",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900">
      <div className="max-w-6xl mx-auto px-6 text-white">
        <h2 className="text-4xl font-bold text-center mb-12 font-bold">
          What Students Say
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="anime-card bg-gradient-to-tr from-purple-700 via-purple-600 to-indigo-700 border border-purple-400 p-6 rounded-2xl shadow-lg backdrop-blur-md transform transition-transform duration-500 hover:scale-105 hover:shadow-neon"
            >
              <p className="text-lg italic mb-4 anime-text-shadow">“{t.feedback}”</p>
              <div className="text-sm font-semibold text-purple-200 anime-name">{t.name}</div>
              <div className="text-xs text-purple-400">{t.role}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

        .font-anime {
          font-family: 'Press Start 2P', cursive;
          letter-spacing: 2px;
          text-shadow: 2px 2px 8px rgba(255, 0, 255, 0.6);
        }

        .anime-card {
          animation: floatAnime 6s ease-in-out infinite;
          position: relative;
          box-shadow:
            0 0 8px rgba(170, 0, 255, 0.7),
            0 0 20px rgba(255, 0, 255, 0.5);
          background-blend-mode: screen;
          cursor: default;
        }

        .anime-card:hover {
          box-shadow:
            0 0 12px rgba(255, 0, 255, 1),
            0 0 40px rgba(255, 0, 255, 0.8),
            0 0 60px rgba(255, 0, 255, 0.6);
        }

        .hover\\:shadow-neon:hover {
          box-shadow:
            0 0 12px #ff00ff,
            0 0 24px #ff00ff,
            0 0 40px #ff00ff,
            0 0 60px #e600e6;
        }

        @keyframes floatAnime {
          0%, 100% {
            transform: translateY(0);
            filter: drop-shadow(0 0 3px #d700d7);
          }
          50% {
            transform: translateY(-12px);
            filter: drop-shadow(0 0 8px #ff00ff);
          }
        }

        .anime-text-shadow {
          text-shadow:
            1px 1px 2px rgba(255, 0, 255, 0.7),
            0 0 5px rgba(255, 0, 255, 0.4);
        }

        .anime-name {
          text-shadow:
            1px 1px 4px rgba(255, 102, 255, 0.8);
          letter-spacing: 1px;
        }
      `}</style>
    </section>
  );
}
