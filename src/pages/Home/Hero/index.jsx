import Submenu from "../../../components/Submenu";
import "./styles.scss"

export default function Hero() {
    return (
        <section id="hero" className="px-8 md:px-38 lg:px-58">
            <div className="mx-auto max-w-6xl px-4 py-16 border-b border-neutral-200">
                <div className="flex flex-col gap-12 lg:flex-row lg:items-center">

                    {/* Texto */}
                    <div className="flex-1">

                        {/* Título */}
                        <h1 className="mt-5 text-center text-5xl md:text-7xl">
                            Kernel 
                        </h1>
                        {/* Slogan */}
                        <h2 className="mt-1 mb-10 text-center text-base leading-tight md:text-xl">
                            //histórias compiladas
                        </h2>

                        <Submenu />
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
