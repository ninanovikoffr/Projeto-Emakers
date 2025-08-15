import react from 'react';
import './NavBar.css';
import img from '../assets/imagempeq.svg'; 
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import linha from '../assets/linha.svg'; 
import lupa from '../assets/lupa.svg';
import linhasanduiche from '../assets/linhasanduiche.svg';
import linhagrande from '../assets/linhagrande.svg';
import xis from '../assets/xizinho.svg';

function NavBar() {
    const [aberto, setAberto] = useState(false);
    const navigate = useNavigate();

     useEffect(() => {
        document.body.style.overflow = aberto ? "hidden" : "";
        return () => (document.body.style.overflow = ""); }, [aberto]);

    const ir = (rota) => { setAberto(false); navigate(rota); };

    
    return(
        <nav className="navbar">
            <div>
                <img src={img} alt="Logo do site" className="logo" onClick={() => navigate('/Principal')} />
            </div>
            <div className="Links">
                <p className="lanc" onClick={() => navigate('/Erro')}>Lançamentos</p>
            </div>
            <div className="Linha">
                <img src={linha} />
            </div>
            <div className="Links">
                <p className="pop" onClick={() => navigate('/Populares')}>Populares</p>
            </div>
            <div className="Linha">
                <img src={linha} />
            </div>
            <div className="Links">
                <p className="gen" onClick={() => navigate('/Erro')}>Gêneros</p>
            </div>
            <div className="Linha">
                <img src={linha} />
            </div>
            <div className="Links">
                <p className="prom" onClick={() => navigate('/Erro')}>Promoções</p>
            </div>
            <div className="Linha">
                <img src={linha} />
            </div>
            <div className="Links">
                <p className="cont" onClick={() => navigate('/Conta')} >Conta</p>
            </div>
            <div className="Buscarnormal">
                <input type="text" className="buscarnormal"/>
                <div className="lupa1">
                <img src={lupa} />
                </div>
            </div>
                <div className="Sanduiche" onClick={() => setAberto(true)}>
                    <img src={linhasanduiche} />
                    <img src={linhasanduiche}/>
                    <img src={linhasanduiche}/>
                </div>
                    
                <div className={aberto ? "menuRaiz aberto" : "menuRaiz"}>

                <div className="fundoEscuro" onClick={() => setAberto(false)} />

                <div className="menuLateral" role="dialog" aria-modal="true">

                <img src={xis} className="fecharMenu" onClick={() => setAberto(false)}/>

                <div className="opcoesMenu">
                    <div className="opcoesburg"><p onClick={() => ir("/Erro")}>Lançamentos</p></div>
                    <div className="Linhag"><img  src={linhagrande}/></div>
                    <div className="opcoesburg"><p onClick={() => ir("/Populares")}>Populares</p></div>
                    <div className="Linhag"><img src={linhagrande}/></div>
                    <div className="opcoesburg"><p onClick={() => ir("/Erro")}>Gêneros</p></div>
                    <div className="Linhag"><img src={linhagrande}/></div>
                    <div className="opcoesburg"><p onClick={() => ir("/Erro")}>Promoções</p></div>
                    <div className="Linhag"><img src={linhagrande}/></div>
                    <div className="opcoesburg"><p onClick={() => ir("/Conta")}>Conta</p></div>
                </div>
                <div className="Buscar">
                    <input type="text" className="buscar"/>
                    <div className="lupa">
                    <img src={lupa} />
                </div>
            </div>

                </div>
            </div>

        </nav>
    );
}

export default NavBar;