// import TodoList from "./components/TodoList"
import TodoListWQuery from "./components/TodoListWQuery"
import TodoListWQueryHook from "./components/TodoListWQueryHook"
import TodoListWQueryHookSelect from "./components/TodoListWQueryHookSelect"

const App = () => {
  return (
    <>
        <h1>Todo List</h1>
        {/* <TodoList/> */}

        {/* render now todolist with query */}
        {/* <TodoListWQuery/> */}

        {/* now lets render our custom hook with useTodos*/}
        {/* <TodoListWQueryHook/> */}

        <TodoListWQueryHookSelect/>
    </>
  )
}

export default App