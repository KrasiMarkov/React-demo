const url = 'http://localhost:3030/jsonstore/todos';

export const useTodosApi = () => {
 
    const removeTodo = (taskId) => {

       return fetch(`${url}/${taskId}`, {
          method: 'DELETE',
       })
       .then(res => res.json())
    }

    const createTodo = (title) => {

     return fetch(url, {
        method: 'POST',
        body: JSON.stringify({title, isCompleted: false})
      })
      .then(res => res.json());

    }

    return {
       removeTodo,
       createTodo
    }
}