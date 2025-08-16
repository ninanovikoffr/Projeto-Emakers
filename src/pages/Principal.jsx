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
import { useNavigate } from 'react-router-dom';


function Principal(){
    const navigate = useNavigate();

     const lancamentos = [
    { imagem: img1, preco: '299,00' },
    { imagem: img2, preco: '299,00' },
    { imagem: img3, preco: '299,00' },
    { imagem: img4, preco: '299,00' },
    { imagem: img5, preco: '299,00' },
  ];

  const jogosgrandes = [
    { imagem: img6, preco: '119,95', desconto: '-40%'},
    { imagem: img7, preco: '149,99', desconto: '-25%'},
    { imagem: img8, preco: '169,90', desconto: '-15%'},
    
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
                    <div className="carrinhoprinc" onClick={() => navigate('/Erro')}>
                        < img  onClick={() => navigate('/Erro')} src={carrinhoprinc}/>

                    </div>
            </div>


            <div>
                <Footer/>
            </div>
        </div>

    );
}

export default Principal;