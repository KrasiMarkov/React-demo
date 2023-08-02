
import styles from './App.module.css';
import { CreateTask } from './components/CreateTask';
import { TaskList } from './components/TaskList';
import { TaskContext } from './contexts/TaskContext';
import { useFetch } from './hooks/useFetch';
import { useTodosApi } from './hooks/useTodosApi';


function App() {

  const [tasks, setTasks, isLoading] = useFetch('http://localhost:3030/jsonstore/todos', []);
  const { removeTodo, createTodo } = useTodosApi();
  
  const taskCreateHandler = (newTask) => {

    createTodo(newTask)
      .then(result => {
        setTasks(state => [
          ...state,
          result
        ]);
      })

   
  }

  const toggleTask = (taskId) => {
      setTasks(state => state.map(x => x._id == taskId ? {...x, isCompleted: !x.isCompleted} : x));
  }

  const taskDeleteHandler = (taskId) => {

    removeTodo(taskId)
      .then(result => {
        setTasks(state => state.filter(x => x._id != taskId));
      });

  }

  return (
    <TaskContext.Provider value={{tasks, taskDeleteHandler, toggleTask}}>
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
