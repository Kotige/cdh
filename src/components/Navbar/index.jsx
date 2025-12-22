import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import "./styles.scss"

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState("light");

  // Tema: sistema + preferência
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle("dark", savedTheme === "dark");
        } else if (systemDark) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        const next = theme === "light" ? "dark" : "light";
        setTheme(next);
        localStorage.setItem("theme", next);
        document.documentElement.classList.toggle("dark", next === "dark");
    };

    return (
        <header className="sticky top-0 z-40 border-b dark:border-slate-700 dark:bg-slate-900">
            <nav className="relative mx-auto max-w-6xl px-4 py-4" id="navbar">
                <div className="flex items-center justify-between">
                {/* Logo */}
                    <a
                        href="/"
                        className="logo text-sm text-slate-800 dark:text-slate-100"
                    >
                        <span className="logo-text">&lt;</span>
                        <span className="md:hidden">cdh</span>
                        <span className="hidden md:inline">CompiladorDeHistórias</span>
                        <span className="logo-text"> /&gt;</span>
                    </a>

                {/* Desktop menu */}
                    <div className="hidden items-center gap-6 md:flex">
                        <a className="text-sm hover:text-amber-700 dark:hover:text-amber-400" href="#stories">
                            Histórias
                        </a>
                        <a className="text-sm hover:text-amber-700 dark:hover:text-amber-400" href="#about">
                            Changelog
                        </a>

                        <button
                            onClick={toggleTheme}
                            className="rounded-lg p-2 dark:border-slate-700"
                            aria-label="Alternar tema"
                        >
                            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                        </button>
                    </div>

                {/* Mobile toggle */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="rounded-lg p-2 md:hidden dark:border-slate-700"
                        aria-label="Abrir menu"
                    >
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

            {/* Mobile dropdown menu */}
                <div
                    className={`
                        md:hidden
                        absolute left-0 right-0 top-full
                        overflow-hidden
                        border-b dark:border-slate-700/60
                        dark:bg-slate-900/70
                        backdrop-blur-md
                        shadow-lg
                        transition-all duration-300 ease-out
                        ${open ? "max-h-60 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}
                    `}
                >
                    <div className="flex flex-col gap-4 px-4 py-6">
                        <a
                            href="#stories"
                            onClick={() => setOpen(false)}
                            className="text-base text-slate-800 dark:text-slate-100"
                        >
                            Histórias
                        </a>

                        <a
                            href="#about"
                            onClick={() => setOpen(false)}
                            className="text-base text-slate-800 dark:text-slate-100"
                        >
                            Changelog
                        </a>

                        <button
                            onClick={toggleTheme}
                            className="mt-2 flex items-center gap-2"
                        >
                            {theme === "light" ? <Moon /> : <Sun />}
                            Alternar tema
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
