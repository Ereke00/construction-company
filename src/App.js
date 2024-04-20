import './App.css';
import MainPage from './pages/MainPage.jsx';
import { Routes, Route } from 'react-router-dom'
import Cards from './pages/Cards.jsx';
import FullCard from './pages/FullCard.jsx';
import Apartaments from './pages/Apartaments.jsx'
import AdminLogin from './pages/AdminLogin.jsx'
import Admin from './pages/Admin.jsx'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/complexes" element={<Cards />} />
        <Route path="/complexes/:id" element={<FullCard />} />
        <Route path="/apartaments" element={<Apartaments />} />
        <Route path="/admin/login/" element={<AdminLogin />} />
        <Route path="/admin/" element={<Admin />} />

      </Routes>
    </div>
  );

}

export default App;
