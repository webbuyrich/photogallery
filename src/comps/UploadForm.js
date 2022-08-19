import React, { useState } from "react";


const UploadForm = () =>{
    const[file, setFile] = useState(null)

    const types = ['image/png', 'image/jpeg', 'image/jpg']

    // access file user selected
    const changeHandler = (e) =>{
       
        // target first file only
        let selected = e.target.files[0];
        console.log("selected information",selected)
        
        // if a file is selected, setFile and update the state
        if(selected && types.includes(selected.type)){
            setFile(selected)
        }
    }

    return(
        <form>
            <input type="file" onChange={changeHandler}/>
        </form>
    )
}

export default UploadForm