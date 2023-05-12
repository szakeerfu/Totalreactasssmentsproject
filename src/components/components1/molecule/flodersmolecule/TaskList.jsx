 
// it just only use this components thsi is cssmobule
import styles from './TaskList.module.css'

import TaskItem from '../../atom/floderslist/TaskItem'


const TaskList = ({tasks ,  deleteTask, toggleTask }) => {
  return (
    <ul className={ styles.tasks}>
        {
            tasks.sort((a,b) => b.id - a.id) .map(task =>(
                <TaskItem
                key={task.id}
                task={task}
                deleteTask={ deleteTask}
                toggleTask={ toggleTask}
                />

            )
              


            )
        }

    </ul>
  )
}

export default TaskList