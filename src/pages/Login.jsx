import React, { useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      alert("Login failed: " + error.message);
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate("/"); // Redirect if already logged in
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-xl p-8 text-center w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-4">Welcome to SwapSmart</h1>
        <button
          onClick={handleGoogleLogin}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}
