import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

// we're going to add our interface here
export interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}

interface TodoQuery {
    // page: number;
    pageSize: number;
}

// create a custom function that we will use in our QueryHook component
const useTodosInf = (query: TodoQuery) => useInfiniteQuery<Todo[], Error>({
        queryKey: ["todos", query],
        queryFn: ({pageParam = 1}) =>  
            axios
                .get<Todo[]>("https://jsonplaceholder.typicode.com/todos", {
                    params: {
                _start: (pageParam as number - 1) * query.pageSize,
                _limit: query.pageSize
            }
        })
        .then(response => response.data),
        staleTime: 10 * 1000, // stale after 10 seconds
        getNextPageParam: (lastPage,allPages) => {
            return lastPage.length > 0 ? allPages.length + 1 : undefined;
        },
        initialPageParam: 1
        });


export default useTodosInf;