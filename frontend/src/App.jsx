import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import Play from "./pages/Play";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </>
  );
}

export default App;
