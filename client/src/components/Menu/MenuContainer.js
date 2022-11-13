import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { stack as Menu } from 'react-burger-menu'
import { logout } from '../../services/user'
import './menu.css'



const MenuContainer = ({user}) => {
// https://www.npmjs.com/package/react-burger-menu


    const handleLogout = () => {
        logout();
        clearUser(null)
    }
console.log(' im the suer', user)
    return (
        <Menu>
            <h1>Welcome, {user}</h1>
        <NavLink id="home" activeClassName="active" className="menu-item" to="/feed">Home</NavLink>
        <NavLink id="rate" className="menu-item" activeClassName="active" to="/rate">Rate a cake!</NavLink>
        <NavLink id="my-cakes"  className="menu-item" activeClassName="active" to={`/my-cakes/${user}`}>My cakes</NavLink>
        <NavLink id="logout" onClick={handleLogout} className="menu-item" activeClassName="active" to="/">Log out</NavLink>
      </Menu>
    )
}

export default MenuContainer