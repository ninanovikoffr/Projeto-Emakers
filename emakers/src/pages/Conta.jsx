import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Conta.css';
import NavBar from '../componentes2/NavBar.jsx';
import carrinho from '../assets/botaocarrinho.svg'; 
import bobEsponja from '../assets/bobesponja.png';
import deliver from '../assets/deliver.png';
import godWar from '../assets/god.png';
import death from '../assets/death.png';
import lixo from '../assets/lixo.svg';
import lapis from '../assets/lapis.svg';
import Menu from '../componentes2/Menu.jsx';



function Conta() {
    const navigate = useNavigate();

    return (
        <div className="contaGeral">
            <div>
                <NavBar className="navBar"/>
            </div>
            <div className="caixaAzul">
                <div className="subcaixaAzul" >
                    <p className="jogosadq"> Jogos adquiridos: </p>
                <div className="partecima">
                <div className="bobEsponja">
                    <img src={bobEsponja} alt="imagem do jogo Bob Esponja battle for bikini bottom" className="bobEsponjaImg"  onClick={() => navigate('/')} />
                    <p className="texto">100/100</p>

                </div>
                <div className="deliver">
                    <img src={deliver} alt="imagem do jogo Deliver us mars" className="deliverImg"  onClick={() => navigate('/')} />
                    <p className="texto" >95/100</p>

                </div>
                </div>
                <div className="partebaixo">
                <div className="godWar">
                    <img src={godWar} alt="imagem do jogo God of War" className="godWarImg"  onClick={() => navigate('/')}/>
                    <p className="texto" >75/100</p>

                </div>
                <div className="death">
                    <img src={death} alt="imagem do jogo Death Stranding" className="deathImg"  onClick={() => navigate('/')} />
                    <p className="texto" >Adicionar Avaliação</p>

                </div>
                </div>
                </div>
                <div className="carrinho" onClick={() => navigate('/Erro')}> 
                    <img src={carrinho} /> 
                </div>
            </div>
            <div className="textoprinc">
                <div className="Ola">
                    <p>{"Olá, <<Nome do Usuário>>"} </p>
                </div>
                <div className="seuemail">
                    <p>Seu email é nomeusuario@email.com </p>
                </div>
                <div className="seucpf">
                    <p>Seu CPF é 123.456.789-00</p>
                </div>
                <div className="botao1">
                    <button className="alterar"  onClick={() => navigate('/Erro')}> Alterar Dados <img src={lapis} className="lapis" /> </button>
                </div>
                <div className="botao2">
                    <button className="excluir"  onClick={() => navigate('/Erro')}> Excluir Conta <img src={lixo} className="lixo" /> </button>
                </div>
                <div>
                    <button className="telaAdmin"  onClick={() => navigate('/Erro')}> Tela do admin </button>
                </div>
            </div>


        </div>
    );
}

export default Conta;