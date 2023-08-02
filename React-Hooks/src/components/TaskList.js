import { TaskItem } from "./TaskItem";


export const TaskList = ({tasks, taskDeleteHandler}) => {


    return(
        <ul>
            {tasks.map(x => <TaskItem title={x.title} key={x._id} taskId={x._id} taskDeleteHandler={taskDeleteHandler}/>)}
        </ul>
    );
}