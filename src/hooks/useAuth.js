import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

export default function useAuth() {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      setSession(session);
      if (session?.user) {
        const { data } = await supabase.auth.getUser();
        setUser(data.user);
        await saveUserToDB(data.user);
      }
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      if (session?.user) {
        setUser(session.user);
        await saveUserToDB(session.user);
      }
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const saveUserToDB = async (user) => {
    const { email, user_metadata } = user;
    const full_name = user_metadata?.name || "Anonymous";

    const { error } = await supabase
      .from("users")
      .upsert({ id: user.id, email, full_name });

    if (error) console.log("User DB Save Error:", error.message);
  };

  return { session, user, loading };
}
