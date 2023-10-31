import React, { useState } from "react";

import { Link, useParams } from "react-router-dom";

const Tarea = ({ taskList, setTaskList }) => {
  //take the parameter passed in the URL
  const { taskId } = useParams();

  //find the id in taskList that matches the taskId from the URL, now it can be used to render its text
  const selectedTask = taskList.find((task) => task.id === parseInt(taskId));

  //tell if its being edited or not
  const [isEditing, setIsEditing] = useState(false);

  //when editing, this calls the text from the task object
  const [editedText, setEditedText] = useState(
    selectedTask ? selectedTask.texto : ""
  );

  //when click on the task field, start editing
  const handleEditClick = () => {
    setIsEditing(true);
  };
  //when SAVE is clicked, stop editing and pass the new task to the list saver. I have to make a copy of the list, so i can find and edit the task so i can the pass the whole list, otherwise ill only be passing the one task and errasing the whole list but that one task
  const handleSaveClick = () => {
    const updatedTaskList = [...taskList];
    // Find the task by its ID
    const editedTask = updatedTaskList.find(
      (task) => task.id === parseInt(taskId)
    );
    // Update the text of the edited task
    editedTask.texto = editedText;
    // Set the taskList to the updated list
    setTaskList(updatedTaskList);
    // Stop editing
    setIsEditing(false);
  };

  return (
    <>
      <h1 className="tarea-title">-Tarea-</h1>
      <div className="tarea-wrapper">
        {selectedTask ? (
          <div className="tarea-container">
            {isEditing ? (
              <div className="tarea-and-save-wrapper-edit">
                <textarea
                  rows={8}
                  cols={70}
                  value={editedText}
                  className="tarea-text-input"
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <button className="tarea-save-button" onClick={handleSaveClick}>
                  Guardar
                </button>
              </div>
            ) : (
              <div className="tarea-and-save-wrapper">
                <h2 className="tarea-text" onClick={handleEditClick}>
                  {" "}
                  {selectedTask.texto}
                </h2>
                <span className="tarea-text-legend">
                  Click en la tarea para editar
                </span>
              </div>
            )}
          </div>
        ) : (
          <p>Error, tarea no encontrada</p>
        )}
        <Link to="/" className="link-button">
          <button className="noselect">
            <span className="text">Volver</span>
            <span className="icon">
              <svg viewBox="7 0 20 34">
                <path d="M26.025 14.496l-14.286-.001 6.366-6.366L15.979 6 5.975 16.003 15.971 26l2.129-2.129-6.367-6.366h14.29z" />
              </svg>
            </span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Tarea;
