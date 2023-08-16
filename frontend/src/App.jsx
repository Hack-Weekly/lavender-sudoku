import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import Play from "./pages/Play";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { useEffect } from "react";
import { getProfile } from "./services/endpoints/users";

function App() {
  const location = useLocation();
  useEffect(()=>{
    
    const checkAuth = async () => {
      try {
        const res = await getProfile();
      } catch (error) {
        console.error(error);
      } finally {
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
