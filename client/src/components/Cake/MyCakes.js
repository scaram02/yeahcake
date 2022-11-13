import React, {useState, useEffect} from 'react'
import axios from 'axios';
import MenuContainer from '../Menu/MenuContainer';

const MyCakes = ({user}) => {

const [cakes, setCakes] = useState([])
const userId = user._id


useEffect(() => {
    getCakes(userId)
}, [])

const getCakes = userId => {
axios
.get(`/api/cake/${userId}`)
// .then(c => console.log(c.data))
.then(cakes => setCakes(cakes.data))
}
console.log('here be cakes', cakes)
    return (
        <div>
            <MenuContainer/>
        {cakes.length > 0 && cakes.map((c) => {
            return (
                <div>
                    {c.city}
                </div>
            )
        })}
            </div>
    )
}

export default MyCakes