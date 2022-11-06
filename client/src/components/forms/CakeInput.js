import React, {useState} from 'react'
import axios from 'axios'
import { options, ratedQuestions, shortIds } from '../../data/questions'
import CakeText from './CakeText'
import CakeRadio from './CakeRadio'

const CakeInput = ({user, cake, setCake, count}) => {

  
    const shortName = shortIds[count]

    const handleChange = e => {
        const {name, value} = e.target;
        setCake({...cake, [name]: value})
    }


    // const handleSubmit = e => {
    //     e.preventDefault()

    //     axios.post('/api/cake', {
    //         cafe: cake.city,
    //         user: user
    //     })
    //     .then(theCake => console.log("do something here but heres the cake inthe meantime", theCake))
    //     .catch(err => console.log(err))

    // }

    return (
        <div>cake
            {count < 3? 
            <CakeText shortName={shortName} handleChange={handleChange}/>
             : 
             <CakeRadio shortName={shortName} handleChange={handleChange}/>
         }
        </div>
    )
}

export default CakeInput