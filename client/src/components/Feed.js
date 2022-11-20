import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { logout } from '../services/user'
import CakeOfTheDay from './RandomCake/CakeOfTheDay'
import CakeList from './Cake/CakeList'
import MenuContainer from './Menu/MenuContainer'

const Feed = ({user}) => {


    return (
        <div>
            <MenuContainer user={user}/>
        <CakeOfTheDay/>
        <CakeList/>
            </div>
    )
}

export default Feed