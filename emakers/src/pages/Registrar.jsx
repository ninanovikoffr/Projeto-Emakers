import React from 'react'
import img from '../assets/imagemgrande.svg';
import './Registrar.css' 
import Input from '../componentes2/Input.jsx' 
import '../componentes2/Input.css' 
import setaimagem from '../assets/seta.svg'; 
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

 

function Registrar (){
    const navigate = useNavigate();

    const nomeRef = useRef(null);
    const emailRef = useRef(null);
    const cpfRef = useRef(null);
    const senhaRef = useRef(null);
    const confirmaRef = useRef(null);

    const handleKeyDown = (e, proximoInput) => {
        if (e.key === 'Enter') {
        e.preventDefault(); 
        proximoInput.current.focus();
        }
    };

    return (
        <div className="registrarGeral">

        <div className="registrarCaixa">

            <div className="registrar">Registrar</div>


            <div>
                <Input placeholder="Nome de Usuário" type="text" ref={nomeRef} onKeyDown={(e) => handleKeyDown(e, emailRef)} />
            </div>
            <div>
                <Input placeholder="E-mail" type="email" ref={emailRef} onKeyDown={(e) => handleKeyDown(e, cpfRef)}/>
            </div>
            <div>
                <Input placeholder="CPF" type="text" inputMode="numeric" pattern="[0-9]*" ref={cpfRef} onKeyDown={(e) => handleKeyDown(e, senhaRef)}/>
            </div>
            <div>
                <Input placeholder="Senha" type="password" ref={senhaRef} onKeyDown={(e) => handleKeyDown(e, confirmaRef)}/>
            </div>
            <div>
                <Input placeholder="Confirmar Senha" type="password" ref={confirmaRef} onKeyDown={(e) => { 
                    if (e.key === 'Enter') {
                    e.preventDefault(); 
                    navigate('/conta'); }
                    }
                }/>
            </div>
            <div>
                <button className="seta" onClick={() => navigate('/conta')}>  <img src={setaimagem} alt="Seta"/> </button>
            </div>

            <button onClick={() => navigate('/')} className="FazerLogin"> Fazer Login</button>

        </div>

        <div className="imagemGrande"> 
            <img src={img} alt="imagem ilustrativa do site"/>
        </div>

        </div>
    );
}
export default Registrar;