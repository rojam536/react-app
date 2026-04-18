import { useState } from "react"
import Header from "./components/Header"
import Todoinput from "./components/Todoinput"
import Todolist from "./components/Todolist"

function App() {
  const [todos, setTodos] = useState([])

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }
  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index)
    setTodos(newTodos)
  }

  return(
    <>
    <Header />
    <Todoinput addTodo={handleAddTodo} />
    <Todolist todos={todos} deleteTodo={handleDeleteTodo} />
    
    </>
  )
  }
export default App
