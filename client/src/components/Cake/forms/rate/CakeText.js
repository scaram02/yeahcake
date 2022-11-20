import React, {useState} from 'react'



const CakeText = ({shortName, handleChange, cake}) => {


    
    return (
       <div>
        <input 
       type="text" 
       name={shortName} 
       value={cake[shortName]} 
       onChange={handleChange}
       spellCheck="false"/>
       </div>
    )
}

export default CakeText