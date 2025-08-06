import imagem from '../assets/imagemgrande.svg';
import './Login.css' // Importando o CSS específico da página
import Input from '../componentes2/Input.jsx' // Importando o componente de Input
import '../componentes2/Input.css' // Importando o CSS específico do componente
import setaimagem from '../assets/seta.svg'; // Importando a imagem da seta
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useState } from 'react';
 

function Login (){
    const navigate = useNavigate();

    const emailRef = useRef(null);
    const senhaRef = useRef(null);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    const handleKeyDown = (e, proximoInput) => {
        if (e.key === 'Enter') {
        e.preventDefault(); 
        proximoInput.current.focus();
        }
    };

    const handleLogin = () => {

        console.log('Email:', email);                 

            if (email && senha) {                 
                navigate('/conta');          
            }
    };


    return (
        <div className="loginGeral">

        <div className="loginCaixa">

            <div className="login">Login</div>

            <form>
            <div>
                <Input placeholder="E-mail" type="email" ref={emailRef} value={email} onChange={(e) => setEmail(e.target.value)} onKeyDown={(e) => handleKeyDown(e, senhaRef)}/>
            </div>
        
            <div>
                <Input placeholder="Senha" type="password" ref={senhaRef} value={senha} onChange={(e) => setSenha(e.target.value)} onKeyDown={(e) => { 
                    if (e.key === 'Enter') {
                    e.preventDefault(); 
                    handleLogin(); }
                    }
                }/>
            </div>
            </form>
            
            <div>
                <button className="seta" onClick={() =>{ if (email.trim() && senha.trim()) {navigate('/conta');} else {alert('Preencha o e-mail e a senha.');}}}> <img src={setaimagem} alt="Seta"/> </button>
            </div>
            
            <div>
            <button onClick={() => navigate('/registrar')} className="criarconta"> Criar Conta</button>
            <button onClick={() => navigate('/recuperar')} className="recuperarconta"> Esqueceu a Senha? </button>   
            </div>

        </div>

        <div className="ImagemGrande"> 
            <img src={imagem} alt="imagem ilustrativa do site"/>
        </div>

        </div>
    );
}
export default Login;


