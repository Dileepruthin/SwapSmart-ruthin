import React from "react";

export default function Notes() {
  const notes = [
    {
      semester: "📘 1st Year - Sem 1",
      topics: [
        "📐 Engineering Mathematics - I",
        "🔌 Basic Electrical Engineering",
        "🐍 Python for Problem Solving",
        "🧪 Engineering Chemistry",
        "📏 Engineering Graphics",
      ],
    },
    {
      semester: "📗 1st Year - Sem 2",
      topics: [
        "📐 Engineering Mathematics - II",
        "📂 Data Structures using C",
        "🔭 Engineering Physics",
        "🌱 Environmental Science",
        "📶 Basic Electronics",
      ],
    },
    {
      semester: "📕 2nd Year - Sem 3",
      topics: [
        "📊 Mathematics - III (Transforms & Probability)",
        "🧑‍💻 Java Programming (OOP)",
        "🗃️ DBMS (Database Management Systems)",
        "⚙️ Digital Logic Design",
        "🖥️ Operating Systems",
      ],
    },
    {
      semester: "📙 2nd Year - Sem 4",
      topics: [
        "🌐 Computer Networks",
        "🧠 Theory of Computation",
        "🔧 Microprocessors & Interfacing",
        "🌍 Web Dev Basics (HTML/CSS/JS)",
        "📌 Mini Project Guide (PDF)",
      ],
    },
    {
      semester: "🌀 3rd & 4th Year",
      topics: [
        "🧠 Machine Learning (Python)",
        "☁️ Cloud Computing",
        "🔐 Cyber Security",
        "📊 Data Science (NumPy, Pandas)",
        "🎓 Final Year Major Project - Roadmap",
      ],
    },
  ];

  // Roadmap steps
  const roadmapSteps = [
    {
      icon: "📚",
      title: "Learn Core Subjects",
      description: "Master your semester-wise topics and fundamentals.",
    },
    {
      icon: "🔍",
      title: "Explore Research & Journals",
      description: "Stay updated with latest trends and deepen your knowledge.",
    },
    {
      icon: "🛠️",
      title: "Build Projects & Collaborate",
      description: "Apply your skills through practical projects and teamwork.",
    },
    {
      icon: "🤝",
      title: "Engage in Community & Networking",
      description: "Connect with peers and mentors for growth and opportunities.",
    },
    {
      icon: "🧠",
      title: "Develop Soft Skills & Mindset",
      description: "Work on communication, persistence, and leadership.",
    },
    {
      icon: "🔥",
      title: "Stay Consistent & Curious",
      description: "Keep learning and pushing boundaries every day.",
    },
    {
      icon: "🌱",
      title: "Share Knowledge & Inspire Others",
      description: "Teach and motivate others to grow alongside you.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-lime-100 p-6 md:p-10 font-sans text-gray-800">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-600 mb-2 drop-shadow-md">
          🎓 Smart Study Notes for BTech
        </h1>
        <p className="text-lg text-rose-500 max-w-2xl mx-auto">
          Unlock your best version — semester-wise PDFs and summaries loved by real students.. 🌸
        </p>
        <p className="italic text-pink-400 mt-4 font-medium">
          “Every formula you solve is a silent flower blooming 🌼… maybe someone notices.”
        </p>
      </div>

      {/* Notes List */}
      <div className="max-w-5xl mx-auto space-y-10">
        {notes.map((note, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-pink-300 hover:scale-[1.02] transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">{note.semester}</h2>
            <ul className="list-disc pl-6 space-y-2">
              {note.topics.map((topic, i) => (
                <li key={i} className="text-gray-700 flex justify-between items-center">
                  <span>{topic}</span>
                  <a
                    href="#"
                    className="text-blue-500 underline text-sm hover:text-blue-700"
                    onClick={(e) => e.preventDefault()}
                  >
                    pdf uploaded soon
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Roadmap of Success as a premium vertical timeline */}
      <div className="max-w-4xl mx-auto mt-20 p-8 bg-gradient-to-br from-purple-900 via-indigo-900 to-black rounded-xl shadow-2xl border border-indigo-800 relative text-white">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-14 text-center">
          🚀 Roadmap to Success through SwapSmart
        </h2>

        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-24 bottom-10 w-1.5 bg-gradient-to-b from-pink-400 via-purple-400 to-indigo-400 rounded-full transform -translate-x-1/2"></div>

        {/* Timeline steps */}
        <div className="relative space-y-20">
          {roadmapSteps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`flex items-center w-full ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`relative w-1/2 ${
                    isLeft ? "pr-10 text-right" : "pl-10 text-left"
                  }`}
                >
                  {/* Connector circle */}
                  <div
                    className={`absolute top-5 ${
                      isLeft ? "right-[-44px]" : "left-[-44px]"
                    } w-14 h-14 rounded-full flex items-center justify-center
                    bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-700 shadow-lg
                    ring-4 ring-indigo-900 text-3xl`}
                  >
                    {step.icon}
                  </div>

                  {/* Content card */}
                  <div
                    className={`inline-block max-w-md p-6 rounded-2xl
                    bg-white bg-opacity-10 backdrop-blur-md border border-indigo-700
                    shadow-md hover:shadow-xl transition-transform duration-300
                    ${isLeft ? "origin-right hover:scale-105" : "origin-left hover:scale-105"}`}
                  >
                    <h3 className="text-2xl font-bold mb-2 text-pink-300">{step.title}</h3>
                    <p className="text-indigo-200">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Suggestions */}
      <div className="text-center mt-16 text-pink-700 text-lg font-medium max-w-3xl mx-auto">
        💬 <b>SwapSmart Suggests:</b> Learn for yourself, but don’t hesitate to lift others. True brilliance glows brightest when shared — maybe even inspiring someone like “S” who sees your efforts quietly 🌸
      </div>

      <div className="mt-6 text-center text-sm text-amber-600 italic">
        🌿 “You don't have to be perfect — just consistent, curious, and kind.”
      </div>
    </div>
  );
}
