import '../componentes2/NavBar.css';
import './Jogo.css';
import NavBar from '../componentes2/NavBar.jsx';
import Footer from '../componentes2/Footer.jsx';
import '../componentes2/Footer.css';
import carrinhoprinc from '../assets/botaocarrinho.svg';
import { useNavigate } from 'react-router-dom';


function Jogo(){
    return(
        <div className="PrincipalGeral">
            <div>
                <NavBar/>
            </div>
            <div className="carrosselGrande">

            </div>
                <div className="partebaixo">
                    <div className="LANÇAMENTOS">
                        <p>Lançamentos</p>
                    </div>
                    <div className="carrosselPeq">
                        
                    </div>
                    <div className="carrinhoprinc">
                        <img src={carrinhoprinc}/>

                    </div>
            </div>


            <div>
                <Footer/>
            </div>
        </div>

    );
}

export default Jogo;