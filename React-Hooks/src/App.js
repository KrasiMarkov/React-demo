
import styles from './App.module.css';
import { CreateTask } from './components/CreateTask';
import { TaskList } from './components/TaskList';
import { TaskContext } from './contexts/TaskContext';
import { useFetch } from './hooks/useFetch';
import { useTodosApi } from './hooks/useTodosApi';


function App() {

  const [tasks, setTasks, isLoading] = useFetch('http://localhost:3030/jsonstore/todos', []);
  const { removeTodo, createTodo, updateTodo } = useTodosApi();
  
  const taskCreateHandler = (newTask) => {

    createTodo(newTask)
      .then(result => {
        setTasks(state => [
          ...state,
          result
        ]);
      })

   
  }

  const toggleTask = (task) => {
       
      const updatedTask = {...task, isCompleted: !task.isCompleted};

      updateTodo(task._id, updatedTask)
        .then(result => {
          setTasks(state => state.map(x => x._id == task._id ? updatedTask : x));
        })
      
  }

  const taskDeleteHandler = (taskId) => {

    removeTodo(taskId)
      .then(result => {
        setTasks(state => state.filter(x => x._id != taskId));
      });

  }

  const taskEditHandler = (task, newTitle) => {

    const updatedTask = {...task, title: newTitle};

      updateTodo(task._id, updatedTask)
        .then(result => {
          setTasks(state => state.map(x => x._id == task._id ? updatedTask : x));
        })
  }

  return (
    <TaskContext.Provider value={{tasks, taskDeleteHandler, toggleTask, taskEditHandler}}>
    <div className={styles['site-wrapper']}>
          <header>
             <h1>TODO App</h1>
          </header>

          <main>
            {isLoading 
             ? <p>Loading.......</p>
             : <TaskList/>
            }
              
              <CreateTask taskCreateHandler={taskCreateHandler}/>
          </main>
    </div>
    </TaskContext.Provider>
  );
}

export default App;
