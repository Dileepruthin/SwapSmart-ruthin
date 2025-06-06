import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function IdeaDetails() {
  const { id } = useParams(); // Get the idea ID from the URL
  const navigate = useNavigate();

  // Fake data for now — replace with Supabase fetch later
  const ideaData = {
    "1": {
      title: "Smart Study Planner",
      description: "An app to organize your study sessions efficiently.",
      author: "Ruthin",
    },
    "2": {
      title: "Sustainable Campus",
      description: "A platform to promote eco-friendly initiatives at college.",
      author: "Soniya",
    },
    "3": {
      title: "Project Swap",
      description: "A collaborative tool to exchange project ideas.",
      author: "SwapSmart Team",
    },
  };

  const idea = ideaData[id];

  if (!idea) {
    return (
      <div className="text-white p-10">
        <h1 className="text-2xl mb-4">Idea Not Found</h1>
        <button onClick={() => navigate(-1)} className="underline text-pink-400">
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="text-white p-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{idea.title}</h1>
      <p className="mb-4">{idea.description}</p>
      <p className="italic text-sm text-gray-300">Submitted by {idea.author}</p>
      <button
        onClick={() => navigate("/dashboard")}
        className="mt-6 bg-pink-500 px-4 py-2 rounded-full hover:bg-pink-600"
      >
        Back to Dashboard
      </button>
    </div>
  );
}
