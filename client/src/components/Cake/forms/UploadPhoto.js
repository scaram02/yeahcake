import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../stylesheets/uploadPhoto.css'

const UploadPhoto = ({cake, setCake, submitVisible, setSubmitVisible}) => {


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
    setSubmitVisible(!submitVisible)
}


    return (
        <div className="upload-photo">
            <h1>Upload an image</h1>
           <input className="choose-file" type="file" onChange={handleFileChange} value={fileInput} accept="image/*"/> 
           {previewSource && <img src={previewSource} alt="image preview"/>}
           {previewSource && <button className="upload" type='submit' onClick={handleSubmit}>Upload</button>}
          
        </div>
    )
}

export default UploadPhoto