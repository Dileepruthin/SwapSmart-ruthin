import React from "react";

export default function Journals() {
  const journals = [
    {
      name: "IEEE Access",
      description: "Open-access journal for cutting-edge research in engineering and technology.",
      link: "https://ieeeaccess.ieee.org/",
    },
    {
      name: "Elsevier - ScienceDirect",
      description: "Top-tier publisher with thousands of peer-reviewed engineering journals.",
      link: "https://www.sciencedirect.com/",
    },
    {
      name: "SpringerOpen Journals",
      description: "Free access to journals in AI, robotics, IoT, and more.",
      link: "https://www.springeropen.com/journals",
    },
    {
      name: "MDPI Sensors",
      description: "Focused journal for sensor tech, IoT, embedded systems.",
      link: "https://www.mdpi.com/journal/sensors",
    },
    {
      name: "Nature Electronics",
      description: "Advanced research in nano-electronics, circuits, and computing.",
      link: "https://www.nature.com/natelectron/",
    },
    {
      name: "ACM Digital Library",
      description: "Top research journal for CS, AI, machine learning, and software systems.",
      link: "https://dl.acm.org/",
    },
    {
      name: "Taylor & Francis Engineering Journals",
      description: "Journals covering electrical, civil, and computer science engineering.",
      link: "https://www.tandfonline.com/engineering",
    },
    {
      name: "IET Journals",
      description: "Professional engineering journals for power, control, and AI.",
      link: "https://ietresearch.onlinelibrary.wiley.com/",
    },
    {
      name: "IEEE Transactions on AI",
      description: "Focus on AI, ML, deep learning, and vision-based engineering research.",
      link: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=9428526",
    },
    {
      name: "Indian Journal of Engineering & Materials",
      description: "Government-authored journals for Indian engineering students.",
      link: "https://nopr.niscpr.res.in/handle/123456789/41",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">Top 10 Useful Engineering Journals</h1>
      <div className="space-y-6">
        {journals.map((journal, index) => (
          <div
            key={index}
            className="border p-4 rounded-md shadow hover:shadow-lg transition bg-white"
          >
            <h2 className="text-xl font-semibold text-violet-700">{journal.name}</h2>
            <p className="text-gray-700">{journal.description}</p>
            <a
              href={journal.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mt-2 inline-block"
            >
              Visit Journal Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
