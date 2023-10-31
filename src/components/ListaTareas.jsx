import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

const ListaTareas = ({ taskList, onToggleComplete, onRemove }) => {
  const handleOnToggleComplete = (taskId) => {
    // Call the onToggleComplete function with the taskId to mark a specific task as complete
    onToggleComplete(taskId);
  };

  const renderList = taskList.map((task) => (
    //the key is needed for react to render properly and it uses the same id i gave it when adding it to the taskList
    <li 
      key={task.id} 
      className={`task ${task.completada ? "completed" : "incomplete"}`}
      >
      <div className="task-list-text">{task.texto}</div>

      <div className="task-list-icons">
        {/* this way i pass the task.id to Tarea, that way i can access the content in this particular id inside Tarea */}
        <Link to={`/Tarea/${task.id}`} className="task-link">
          <FontAwesomeIcon icon={faPenToSquare} />
        </Link>

        {/* check icon to trigger completed task on click */}
        {task.completada ? (
          <FontAwesomeIcon
            icon={faRotateRight}
            className="complete-icon"
            onClick={() => handleOnToggleComplete(task.id)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="complete-icon"
            onClick={() => handleOnToggleComplete(task.id)}
          />
        )}

        
        <FontAwesomeIcon icon={faTrash} className="remove-icon" onClick={() => onRemove(task.id)} />
      </div>
      
    </li>
  ));

  return (
    <>
      <div className="lista-tareas-wrapper">
        <div className="box-style">
          <h1 className="lista-tareas-title">Lista de Tareas</h1>
          <ul>{renderList}</ul>
        </div>
      </div>
    </>
  );
};

export default ListaTareas;
