const url = 'http://localhost:3030/jsonstore/todos';

export const useTodosApi = () => {
 
    const removeTodo = (taskId) => {

       return fetch(`${url}/${taskId}`, {
          method: 'DELETE',
       })
       .then(res => res.json())
    }

    return {
       removeTodo
    }
}