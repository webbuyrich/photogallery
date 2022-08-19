import React, { useState } from "react";


const UploadForm = () =>{
    const[file, setFile] = useState(null)
    const[error, setError] = useState(null);


    const types = ['image/png', 'image/jpeg', 'image/jpg']

    // access file user selected
    const changeHandler = (e) =>{
       
        // target first file only
        let selected = e.target.files[0];
        console.log("selected information",selected)
        
        // if a file is selected, setFile and update the state
        if(selected && types.includes(selected.type)){
            setFile(selected)
            setError(null)
        } else {
            setFile(null);
            setError('Please select an image file (png, jpeg, or jpg)')
        }
    }

    return(
        <form>
            <input type="file" onChange={changeHandler}/>
            <div className="output">
                { error && <div className="error">{error}</div>}
                { file && <div>{file.name}</div>}
            </div>
        </form>
    )
}

export default UploadForm