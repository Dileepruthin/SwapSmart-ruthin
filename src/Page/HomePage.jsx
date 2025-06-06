import React from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import IdeaCard from "../components/IdeaCard.jsx";
import MissionSection from "../components/MissionSection.jsx";
import Features from "../components/Features.jsx";
import HowItWorksSection from "../components/HowItWorksSection.jsx";
import JoinCommunitySection from "../components/JoinCommunitySection.jsx";
import TestimonialSection from "../components/TestimonialSection.jsx";
import Footer from "../components/Footer.jsx";

export default function HomePage({ user }) {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-br from-violet-900 via-violet-800 to-violet-950 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 py-12 text-white">
          <p className="mb-4 text-right text-sm">👋 Welcome, {user?.user_metadata?.name || "User"} ({user?.email})</p>

          <Hero />
          <section className="my-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <IdeaCard
                title="Smart Study Planner"
                description="An app to organize your study sessions efficiently."
                author="Ruthin"
              />
              <IdeaCard
                title="Sustainable Campus"
                description="A platform to promote eco-friendly initiatives at college."
                author="Soniya"
              />
              <IdeaCard
                title="Project Swap"
                description="A collaborative tool to exchange project ideas."
                author="SwapSmart Team"
              />
            </div>
          </section>
          <MissionSection />
          <HowItWorksSection />
          <JoinCommunitySection />
        </div>
      </main>
      <TestimonialSection />
      <Footer />
    </>
  );
}
