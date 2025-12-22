import { ChevronLeft, ChevronRight } from "lucide-react";
import "./styles.scss"

export default function Hero() {
    return (
        <section id="hero">
            <div className="mx-auto max-w-6xl px-4 py-16">
                <div className="flex flex-col gap-12 lg:flex-row lg:items-center">

                    {/* Texto */}
                    <div className="flex-1">

                        {/* Título */}
                        <h2 className="mt-5 text-center text-3xl lg:invisible">
                            Compilador de Histórias 
                        </h2>
                        {/* Slogan */}
                        <h3 className="my-13 text-center text-xl leading-tight lg:text-3xl">
                            Onde histórias são <br className="hidden sm:block" />
                            escritas para serem executadas
                        </h3>

                        {/* Descrição */}
                        <p className="mb-8 text-center">
                            Um espaço para contos de fantasia, ficção científica e terror.
                            Escritos, depurados e compilados entre linhas de código.
                        </p>

                        {/* CTA */}
                        <div className="flex justify-center">
                            <a
                                href="#about"
                                className="block justify-center-safe align-center rounded-lg border px-6 py-3 font-mono"
                            >
                                Sobre o cdh
                            </a>
                        </div>
                    </div>
        </div>
      </div>
    </section>
  );
}
