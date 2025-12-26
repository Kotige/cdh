import {
    FaInstagram,
    FaGithub,
    FaTiktok
} from "react-icons/fa";
import "./styles.scss";


export default function Footer() {
    return (
        <footer id="footer" className="text-center mt-24 bg-neutral-200">
            <div className="mx-auto max-w-7xl px-6 py-16">
                
                <div className="grid gap-12 lg:grid-cols-4">
                    
                    {/* Identidade */}
                    <div className="space-y-4">
                        <h3 className="text-3xl">
                            Kernel
                        </h3>

                        <p className="text-sm leading-relaxed text-neutral-500">
                            //histórias compiladas
                        </p>
                    </div>

                    {/* Navegação */}
                    <div>
                        <h4 className="mb-4 text-sm uppercase tracking-wider text-neutral-700">
                            Navegação
                        </h4>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="/" className="hover:text-neutral-500 transition">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/posts" className="hover:text-neutral-500 transition">
                                    Histórias
                                </a>
                            </li>
                            <li>
                                <a href="/sobre" className="hover:text-neutral-500 transition">
                                    Sobre
                                </a>
                            </li>
                            <li>
                                <a href="/contato" className="hover:text-neutral-500 transition">
                                    Changelog
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Categorias */}
                    <div>
                        <h4 className="mb-4 text-sm uppercase tracking-wider text-neutral-700">
                            Categorias
                        </h4>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="/categoria/contos" className="hover:text-neutral-500 transition">
                                    Fantasia
                                </a>
                            </li>
                            <li>
                                <a href="/categoria/crônicas" className="hover:text-neutral-500 transition">
                                    Sci-fi
                                </a>
                            </li>
                            <li>
                                <a href="/categoria/ensaios" className="hover:text-neutral-500 transition">
                                    Terror
                                </a>
                            </li>
                            <li>
                                <a href="/categoria/arquivo" className="hover:text-neutral-500 transition">
                                    Todos
                                </a>
                            </li>
                        </ul>
                    </div>

{/* Social */}
<div>
    <h4 className="mb-4 text-sm uppercase tracking-wider text-neutral-700">
        Conexões
    </h4>

    <div className="flex items-center justify-center gap-4">

        <a
            href="https://github.com/Kotige"
            aria-label="GitHub"
            className="text-neutral-700 transition hover:text-neutral-500"
        >
            <FaGithub size={18} />
        </a>

        <a
            href="https://instagram.com/modvestudio"
            aria-label="Instagram"
            className="text-neutral-700 transition hover:text-neutral-500"
        >
            <FaInstagram size={18} />
        </a>

        <a
            href="#"
            aria-label="TikTok"
            className="text-neutral-700 transition hover:text-neutral-500"
        >
            <FaTiktok size={18} />
        </a>
    </div>
</div>


                </div>

                {/* Linha inferior */}
                <div className="mt-16 border-t border-neutral-300 pt-6 text-xs text-neutral-500 flex flex-col gap-2 md:flex-row md:justify-between">
                    <span>© 2025 modv estúdio. Todos os direitos reservados.</span>
                    <span>Feito com palavras e silêncio.</span>
                </div>

            </div>
        </footer>
    );
}
