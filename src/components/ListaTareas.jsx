import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


const ListaTareas = ({taskList, onToggleComplete, onRemove}) => {
 
      const renderList = taskList.map((task) =>(
        
        //the key is needed for react to render properly and it uses the same id i gave it when adding it to the taskList
            <li key={task.id}>
              {task.texto}
              <br/>
              {/* this way i pass the task.id to Tarea, that way i can access the content in this particular id inside Tarea */}
              <Link to={`/Tarea/${task.id}`}><button>Editar</button></Link>
              <button onClick={onToggleComplete}>Complete</button>
              <button onClick={() => onRemove(task.id)}>Remove</button>
            </li>
          ))

          
  return (
    <>
          {renderList}     
    </>
  )
}

export default ListaTareas