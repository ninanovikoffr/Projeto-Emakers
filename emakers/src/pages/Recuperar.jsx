import Imagem from '../assets/imagemgrande.svg';
import './Recuperar.css' 
import Input from '../componentes2/Input.jsx' 
import '../componentes2/Input.css' 
import setaimagem from '../assets/seta.svg'; 
import { useNavigate } from 'react-router-dom';


function Recuperar (){
    const navigate = useNavigate();

    return (
        <div className="recuperarGeral">

        <div className="recuperarCaixa">

            <div className="recuperarConta">Recuperar Conta</div>

            <div>
                <Input placeholder="E-mail" type="email" />
            </div>
            
            <div>
                <button className="setarecuperar" alt="seta para a direita" onClick={() => navigate('/Erro')}>  <img src={setaimagem} alt="Seta"/> </button>
            </div>

            <div className="grupo">
            <button onClick={() => navigate('/registrar')} className="criarConta"> Criar Conta</button> 
            <button onClick={() => navigate('/')} className="fazerLogin"> Fazer Login </button>  
            </div> 

        </div>

        <div className="Imagemgrande"> 
            <img src={Imagem} alt="imagem ilustrativa do site"/>
        </div>

        </div>
    );
}
export default Recuperar;