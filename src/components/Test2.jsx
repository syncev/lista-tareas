import React, {useState, useEffect} from "react"

const NameButton = ({onNameChange}) =>{

    const collectName = () =>{
        const userInput = prompt("Enter your name:");
        if (userInput !==null) {
          onNameChange(userInput)
        }
      }

    return(
        <>
            <button onClick={collectName}>Enter Name</button>
        </>
    )
}

export default NameButton