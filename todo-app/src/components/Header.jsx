function Header() {
    return(
        <header className="text-center pt-2 pb-4">
            <h1 className="text-5xl font-extrabold tracking-tighter">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-400 to-accent drop-shadow-2xl">
                    Task Master
                </span>
            </h1>
            <p className="mt-4 text-slate-400 text-xs font-semibold tracking-[0.3em] uppercase opacity-80">
                Elevate Your Productivity
            </p>
        </header>
    )
}

export default Header