import React, { useState } from "react";


const UploadForm = () =>{
    const[file, setFile] = useState(null)

    // access file user selected
    const changeHandler = (e) =>{
       
        // target first file only
        let selected = e.target.files[0];
        
        // if a file is selected, setFile and update the state
        if(selected){
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