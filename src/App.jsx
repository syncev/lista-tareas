import React, {useState, useEffect} from "react"
import TareaFormulario from "./components/TareaFormulario";
import ListaTareas from "./components/ListaTareas";


function App() {
  //the task list
  const [task,setTask] = useState([]);
  
  //id counter
  const [idCounter,setIdCounter] = useState(1)
  
  //"complete" key, for sorting toDo from done
  const [isComplete, setIsComplete] = useState(false)
  
  //button to remove a task
  const removeBtn = (taskIdToRemove) =>{
    setTask(task.filter((tasks) => tasks.id !== taskIdToRemove))
  }
  
  //alternate between completed true or false
  const toggleComplete =() => {
    setIsComplete(!isComplete)
    console.log(isComplete)
  }
  
  //the function for adding new tasks to the list, it adds an id, the key "texto" for the newTask text to be placed and the key "completada" with the defaul status of false
  const handleTaskChange = (newTask) => {
    setTask([...task, {id:idCounter,texto: newTask, completada: isComplete}]);
    //updates the counter for the next task to use it
    setIdCounter(idCounter+1)
  }

  return (
    <>
    <h1>My React Tutorial</h1>
      <TareaFormulario onTaskChange={handleTaskChange} />
      <ListaTareas taskList={...task} onToggleComplete={toggleComplete} onRemove={removeBtn} />
    </>
  )
}

export default App
