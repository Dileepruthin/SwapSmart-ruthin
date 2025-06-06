import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { supabase } from "./utils/supabaseClient";

import Login from "./pages/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import IdeaDetails from "./components/IdeaDetails.jsx";
import SubmitIdea from "./components/submitIdea.jsx";
import IdeaCard from "./components/IdeaCard.jsx";
import MissionSection from "./components/MissionSection.jsx";
import Features from "./components/Features.jsx";
import HowItWorksSection from "./components/HowItWorksSection.jsx";
import JoinCommunitySection from "./components/JoinCommunitySection.jsx";
import TestimonialSection from "./components/TestimonialSection.jsx";
import Footer from "./components/Footer.jsx";

// ✅ Resource Pages
import ResourceHome from "./components/resource-categories/ResourceHome.jsx";
import Journals from "./pages/Journals.jsx";
import Researches from "./pages/Researches.jsx";
import Notes from "./pages/Notes.jsx";
import UsefulWebsites from "./pages/UsefulWebsites.jsx"; // ✅ NEW
import SelfGrowth from"./pages/Selfgrowth.jsx";
function Dashboard({ user }) {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-br from-violet-900 via-violet-800 to-violet-950 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 py-12 text-white">
          <div className="text-right text-sm mb-4">
            👋 Welcome, {user?.user_metadata?.name || "User"} ({user?.email})
          </div>

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

export default function App() {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    };

    checkSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        <div className="text-lg">Checking session...</div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Redirect root to dashboard or login */}
        <Route
          path="/"
          element={session ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
        />

        {/* Main dashboard */}
        <Route
          path="/dashboard"
          element={session ? <Dashboard user={user} /> : <Navigate to="/login" />}
        />

        {/* Idea details */}
        <Route
          path="/idea/:id"
          element={session ? <IdeaDetails /> : <Navigate to="/login" />}
        />

        {/* Submit idea */}
        <Route
          path="/submit"
          element={session ? <SubmitIdea user={user} /> : <Navigate to="/login" />}
        />

        {/* Features Page */}
        <Route
          path="/features"
          element={session ? <Features /> : <Navigate to="/login" />}
        />

        {/* ✅ Resource Routes */}
        <Route path="/resources" element={<ResourceHome />} />
        <Route path="/resources/journals" element={<Journals />} />
        <Route path="/resources/researches" element={<Researches />} />
        <Route path="/resources/notes" element={<Notes />} />
        <Route path="/resources/useful-websites" element={<UsefulWebsites />} /> {/* ✅ NEW */}
        <Route path="/resources/selfgrowth" element={<SelfGrowth />} /> 
      </Routes>
    </BrowserRouter>
  );
}
