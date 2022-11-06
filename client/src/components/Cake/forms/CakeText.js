import React, {useState} from 'react'



const CakeText = ({shortName, handleChange, cake}) => {


    
//     const [text, setText] = useState({cafe: '', city: "", country: '', notes: ""})
// console.log('hsort noa', shortName)
    return (
        <input type="text" name={shortName} value={cake[shortName]} onChange={handleChange}/>
    )
}

export default CakeText