import axios from "axios"
import { useEffect, useState } from "react"

// make an interface to shape our data first
interface Todo {
    id: number
    title: string
    completed: boolean
}

const TodoList = () => {

    // usestates
    const [todos, setTodos] = useState<Todo[]>([]);
    const [error, setError] = useState("");

    // create a fetch data function to help us fetch data with axios
    const fetchData = () =>{

        
        axios
            .get("https://jsonplaceholder.typicode.com/todos")
            .then(response => setTodos(response.data))
            .catch(error => setError(error));
    }

    // useeffect to use our functions
    useEffect(() => {
        fetchData();
    }, [])
    

  return (
    <>
        {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
        ))};;
    </>
  )
}

export default TodoList