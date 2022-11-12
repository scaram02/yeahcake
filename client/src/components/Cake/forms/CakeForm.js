import React, {useState} from 'react'
import axios from 'axios'
import CakeInput from './CakeInput'
import CakeQuestion from './CakeQuestion'
import {useNavigate, Link} from 'react-router-dom'
import '../stylesheets/cakeForm.css'
import MenuContainer from '../../Menu/MenuContainer'
const CakeForm = ({user}) => {

    const [count, setCount] = useState(0) 
    const [cake, setCake] = useState({cafe: "", city: "", country: '', notes: '', presentation: "", texture: '', price: '', taste: ''})
    const loc = cake[count]
    const [highlighted, setHighlighted] = useState(null)

    const navigate = useNavigate()


    const countUp = () => {
        setCount(count+1)
        // clears text on text forms
        setCake({...cake, loc: ''})
        setHighlighted(null)
    }


    const countDown = () => {
        setCount(count-1)
        
    }


    const handleSubmit = ({user}) => {
    
    const {cafe, city, country, notes, presentation, texture, price, taste} = cake
        axios.post('/api/cake', {
           cafe, city, country, notes, presentation, texture, price, taste, 
            user: user
        })
        .then(() => navigate('/feed'))
        .catch(err => console.log(err))

    }

    return (
        <div>
            
            <MenuContainer user={user}/>
        <div className="formContainer">    
       
            <div className="sub-container">
            <Link to="/feed" className="cancel">x</Link>
            <CakeQuestion count={count} />
            <CakeInput 
            count={count} 
            cake={cake} 
            setCake={setCake} 
            user={user} 
            highlighted={highlighted} 
            setHighlighted={setHighlighted}/> 
            
            {count < 7? <button onClick={countUp}>Next</button> : 
            <button onClick={handleSubmit}>Submit</button>}
            <h1 onClick={countDown}>down</h1>
       </div>
        </div>
        </div>
    )
}

export default CakeForm