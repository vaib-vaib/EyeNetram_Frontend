import React, { useState } from "react";
  
export function UploadImages(){
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
    const [success, setSuccess] = React.useState(false);

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  
    function myFunction(){
        const newLocal = "Image submitted sucessfully";
        alert(newLocal);
    }
    return (
        <div className="m-0 mt-8 max-w-md md:flex" style={styles.button}>
            <input type="file" name = "UploadedImage" accept="image/x-png,image/jpg,image/jpeg" onChange={handleChange} onclick="myFunction()" />
            <img src={file}/>
        </div>
  
    );
}