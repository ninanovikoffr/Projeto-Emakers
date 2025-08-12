import '../componentes2/NavBar.css';
import './Principal.css';
import NavBar from '../componentes2/NavBar.jsx';
import Footer from '../componentes2/Footer.jsx';
import '../componentes2/Footer.css';
// import Carrossel from '../componentes2/Carrossel1.jsx';
// import '../componentes2/Carrossel1.css';
import carrinhoprinc from '../assets/botaocarrinho.svg';


function Principal(){
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

export default Principal;