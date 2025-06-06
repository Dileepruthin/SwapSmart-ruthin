import React from "react";
import { useNavigate } from "react-router-dom";

export default function IdeaCard({ id, title, description, author }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/idea/${id}`)}
      className="cursor-pointer bg-violet-800 hover:bg-violet-700 transition p-6 rounded-lg shadow-lg text-white"
    >
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="mb-4 text-gray-300">{description}</p>
      <p className="italic text-sm text-pink-400 hover:text-pink-300 transition">
        Submitted by <span className="font-bold">{author}</span>
      </p>
    </div>
  );
}
