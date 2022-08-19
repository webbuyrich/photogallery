import { async } from "@firebase/util";
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
        const storageRef = projectStorage.ref(file.name);

        //take a file and put it in the ref location. detect when progress or complete states change
        storageRef.put(file).on('stage_changed', (snap) => {
            // get progress and save to setProgress
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);

            // detect error and save to setError
        }, (err) => {
            setError(err)

            // wait till image is uploaded and save to setUrl
        }, async () => {
            const url = await storageRef.getDownloadURL();
            setUrl(url)
        })

    },[file])

    // values that will be available to access
    return { progress, url, error }
}

export default useStorage;
