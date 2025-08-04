import Imagem from '../assets/imagemgrande.svg';
import './Recuperar.css' // Importando o CSS específico da página
import Input from '../componentes2/Input.jsx' // Importando o componente de Input
import '../componentes2/Input.css' // Importando o CSS específico do componente
import setaimagem from '../assets/seta.svg'; // Importando a imagem da seta
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
                <button className="seta">  <img src={setaimagem} alt="Seta"/> </button>
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