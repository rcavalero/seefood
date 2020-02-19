import React, {useState} from 'react'


function Upload(){

    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const uploadImage = async e => {
        const files = e.target.file
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'seefoodar')
        setLoading(true)
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/diad1aa5z/image/upload',
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()
        setImage(file.secure_url)
        setLoading(false)
    }

    return(
        <div className="input-field col s12">
        <input 
        type="file" 
        name="file" 
        placeholder = "Upload an image" 
        onChange={uploadImage} 
        />
        {/* <label htmlFor="Img1">Image</label> */}
        {loading ? (
            <h3>Loading...</h3>
        ) : (
            <img src={image} style={{width:'300px'}} alt ="image" />
        )}
        </div>
    )
}

export default Upload




