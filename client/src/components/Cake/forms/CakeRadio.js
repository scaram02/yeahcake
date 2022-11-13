import React, {useState} from 'react'
import {options} from '../../../data/questions'

const CakeRadio = ({shortName, handleChange, highlighted, setHighlighted}) => {

    

    // const highlight = dig => {
    //     setHighlighted(dig)
    //     console.log(highlighted)
    // }



    return (
        <div className="radio-container">
       {options.map((digit) => (
           <label key={digit}>
                {/* <label key={digit} style={{background: digit === highlighted? "#ecedf0" : "white"}}> */}
                <input type='radio' 
                name={shortName} 
                value={digit} 
                // onClick={() => {
                //     highlight(digit),
                //  handleChange}}
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