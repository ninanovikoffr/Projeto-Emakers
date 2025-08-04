import imagem from '../assets/imagemgrande.svg';
import './Login.css' // Importando o CSS específico da página
import Input from '../componentes2/Input.jsx' // Importando o componente de Input
import '../componentes2/Input.css' // Importando o CSS específico do componente
import setaimagem from '../assets/seta.svg'; // Importando a imagem da seta
import { useNavigate } from 'react-router-dom';
 

function Login (){
    const navigate = useNavigate();

    return (
        <div className="loginGeral">

        <div className="loginCaixa">

            <div className="login">Login</div>

            <form>
            <div>
                <Input placeholder="E-mail" type="email" />
            </div>
        
            <div>
                <Input placeholder="Senha" type="password" />
            </div>
            </form>
            
            <div>
                <button className="seta">  <img src={setaimagem} alt="Seta"/> </button>
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



