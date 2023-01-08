import React, { useState } from "react";
  
export function UploadImages(){
    const [file, setFile] = useState();

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  
    return (
        <div className="m-0 mt-8 max-w-md md:flex">
            <input type="file" name = "UploadedImage" accept="image/x-png,image/jpg,image/jpeg" onChange={handleChange} />
            <img src={file} />
        </div>
  
    );
}