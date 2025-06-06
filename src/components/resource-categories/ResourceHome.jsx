import React from "react";
import { useNavigate } from "react-router-dom";

export default function ResourceHome() {
  const navigate = useNavigate();

  const sections = [
    {
      id: "journals",
      title: "Journals",
      description: "Explore top engineering and technology journals.",
    },
    {
      id: "research-papers",
      title: "Research Papers",
      description: "Important research papers with summaries and links.",
    },
    {
      id: "notes",
      title: "Notes",
      description: "Study materials and notes for BTech subjects.",
    },
    {
      id: "useful-websites",
      title: "Useful Websites",
      description: "Helpful websites and tools for learning and projects.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-8 text-white">
      <h1 className="text-4xl font-bold mb-10 text-center">Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map(({ id, title, description }) => (
          <div
            key={id}
            onClick={() => navigate(`/resources/${id}`)}
            className="cursor-pointer p-6 border border-gray-700 rounded-lg shadow-md hover:shadow-xl transition bg-violet-900"
          >
            <h2 className="text-2xl font-semibold text-pink-400 mb-2">{title}</h2>
            <p className="text-gray-300">{description}</p>
            <p className="mt-3 text-blue-400 underline">Explore {title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
