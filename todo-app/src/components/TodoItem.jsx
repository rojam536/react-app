function TodoItem({ todo, deleteTodo, toggleTodo }) {
    return (
        <li className={`group flex items-center justify-between p-4 rounded-2xl border transition-all duration-500 ease-in-out
            ${todo.completed 
                ? "bg-white/5 border-white/5 opacity-60" 
                : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 hover:translate-x-1"
            }`}
        >
            <div className="flex items-center gap-4 flex-1 cursor-pointer" onClick={() => toggleTodo(todo.id)}>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300
                    ${todo.completed 
                        ? "bg-primary border-primary scale-110 shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                        : "border-slate-500 group-hover:border-primary"
                    }`}
                >
                    {todo.completed && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white animate-in zoom-in duration-300" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    )}
                </div>
                
                <span className={`text-lg font-medium transition-all duration-500
                    ${todo.completed 
                        ? "text-slate-500 line-through tracking-wider" 
                        : "text-slate-200"}
                `}>
                    {todo.text}
                </span>
            </div>

            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    deleteTodo(todo.id);
                }}
                className="text-slate-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all duration-300 p-2 rounded-xl hover:bg-red-400/10 focus:opacity-100 transform hover:rotate-12"
                aria-label="Delete task"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </li>
    )
}

export default TodoItem
