import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useRef } from "react"
import { Todo } from "../hooks/useTodosInf"


const TodoForm = () => {

    // returns a mutable reference object  and we use .current to get the current info
    const ref = useRef<HTMLInputElement>(null)

    const queryClient = useQueryClient();

    // we'll use custom hook  from Query
    const addTodo = useMutation<Todo, Error, Todo>({
        mutationFn: (todo: Todo) => 
            axios
                .post<Todo>("https://jsonplaceholder.typicode.com/todosx", todo)
                .then(res => res.data),
                
                onSuccess: (saveTodo, newTodo) => {
                    console.log(saveTodo);

                    // //Invalidate the cache  first clear the cache then refetch the data 
                    // // but this will not show right now because the jsonplaceholder api is a fake API
                    // queryClient.invalidateQueries({
                    //     queryKey: ['todos']
                    // })

                    // this will invalidate the cache get brand new data  using the key from our cache and the second parameter is a an arrow function which asks for the saveTodo which is the original  we then spread the todos or the empty array
                    queryClient.setQueryData<Todo[]>(['todos'], todos => [saveTodo, ...(todos || [])])
                },
                onError: () => {
                    console.log("Custom error message ... from addTodo custom hook");
                } 
                
    });

    // addTodo.mutate({
    //     id: 0,
    //     title: ref.current?.value as string,
    //     completed: false,
    //     userId: 1,
    // })

  return (
    <>
        <h1>Form</h1>
        {addTodo.error && <div className="alert alert-danger">{addTodo.error?.message}</div>}
        <form className="row m-3" onSubmit={(e) => {
                e.preventDefault()
                addTodo.mutate({
                    id: 0,
                    title: ref.current?.value as string,
                    completed: false,
                    userId: 1,
                })
        }}>
            <div className="col">
                <input ref={ref} className="form-control" type="text" />
            </div>
            <div className="col">
                <button className="btn btn-primary">Add</button>
            </div>
        </form>
    </>
  )
}

export default TodoForm