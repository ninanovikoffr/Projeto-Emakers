import react from 'react';
import './NavBar.css';
import img from '../assets/imagempeq.svg'; // Importando a imagem do logo
import { useNavigate } from 'react-router-dom';

function NavBar() {
    return(
        <nav className="navbar">
            <div>
            <img src={img} alt="Logo" className="logo" onClick={() => navigate('/')} />
            </div>
        </nav>
    );
}

export default NavBar;