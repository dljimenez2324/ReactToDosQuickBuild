// import { useQuery } from "@tanstack/react-query"
// import axios from "axios"
import useTodos from "../hooks/useTodos"

// interface Todo {
//     id: number
//     title: string
//     completed: boolean
// }

const TodoListWQueryHook = () => {

    // we're going to dissect this and put our fetching in the useTodos
    // const fetchTodos = () =>
    //             axios
    //                 .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
    //                 .then(response => response.data)
         
    // notice left of the equal sign is destructuring  and to the right is the actual useQuery
    // const {data: todos, error, isLoading} = useQuery<Todo[], Error>({
    //     queryKey: ['todos'],
    //     queryFn: fetchTodos
    // })

    // now we can use our custom hook
    const {data: todos, error, isLoading} = useTodos();



  return (
    <>
        {isLoading ? <p>Loading...</p> : null}
        {error ? <p>{error.message}: </p> : null}
        {todos?.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
        ))}
    </>
  )
}

export default TodoListWQueryHook