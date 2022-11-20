import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {login} from '../services/user';
import { signup } from "../services/user";
import Auth from './Auth/forms/Auth'
import '../components/Auth/stylesheets/auth.css'


const Home = ({user, setUser}) => {

    const [isLogin, setIsLogin] = useState(true)


    const setCurrentUser = user => {
        setUser(user);
      };


    return (
        <div className="home-container">
    {isLogin? 
    <Auth 
      user={user} 
      auth={login}
      setCurrentUser={setCurrentUser}
      text={"sign up"}
      button={"log in"}
      isLogin={isLogin}
      setIsLogin={setIsLogin}
      />
:
<Auth 
      user={user} 
      auth={signup}
      setCurrentUser={setCurrentUser}
      text={"log in"}
      button={"sign up"}
      isLogin={isLogin}
      setIsLogin={setIsLogin}
     />
}
        </div>
    )
}

export default Home;