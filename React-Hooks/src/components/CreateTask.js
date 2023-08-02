import { useState } from 'react';

export const CreateTask = ({ taskCreateHandler }) => {

    const [task, setTask] = useState('');

    const onSubmit = (e) => {

      e.preventDefault();
      
      taskCreateHandler(task);

      setTask('');

    }

    const onChange = (e) => {

        let value = e.target.value;

        setTask(value);
    }

    return(
      <form onSubmit={onSubmit}>
        <input type="text" name="taskName" placeholder="Do the wishes" onChange={onChange} value={task}></input>
        <input type="submit" value="Add"></input>
      </form>
    );
}
