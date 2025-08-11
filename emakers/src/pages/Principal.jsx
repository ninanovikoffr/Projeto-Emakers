import '../componentes2/NavBar.css';
import './Principal.css';
import NavBar from '../componentes2/NavBar.jsx';
import Footer from '../componentes2/Footer.jsx';
import '../componentes2/Footer.css';

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

                    </div>
            </div>


            <div>
                <Footer/>
            </div>
        </div>

    );
}

export default Principal;