import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import Play from "./pages/Play";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { useEffect, useState } from "react";
import { getProfile } from "./services/endpoints/users";
import { isAuth } from "./services/utils/isAuth";
import { Loading } from "./components/Loading";

function App() {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profile, setProfile] = useState(null);
  const [lastGame, setLastGame] = useState(0);

  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    const checkAuthAndFetchProfile = async () => {
      try {
        const isAuthenticated = await isAuth();
        if (isAuthenticated) {
          const res = await getProfile();
          setProfile(res.user);
          setLastGame(res.last_game);
        }
        setIsAuthenticated(isAuthenticated);
      } catch (error) {
        console.error(error);
      } finally {
        setIsloading(false);
      }
    };

    checkAuthAndFetchProfile();
  }, [location]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              isAuth={isAuthenticated}
              profile={profile}
              isLoading={isLoading}
            />
          }
        />
        <Route path="/play" element={<Play isAuth={isAuthenticated} profile={profile} lastGame={lastGame}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
