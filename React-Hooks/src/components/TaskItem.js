import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";
import styles from './TaskItem.module.css';

export const TaskItem = ({task}) => {
 
    const [isEdit, setIsEdit] = useState(false);
    const { taskDeleteHandler, toggleTask, taskEditHandler} = useContext(TaskContext);
    
    

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

    const taskEditClickHandler = () => {

       setIsEdit(true);
    }

    

    


    const onClickEdit = (e) => {
 
        e.preventDefault();

        let formData = new FormData(e.target);

        let title = formData.get('title').trim();


        taskEditHandler(task, title);

        setIsEdit(false);
    }

    return(
        <li>
            {isEdit
             ? (<form onSubmit={onClickEdit}>
                <input type="text" name="title" defaultValue={task.title}/>
                <input type="submit" value="Edit"/>
             </form>
             )
             : (
                <>
                   <span className={classNames.join(' ')} onClick={() => toggleTask(task)}>{task.title}</span>
                   <button onClick={() => taskDeleteHandler(task._id)}>x</button>
                   <button onClick={taskEditClickHandler}>Edit</button>
              </>
             )
            }
        </li>
    );
}