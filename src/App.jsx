import React, {useState, useEffect} from "react"
import TareaFormulario from "./components/TareaFormulario";
import ListaTareas from "./components/ListaTareas";


function App() {
  //the task list
  const [taskList,setTaskList] = useState(JSON.parse(localStorage.getItem("taskList")) || []);

  //Load data on page load
  useEffect(() => {
      setTaskList(JSON.parse(localStorage.getItem("taskList")))
  },[]);//empty so it loads the list only when the page first loads
  
  //save the taskList
  useEffect(() =>{
    localStorage.setItem("taskList", JSON.stringify(taskList));
  },[taskList]) //with taskList so it saves with every change made to taskList
  
  //"complete" key, for sorting toDo from done
  const [isComplete, setIsComplete] = useState(false)
  
  //button to remove a taskList
  const removeBtn = (taskIdToRemove) =>{
    setTaskList(taskList.filter((tasks) => tasks.id !== taskIdToRemove))
  }
  
  //alternate between completed true or false
  const toggleComplete =() => {
    setIsComplete(!isComplete)
    console.log(isComplete)
  }
  
  //the function for adding new tasks to the list, it adds an id, the key "texto" for the newTask text to be placed and the key "completada" with the defaul status of false
  const handleTaskChange = (newTask) => {
    setTaskList([...taskList, {id:Date.now(),texto: newTask, completada: isComplete}]);
    
  }

  return (
    <>
    <h1>My React Tutorial</h1>
      <TareaFormulario onTaskChange={handleTaskChange} />
      <ListaTareas taskList={taskList} onToggleComplete={toggleComplete} onRemove={removeBtn} />
    </>
  )
}

export default App
