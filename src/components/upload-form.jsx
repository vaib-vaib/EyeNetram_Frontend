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
        }
      }
    const [file, setFile] = useState();

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  
    return (
        <div style={styles.button}>
            <input type="file" name = "UploadedImage" accept="image/x-png,image/jpg,image/jpeg" onChange={handleChange} />
            <img src={file} />
        </div>
  
    );
}