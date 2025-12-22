import { useState, useRef, useEffect } from "react";
import { Search, ChevronDown } from "lucide-react";
import "./styles.scss";

export default function Submenu() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [storiesOpen, setStoriesOpen] = useState(false);

    const searchRef = useRef(null);
    const inputRef = useRef(null);

    // Auto focus ao abrir
    useEffect(() => {
        if (searchOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [searchOpen]);

    // Fechar ao clicar fora
    useEffect(() => {
        function handleClickOutside(e) {
            if (
                searchOpen &&
                searchRef.current &&
                !searchRef.current.contains(e.target)
            ) {
                setSearchOpen(false);
            }
        }

    document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [searchOpen]);

    // Fechar com ESC
    useEffect(() => {
        function handleEsc(e) {
            if (e.key === "Escape") {
                setSearchOpen(false);
            }
        }

        document.addEventListener("keydown", handleEsc);
            return () => document.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <nav className="submenu -mb-10">
            {/* Linha principal */}
            <div className="submenu-main">
                <a href="/#" className="submenu-link">Início</a>

                <div
                    className={`submenu-dropdown ${storiesOpen ? "open" : ""}`}
                    onMouseEnter={() => setStoriesOpen(true)}
                    onMouseLeave={() => setStoriesOpen(false)}
                >
                    <a
                        href="/historias"
                        className="submenu-link"
                        onClick={(e) => {
                            e.preventDefault();
                            setStoriesOpen((prev) => !prev)
                        } }
                    >
                        <span className="flex items-end justify-center">Histórias <ChevronDown size={20}/></span>
                    </a>

                    <div className="submenu-dropdown-content">
                        <a href="/historias/fantasia">Fantasia</a>
                        <a href="/historias/ficcao-cientifica">Ficção científica</a>
                        <a href="/historias/terror">Terror</a>
                        <a href="/historias">Todas</a>
                    </div>
                </div>

                <a href="/sobre" className="submenu-link">Sobre</a>
                <a href="/changelog" className="submenu-link">Changelog</a>
            </div>

            {/* Busca */}
            <div
                ref={searchRef}
                className={`submenu-search ${searchOpen ? "open" : ""}`}
            >
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Buscar histórias..."
                    className="submenu-search-input"
                />

                <button
                    className="submenu-search-btn"
                    onClick={() => setSearchOpen((prev) => !prev)}
                    aria-label="Abrir busca"
                    aria-expanded={searchOpen}
                >
                    <Search size={18} />
                </button>
            </div>
        </nav>
    );
}

