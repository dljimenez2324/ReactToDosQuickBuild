import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// we're going to add our interface here
interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}

// create a custom function that we will use in our QueryHook component
const useTodos = (userId:number | undefined) => {

    // const banana = () => {
        
    //     return (useQuery<Todo[], Error>({
    //                 queryKey: userId ? ["users", userId, 'todos'] : ["todos"],
    //                 queryFn: fetchTodos,
    //                 staleTime: 10 * 1000 // stale after 10 seconds
    //                 }));
    // }

    const fetchTodos = () =>
        axios
            .get<Todo[]>("https://jsonplaceholder.typicode.com/todos", {
                params: {
                    userId
                }
            })
            .then(response => response.data)

    // return banana();

    // or you can do
    return useQuery<Todo[], Error>({
        queryKey: userId ? ["users", userId, 'todos'] : ["todos"],
        queryFn: fetchTodos,
        staleTime: 10 * 1000 // stale after 10 seconds
        });
}

export default useTodos;