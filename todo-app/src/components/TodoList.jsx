import React from "react";
import TodoItem from './TodoItem'

function TodoList({todos, deleteTodo, toggleTodo}) {
    return (
        <div>
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} index={index} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
            ))}
        </div>
    )
}

export default TodoList