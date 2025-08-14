import './Menu.css'
import React from 'react';
import lupa from '../assets/lupa.svg';

function Menu(){
    return(
        <div className="menuGeral">
            <div className="x">
                <img />

            </div>
            <div className="opcoes">
                <p className="lancmenu" onClick={() => navigate('/')}>Lançamentos</p>
            </div>
            <div className="Linhamenu">
                <img src={linha} />
            </div>
            <div className="Linksmenu">
                <p className="popmenu" onClick={() => navigate('/Populares')}>Populares</p>
            </div>
            <div className="Linhamenu">
                <img src={linha} />
            </div>
            <div className="Linksmenu">
                <p className="genmenu" onClick={() => navigate('/')}>Gêneros</p>
            </div>
            <div className="Linhamenu">
                <img src={linha} />
            </div>
            <div className="Linksmenu">
                <p className="prommenu" onClick={() => navigate('/')}>Promoções</p>
            </div>
            <div className="Linhamenu">
                <img src={linha} />
            </div>
            <div className="Linksmenu">
                <p className="contmenu" onClick={() => navigate('/Conta')}>Conta</p>
            </div>

        <div className="BuscarMenu">
                <input type="text" className="buscarmenu" />
                <div className="lupamenu">
                    <img src={lupa} />
                </div>
        </div>

</div>

    );
}

export default Menu;