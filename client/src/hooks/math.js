export const calcAveRating = (price, text, taste, pres) => {


// add and weight
    const added = (price * 1.3) + text + (taste *1.7) + pres
// round and divide by 4
    return (added / 4).toFixed(3) 

}
