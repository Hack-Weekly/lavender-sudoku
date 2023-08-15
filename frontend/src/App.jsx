import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LandingPage } from './pages/LandingPage';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<LandingPage />} />
   </Routes>
   </>
  );
}

export default App;
