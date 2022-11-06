import React, {useState} from 'react'
import axios from 'axios'
import CakeInput from './CakeInput'
import CakeQuestion from './CakeQuestion'

const CakeForm = ({user}) => {

    const [count, setCount] = useState(0) 
    const [cake, setCake] = useState('')

    const countUp = () => {
        setCount(count+1)
        console.log(count)
    }

console.log("cake", cake)

    // ----------------- test =-------------
    const handleSubmit = () => {
    
    const {cafe, city, country, notes, presentation, texture, price, taste} = cake
        axios.post('/api/cake', {
           cafe, city, country, notes, presentation, texture, price, taste, 
            user: user
        })
        .then(theCake => console.log("do something here but heres the cake inthe meantime", theCake))
        .catch(err => console.log(err))

    }
    // ------------ tst ---------

    // if count under x number questions (not last)
    // this and next button if not last
    // otherwise new comp of last question = submit
    return (
        <div>
{/* <form onSubmit={handleSubmit}> */}
            <CakeQuestion count={count} />
            <CakeInput count={count} cake={cake} setCake={setCake} user={user}/> 
            <button onClick={countUp}>Next</button> 
            <button onClick={handleSubmit}>submit</button>
            {/* </form> */}
        </div>
    )
}

export default CakeForm