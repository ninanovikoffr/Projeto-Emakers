import Imagem from '../assets/imagemgrande.svg';
import './Recuperar.css' // Importando o CSS específico da página
import Input from '../componentes2/Input.jsx' // Importando o componente de Input
import '../componentes2/Input.css' // Importando o CSS específico do componente
import setaimagem from '../assets/seta.svg'; // Importando a imagem da seta
 

function Recuperar (){
    return (
        <div className="recuperarGeral">

        <div className="recuperarCaixa">

            <div className="recuperarconta">Recuperar Conta</div>

            <div>
                <Input placeholder="E-mail" type="email" />
            </div>
            
            <div>
                <button className="seta">  <img src={setaimagem} alt="Seta"/> </button>
            </div>

            <div className="grupo">
            <button href="/Registrar.jsx" className="criarConta"> Criar Conta</button> 
            <button href="/Fazerlogin" className="fazerLogin"> Fazer Login </button>  
            </div> 

        </div>

        <div className="Imagemgrande"> 
            <img src={Imagem} alt="imagem ilustrativa do site"/>
        </div>

        </div>
    );
}
export default Recuperar;