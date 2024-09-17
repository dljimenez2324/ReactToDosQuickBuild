// import { useState } from "react";
// import useTodos from "../hooks/useTodos";
import React from "react";
import useTodosInf from "../hooks/useTodosInf";

type Todo = {
  id: number,
  title: string
}

const TodoListWQueryInf = () => {

  const pageSize = 10;  // changes the number of items we will display each time

  // useStates
  // const [userId, setUserId ] = useState<number>()


  const { data: todos, error, isLoading, fetchNextPage, isFetchingNextPage } = useTodosInf({pageSize});

  
  return (
    <>
      <div data-bs-theme="dark" >
          {isLoading ? <p>Loading...</p> : null}
          {error ? <p>{error.message}: </p> : null}
          
          <ul className="list-group">

            {todos?.pages.map((page,index) => (
              <React.Fragment key={index}>
                {page.map(todo => ( 
                  <li key={todo.id} className="list-group-item">
                {todo.title}
              </li>))}
              </React.Fragment>
              ))}

          </ul>
          <button className="btn btn-primary my-3 ms-2" onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
              {isFetchingNextPage ? "Loading..." : "LoadMore"}
          </button>
          
        </div>
    </>
  );
};

export default TodoListWQueryInf;
