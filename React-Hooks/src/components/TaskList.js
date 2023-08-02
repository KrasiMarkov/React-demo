import { useContext } from "react";
import { TaskItem } from "./TaskItem";
import { TaskContext } from "../contexts/TaskContext";


export const TaskList = () => {

    const { tasks } = useContext(TaskContext);

    return(
        <ul>
            {tasks.map(x => <TaskItem title={x.title} key={x._id} taskId={x._id}/>)}
        </ul>
    );
}