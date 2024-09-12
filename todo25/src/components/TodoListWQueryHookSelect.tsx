import { useState } from "react";
import useTodos from "../hooks/useTodos";

// we're going to add a select tag so that we can have a drop down and we can set the select to the id

const TodoListWQueryHookSelect = () => {

  // useStates
  const [userId, setUserId ] = useState<number>()

  const { data: todos, error, isLoading } = useTodos(userId);

  
  return (
    <>
      <div data-bs-theme="dark" >
          {isLoading ? <p>Loading...</p> : null}
          {error ? <p>{error.message}: </p> : null}
          <select value={userId} className="form-select mb-3"  onChange={(e) => setUserId(parseInt(e.target.value)) }>
              <option value={""}></option>
              <option value={"1"}>User 1</option>
              <option value={"2"}>User 2</option>
              <option value={"3"}>User 3</option>
          </select>
          <ul className="list-group">
            {todos?.map((todo) => (
              <li key={todo.id} className="list-group-item">
                {todo.title}
              </li>
            ))}
          </ul>
        </div>
    </>
  );
};

export default TodoListWQueryHookSelect;
