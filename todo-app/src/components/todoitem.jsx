import React from "react";

function Todoitem({todo, index, deleteTodo}) {
    return (
        <div>
            <p>{todo}</p>
            <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
    )
}

export default Todoitem