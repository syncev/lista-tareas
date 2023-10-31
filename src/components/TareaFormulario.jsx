import React, { useEffect, useState } from "react";

const TareaFormulario = ({ onTaskChange }) => {
  //adds a new task
  const [newTask, setNewTask] = useState("");

  //handles the submit from the input
  const collectTask = (e) => {
    e.preventDefault();
    //calls the function from App component and passes the new task to it
    newTask !== "" ? onTaskChange(newTask): setNewTask("");
    setNewTask("")
    //clears the input field
  };
  return (
    <>
      <div className="tarea-formulario-wrapper">
        <h1 className="nueva-tarea-title">.Tareas.</h1>
        <form onSubmit={collectTask} className="form-tarea">
          <input
          className="form-input"
            type="text"
            id="newTask"
            placeholder="Ingrese tarea..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button type="submit" htmlFor="tarea" className="add-task-btn">
            Agregar
          </button>
        </form>
      </div>
    </>
  );
};

export default TareaFormulario;
