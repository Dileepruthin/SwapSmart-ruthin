import React, { useState } from "react";

export default function Journals() {
  const [searchTerm, setSearchTerm] = useState("");

  const journals = [
    {
      name: "🦉 IEEE Access",
      description: "Open-access journal for cutting-edge research in engineering and technology.",
      link: "https://ieeeaccess.ieee.org/",
    },
    {
      name: "🦋 Elsevier - ScienceDirect",
      description: "Top-tier publisher with thousands of peer-reviewed engineering journals.",
      link: "https://www.sciencedirect.com/",
    },
    {
      name: "🪷 SpringerOpen Journals",
      description: "Free access to journals in AI, robotics, IoT, and more.",
      link: "https://www.springeropen.com/journals",
    },
    {
      name: "🐞 MDPI Sensors",
      description: "Focused journal for sensor tech, IoT, embedded systems.",
      link: "https://www.mdpi.com/journal/sensors",
    },
    {
      name: "🍃 Nature Electronics",
      description: "Advanced research in nano-electronics, circuits, and computing.",
      link: "https://www.nature.com/natelectron/",
    },
    {
      name: "🐢 ACM Digital Library",
      description: "Top research journal for CS, AI, machine learning, and software systems.",
      link: "https://dl.acm.org/",
    },
    {
      name: "🦜 Taylor & Francis Engineering Journals",
      description: "Journals covering electrical, civil, and computer science engineering.",
      link: "https://www.tandfonline.com/engineering",
    },
    {
      name: "🦌 IET Journals",
      description: "Professional engineering journals for power, control, and AI.",
      link: "https://ietresearch.onlinelibrary.wiley.com/",
    },
    {
      name: "🧠 IEEE Transactions on AI",
      description: "Focus on AI, ML, deep learning, and vision-based engineering research.",
      link: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=9428526",
    },
    {
      name: "🌻 Indian Journal of Engineering & Materials",
      description: "Government-authored journals for Indian engineering students.",
      link: "https://nopr.niscpr.res.in/handle/123456789/41",
    },
    // Additional 40 journals below
    {
      name: "⚙️ IEEE Transactions on Industrial Electronics",
      description: "Research on industrial electronics, automation, and control.",
      link: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=41",
    },
    {
      name: "🔧 Journal of Mechanical Engineering Science",
      description: "Mechanical engineering research including robotics and manufacturing.",
      link: "https://journals.sagepub.com/home/pim",
    },
    {
      name: "🛰️ IEEE Transactions on Aerospace and Electronic Systems",
      description: "Research in aerospace technology and electronic systems.",
      link: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=7",
    },
    {
      name: "💡 Energy and Buildings",
      description: "Journal focused on energy efficiency in buildings and sustainable tech.",
      link: "https://www.journals.elsevier.com/energy-and-buildings",
    },
    {
      name: "🔌 IEEE Power & Energy Society Journals",
      description: "Research on power generation, transmission, and energy systems.",
      link: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=15",
    },
    {
      name: "🧪 Journal of Chemical Engineering & Technology",
      description: "Covers chemical engineering advances and industrial applications.",
      link: "https://onlinelibrary.wiley.com/journal/15214125",
    },
    {
      name: "🌐 Computer Networks",
      description: "Research on networking technologies, protocols, and infrastructure.",
      link: "https://www.journals.elsevier.com/computer-networks",
    },
    {
      name: "📡 IEEE Communications Magazine",
      description: "Magazine featuring research on communication technologies and systems.",
      link: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=35",
    },
    {
      name: "📊 Journal of Big Data",
      description: "Research articles on big data analytics, processing, and applications.",
      link: "https://journalofbigdata.springeropen.com/",
    },
    {
      name: "🧬 IEEE Transactions on Neural Networks and Learning Systems",
      description: "Focus on neural networks, learning algorithms, and AI.",
      link: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=5962385",
    },
    {
      name: "🔭 Journal of Optics",
      description: "Research in optical engineering, photonics, and laser technology.",
      link: "https://iopscience.iop.org/journal/2040-8986",
    },
    {
      name: "🔬 Sensors and Actuators A: Physical",
      description: "Journal on sensors, actuators, and related physical principles.",
      link: "https://www.journals.elsevier.com/sensors-and-actuators-a-physical",
    },
    {
      name: "⚡ IEEE Transactions on Power Electronics",
      description: "Research in power electronics and electrical drives.",
      link: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=63",
    },
    {
      name: "🧮 ACM Transactions on Embedded Computing Systems",
      description: "Embedded systems research and applications.",
      link: "https://dl.acm.org/journal/tecs",
    },
    {
      name: "🔒 IEEE Transactions on Information Forensics and Security",
      description: "Research in security, cryptography, and information forensics.",
      link: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=10206",
    },
    {
      name: "💾 ACM Transactions on Database Systems",
      description: "Research in database management and data systems.",
      link: "https://dl.acm.org/journal/tods",
    },
    {
      name: "🛰️ Journal of Aerospace Engineering",
      description: "Covers aerospace engineering theory and applications.",
      link: "https://ascelibrary.org/journal/jaeied",
    },
    {
      name: "🌉 Structural Engineering International",
      description: "Research on civil and structural engineering innovations.",
      link: "https://www.istructe.org/journal/",
    },
    {
      name: "🚀 Journal of Spacecraft and Rockets",
      description: "Research articles on spacecraft technology and rocket science.",
      link: "https://arc.aiaa.org/journal/jsr",
    },
    {
      name: "🌡️ International Journal of Thermal Sciences",
      description: "Thermal sciences and heat transfer research.",
      link: "https://www.journals.elsevier.com/international-journal-of-thermal-sciences",
    },
    {
      name: "⚙️ Journal of Manufacturing Science and Engineering",
      description: "Manufacturing technology and process innovation research.",
      link: "https://asmedigitalcollection.asme.org/manufacturingscience",
    },
    {
      name: "📐 Journal of Computational Physics",
      description: "Computational methods and physics-based simulations.",
      link: "https://www.journals.elsevier.com/journal-of-computational-physics",
    },
    {
      name: "🧬 Journal of Biomedical Engineering",
      description: "Biomedical engineering and medical device research.",
      link: "https://journals.sagepub.com/home/jbe",
    },
    {
      name: "🛠️ Journal of Construction Engineering and Management",
      description: "Research on construction management and engineering practices.",
      link: "https://ascelibrary.org/journal/jcemd4",
    },
    {
      name: "📡 IEEE Journal on Selected Areas in Communications",
      description: "Specialized research in communication systems.",
      link: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=49",
    },
    {
      name: "🌊 Coastal Engineering Journal",
      description: "Research in coastal and ocean engineering.",
      link: "https://www.tandfonline.com/toc/ucnj20/current",
    },
    {
      name: "💡 Journal of Renewable and Sustainable Energy",
      description: "Research on renewable energy technologies and sustainability.",
      link: "https://aip.scitation.org/journal/rse",
    },
    {
      name: "🛡️ IEEE Security & Privacy",
      description: "Research on cybersecurity, privacy, and trust.",
      link: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=8013",
    },
    {
      name: "🖥️ ACM Transactions on Computer Systems",
      description: "Research on operating systems, distributed systems, and computer architecture.",
      link: "https://dl.acm.org/journal/tocs",
    },
    {
      name: "📊 Journal of Data and Information Quality",
      description: "Data quality and information management research.",
      link: "https://dl.acm.org/journal/jdiq",
    },
    {
      name: "⚙️ International Journal of Mechanical Sciences",
      description: "Research in mechanical sciences and engineering mechanics.",
      link: "https://www.journals.elsevier.com/international-journal-of-mechanical-sciences",
    },
    {
      name: "🧪 Chemical Engineering Journal",
      description: "Research in chemical engineering and applied chemistry.",
      link: "https://www.journals.elsevier.com/chemical-engineering-journal",
    },
    {
      name: "🔬 Journal of Materials Science",
      description: "Research on materials science and engineering.",
      link: "https://www.springer.com/journal/10853",
    },
    {
      name: "⚡ IEEE Transactions on Smart Grid",
      description: "Smart grid technology and electrical power systems.",
      link: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=5165412",
    },
    {
      name: "🧬 IEEE Transactions on Computational Biology and Bioinformatics",
      description: "Research on computational methods in biology and bioinformatics.",
      link: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=8858",
    },
    {
      name: "🛰️ Journal of Satellite Communications",
      description: "Satellite and wireless communication technology.",
      link: "https://onlinelibrary.wiley.com/journal/15422916",
    },
    {
      name: "📐 International Journal of Civil Engineering",
      description: "Research in civil engineering and infrastructure.",
      link: "https://www.springer.com/journal/40999",
    },
    {
      name: "🛠️ Journal of Structural Engineering",
      description: "Research on structures, materials, and engineering design.",
      link: "https://ascelibrary.org/journal/jsendh",
    },
    {
      name: "📡 IEEE Transactions on Vehicular Technology",
      description: "Vehicular technology and wireless communication research.",
      link: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=25",
    },
    {
      name: "🔬 Journal of Nanotechnology",
      description: "Research in nanoscience and nanotechnology.",
      link: "https://www.hindawi.com/journals/jnt/",
    },
    {
      name: "🛡️ ACM Transactions on Privacy and Security",
      description: "Research focused on privacy, security, and data protection.",
      link: "https://dl.acm.org/journal/tops",
    },
  ];

  // Filter journals based on search input
  const filteredJournals = journals.filter(({ name, description }) =>
    name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">Top 50 Useful Engineering Journals</h1>

      <div className="mb-6 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Search journals..."
          className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="space-y-6">
        {filteredJournals.length > 0 ? (
          filteredJournals.map((journal, index) => (
            <div
              key={index}
              className="border p-4 rounded-md shadow hover:shadow-lg transition bg-white cursor-pointer"
              onClick={() => window.open(journal.link, "_blank")}
              title={journal.description}
            >
              <h2 className="text-xl font-semibold text-violet-700">{journal.name}</h2>
              <p className="text-gray-700">{journal.description}</p>
              <a
                href={journal.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mt-2 inline-block"
                onClick={(e) => e.stopPropagation()} // prevent li click event
              >
                Visit Journal Website
              </a>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-10">No journals found matching your search.</p>
        )}
      </div>

      {/* Student Suggestion Section */}
      <div className="max-w-3xl mx-auto mt-12 p-6 bg-green-50 rounded-xl border border-green-200 shadow-md">
        <h3 className="text-xl font-semibold text-green-900 mb-3">🌟 For Students Interested in Journals:</h3>
        <p className="text-green-800 leading-relaxed text-lg">
          Reading research journals can open your mind to the latest breakthroughs, inspire project ideas, and deepen your understanding of complex topics.<br />
          Start with articles in your field of interest, take notes, and discuss findings with friends or professors.<br />
          Remember, every great engineer once began by exploring the unknown — your curiosity is your greatest tool! 🚀🌱<br />
          Keep exploring, keep growing!<br />
          ~TEAM SWAPSMART
        </p>
      </div>
    </div>
  );
}
