import { useState } from "react"

function Todoinput({addTodo}) {
    const [input, setTodo] = useState("")
    const handleChange = () =>  {  
        if (input.trim() !== "") {
            addTodo(input)
            setTodo("")
        }
    }

    return (
        <div>
        <input type="text" placeholder="Enter your todo" 
        value={input} onChange={e=>setTodo(e.target.value)}
        />
        <button onClick={handleChange}>Add</button>
        </div>
    )
}

export default Todoinput