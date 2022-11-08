import React, {useState, useEffect} from 'react'
import { calcAveRating, priceWorthMultiplier } from '../../hooks/math'
import cakeVector from '../../images/cake.jpg'


const CakeCard = ({cake}) => {
  const [isHovered, setIsHovered] = useState(false)


const {cafe, city, country, price, texture, taste, presentation, notes} = cake

const rate = calcAveRating(price, texture, taste, presentation)

// set cake price worthiness icons
const cakeRepeats = priceWorthMultiplier(price)
const cakes = [...Array(cakeRepeats)]



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
       {cakes.map(() => {
        return <img src={cakeVector} style={{height: '30px'}}/>
       })}

         </div>}
    
            </div>
    )
}

export default CakeCard
