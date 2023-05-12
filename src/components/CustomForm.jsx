import {PlusIcon} from '@heroicons/react/24/solid'
import { useState } from 'react';

const CustomForm = ({  addTask}) => {
    const [task , setTask] = useState("");


    const handleFormSubmit = (e) => {
        e.preventDefault();
        // here we inshilised neme and is and bollen value setfalse 
        // when we are clicking the submit it will be give some storage value 
        addTask({
            name:task,
            checkded:false,
            id:Date.now()
        })
        setTask("")

    }



    return (
        <form className="todo"
            onSubmit={handleFormSubmit}

        >
            
            <div className="wrapper">
                <input type="text"
                id="task"
                className="input"
                value = {task}
                onInput={(e)=> setTask(e.target.value)}
                required
                autoFocus
                maxLength={60}
                placeholder="Enter Task"
                />
                <label htmlFor="task"
                className="label" 
                > Enter Task
                </label>
          
                <button 
                className="btn"
                aria-label="Add Task"
                type="submit"
                
                >
                    
                    <PlusIcon  />


                </button>


                 

            </div>


        </form>
    )
}

export default CustomForm