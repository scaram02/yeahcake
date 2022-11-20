
import './App.css';
import React, {useState} from 'react'
import {useRoutes} from 'react-router-dom'
import Home from './components/Home'
import Feed from './components/Feed'
import CakeForm from './components/Cake/forms/rate/CakeForm'
import MyCakes from './components/Cake/MyCakes';


const App = (props) => {

  const [user, setUser] = useState(props.user)




  const routes = useRoutes([ 
    {
      path:'/',
      element: <Home user={user} setUser={setUser} />
    }
   ])

   const authedRoutes = useRoutes([
    {
      path: '/feed',
      element: <Feed user={user.username} />
    },
    {
      path: '/rate',
      element: <CakeForm user={user.username}/>
    },
    {
      path: '/my-cakes/:username',
      element: <MyCakes user={user}/>
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
