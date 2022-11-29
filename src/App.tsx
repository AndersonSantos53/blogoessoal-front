import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './componentes/estaticos/NavBar/NavBar';
import Footer from './componentes/estaticos/Fooder/Fooder';
import Home from './paginas/Home/Home'
import Login from './paginas/Login/Login';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
          <Route path="/" element={<Login  />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
