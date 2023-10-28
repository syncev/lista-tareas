import React,{ useEffect, useState } from "react";


const TareaFormulario =({onTaskChange}) =>{
    //adds a new task
    const [newTask, setNewTask] = useState("")
   
    //handles the submit from the input 
    const collectTask = (e) => {
        e.preventDefault();
        //calls the function from App component and passes the new task to it
        onTaskChange(newTask);
        //clears the input field
        setNewTask("");
    }
    return(
       <>
       <form  onSubmit={collectTask}>
            <label htmlFor="newTask">Nueva Tarea: </label>
            <input 
                type="text" 
                id="newTask"
                placeholder="Ingrese tarea"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                 />
             <button type="submit"  htmlFor="tarea">Agregar</button> 
       </form>
       </>
    ) 
}

export default TareaFormulario