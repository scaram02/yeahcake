import React, {useState, useEffect} from 'react'
import axios from 'axios';
import MenuContainer from '../Menu/MenuContainer';
import CakeCard from '../Cake/CakeCard'
import './stylesheets/cakeCard.css'

const MyCakes = ({user}) => {

const [cakes, setCakes] = useState([])
const userId = user._id


useEffect(() => {
    getCakes(userId)
}, [])

const getCakes = userId => {
axios
.get(`/api/cake/${userId}`)
.then(cakes => setCakes(cakes.data))
}


    return (
        <div>
            <MenuContainer user={user.username}/>
            <div  className="list-container">
        {cakes.length > 0 ? (
             cakes.map((c) => (
                <div className="card-container" key={c._id}>
                <CakeCard cake={c}/>
               </div>
            ))) : <h1>No cake to see. Have a slice and come back soon!</h1>}
            </div>
            </div>
    )
}

export default MyCakes