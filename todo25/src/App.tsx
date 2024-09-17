// import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"
import TodoListWQuery from "./components/TodoListWQuery"
import TodoListWQueryHook from "./components/TodoListWQueryHook"
import TodoListWQueryHookSelect from "./components/TodoListWQueryHookSelect"
import TodoListWQueryInf from "./components/TodoListWQueryInf"
import TodoListWQueryPagination from "./components/TodoListWQueryPagination"

const App = () => {
  return (
    <>
        <h1>Todo List</h1>
        {/* <TodoList/> */}

        <TodoForm/>
        {/* render now todolist with query */}
        <TodoListWQuery/>

        {/* now lets render our custom hook with useTodos*/}
        {/* <TodoListWQueryHook/> */}

        {/* <TodoListWQueryHookSelect/> */}
        {/* <TodoListWQueryPagination/> */}

        {/* <TodoListWQueryInf/> */}
    </>
  )
}

export default App