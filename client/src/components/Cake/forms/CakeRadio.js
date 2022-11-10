import React, {useState} from 'react'
import {options} from '../../../data/questions'

const CakeRadio = ({shortName, handleChange}) => {

    return (
        <div className="hm">
       {options.map((digit) => (
                <label key={digit}>
                <input type='radio' 
                name={shortName} 
                value={digit} 
                onClick={handleChange}/>
           {digit}
           </label>
            )
        )
       }
    </div>)
}

export default CakeRadio