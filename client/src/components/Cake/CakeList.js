import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CakeCard from './CakeCard'



const CakeList = ({}) => {

    const [cakes, setCakes] = useState([])

    useEffect(() => {
     getCake()
    }, [cakes.length])

    const getCake = () => {
        axios
        .get('/api/cake')
        .then(res => setCakes(res.data))
        .catch(err => console.log(err))
    }

    return (
        <div>
            {cakes.length > 0 ? (
                cakes.map((cake) => (
               <div key={cake._id}>
                <CakeCard cake={cake}/>
               </div>
                )
            )
            ) :  <h1>no</h1>}
        </div>
    )
}

export default CakeList