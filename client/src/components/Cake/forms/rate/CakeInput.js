import React from 'react'
import { shortIds } from '../../../../data/questions'
import CakeText from './CakeText'
import CakeRadio from './CakeRadio'


const CakeInput = ({user, cake, setCake, count, highlighted, setHighlighted}) => {


    const shortName = shortIds[count]

    const handleChange = e => {
        const {name, value} = e.target;
        setCake({...cake, [name]: value})
        setHighlighted(value)
    }

// https://react-bootstrap.github.io/components/progress/
    console.log(`do you wanna add a progress bar? Click here https://react-bootstrap.github.io/components/progress/`)


    return (
        <div className="questions">
            {count < 4? 
            <CakeText cake={cake} 
            shortName={shortName} 
            handleChange={handleChange}/>
             : 
             <CakeRadio 
             shortName={shortName} 
             handleChange={handleChange} 
             highlighted={highlighted} />

         }
        </div>
    )
}

export default CakeInput