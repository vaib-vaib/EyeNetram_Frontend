import React from 'react'
function myFunction(){
    const newLocal = "Image submitted sucessfully";
    alert(newLocal);
}

export function SubmitButton() {
    const styles = {
        sButton: {
            display: "flex",
            position: "absolute",
            top:"150%",
            backgroundColor:"blue",
            color: "white",
            fontSize: "18px",
            justifyContent: "center",
            fontAlign: "center",
            width: "100px",
            height: "35px",
            marginLeft: "170px"
        },
      };
    return (
        <div  style={styles.sButton}> <button onClick={myFunction}>Submit</button></div>
    )
}