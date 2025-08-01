import React from 'react'
import './Input.css' // Importando o CSS específico do componente

function Input({placeholder, type="text"}){
    return(
        <div>
            <input className="inputGeral" placeholder={placeholder} type={type} />
        </div>
    );
}

export default Input;