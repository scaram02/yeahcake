import React, {useState} from 'react'
import {options} from '../../../data/questions'

const CakeRadio = ({shortName, handleChange, highlighted}) => {


    return (
        <div className="radio-container">
       {options.map((digit) => (
                <label key={digit} style={{background: digit == highlighted? "#ecedf0" : "white"}}>
                <input type='radio' 
                name={shortName} 
                value={digit} 
                onClick={handleChange}
                 />
           {digit}
           </label>
            )
        )
       }
    </div>)
}

export default CakeRadio