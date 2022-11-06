
import './App.css';
import React, {useState, useEffect} from 'react'
import {Routes, Route, useRoutes, Redirect} from 'react-router-dom'
import Auth from './components/forms/Auth'
import Home from './components/Home'
import Feed from './components/Feed'
import CakeForm from './components/forms/CakeForm'
import {login} from './services/user';
import { signup } from "./services/user";

const App = (props) => {

  const [user, setUser] = useState(props.user)

  const setCurrentUser = user => {
    setUser(user);
  };


  const routes = useRoutes([ 
    {
      path:'/',
      element: <Home/>
    },
    {
      path: '/signup',
      element: <Auth user={user} auth={signup}
      setCurrentUser={setCurrentUser}  {...props}/>
    },
    {
      path: '/login',
      element: <Auth 
      user={user} 
      auth={login}
      setCurrentUser={setCurrentUser} 
      {...props}/>
    }
   ])

   const authedRoutes = useRoutes([
    {
      path: '/feed',
      element: <Feed user={user.username}/>
    },
    {
      path: '/rate',
      element: <CakeForm user={user}/>
    }
   ])

  return (
    <div className="App">
     {routes}
     {user && authedRoutes} 
      {/* test this ^^^ */}
    </div>
  );
}

export default App;
