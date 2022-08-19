import { useState, useEffect } from "react";
import { projectStorage } from "../firebase/config";

const useStorage = (file) =>{
    // create 3 states for the file

    // file progress of upload
    const [progress, setProgress] = useState(0)
    // file error if any errors
    const [error, setError] = useState(null)
    // url returned from storage after upload
    const [url, setUrl] = useState(null)

    useEffect( ()=>{
        // references where file should be saved
        const storageRef = projectStorage.ref(file.name)
    },[file])
}
