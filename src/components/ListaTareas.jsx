import React, {useState, useEffect} from 'react'


const ListaTareas = ({taskList, onToggleComplete, onRemove}) => {
 
      const renderList = taskList.map((task) =>(
        
        //the key is needed for react to render properly and it uses the same id i gave it when adding it to the taskList
            <li key={task.id}>
              {task.texto}
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