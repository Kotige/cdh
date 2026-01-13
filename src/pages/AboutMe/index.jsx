import ReadingHeader from "../../components/ReadingHeader";
import ReadingLayout from "../../components/ReadingLayout";
import StoryContent from "../../components/StoryContent";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutMe() {
    const hasPhoto = false;

    return (
        <>
            <Navbar />

            <ReadingLayout>
                <div className={`
                    grid gap-10 ${hasPhoto ? "lg:grid-cols[2fr_1fr]" : "grid-cols-1"}
                `} 
                >
                    {/* Texto  */}
                    <StoryContent>
                        <p>
                            Este é um espaço onde escrita e código se encontram. Um lugar para histórias, experiências e aprendizado contínuo.
                        </p>

                        <p>
                            Me chamo Vítor Barra. Sou escritor por inclinação e programador por decisão.
                        </p>

                        <p>
                            Este blog também é parte do meu processo de aprendizado como desenvolvedor frontend. Cada componente, refatoração e melhoria registrada aqui representa um avanço real.
                        </p>

                        <p>
                            A ideia é criar um espaço que cresça junto comigo — como autor, como programador e como alguém interessado em construir coisas com significado.
                        </p>
                    </StoryContent>

                    {/* Foto e Currículo  */}
                    {hasPhoto && (
                        <aside className="flex flex-col gap-4">
                            <div className="aspect-[3/4] bg-neutral-200 rounded-md" />
                            <a 
                                href="/curriculo.pdf" 
                                target="_blank" 
                                className="inline-flex justify-center rounded-md border border-neutral-800 px-4 py-2 text-sm hover:bg-neutral-900 hover:text-white transition"
                            >
                                Ver Currículo
                            </a>
                        </aside>
                    )}

                </div>
            </ReadingLayout>

            <Footer />
        </>
    )
}