import react from 'react';
import './NavBar.css';
import img from '../assets/imagempeq.svg'; 
import { useNavigate } from 'react-router-dom';
import linha from '../assets/linha.svg'; 
import lupa from '../assets/lupa.svg';

function NavBar() {
    return(
        <nav className="navbar">
            <div>
                <img src={img} alt="Logo" className="logo" onClick={() => navigate('/')} />
            </div>
            <div className="Links">
                <p className="lanc">Lançamentos</p>
            </div>
            <div className="Linha">
                <img src={linha} />
            </div>
            <div className="Populares">
                <p className="pop">Populares</p>
            </div>
            <div className="Linha">
                <img src={linha} />
            </div>
            <div className="Links">
                <p className="gen">Gêneros</p>
            </div>
            <div className="Linha">
                <img src={linha} />
            </div>
            <div className="Links">
                <p className="prom">Promoções</p>
            </div>
            <div className="Linha">
                <img src={linha} />
            </div>
            <div className="Links">
                <p className="cont">Conta</p>
            </div>
            <div className="Buscar">
                <input type="text" className="buscar"/>
                <div className="lupa">
                <img src={lupa} />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;