import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/estaticos/NavBar/NavBar';
import Footer from './componentes/estaticos/Fooder/Fooder';
import Home from './paginas/Home/Home';
import './App.css';
import Login from './paginas/Login/Login'
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Login  />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/cadastrousuario" element={<CadastroUsuario/>} />

      </Routes>
      <Footer />
    </Router>

  );
}

export default App;