import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { logout } from '../services/user'
import CakeOfTheDay from './RandomCake/CakeOfTheDay'
import CakeList from './Cake/CakeList'
import MenuContainer from './Menu/MenuContainer'
import SortCake from './Cake/forms/sort/SortCake'

const Feed = ({user}) => {

    const [cakes, setCakes] = useState([])


    return (
        <div>
        <MenuContainer user={user}/>
        <CakeOfTheDay/>
        <SortCake cakes={cakes} setCakes={setCakes}/>
        <CakeList cakes={cakes} setCakes={setCakes}/>
        </div>
    )
}

export default Feed