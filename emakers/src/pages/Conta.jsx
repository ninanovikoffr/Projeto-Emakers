import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Conta.css';
import NavBar from '../componentes2/NavBar.jsx';
import bobEsponja from '../assets/bobesponja.png';
import deliver from '../assets/deliver.png';
import godWar from '../assets/god.png';
import death from '../assets/death.png';



function Conta() {
    const navigate = useNavigate();

    return (
        <div className="contaGeral">
            <div>
                <NavBar />
            </div>
            <div className="caixaAzul">
                <div className="subcaixaAzul" >
                    <p className="jogosadq"> Jogos adquiridos: </p>
                <div className="partecima">
                <div className="bobEsponja">
                    <img src={bobEsponja} alt="Bob Esponja" className="bobEsponjaImg" />
                    <p className="texto">100/100</p>

                </div>
                <div className="deliver">
                    <img src={deliver} alt="Deliver" className="deliverImg" />
                    <p className="texto" >95/100</p>

                </div>
                </div>
                <div className="partebaixo">
                <div className="godWar">
                    <img src={godWar} alt="God of War" className="godWarImg" />
                    <p className="texto" >75/100</p>

                </div>
                <div className="death">
                    <img src={death} alt="Death" className="deathImg" />
                    <p className="texto" >Adicionar Avaliação</p>

                </div>
                </div>
                </div>
        
            </div>

        </div>
    );
}

export default Conta;