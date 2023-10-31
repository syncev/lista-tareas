import React, { useState, useEffect } from "react";

import TareaFormulario from "./components/TareaFormulario";
import ListaTareas from "./components/ListaTareas";
import Tarea from "./components/Tarea";

import { Routes, Route, Link } from "react-router-dom";

function App() {
  //the task list
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("taskList")) || []
  );

  //Load data on page load
  useEffect(() => {
    setTaskList(JSON.parse(localStorage.getItem("taskList")));
  }, []); //empty so it loads the list only when the page first loads

  //save the taskList
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]); //with taskList so it saves with every change made to taskList

  //"completed" key, for sorting toDo from done
  const [isComplete, setIsComplete] = useState(false);
  
  //alternate between completed true or false
  const toggleComplete = (taskId) => {
    const updatedTaskList = taskList.map((task) => {
      if (task.id ===taskId) {
        return {...task, completada:!task.completada}
      }
      return task;
    })
    setTaskList(updatedTaskList)
    
  };
  //button to remove a taskList
  const removeBtn = (taskIdToRemove) => {
    setTaskList(taskList.filter((tasks) => tasks.id !== taskIdToRemove));
  };


  //the function for adding new tasks to the list, it adds an id that is set to be the actual time so it never repeats, the key "texto" for the newTask text to be placed and the key "completada" with the defaul status of false
  const handleTaskChange = (newTask) => {
    setTaskList([
      ...taskList,
      { id: Date.now(), texto: newTask, completada: isComplete },
    ]);
  };

  return (
    <>
      <div className="app-container">
        <Routes>
          <Route
            index
            element={
              <>
                <TareaFormulario onTaskChange={handleTaskChange} />
                <ListaTareas
                  taskList={taskList}
                  onToggleComplete={toggleComplete}
                  isComplete={isComplete}
                  onRemove={removeBtn}
                />
              </>
            }
          />
          <Route
            path="/Tarea/:taskId"
            element={<Tarea taskList={taskList} setTaskList={setTaskList} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
