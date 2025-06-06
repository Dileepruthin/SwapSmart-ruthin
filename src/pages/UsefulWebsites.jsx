import React from "react";

export default function UsefulWebsites() {
  const websites = [
    {
      name: "GeeksforGeeks",
      description: "Master Data Structures, Algorithms & core CS subjects.",
      link: "https://www.geeksforgeeks.org/",
    },
    {
      name: "W3Schools",
      description: "Learn HTML, CSS, JS – the foundation of the web.",
      link: "https://www.w3schools.com/",
    },
    {
      name: "LeetCode",
      description: "Sharpen your problem-solving skills with coding challenges.",
      link: "https://leetcode.com/",
    },
    {
      name: "GitHub",
      description: "Explore real-world code and contribute to open-source.",
      link: "https://github.com/",
    },
    {
      name: "Overleaf",
      description: "Write clean reports and papers in LaTeX.",
      link: "https://www.overleaf.com/",
    },
    {
      name: "Notion",
      description: "Organize your life, study plans, and tech projects beautifully.",
      link: "https://www.notion.so/",
    },
    {
      name: "FreeCodeCamp",
      description: "Free tutorials to become a full-stack developer.",
      link: "https://www.freecodecamp.org/",
    },
    {
      name: "Coursera",
      description: "Courses from IITs, Stanford, and Google – all in one place.",
      link: "https://www.coursera.org/",
    },
    {
      name: "Kaggle",
      description: "Build ML skills with datasets, competitions, and notebooks.",
      link: "https://www.kaggle.com/",
    },
    {
      name: "Canva",
      description: "Design stunning presentations, resumes, and posters easily.",
      link: "https://www.canva.com/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-rose-100 p-8 font-sans">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-2">🔗 Top Useful Websites</h1>
        <p className="text-indigo-600 text-lg max-w-2xl mx-auto">
          Tools every BTech student should bookmark 💡 — curated with ❤️ from SwapSmart.
        </p>
        <div className="mt-4 italic text-rose-500 font-medium text-sm">
          “Some links lead to websites. Some lead to dreams.” — Inspired by the grace of S 🌸
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {websites.map((site, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition duration-300 border-l-4 border-pink-300"
          >
            <h2 className="text-2xl font-semibold text-indigo-800 mb-1">{site.name}</h2>
            <p className="text-gray-700 mb-2">{site.description}</p>
            <a
              href={site.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 font-medium underline hover:text-pink-800"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-purple-700 text-md">
        💬 <b>SwapSmart Suggests:</b> Don’t just browse these links — make them part of your daily growth routine.  
        <br />
        Consistency, curiosity, and compassion will take you far — just like someone who inspires this platform silently 🌿
      </div>
    </div>
  );
}
