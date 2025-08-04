import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Registrar from './pages/Registrar.jsx';
import RecuperarConta from './pages/Recuperar.jsx'; // crie esse componente se ainda não existir

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/recuperar" element={<RecuperarConta />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;