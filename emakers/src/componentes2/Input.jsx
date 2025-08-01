import React from 'react'
import './Input.css' 

function Input({placeholder, type="text"}){
    return(
        <div>
            <input className="inputGeral" placeholder={placeholder} type={type} />
        </div>
    );
}

export default Input;