
import './App.css';
import React, {useState, useEffect} from 'react'
import {Routes, Route, useRoutes, Redirect} from 'react-router-dom'
import Login from './components/forms/Login'
import Home from './components/Home'
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
      element: <Login user={user} auth={signup}
      setCurrentUser={setCurrentUser} {...props}/>
    },
    {
      path: '/login',
      element: <Login user={user} auth={login}
      setCurrentUser={setCurrentUser} {...props}/>
    }
   ])

  return (
    <div className="App">

     {routes}
{/* <Routes>
    <Route exact path="/signup"
    render={props => <Signup {...props} 
    user={user}
    setCurrentUser={setCurrentUser} 
    />} />
</Routes> */}
    </div>
  );
}

export default App;
