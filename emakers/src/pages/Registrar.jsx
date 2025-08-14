import React from 'react'
import img from '../assets/imagemgrande.svg';
import './Registrar.css' 
import Input from '../componentes2/Input.jsx' 
import '../componentes2/Input.css' 
import setaimagem from '../assets/seta.svg'; 
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useState } from 'react';

 

function Registrar (){
    const navigate = useNavigate();

    const nomeRef = useRef(null);
    const emailRef = useRef(null);
    const cpfRef = useRef(null);
    const senhaRef = useRef(null);
    const confirmaRef = useRef(null);

    const [emailreg, setEmail] = useState('');
    const [senhareg, setSenha] = useState('');
    const [cpf, setcpf] = useState('');
    const [nome, setnome] = useState('');
    const [confirmar, setconf] = useState('');

    const handleKeyDown = (e, proximoInput) => {
        if (e.key === 'Enter') {
        e.preventDefault(); 
        proximoInput.current.focus();
        }
    };
    
    const handlereg = () => {

        console.log('Email:', emailreg);                 

            if (emailreg && senhareg && cpf && nome && confirmar) {                 
                navigate('/conta');          
            }
    };


    return (
        <div className="registrarGeral">

        <div className="registrarCaixa">

            <div className="registrar">Registrar</div>


            <div>
                <Input placeholder="Nome de Usuário" type="text" ref={nomeRef} value={nome} onChange={(e) => setnome(e.target.value)} onKeyDown={(e) => handleKeyDown(e, emailRef)} />
            </div>
            <div>
                <Input placeholder="E-mail" type="email" ref={emailRef} value={emailreg} onChange={(e) => setEmail(e.target.value)} onKeyDown={(e) => handleKeyDown(e, cpfRef)}/>
            </div>
            <div>
                <Input placeholder="CPF" type="text" inputMode="numeric" pattern="[0-9]*" ref={cpfRef} value={cpf} onChange={(e) => setcpf(e.target.value)} onKeyDown={(e) => handleKeyDown(e, senhaRef)}/>
            </div>
            <div>
                <Input placeholder="Senha" type="password" ref={senhaRef} value={senhareg} onChange={(e) => setSenha(e.target.value)} onKeyDown={(e) => handleKeyDown(e, confirmaRef)}/>
            </div>
            <div>
                <Input placeholder="Confirmar Senha" type="password" ref={confirmaRef} value={confirmar} onChange={(e) => setconf(e.target.value)} onKeyDown={(e) => { 
                    if (e.key === 'Enter') {
                    e.preventDefault(); 
                    handlereg(); }
                    }
                }/>
            </div>
            <div>
                <button className="seta" alt="seta para a direita" onClick={() =>{ if (emailreg.trim() && senhareg.trim() && cpf.trim() && nome.trim() && confirmar.trim()) {navigate('/conta');} else {alert('Preencha os campos.');}}}>  <img src={setaimagem} alt="Seta"/> </button>
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