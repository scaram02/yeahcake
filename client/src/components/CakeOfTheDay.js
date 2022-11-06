import React, {useState, useEffect} from 'react'
import axios from 'axios'
import hm from '../configs/keys'

const CakeOfTheDay = () => {
// const key = process.env.REACT_APP_FLICKR_KEY
// const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY

useEffect (() => {
    console.log('here',hm.hm)
  
})
const getPhoto = () => {
var key = `${process.env.REACT_APP_FLICKR_KEY}`
console.log(key)
// axios.get(`https://api.unsplash.com/photos/random?client_id=${key}`)

fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_FLICKR_KEY}&tags=cake&format=json&nojsoncallback=1`)
.then(res => res.json())
.then((thePhoto) => console.log(thePhoto))
}

    return (
        <div>
<button onClick={getPhoto}>click me</button>
        </div>
    )
}

export default CakeOfTheDay