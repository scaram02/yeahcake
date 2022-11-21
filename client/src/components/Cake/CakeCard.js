import React, {useState, useEffect} from 'react'
import { calcAveRating, priceWorthMultiplier } from '../../hooks/math'
import cakeVector from '../../images/cake.jpg'


const CakeCard = ({cake}) => {
  const [isHovered, setIsHovered] = useState(false)


const {cafe, city, country, price, texture, taste, presentation, combination, originality, notes, imageUrl} = cake

const rate = calcAveRating(price, texture, taste, presentation, combination, originality)

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
             <p>rating: {rate}</p>  
       {cakes.map((c, i) => {
        return <img key={i} src={cakeVector} style={{height: '30px'}}/>
       })}

          <p>{notes}</p>
          </div>
           :
           <div className="text-contain">
            <h1>{cafe} in {city}, {country}</h1>
            {imageUrl && <img src={imageUrl} style={{maxHeight: '220px'}}/>}
         
         </div>}
    
            </div>
    )
}

export default CakeCard
