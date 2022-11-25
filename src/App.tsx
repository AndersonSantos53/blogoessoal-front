import React from 'react';
import NavBar from './componentes/estaticos/NavBar/NavBar';
import Footer from './componentes/estaticos/Fooder/Fooder';
import Home from './paginas/Home/Home'
import './App.css';

function App() {
  return (
   <>
    <NavBar/>
    <Home/>
    <Footer/>
   </>
  );
}

export default App;
