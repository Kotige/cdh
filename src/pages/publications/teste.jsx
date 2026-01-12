import ReadingLayout from "../../components/ReadingLayout";
import ReadingHeader from "../../components/ReadingHeader";
import StoryHeader from "../../components/StoryHeader";
import StoryContent from "../../components/StoryContent";

export default function Teste() {
    return (
        <>
            <ReadingHeader />
            <ReadingLayout>

                <StoryHeader
                    title="Capítulo I - A Biblioteca que Sussurrava"
                    author="Vítor Barra"
                    date="12 jan 2026"
                    readingTime={12}
                    series="O menino que Comeu um Livro de Magia"
                    epigraph="Algumas histórias não querem ser lidas. Elas querem ser devoradas."
                />

                <StoryContent>
                    <p>
                        Davi tinha dez anos quando encontrou o livro escondido no sótão.
                    </p>

                    <p>
                        As páginas sussurravam quando ele passava os dedos por elas.
                    </p>

                    <blockquote>
                        Algumas histórias não querem ser lidas.
                    </blockquote>

                    <hr />

                    <p>
                        Naquela noite, ele não dormiu.
                    </p>
                </StoryContent>
        </ReadingLayout>
        </>
    )
}