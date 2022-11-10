import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { logout } from '../services/user'
import CakeOfTheDay from './CakeOfTheDay'
import CakeList from './Cake/CakeList'
import MenuContainer from './Menu/MenuContainer'

const Feed = ({user}) => {


    // const handleLogout = () => {
    //     logout();
    //     clearUser(null)
    // }

    return (
        <div>
            <MenuContainer user={user}/>
            {/* welcome, {user} */}
         {/* <Link to="/rate" >rate a cake</Link> */}
        {/* <Link to="/" onClick={handleLogout}>log out</Link> */}
        <CakeOfTheDay/>
        <CakeList/>
            </div>
    )
}

export default Feed