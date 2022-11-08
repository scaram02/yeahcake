import React, {useState, useEffect} from 'react'
import { calcAveRating, priceWorthMultiplier } from '../../hooks/math'


const CakeCard = ({cake}) => {
  const [isHovered, setIsHovered] = useState(false)


const {cafe, city, country, price, texture, taste, presentation, notes} = cake

const rate = calcAveRating(price, texture, taste, presentation)

const cakes = priceWorthMultiplier(price)

    return (
        <div  
        onMouseEnter={() => {
          setIsHovered(true)}}
        onMouseLeave={() => {
          setIsHovered(false)
        }}
        >
          {isHovered? 
          <div className="text-contain">
            <p></p>
          <p>{notes}</p>
          </div> :
           <div className="text-contain">
            <h1>{cafe} in {city}, {country}</h1>
          <p>rating: {rate}</p>  
        <p>{price}</p>
         </div>}
    
            </div>
    )
}

export default CakeCard
