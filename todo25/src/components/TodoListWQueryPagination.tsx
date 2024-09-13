import { useState } from "react";
import useTodos from "../hooks/useTodos";

// we're going to add a select tag so that we can have a drop down and we can set the select to the id

const TodoListWQueryPagination = () => {

  const pageSize = 10;

  // useStates
  const [userId, setUserId ] = useState<number>()
  const [page, setPage] = useState(1)

  const { data: todos, error, isLoading } = useTodos({page, pageSize});

  
  return (
    <>
      <div data-bs-theme="dark" >
          {isLoading ? <p>Loading...</p> : null}
          {error ? <p>{error.message}: </p> : null}
          
          <ul className="list-group">
            {todos?.map((todo) => (
              <li key={todo.id} className="list-group-item">
                {todo.title}
              </li>
            ))}
          </ul>
          <button className="btn btn-primary my-3 ms-2" onClick={() => setPage(page - 1)}>
              Previous
          </button>
          <button className="btn btn-primary my-3 ms-2" onClick={() => setPage(page + 1)}>
              Next
          </button>
        </div>
    </>
  );
};

export default TodoListWQueryPagination;
