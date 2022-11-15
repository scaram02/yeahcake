import React, {useState, useEffect} from 'react'
import axios from 'axios'

const UploadPhoto = ({cake, setCake}) => {


const [fileInput, setFileInput] = useState('')
const [previewSource, setPreviewSource] = useState('')


const handleFileChange = e => {
    const file = e.target.files[0]
    previewFile(file)
}


// show the user they selected the file
// previewSource is base64, turns to url in backend cake.js {response} dot secure_url
const previewFile = file => {
    const reader = new FileReader()
    reader.readAsDataURL(file) 
    reader.onloadend = () => {
        setPreviewSource(reader.result)
    } 
}





const handleSubmit = e => {
    e.preventDefault()

    if (!previewSource) return;
    setCake({...cake, imageUrl: previewSource})
}


    return (
        <div>
           <input className="choose-file" type="file" onChange={handleFileChange} value={fileInput} accept="image/*"/> 
           <button className="upload" type='submit' onClick={handleSubmit}>Upload</button>
           {previewSource && <img src={previewSource} alt="image preview" style={{height: "150px"}}/>}
        </div>
    )
}

export default UploadPhoto