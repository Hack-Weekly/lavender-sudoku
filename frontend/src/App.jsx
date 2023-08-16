import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import Play from "./pages/Play";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { useEffect, useState } from "react";
import { getProfile } from "./services/endpoints/users";
import { isAuth } from "./services/utils/isAuth";

function App() {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profile, setProfile] = useState(null);
  useEffect(()=>{
    const checkAuth = async () => {
      try {
        setIsAuthenticated(await isAuth());
        const res = await getProfile();
        setProfile(res.profile);
      } catch (error) {
        console.error(error);
      }
    };
    checkAuth();
  },[location]);
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/play" element={<Play />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
