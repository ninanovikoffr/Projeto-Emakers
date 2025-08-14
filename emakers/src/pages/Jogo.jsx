import './Jogo.css';
import NavBar from '../componentes2/NavBar.jsx';
import Footer from '../componentes2/Footer.jsx';
import carrinhoJogo from '../assets/botaocarrinho.svg';
import imagemjogo from '../assets/godofwargigante.png';
import divisoria from '../assets/divisoria.svg';
import carrinhopeq from '../assets/carrinhopequeno.svg';
import bola from '../assets/bolinha.svg';
import { useNavigate } from 'react-router-dom';



function Jogo(){
    const navigate = useNavigate();

    return(
        <div className="JogoGeral">
            <div>
                <NavBar/>
            </div>
            <div className="desconto">
                <img src={bola}/> <p>98%</p>
            </div>
            <div className="CaixaJogo">
                <div className="imagemjogo">
                    <img src={imagemjogo} alt="imagem do jogo God of War" />

                        <div className="bannerjogos">
                        <div className="banner1">
                            <p>-40%</p>

                        </div>
                        <div className="banner2">
                            <p>R$ 119,95</p>

                        </div>
                </div>
                </div>

                <div className="parteazuljogos">
                    <div className="titulojogos">
                        <p>God of War</p>

                    </div>
                    <div className="textojogos">
                        <p>Com a vingança contra os deuses do Olimpo em um passado distante, Kratos agora vive como um mortal no reino dos deuses e monstros nórdicos. É nesse mundo duro e implacável que ele deve lutar para sobreviver... e ensinar seu filho a fazer o mesmo.</p>
                    </div>
                    <div className="divisoria">
                        <img src={divisoria} />

                    </div>

                    <div className="botoesjogos">
                    <button className="botaojogo1" onClick={() => navigate('/Erro')}>
                        <p>Adicionar ao Carrinho</p>
                        <img src={carrinhopeq} />

                    </button>
                    <button className="botaojogo2" onClick={() => navigate('/Erro')}>
                        <p>Solicitar Reembolso</p>
                        <img src={carrinhopeq} />

                    </button>
                </div>
                </div>

        </div>
        
        
                <div className="carrinhoJogo" alt="botao para o carrinho">
                    <img src={carrinhoJogo} onClick={() => navigate('/Erro')}/>

                </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default Jogo;
