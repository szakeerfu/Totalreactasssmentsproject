 
 
import { useState } from 'react';
import TaskList from './components/components1/molecule/flodersmolecule/TaskList.jsx'
import CustomForm from './components/CustomForm';




function App() {
 const [tasks, setTasks]=useState([])

  // why we are writing function here is that we have to use this fuction to all components 
  // thats whuy we are using ad we are passing this components in CustomForm form on that customform 
  // we just insheslide some name and id
  const addTask = (task) =>{
    setTasks(prevState => [...prevState , 
      task])
  }

  const deleteTask = (id) =>{
    setTasks(prevState => prevState.filter(t => 
      t.id !== id)) 
  }
  const  toggleTask = (id) =>{
    setTasks(prevState => prevState.map(t => (
      t.id === id
      ? {...t, checked: !t.checked }
      : t
       ) ) ) 
  }

  return (
    <div className="container">
      <header> my Task List   
      </header>
      <CustomForm addTask = { addTask}/>
      {
        tasks && 
        <TaskList
         tasks = {tasks}
         deleteTask = {deleteTask}
         toggleTask = {toggleTask}

          />
      }

     
 
    </div>
  );
}

export default App;
