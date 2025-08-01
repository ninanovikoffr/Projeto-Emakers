import React from 'react'
import img from '../assets/imagemgrande.svg';
import './Registrar.css' // Importando o CSS específico da página
import Input from '../componentes2/Input.jsx' // Importando o componente de Input
import '../componentes2/Input.css' // Importando o CSS específico do componente
 

function Registrar (){
    return (
        <div className="registrarGeral">

        <div className="registrarCaixa">

            <div className="registrar">Registrar</div>
            <div>
                <Input placeholder="Nome de Usuário" type="text" />
            </div>
            <div>
                <Input placeholder="E-mail" type="email" />
            </div>
            <div>
                <Input placeholder="CPF" type="text" inputMode="numeric" pattern="[0-9]*" />
            </div>
            <div>
                <Input placeholder="Senha" type="password" />
            </div>
            <div>
                <Input placeholder="Confirmar Senha" type="password" />
            </div>

        </div>


        <div className="imagemGrande"> 
            <img src={img} alt="iamgem ilustrativa do site"/>
        </div>

        </div>
    );
}
export default Registrar;