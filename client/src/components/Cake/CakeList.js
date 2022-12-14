import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CakeCard from './CakeCard'
import './stylesheets/cakeCard.css'


const CakeList = ({cakes, setCakes}) => {



    useEffect(() => {
     getCake()
    }, [])

    const getCake = () => {
        axios
        .get('/api/cake')
        .then(res => setCakes(res.data))
        .catch(err => console.log(err))
    }

    return (
        <div className="list-container">
           
            {cakes.length > 0 ? (
                cakes.map((cake) => (
               <div className="card-container" key={cake._id}>
                <CakeCard cake={cake}/>
               </div>
                )
            )
            ) :  <h1>Loading</h1>}
        </div>
    )
}

export default CakeList