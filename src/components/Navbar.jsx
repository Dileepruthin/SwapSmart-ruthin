import React, { useState } from "react";

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-violet-950 shadow-md relative">
      <div className="flex items-center gap-2">
        <img
          src="/logo.png"
          alt="SwapSmart Logo"
          className="h-10 w-10 rounded-full"
        />
        <span className="text-white text-xl font-bold tracking-wide">
          SwapSmart
        </span>
      </div>

      <ul className="flex gap-6 items-center">
        <li
        
          className="relative"
          onMouseEnter={() => setAboutOpen(true)}
          onMouseLeave={() => setAboutOpen(false)}
        >
          <button
            className="relative px-6 py-2 font-semibold text-white rounded-full overflow-hidden focus:outline-none about-me-btn"
            aria-haspopup="true"
            aria-expanded={aboutOpen}
          >
            About Me
            {/* Glowing border layers */}
            <span className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-pink-500 animate-pulse-border"></span>
            <span className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-yellow-400 animate-wave-border delay-2000"></span>
          </button>

          {aboutOpen && (
            <div
              className="absolute top-full mt-2 w-72 bg-violet-900 text-white rounded-md shadow-lg p-4 text-sm z-10"
              style={{ transformOrigin: "top center" }}
            >
              <p>
                Hi, I’m <strong>Ruthin</strong>, the creator and heart behind
                SwapSmart. Passionate about AI/ML and building community-driven
                projects that empower students to collaborate, share ideas,
                and grow.
              </p>
            </div>
          )}
        </li>
        

        <li>
          <a
            href="#get-started"
            className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-full text-white font-semibold shadow-md"
          >
            SS
          </a>
        </li>
      </ul>

      {/* Add CSS animation styles in your global CSS or inside a <style> tag */}
      <style>{`
        .about-me-btn {
          position: relative;
          background: linear-gradient(90deg, #e91e63, #fbc02d);
          box-shadow: 0 0 8px #e91e63, 0 0 20px #fbc02d;
          z-index: 0;
          cursor: pointer;
        }
        .about-me-btn span {
          pointer-events: none;
          z-index: -1;
        }
        .animate-pulse-border {
          animation: pulseBorder 3s infinite ease-in-out;
          border-color: #e91e63;
        }
        .animate-wave-border {
          animation: waveBorder 3s infinite ease-in-out;
          border-color: #fbc02d;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
        @keyframes pulseBorder {
          0%, 100% {
            box-shadow: 0 0 6px #e91e63, 0 0 12px #f48fb1;
            opacity: 1;
          }
          50% {
            box-shadow: 0 0 20px #e91e63, 0 0 30px #f48fb1;
            opacity: 0.7;
          }
        }
        @keyframes waveBorder {
          0%, 100% {
            box-shadow: 0 0 6px #fbc02d, 0 0 15px #fff176;
            opacity: 1;
          }
          50% {
            box-shadow: 0 0 25px #fbc02d, 0 0 40px #fff176;
            opacity: 0.6;
          }
        }
      `}</style>
    </nav>
  );
}
