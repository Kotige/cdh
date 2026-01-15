import { FaInstagram, FaGithub, FaTiktok } from "react-icons/fa";



export default function Footer() {
    return (
        <footer className="
            pt-24 bg-bg-main text-text-muted
        ">
            <div className="
                mx-auto
                max-w-6xl
                px-6
                py-16
                space-y-12
            ">
                {/* Bloco Principal  */}
                <div className="
                    grid
                    gap-12
                    md:grid-cols-3
                    text-center
                ">
                    {/* Identidade  */}
                    <div className="space-y-3">
                        <h3 className="
                            text-xl
                            font-serif
                            text-text-main
                        ">
                            Kernel
                        </h3>
                        <p className="
                            text-sm
                            leading-relaxed
                        ">
                            //histórias compiladas
                        </p>
                    </div>

                    {/* Navegação  */}
                    <div>
                        <h4 className="
                            mb-4 text-xs
                            uppercase
                            tracking-widest
                        ">
                            Navegação
                        </h4>

                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="/"
                                    className="hover:text-text-main transition"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/all"
                                    className="hover:text-text-main transition"
                                >
                                    Arquivos
                                </a>
                            </li>
                            <li>
                                <a href="/aboutme"
                                    className="hover:text-text-main transition"
                                >
                                    Sobre
                                </a>
                            </li>
                            <li>
                                <a href="/changelog"
                                    className="hover:text-text-main transition"
                                >
                                    Changelog
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Conexões  */}
                    <div>
                        <h4 className="
                            mb-4
                            text-xs
                            uppercase
                            tracking-widest
                        ">
                            Conexões
                        </h4>
                        <div className="flex justify-center gap-4">
                            <a href="https://github.com/Kotige"
                                target="_blank"
                                aria-label="GitHub"
                                className="hover:text-text-main transition"
                            >
                                <FaGithub size={16} />
                            </a>
                            <a href="https://instagram.com/modvestudio"
                                target="_blank"
                                aria-label="Instagram"
                                className="hover:text-text-main transition"
                            >
                                <FaInstagram size={16} />
                            </a>
                            <a href="https://www.tiktok.com/@modvestudio"
                                target="_blank"
                                aria-label="TikTok"
                                className="hover:text-text-main transition"
                            >
                                <FaTiktok size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Encerramento  */}
            <div className="
                p-8
                border-t
                border-border-subtle
                flex
                flex-col
                gap-3
                text-xs
                text-center
                md:flex-row
                md:justify-between
            ">
                <span>
                    © 2026 <a href="https://modvestudio.com.br/" target="_blank">modv estúdio</a>. Todos os direitos reservados.
                </span>

                <span className="italic">
                    Algumas histórias continuam despois da última linha.
                </span>
            </div>
        </footer>
    );
}
