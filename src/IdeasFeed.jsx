import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

export default function IdeasFeed() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const fetchIdeas = async () => {
      const { data, error } = await supabase
        .from("ideas")
        .select("*")
        .eq("visibility", "public")
        .order("created_at", { ascending: false });

      if (error) console.error(error);
      else setIdeas(data);
    };
    fetchIdeas();
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Community Ideas</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {ideas.map((idea) => (
          <div key={idea.id} className="p-4 bg-white rounded shadow-md">
            <h3 className="text-xl font-semibold">{idea.title}</h3>
            <p className="text-gray-600">{idea.description}</p>
            <p className="text-sm text-gray-400 mt-2">Posted on: {new Date(idea.created_at).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
