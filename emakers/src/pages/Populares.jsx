import react from 'react';
import '../componentes2/NavBar.css';
import './Populares.css';
import NavBar from '../componentes2/NavBar.jsx';
import Footer from '../componentes2/Footer.jsx';
import '../componentes2/Footer.css';

function Populares() {
    return (
        <div className="popularesGeral">
            <div>
                <NavBar/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default Populares;