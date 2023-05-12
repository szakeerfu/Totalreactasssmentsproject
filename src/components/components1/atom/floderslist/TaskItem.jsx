import { useState } from 'react'
import styles from './TaskItem.module.css'


import { CheckIcon } from '@heroicons/react/24/outline'

import { PencilSquareIcon } from '@heroicons/react/24/outline'

import { TrashIcon } from '@heroicons/react/24/outline'

const TaskItem = ({task,  deleteTask, toggleTask }) => {
    const [isChecked, setIsCheck] =  useState(task.checked)


    const handleCheckboxChange=(e)=>{
        setIsCheck(!isChecked)
        toggleTask (task.name)

    }


  return (
    <li className={styles.task}>
        <div className={styles["task-group"]}>
            <input
            type='checkbox'
            className={styles.checkbox}
            checked={isChecked}
            onChange={handleCheckboxChange}
            name={task.name}
            id={task.id}
            />
            <label
             htmlFor={task.id}
             className={styles.label}
             >
                {task.name}
                <p className={styles.checkmark}>
                    <CheckIcon strokeWidth={2}  
                    width={26}
                    height={26} 

                    />

                </p>
            </label>



        </div>
        <div className={styles["task-group"]}>
            <button
            className='btn'
            aria-label={` update ${task.name} Task`}
            // onClick={}
            
            >
                 < PencilSquareIcon
                  width={26}
                  height={26}
                 />

            </button>
            <button
            className={`btn ${styles.delete}`}
            aria-label={` Delete ${task.name} Task`}
            onClick={()=> deleteTask(task.id)}
            
            >
                 <TrashIcon
                  width={26}
                  height={26}
                 />

            </button>

        </div>
         
    </li>
  )
}

export default TaskItem