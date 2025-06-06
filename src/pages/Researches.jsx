import React, { useState } from "react";

export default function Researches() {
  const [searchTerm, setSearchTerm] = useState("");

  const researchLinks = [
    { name: "arXiv.org", url: "https://arxiv.org", description: "Free preprints in Computer Science & Engineering" },
    { name: "DeepMind Research", url: "https://deepmind.com/research", description: "AI breakthroughs and papers" },
    { name: "OpenAI Research", url: "https://openai.com/research", description: "State-of-the-art ML & language models" },
    { name: "Google AI", url: "https://ai.google/research/", description: "Innovations and research from Google AI" },
    { name: "MIT CSAIL", url: "https://www.csail.mit.edu/research", description: "Computer Science and AI Lab at MIT" },
    { name: "Stanford AI Lab", url: "https://ai.stanford.edu/research/", description: "Stanford's AI research and projects" },
    { name: "Microsoft Research", url: "https://www.microsoft.com/en-us/research/", description: "Research in AI, systems, and more" },
    { name: "IBM Research AI", url: "https://research.ibm.com/artificial-intelligence/", description: "IBM’s AI advancements and papers" },
    { name: "NeurIPS Proceedings", url: "https://nips.cc/Conferences/2023/Schedule", description: "Top ML and AI conference papers" },
    { name: "ICLR Conference", url: "https://iclr.cc/", description: "International Conference on Learning Representations" },
    { name: "CVPR", url: "https://cvpr2024.thecvf.com/", description: "Leading conference for computer vision" },
    { name: "ACL Anthology", url: "https://aclanthology.org/", description: "Research papers on computational linguistics" },
    { name: "IEEE Xplore", url: "https://ieeexplore.ieee.org/", description: "Vast library of engineering and technology papers" },
    { name: "ScienceDirect", url: "https://www.sciencedirect.com/", description: "Access to thousands of peer-reviewed journals" },
    { name: "SpringerOpen", url: "https://www.springeropen.com/journals", description: "Open access journals across disciplines" },
    { name: "Nature AI", url: "https://www.nature.com/subjects/artificial-intelligence", description: "Nature’s AI research highlights" },
    { name: "ACM Digital Library", url: "https://dl.acm.org/", description: "Extensive research in computing and IT" },
    { name: "Google Scholar", url: "https://scholar.google.com/", description: "Search engine for scholarly literature" },
    { name: "Papers with Code", url: "https://paperswithcode.com/", description: "Research papers with code implementations" },
    { name: "SwapSmart Project", url: "https://www.linkedin.com/in/d-ruthin-a360792b2/", description: "Our SWAPSMART creator" },
    // ... Add the remaining 55 links here
  ];

  const filteredLinks = researchLinks.filter(({ name, description }) =>
    name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl text-white font-sans" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <h1 className="text-4xl font-extrabold text-center mb-10 tracking-wide drop-shadow-lg">
        🔍 Important Research Papers & Resources
      </h1>

      <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto text-center leading-relaxed">
        Explore the most influential and up-to-date research links in Artificial Intelligence, Machine Learning, Engineering, and Technology.
        These resources will help you dive deep into academic breakthroughs and real-world applications.
      </p>

      <div className="mb-8 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Search research links..."
          className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
        {filteredLinks.map(({ name, url, description }, index) => (
          <li
            key={index}
            className="bg-gray-800 hover:bg-gray-700 rounded-lg p-5 transition-shadow shadow-md cursor-pointer"
            onClick={() => window.open(url, "_blank")}
            title={description}
          >
            <h3 className="text-xl font-semibold text-blue-400 hover:underline">{name}</h3>
            <p className="text-gray-400 mt-1">{description}</p>
          </li>
        ))}
      </ul>

      <div className="max-w-3xl mx-auto bg-gradient-to-tr from-blue-900 to-indigo-900 rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-white text-center tracking-wide">💡 Advice for Students</h2>
        <p className="text-gray-200 text-lg leading-relaxed">
          Engaging with research papers is a game-changer for your academic and professional growth. Start by choosing topics that excite you, then build your knowledge step by step. Don’t just read—challenge yourself to implement ideas, discuss with peers, and relate findings to your projects.<br/><br/>
          Remember, persistence and curiosity fuel innovation. Your journey through research today will shape the technology of tomorrow! 🚀✨<br/><br/>
          And hey, don’t forget to join our family <strong className="text-blue-400 underline cursor-pointer" onClick={() => window.open("https://chat.whatsapp.com/K9il463Joy1Ex3M9erhMMP", "_blank")}>SwapSmart</strong> — our student-driven platform for collaborative project work and idea sharing.
        </p>
      </div>
    </div>
  );
}
