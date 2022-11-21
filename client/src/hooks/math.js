export const calcAveRating = (price, text, taste, pres, combination, originality) => {


// add and weight the overall rating ??? 
    const added = (price * 1.3) + text + (taste *1.7) + pres + (combination * 1.3) + originality
// round and divide by 4
    return (added / 8).toFixed(3) 

}


export const priceWorthMultiplier = (price) => {
    return price - 2
}