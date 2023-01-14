import React, { useState } from "react";
import { SubmitButton } from "./submitButton";

export function UploadImages(){

    const [imageURL, setImageURL] = useState(null);

    const styles = {
        button: {
            padding:"5px 10px",
            color:"#00008B",
            border: "1px solid #999",
            borderRadius: "3px",
            outline: "none",
            whiteSpace: "nowrap",
            textShadow: "1px 1px #fff",
            fontWeight: "700",
            fontSize: "10pt",
        },
      }
    const [file, setFile] = useState();
    
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  
    async function handleSubmit(event) {
        event.preventDefault()
        const result = await onSubmit(UploadImage)
        console.log(result)
        setSuccess(true)
    }

    function uploadImage(e){
        const { files } = e.target
        if(files.length > 0)
        {
            const url = URL.createObjectURL(files[0])
            setImageURL(url)
        }else{
            setImageURL(null)
        }
    }

    console.log(imageURL)
    
    return (
        <><div className="m-0 mt-8 max-w-md md:flex" style={styles.button}>

            <input type="file" name="UploadedImage" accept="image/x-png,image/jpg,image/jpeg" onChange={uploadImage}/>
            <img src={file} />
        </div><SubmitButton /></>
        
    );
}