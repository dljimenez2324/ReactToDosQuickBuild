import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// we're going to add our interface here
interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}

interface TodoQuery {
    page: number;
    pageSize: number;
}

// create a custom function that we will use in our QueryHook component
const useTodos = (query: TodoQuery) => {

    

    const fetchTodos = () =>
        axios
            .get<Todo[]>("https://jsonplaceholder.typicode.com/todos", {
                params: {
                    _start: (query.page -1) * query.pageSize,
                    _limit: query.pageSize
                }
            })
            .then(response => response.data)

    
    return useQuery<Todo[], Error>({
        queryKey: ["todos", query],
        queryFn: fetchTodos,
        staleTime: 10 * 1000 // stale after 10 seconds
        });
}

export default useTodos;