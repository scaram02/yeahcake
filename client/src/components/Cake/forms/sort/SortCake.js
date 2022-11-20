import React, {useState, useEffect} from 'react'
import '../../stylesheets/sortCake.css'

const SortCake = ({cakes, setCakes}) => {

    const [cakeData, setCakeData] = useState(null)

    useEffect(() => {
        setCakeData(cakes)
    }, [cakes.length])


    // need to change this later
    const options = ["texture", "taste", "city"]


    const sortCakes = e => {
        const {value} = e.target;
        console.log('value', value)
        const sorted = cakeData && [...cakeData].sort((a, b) => a[value] - b[value])
        setCakes(sorted)
    }


    return (
        <div className="sort-container">
      <select name="cars" id="cars" onChange={sortCakes} >
      {
        options.map((option) =>  <option key={option} value={option}>{option}</option>
      )}
      </select>
        </div>
    )
}

export default SortCake