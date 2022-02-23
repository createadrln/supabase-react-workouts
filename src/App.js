import "./index.css";
import { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { supabase } from "./supabaseClient";
import Auth from "./Auth";
import Account from "./Account";
import Header from "./components/Header";
import About from "./components/About";
import Workouts from "./components/Workouts";

export default function Home() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return !session ? (
    <Auth />
  ) : (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Account key={session.user.id} session={session} />} />
          <Route path="/workouts" element={<Workouts key={session.user.id} session={session} />} />
        </Routes>
      </Router>
    </Fragment>
  );
}
