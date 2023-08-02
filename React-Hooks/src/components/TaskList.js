import { useContext } from "react";
import { TaskItem } from "./TaskItem";
import { TaskContext } from "../contexts/TaskContext";


export const TaskList = () => {

    const { tasks } = useContext(TaskContext);

    return(
        <ul>
            {tasks.map(x => <TaskItem task={x} key={x._id}/>)}
        </ul>
    );
}