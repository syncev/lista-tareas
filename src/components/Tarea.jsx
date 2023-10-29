import React from 'react'

import { Link, useParams } from 'react-router-dom'

const Tarea = ({taskList}) => {
    //take the parameter passed in the URL
    const {taskId} = useParams()
    
    //find the id in taskList that matches the taskId from the URL, now it can be used to render its text
    const selectedTask = taskList.find((task) => task.id === parseInt(taskId));


  return (
    <>
        <h1>Tarea</h1>
        {selectedTask ? (
            <div>
                <h2>Detalles de la Tarea</h2>
                <p>Tarea: {selectedTask.texto}</p>
                <p>Completada: {selectedTask.completada ? "si" : "no"}</p>
            </div>
        ):(
            <p>Tarea no encontrada</p>
        )}
        <p><Link to="/"> Volver a Lista de Tareas</Link></p>
        
    </>
  ) 
}

export default Tarea