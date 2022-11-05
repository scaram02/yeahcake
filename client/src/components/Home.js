import React from 'react'
import {Link} from 'react-router-dom'



const Home = () => {

    return (
        <div>
        <Link to="/signup">sign up</Link>
        <Link to="/login">log in</Link>
        </div>
    )
}

export default Home;