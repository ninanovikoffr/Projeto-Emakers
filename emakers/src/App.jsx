import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Registrar from './pages/Registrar.jsx';
import RecuperarConta from './pages/Recuperar.jsx'; 
import './App.css';
import Conta from './pages/Conta.jsx'; 
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/recuperar" element={<RecuperarConta />} />
        <Route path="/conta" element={<Conta />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;