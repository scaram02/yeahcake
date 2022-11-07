import React, {useState, useEffect} from 'react'
import { calcAveRating } from '../../hooks/math'

const CakeCard = ({cake}) => {

const {cafe, city, country, price, texture, taste, presentation} = cake

const rate = calcAveRating(price, texture, taste, presentation)


    return (
        <div>
          <h1>{cafe} in {city}, {country}</h1>
          <p>rating: {rate}</p>  
 
            </div>
    )
}

export default CakeCard
