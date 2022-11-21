import React, {useState, useEffect} from 'react'
import '../../stylesheets/sortCake.css'
import {shortIds} from '../../../../data/questions'

const SortCake = ({cakes, setCakes}) => {

    const [cakeData, setCakeData] = useState(null)

    useEffect(() => {
        setCakeData(cakes)
    }, [cakes.length])


    const sortCakes = e => {
        const {value} = e.target;
        const sorted = cakeData && [...cakeData].sort((a, b) => a[value] - b[value])
        setCakes(sorted)
    }


    return (
        <div className="sort-container">
      <select name="cars" id="cars" onChange={sortCakes} >
      {
        shortIds.map((option) =>  <option key={option} value={option}>{option}</option>
      )}
      </select>
        </div>
    )
}

export default SortCake