import React, {useState} from 'react'



const CakeText = ({shortName, handleChange}) => {

    const [text, setText] = useState({cafe: '', city: "", country: '', notes: ""})

    return (
        <input type="text" name={shortName} value={text.shortName} onChange={handleChange}/>
    )
}

export default CakeText