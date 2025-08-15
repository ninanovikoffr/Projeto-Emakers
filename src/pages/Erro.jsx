import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Erro.css';
import logo from '../assets/imagempeq.svg'; 

function Erro() {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate(-1);
  };

  return (
    <div className="ErroGeral">
      
      <img src={logo} alt="Logo" className="logopequena" />
      <div className="textoerro">
        <p>Ops!</p>
      </div>
      <div>
      <p className="textoerro1">Ainda não construímos essa página.</p>
      <p className="textoerro2">Em breve, tudo estará disponível.</p>
      </div>
      
      <button className="botaoerro" onClick={handleVoltar}>
        Voltar para a página anterior
      </button>
    </div>
  );
}

export default Erro;