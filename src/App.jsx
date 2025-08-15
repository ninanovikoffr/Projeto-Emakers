import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Registrar from './pages/Registrar.jsx';
import RecuperarConta from './pages/Recuperar.jsx'; 
import './App.css';
import Conta from './pages/Conta.jsx'; 
import Populares from './pages/Populares.jsx';
import React from 'react';
import Jogo from './pages/Jogo.jsx';
import Erro from './pages/Erro.jsx';
import Principal from './pages/Principal.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/recuperar" element={<RecuperarConta />} />
        <Route path="/conta" element={<Conta />} />
        <Route path="/Populares" element={<Populares/>} />
        <Route path="/Jogo" element={<Jogo/>} />
        <Route path="/Principal" element={<Principal/>} />
        <Route path="/Erro" element={<Erro/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;