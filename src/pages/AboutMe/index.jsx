import ReadingLayout from "../../components/ReadingLayout";
import StoryContent from "../../components/StoryContent";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutMe() {
    return (
        <>
            <Navbar />

            <main className="bg-bg-main py-10">
                <ReadingLayout>
                    <div className="
                        bg-bg-surface
                        rounded-lg
                        px-6 py-10
                        md:px-10
                        max-w-3xl
                        mx-auto
                    ">
                        <StoryContent>

                            {/* Marcador editorial  */}
                            <span className="
                                block
                                text-xs
                                tracking-widest
                                uppercase
                                text-text-muted
                                mb-10
                            ">
                                Sobre o Kernel
                            </span>

                            {/* Bloco 1 - Abertura  */}
                            <p className="text-text-main text-lg leading-relaxed mb-4">
                                Kernel é um espaço criado para abrigar histórias, ideias e processos. Um lugar onde a escrita não compete por atenção e o tempo do leitor é tratado como algo valioso.
                            </p>
                            <p className="text-text-main leading-relaxed mb-12">
                                Aqui, o texto vem antes da interface. O silêncio vem antes do excesso. Ler não é um gesto apressado, mas um encontro.
                            </p>

                            {/* Bloco 2 - O que vive aqui  */}
                            <p className="text-text-main text-lg leading-relaxed mb-4">
                                As histórias publicadas neste site transitam entre fantasia, ficção científica, terror e outros territórios narrativos. Nem sempre seguem fórmulas, nem sempre buscam respostas.
                            </p>
                            <p className="text-text-main leading-relaxed mb-12">
                                Kernel não é um repositório de conteúdos, mas um arquivo em constante construção. Cada texto é publicado quando está pronto — não quando é urgente.
                            </p>

                            {/* Bloco 3 - O autor  */}
                            <p className="text-text-main text-lg leading-relaxed mb-4">
                                Me chamo Vítor Barra. Escrevo por inclinação e construo por decisão. A escrita sempre esteve presente; o código veio como ferramenta para dar forma, estrutura e permanência às ideias.
                            </p>

                            <p className="text-text-main leading-relaxed mb-12">
                                Este blog também faz parte do meu processo como desenvolvedor web. Cada componente, ajuste de layout e refatoração carrega aprendizado real e intencional.
                            </p>

                            {/* Bloco 4 - Encerramento  */}
                            <p className="text-text-main text-lg leading-relaxed mb-4">
                                Kernel cresce aos poucos, acompanhando quem o escreve. Não busca velocidade, alcance ou ruído mas coerência entre forma e conteúdo.
                            </p>

                            <p className="text-text-main leading-relaxed mb-12">
                                As histórias estão disponíveis quando você quiser voltar a elas.
                            </p>
                        </StoryContent>
                    </div>
                </ReadingLayout>
            </main>

            <Footer />
        </>
    )
}