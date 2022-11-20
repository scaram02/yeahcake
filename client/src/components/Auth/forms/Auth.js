import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {signup} from '../../../services/user'
import '../stylesheets/auth.css'

const Auth = (props) => {

    const blankForm = {username: '', password: ''}
    const [user, setUser] = useState(blankForm)
    const [error, setError] = useState('')
    const nav = props.text.replace(' ', '')

    const navigate = useNavigate()

    const handleInputChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault()
       props.auth(user.username, user.password)
        .then(data => {
            if (data.message){
                setError(data.message)
                console.log(error)
            } else {
                props.setCurrentUser(data) //setCurrentUser ??? user
                navigate('/feed')
                console.log('success!')
            }
        })
    }

    const toggleLogin = () => {
        props.setIsLogin(!props.isLogin)
    }

    return (
        <div className="auth-container">
            <div className="auth-subcontainer">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                <input type="text" name="username" id="username" value={user.username} placeholder="username" onChange={handleInputChange}/>
                <input type="password" name="password" id="password" value={user.password} placeholder="password" onChange={handleInputChange}/>
                </div>
                <button className="submit" type="submit">{props.button}</button>
                <p onClick={toggleLogin}>Or <span>{props.text}</span> instead!</p>
            </form>
            </div>
        </div>
    )
}

export default Auth