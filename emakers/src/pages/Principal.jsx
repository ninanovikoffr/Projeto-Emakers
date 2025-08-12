import '../componentes2/NavBar.css';
import './Principal.css';
import NavBar from '../componentes2/NavBar.jsx';
import Footer from '../componentes2/Footer.jsx';
import '../componentes2/Footer.css';
import Carrossel2 from '../componentes2/Carrossel2.jsx';
import '../componentes2/Carrossel2.css';
// import Carrossel from '../componentes2/Carrossel1.jsx';
// import '../componentes2/Carrossel1.css';
import carrinhoprinc from '../assets/botaocarrinho.svg';
import img1 from '../assets/bobesponja.png';
import img2 from '../assets/deliver.png';
import img3 from '../assets/spellforce.png';
import img4 from '../assets/death.png';
import img5 from '../assets/perish.png';
import img6 from '../assets/bobesponja.png';
import img7 from '../assets/deliver.png';
import img8 from '../assets/spellforce.png';
import img9 from '../assets/death.png';
import img10 from '../assets/perish.png';


function Principal(){
     const lancamentos = [
    { image: img1, price: '299,00' },
    { image: img2, price: '299,00' },
    { image: img3, price: '299,00' },
    { image: img4, price: '299,00' },
    { image: img5, price: '299,00' },
    { image: img6, price: '299,00' },
    { image: img7, price: '299,00' },
    { image: img8, price: '299,00' },
    { image: img9, price: '299,00' },
    { image: img10, price: '299,00' },
  ];

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
                         <Carrossel2 items={lancamentos} />
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