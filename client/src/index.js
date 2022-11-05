import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import axios from 'axios'


axios
.get('/api/user/loggedin')
.then(res => {
  const user = res.data;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
  <BrowserRouter>
    <App user={user}/>
  </BrowserRouter>
  </StrictMode>
);
})
.catch(err => err)

