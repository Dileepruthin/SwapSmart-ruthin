import React from "react";
import { motion } from "framer-motion";

export default function JoinCommunitySection() {
  return (
    <section className="text-white py-20 px-6 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-800 to-purple-950 shadow-2xl my-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-500">
          Join the SwapSmart Community
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          Be part of a network that shares, builds, and learns together. Post your ideas, join study groups, and collaborate on innovative projects.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white text-lg font-semibold transition-all duration-300 shadow-lg">
            Post an Idea
          </button>
          <button className="px-6 py-3 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-700 text-white text-lg font-semibold transition-all duration-300 shadow-lg">
            Join Study Group
          </button>
          <button className="px-6 py-3 rounded-xl bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold transition-all duration-300 shadow-lg">
            Explore Projects
          </button>
        </div>
      </motion.div>
    </section>
  );
}
