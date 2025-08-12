import './Footer.css';
import logofooter from '../assets/imagempeq.svg'; 
import { useNavigate } from 'react-router-dom';
import mail from '../assets/mail.png';
import telefone from '../assets/telefone.png';
import spot from '../assets/spot.png';


function Footer (){
    const navigate = useNavigate();

    return(
        <footer className="FooterGeral">
            <div className="logofooter">
                <img src={logofooter} className="imagemlogo" />
            </div>
            <div className="gamedame">
                <p className="game" >Game Dame </p>
                <p>Seu próximo jogo <br/> começa aqui</p>

            </div>
            <div className="explorar">
                <p className="titulo1">Explorar</p>
                <p><span className="link" onClick={() => navigate('/Principal')}>Início</span></p>
                <p><span className="link" onClick={() => navigate('/Populares')}>Populares</span></p>
                <p><span className="link" onClick={() => navigate('/Conta')}>Conta</span></p>

            </div>
            <div className="contato">
                <p className="titulo2">Contato</p>
                <p> <img src={mail} className="mail" /> gamegamedame@teste.com</p>
                <p> <img src={telefone} className="telefone" /> (99) 9 9999-9999</p>
                <p> <img src={spot} className="spot" /> Shopping X, Lavras - MG</p>
            

            </div>
            <div className="autoria">
                <p>2024 Game Dame | By Emakers Júnior</p>

            </div>

        </footer>

    );
}

export default Footer;