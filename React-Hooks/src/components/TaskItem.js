import { useContext, useEffect } from "react";
import { TaskContext } from "../contexts/TaskContext";
import styles from './TaskItem.module.css';

export const TaskItem = ({task}) => {
 
    const { taskDeleteHandler, toggleTask } = useContext(TaskContext);

    

    useEffect(() => {
      
        console.log('Mount');

        return () => {
            console.log('Unmount');
        }
    }, []);


    const classNames = [
        task.isCompleted ? styles.completed : '',
        styles['task-item']
    ]

    return(
        <li>
            
            <span className={classNames.join(' ')} onClick={() => toggleTask(task._id)}>{task.title}</span>
            <button onClick={() => taskDeleteHandler(task._id)}>x</button>
        </li>
    );
}