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
                                <a href="/all" className="hover:text-neutral-500 transition">
                                    Histórias
                                </a>
                            </li>
                            <li>
                                <a href="/aboutme" className="hover:text-neutral-500 transition">
                                    Sobre
                                </a>
                            </li>
                            <li>
                                <a href="/changelog" className="hover:text-neutral-500 transition">
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
                                <a href="/fantasia" className="hover:text-neutral-500 transition">
                                    Fantasia
                                </a>
                            </li>
                            <li>
                                <a href="/ficcao-cientifica" className="hover:text-neutral-500 transition">
                                    Sci-fi
                                </a>
                            </li>
                            <li>
                                <a href="/terror" className="hover:text-neutral-500 transition">
                                    Terror
                                </a>
                            </li>
                            <li>
                                <a href="/all" className="hover:text-neutral-500 transition">
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
            target="_blank"
            aria-label="GitHub"
            className="text-neutral-700 transition hover:text-neutral-500"
        >
            <FaGithub size={18} />
        </a>

        <a
            href="https://instagram.com/modvestudio"
            target="_blank"
            aria-label="Instagram"
            className="text-neutral-700 transition hover:text-neutral-500"
        >
            <FaInstagram size={18} />
        </a>

        <a
            href="https://www.tiktok.com/@modvestudio?_r=1&_t=ZS-932r41f2wx3"
            target="_blank"
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
                    <span>© 2026 <a href="https://modvestudio.com.br/" target="_blank">modv estúdio</a>. Todos os direitos reservados.</span>
                    <span>Feito com palavras e silêncio.</span>
                </div>

            </div>
        </footer>
    );
}
