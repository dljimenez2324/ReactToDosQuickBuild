import { useQuery } from "@tanstack/react-query"
import axios from "axios"
// import { useEffect, useState } from "react"

// react query is just another library.  it can do auto fetching, custimizing fetching,  we're using           https://tanstack.com/query/latest/docs/framework/react/installation
// now we need to configure it
//

// make an interface to shape our data first
interface Todo {
    id: number
    title: string
    completed: boolean
}

const TodoListWQuery = () => {

    // useQuery a custom react hook
        // first object will be a key  which stores the cache
        // we will have a key and value

    const fetchTodos = () =>
                axios
                    .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
                    .then(response => response.data)
                    // .catch(error => error)

    // notice that we are renaming our object variable to  todos by using  data: todos
    // the useQuery is set to a data object
    // the useQuery has a type
    // the object inside uses a key / value and function name and function use from above
    const {data: todos, error, isLoading} = useQuery<Todo[], Error>({
        queryKey: ['todos'],
        queryFn: fetchTodos
    })


    //////////   NOTICE all of what we used before can go away now if we use useQuery

    // // usestates
    // const [todos, setTodos] = useState<Todo[]>([]);
    // const [error, setError] = useState("");

    // // create a fetch data function to help us fetch data with axios
    // const fetchData = () =>{

    //     axios
    //         .get("https://jsonplaceholder.typicode.com/todos")
    //         .then(response => setTodos(response.data))
    //         .catch(error => setError(error));
            
    // }

    // // useeffect to use our functions
    // useEffect(() => {
    //     fetchData();
    // }, [])
    


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

export default TodoListWQuery