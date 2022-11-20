import React, {useState} from 'react'
import axios from 'axios'
import CakeInput from './CakeInput'
import CakeQuestion from './CakeQuestion'
import {useNavigate, Link} from 'react-router-dom'
import '../../stylesheets/cakeForm.css'
import MenuContainer from '../../../Menu/MenuContainer'
import UploadPhoto from '../UploadPhoto'


const CakeForm = ({user}) => {

    const [count, setCount] = useState(0) 
    const [cake, setCake] = useState({cafe: "", city: "", country: '', notes: '', presentation: null, texture: null, price: null, taste: null, imageUrl: ""})
    const loc = cake[count]
    const [highlighted, setHighlighted] = useState(null)
    const [submitVisible, setSubmitVisible] = useState(false)

    const navigate = useNavigate()


    const countUp = () => {
        setCount(count+1)
        // clears text on text forms
        setCake({...cake, loc: ''})
        setHighlighted(null)
    }


    const handleSubmit = ({user}) => {
    
    const {cafe, city, country, notes, presentation, texture, price, taste, imageUrl} = cake
        axios.post('/api/cake', {
           cafe, city, country, notes, presentation, texture, price, taste, imageUrl,
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
            {count < 8? <CakeInput 
            count={count} 
            cake={cake} 
            setCake={setCake} 
            user={user} 
            highlighted={highlighted}
            setHighlighted={setHighlighted}
           /> 
            :     
              <UploadPhoto submitVisible={submitVisible} setSubmitVisible={setSubmitVisible} cake={cake} 
            setCake={setCake} /> 
            }
            {count < 8 &&  <button onClick={countUp}>Next</button>} 
            {submitVisible && <button onClick={handleSubmit}>Submit</button>}
       </div>
        </div>
        </div>
    )
}

export default CakeForm