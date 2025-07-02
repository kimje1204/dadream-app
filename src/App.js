import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import Oxy from './pages/Oxy';
import Teun from './pages/Teun';
import Footer from './layout/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/Oxy" element={<Oxy/>} />
        <Route path="/Teun" element={<Teun/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
