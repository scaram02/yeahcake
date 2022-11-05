import React, {useState} from 'react'
import {signup} from '../../services/user'

const Login = (props) => {

    const blankForm = {username: '', password: ''}
    const [user, setUser] = useState(blankForm)
    const [error, setError] = useState('')


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
                // props.history.push('/dashboard')
                console.log('success!')
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" id="username" value={user.username} placeholder="Username" onChange={handleInputChange}/>
                <input type="password" name="password" id="password" value={user.password} placeholder="Password" onChange={handleInputChange}/>
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}

export default Login