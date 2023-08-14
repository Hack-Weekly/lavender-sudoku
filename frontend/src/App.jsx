import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LandingPage } from './pages/LandingPage';
import { FormPage } from './pages/FormPage';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<LandingPage />} />
    <Route path="/login" element={<FormPage isLogin={true} />} />
    <Route path="/signup" element={<FormPage isLogin={false} />} />
   </Routes>
   </>
  );
}

export default App;
