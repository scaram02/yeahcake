import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { logout } from '../services/user'

const Feed = ({user}) => {


    const handleLogout = () => {
        logout();
        clearUser(null)
    }

    return (
        <div>
            welcome, {user}
         <Link to="/rate" >rate a cake</Link>
        <Link to="/" onClick={handleLogout}>log out</Link>
            </div>
    )
}

export default Feed