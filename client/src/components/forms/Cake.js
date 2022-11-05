import React, {useState} from 'react'
import axios from 'axios'

const Cake = ({user}) => {

    const [count, setCount] = useState(1)
    const [cake, setCake] = useState('')

    const handleChange = e => {
        const {name, value} = e.target;
        setCake({...cake, [name]: value})
    }
console.log(cake) // city

    const handleSubmit = e => {
        e.preventDefault()

        axios.post('/api/cake', {
            cafe: cake.city,
            user: user
        })
        .then(theCake => console.log("do something here but heres the cake inthe meantime", theCake))
        .catch(err => console.log(err))

    }

    return (
        <div>cake
            <form onSubmit={handleSubmit}>
                <input type="text" name="city" id="city" value={cake.cafe} onChange={handleChange}/>
                <button>submit cake</button>
            </form>
        </div>
    )
}

export default Cake