import { useState } from "react"
import Header from "./components/Header"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React and Tailwind", completed: false },
    { id: 2, text: "Build a beautiful app", completed: true }
  ])

  const handleAddTodo = (newTodoText) => {
    const newTodo = { id: Date.now(), text: newTodoText, completed: false };
    setTodos([...todos, newTodo])
  }

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  return(
    <div className="min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-[#0f172a] to-black relative overflow-hidden flex items-center justify-center">
      {/* Decorative Blobs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/30 rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-accent/30 rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-pulse delay-1000 pointer-events-none"></div>
      
      <div className="max-w-2xl w-full mx-auto backdrop-blur-xl bg-cardBg/40 p-8 sm:p-12 rounded-[2.5rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/10 relative z-10">
        <Header />
        
        <div className="mt-10 space-y-8">
          <TodoInput addTodo={handleAddTodo} />
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-500/50 to-transparent"></div>
          
          <TodoList 
            todos={todos} 
            deleteTodo={handleDeleteTodo} 
            toggleTodo={handleToggleTodo} 
          />
        </div>
      </div>
    </div>
  )
}

export default App
