import { useState } from "react"

function TodoInput({ addTodo }) {
    const [input, setInput] = useState("")

    const handleChange = () => {
        if (input.trim() !== "") {
            addTodo(input.trim())
            setInput("")
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleChange();
        }
    }

    return (
        <div className="flex w-full gap-4 group">
            <div className="relative flex-1">
                <input 
                    type="text" 
                    placeholder="What's on your mind today?" 
                    value={input} 
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full bg-white/5 border border-white/10 text-slate-100 px-6 py-4 rounded-2xl 
                               focus:outline-none focus:ring-0 focus:border-primary/50
                               transition-all duration-500 placeholder:text-slate-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]
                               hover:bg-white/10"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-focus-within:opacity-100 blur transition-opacity pointer-events-none -z-10"></div>
            </div>
            <button 
                onClick={handleChange}
                className="bg-white/10 hover:bg-primary text-white font-bold p-4 rounded-2xl border border-white/10
                           hover:border-primary shadow-lg transition-all duration-300 transform active:scale-90
                           flex items-center justify-center group/btn backdrop-blur-md"
                aria-label="Add task"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-[2.5px] group-hover/btn:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>
    )
}

export default TodoInput