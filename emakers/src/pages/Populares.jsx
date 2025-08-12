import react from 'react';
import '../componentes2/NavBar.css';
import './Populares.css';
import NavBar from '../componentes2/NavBar.jsx';
import Footer from '../componentes2/Footer.jsx';
import '../componentes2/Footer.css';
import godofwar from '../assets/godofwargrande.png';
import horizon from '../assets/horizon.png';
import daysgone from '../assets/daysgone.png';
import botaocarrinho from '../assets/botaocarrinho.svg';
import bolinha from '../assets/bolinha.svg';
import { useNavigate } from 'react-router-dom';

function Populares() {
    return (
        <div className="popularesGeral">
            <div>
                <NavBar/>
            </div>
            <div className="Titulogeral">
                <p>Populares</p>
            </div>
            <div className="classificacao1">
                <img src={bolinha}/> <p>1°</p>
            </div>
            <div className="caixapop1">
                <div className="imagem1">
                    <img src={godofwar} onClick={() => navigate('/Jogo')}/>
                </div>
                <div className="textinho1">
                    <p className="titulo1pop">God of War</p> 
                    <p>Kratos é pai novamente. Como mentor e protetor de Atreus, um filho determinado a ganhar seu respeito, ele é forçado a encarar e controlar a fúria que há muito tempo o define enquanto viaja por um mundo ameaçador com o seu filho. Com a vingança contra os deuses do Olimpo no passado, Kratos agora vive no reino das divindades e monstros nórdicos. É nesse mundo duro e impiedoso que ele deve lutar para sobreviver enquanto ensina seu filho a fazer o mesmo e tenta impedi-lo de repetir os erros cruéis do Fantasma de Esparta.</p>
                </div>
            </div>
            <div className="caixapop2">
                <div className="textinho2">
                    <p className="titulo2pop">Horizon Zero Dawn</p> 
                    <p>Em um futuro distante, dominado por máquinas colossais que vagam pela Terra, a natureza retomou as ruínas da nossa civilização esquecida e pequenos grupos de sobreviventes se dividem em diferentes tribos. Empunhe o arco e a lança de Aloy, uma jovem caçadora de máquinas exilada da sua tribo, que parte em busca da verdade sobre suas origens e o misterioso mundo que ela precisa salvar.  </p>
                </div>
                <div className="imagem2">
                    <img src={horizon}/>
                </div>
            </div>
            <div className="classificacao2">
                <img src={bolinha}/> <p>2°</p>
            </div>
            <div className="classificacao3">
                <img src={bolinha}/> <p>3°</p>
            </div>
            <div className="caixapop3">
                <div className="imagem3">
                    <img src={daysgone}/>
                </div>
                <div className="textinho3">
                    <p className="titulo3pop">Days Gone</p> 
                    <p>Days Gone é um jogo de ação e aventura em mundo aberto que se passa em um ambiente adverso dois anos após uma pandemia mundial devastadora.Entre na pele do antigo motociclista fora da lei Deacon St. John, um caçador de recompensas que tenta achar uma razão para viver numa terra cercada pela morte. Vasculhe assentamentos abandonados em busca de equipamentos para produzir itens e armas valiosos ou arrisque-se com outros sobreviventes que tentam ganhar a vida honestamente... ou de formas mais violentas.</p>
                </div>
            </div>
            <div className="carrinhopops">
                <img src={botaocarrinho} onClick={() => navigate('/')}/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default Populares;