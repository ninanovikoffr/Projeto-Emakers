import './Principal.css'
import NavBar from '../componentes2/NavBar.jsx';
import Footer from '../componentes2/Footer.jsx';
import '../componentes2/Footer.css';
import Carrossel2 from '../componentes2/Carrossel2.jsx';
import '../componentes2/Carrossel2.css';
import Carrossel1 from '../componentes2/Carrossel1.jsx';
import '../componentes2/Carrossel1.css';
import carrinhoprinc from '../assets/botaocarrinho.svg';
import img1 from '../assets/bobesponja.png';
import img2 from '../assets/deliver.png';
import img3 from '../assets/spellforce.png';
import img4 from '../assets/death.png';
import img5 from '../assets/perish.png';
import img6 from '../assets/godofwargrande.png';
import img7 from '../assets/horizon.png';
import img8 from '../assets/daysgone.png';


function Principal(){
     const lancamentos = [
    { image: img1, price: '299,00' },
    { image: img2, price: '299,00' },
    { image: img3, price: '299,00' },
    { image: img4, price: '299,00' },
    { image: img5, price: '299,00' },
  ];

  const jogosgrandes = [
    { image: img6, price: '119,95', discount: '-40%'},
    { image: img7, price: '149,99', discount: '-25%'},
    { image: img8, price: '169,90', discount: '-15%'},
    
  ];

    return(
        <div className="PrincipalGeral">
            <div>
              <div>
                   <NavBar/>
            </div>
            <div className="carrosselGrande">
                  <Carrossel1 items={jogosgrandes} />


            </div>
                <div className="partebaixoprinc">
                        <p className="LANÇAMENTOS">Lançamentos</p>
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