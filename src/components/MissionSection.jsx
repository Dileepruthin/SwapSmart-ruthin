// src/components/MissionSection.jsx
import React from "react";
import { motion } from "framer-motion";

export default function MissionSection() {
  return (
    <motion.section
      className="bg-gradient-to-r from-purple-800 via-indigo-900 to-purple-800 rounded-3xl border-4 border-fuchsia-500 shadow-2xl my-20 px-8 py-12 text-white"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-pink-300 mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Our Mission
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto text-center leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
      To empower students with futuristic knowledge.
SwapSmart is on a mission to provide a smart, curated academic platform where students can access the most valuable journals, research PDFs, and cutting-edge technical concepts — all in one place.
We aim to turn curiosity into creativity, and learning into innovation.


      </motion.p>
    </motion.section>
  );
}
