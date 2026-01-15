import { useState, useRef, useEffect } from "react";
import { Search, ChevronDown } from "lucide-react";

import "./styles.scss";

export default function Submenu() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [storiesOpen, setStoriesOpen] = useState(false);

    const searchRef = useRef(null);
    const inputRef = useRef(null);
    const storiesRef = useRef(null);

    // Autofocus ao abrir busca
    useEffect(() => {
        if (searchOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [searchOpen]);

    // Click outside
    useEffect(() => {
        function handleClickOutside(e) {
        if (searchOpen && searchRef.current && !searchRef.current.contains(e.target)) {
            setSearchOpen(false);
        }

        if (storiesOpen && storiesRef.current && !storiesRef.current.contains(e.target)) {
            setStoriesOpen(false);
        }
    }

    document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [searchOpen, storiesOpen]);

    // ESC
    useEffect(() => {
        function handleEsc(e) {
            if (e.key === "Escape") {
                setSearchOpen(false);
                setStoriesOpen(false);
            }
        }

        document.addEventListener("keydown", handleEsc);
            return () => document.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <nav 
            className="submenu relative flex items-center justify-center gap-10 text-sm text-text-muted -mb-10">
            {/* Linha principal */}
            <div className="flex items-center gap-8">
                <a href="/" className="hover:text-text-main transition">
                    Início
                </a>

                {/* Dropdown */}
                <div ref={storiesRef} className="relative">
                    <button
                        onClick={() => setStoriesOpen((prev) => !prev)}
                        className="flex items-center gap-1 hover:text-text-main transition"
                        aria-expanded={storiesOpen}
                    >
                        Histórias
                        <ChevronDown
                            size={16}
                            className={`transition-transform ${ storiesOpen ? "rotate-180" : ""}`}
                        />
                    </button>

                    {/* Conteúdo */}
                    <div
                        className={`
                            absolute left-1/2 top-full mt-3 -translate-x-1/2
                            w-44 rounded-xl border border-border-subtle
                            bg-bg-surface shadow-lg
                            transition-all duration-200 ease-out
                            ${ storiesOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
                        `}
                    >
                        <a href="/fantasia" className="block px-4 py-2 hover:bg-white/5 transition">
                            Fantasia
                        </a>
                        <a href="/ficcao-cientifica" className="block px-4 py-2 hover:bg-white/5 transition">
                            Ficção científica
                        </a>
                        <a href="/terror" className="block px-4 py-2 hover:bg-white/5 transition">
                            Terror
                        </a>
                        <a href="/historias" className="block px-4 py-2 hover:bg-white/5 transition">
                            Todas
                        </a>
                    </div>
                </div>

                <a href="/aboutme" className="hover:text-text-main transition">
                    Sobre
                </a>

                <a href="/changelog" className="hover:text-text-main transition">
                    Changelog
                </a>
            </div>

            {/* Busca */}
                <div ref={searchRef} className="relative flex items-center submenu-search">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Buscar histórias..."
                        className={`
                            bg-transparent border-b border-border-subtle
                            text-text-main placeholder:text-text-muted
                            text-sm
                            transition-all duration-200 ease-out
                            focus:outline-none focus:border-accent
                            ${searchOpen ? "w-40 opacity-100 mr-2" : "w-0 opacity-0 mr-0 pointer-events-none"}
                        `}
                    />

                        <button
                            onClick={() => setSearchOpen((prev) => !prev)}
                            className="text-text-muted hover:text-text-main transition"
                            aria-expanded={searchOpen}
                        >
                            <Search size={16} />
                        </button>
                </div>
        </nav>
    );
}
