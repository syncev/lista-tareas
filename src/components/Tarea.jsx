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
      <h1>Tarea</h1>
      {selectedTask ? (
        <div>
          {isEditing ? (
            <div>
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
              <button onClick={handleSaveClick}>Guardar</button>
            </div>
          ) : (
            <h2 onClick={handleEditClick}> {selectedTask.texto}</h2>
          )}
          <p>Completada: {selectedTask.completada ? "si" : "no"}</p>
        </div>
      ) : (
        <p>Error, tarea no encontrada</p>
      )}
      <p>
        <Link to="/"> Volver</Link>
      </p>
    </>
  );
};

export default Tarea;
