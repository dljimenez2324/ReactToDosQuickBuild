// import TodoList from "./components/TodoList"
import TodoListWQuery from "./components/TodoListWQuery"
import TodoListWQueryHook from "./components/TodoListWQueryHook"

const App = () => {
  return (
    <>
        <h1>Todo List</h1>
        {/* <TodoList/> */}

        {/* render now todolist with query */}
        {/* <TodoListWQuery/> */}

        {/* now lets render our custom hook with useTodos*/}
        <TodoListWQueryHook/>
    </>
  )
}

export default App