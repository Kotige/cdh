import {
    SiX,
    SiInstagram,
    SiGithub,
    SiTiktok,
} from "react-icons/si";


export default function Footer() {
    return (
        <footer className="text-center mt-24 border-t border-neutral-800 bg-neutral-950 text-neutral-300">
            <div className="mx-auto max-w-7xl px-6 py-16">
                
                <div className="grid gap-12 lg:grid-cols-4">
                    
                    {/* Identidade */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-neutral-100">
                            Kernel
                        </h3>

                        <p className="text-sm leading-relaxed text-neutral-400">
                            //histórias compiladas
                        </p>
                    </div>

                    {/* Navegação */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-200">
                            Navegação
                        </h4>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="/" className="hover:text-neutral-100 transition">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/posts" className="hover:text-neutral-100 transition">
                                    Histórias
                                </a>
                            </li>
                            <li>
                                <a href="/sobre" className="hover:text-neutral-100 transition">
                                    Sobre
                                </a>
                            </li>
                            <li>
                                <a href="/contato" className="hover:text-neutral-100 transition">
                                    Changelog
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Categorias */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-200">
                            Categorias
                        </h4>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="/categoria/contos" className="hover:text-neutral-100 transition">
                                    Fantasia
                                </a>
                            </li>
                            <li>
                                <a href="/categoria/crônicas" className="hover:text-neutral-100 transition">
                                    Sci-fi
                                </a>
                            </li>
                            <li>
                                <a href="/categoria/ensaios" className="hover:text-neutral-100 transition">
                                    Terror
                                </a>
                            </li>
                            <li>
                                <a href="/categoria/arquivo" className="hover:text-neutral-100 transition">
                                    Todos
                                </a>
                            </li>
                        </ul>
                    </div>

{/* Social */}
<div>
    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-200">
        Conexões
    </h4>

    <div className="flex items-center justify-center gap-4">
        <a
            href="#"
            aria-label="X (Twitter)"
            className="text-neutral-400 transition hover:text-neutral-100"
        >
            <SiX size={18} />
        </a>

        <a
            href="#"
            aria-label="Instagram"
            className="text-neutral-400 transition hover:text-neutral-100"
        >
            <SiInstagram size={18} />
        </a>

        <a
            href="#"
            aria-label="GitHub"
            className="text-neutral-400 transition hover:text-neutral-100"
        >
            <SiGithub size={18} />
        </a>

        <a
            href="#"
            aria-label="TikTok"
            className="text-neutral-400 transition hover:text-neutral-100"
        >
            <SiTiktok size={18} />
        </a>
    </div>
</div>


                </div>

                {/* Linha inferior */}
                <div className="mt-16 border-t border-neutral-800 pt-6 text-xs text-neutral-500 flex flex-col gap-2 md:flex-row md:justify-between">
                    <span>© 2025 Kernel. Todos os direitos reservados.</span>
                    <span>Feito com palavras e silêncio.</span>
                </div>

            </div>
        </footer>
    );
}
