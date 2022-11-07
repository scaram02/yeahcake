import React from 'react'
import { shortIds } from '../../../data/questions'
import CakeText from './CakeText'
import CakeRadio from './CakeRadio'

const CakeInput = ({user, cake, setCake, count}) => {

  
    const shortName = shortIds[count]

    const handleChange = e => {
        const {name, value} = e.target;
        setCake({...cake, [name]: value})
    }
// https://react-bootstrap.github.io/components/progress/
    return (
        <div className="questions">
            {count < 4? 
            <CakeText cake={cake} shortName={shortName} handleChange={handleChange}/>
             : 
             <CakeRadio shortName={shortName} handleChange={handleChange}/>
         }
        </div>
    )
}

export default CakeInput