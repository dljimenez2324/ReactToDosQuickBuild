import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// we're going to add our interface here
interface Todo {
    id: number
    title: string
    completed: boolean
}

// create a custom function that we will use in our QueryHook component
const useTodos = () => {

    const fetchTodos = () =>
        axios
            .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.data)

    return useQuery<Todo[], Error>({
        queryKey: ['todos'],
        queryFn: fetchTodos
        });
}

export default useTodos;