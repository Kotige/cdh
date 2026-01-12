import ReadingHeader from "../../components/ReadingHeader";
import ReadingLayout from "../../components/ReadingLayout";
import StoryHeader from "../../components/StoryHeader";
import StoryContent from "../../components/StoryContent";
import DropCap from "../../components/DropCap";
import AuthorNote from "../../components/AuthorNote";
import StoryNavigation from "../../components/StoryNavigation"; 

export default function StoryPage() {
    return (
        <>
        {/* Header de Leitura  */}
        <ReadingHeader title="Contos"/>

        {/* Corpo de Leitura  */}
        <ReadingLayout>
            {/* Abertura  */}
            <StoryHeader 
                series="O menino que Comeu um Livro de Magia"
                title="Capítulo I - A Biblioteca que Sussurrava"
                epigraph="Algumas histórias não querem ser lidas. Elas querem ser devoradas."
                author="Vítor Barra"
                date="12 jan 2026"
                readingTime={12}
            />

            {/* Conteúdo  */}
            <StoryContent>
                <p>
                    <DropCap letter="D"/>
                    avi tinha dez anos quando encontrou o livro escondido no sótão. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur facilis odio, dicta rerum suscipit ab beatae doloremque labore id, ut consectetur quas, ullam reiciendis exercitationem eos repellat autem aspernatur magni.
                </p>
                <p>
                    As páginas sussurravam quando ele passava os dedos por elas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla illum blanditiis possimus, labore recusandae, est aut odio accusamus et tempora officia maxime asperiores beatae consectetur expedita delectus minus, ab modi!
                </p>
                <blockquote>
                    Algumas histórias não querem ser lidas.
                </blockquote>

                <p>
                    Naquela noite, ele não dormiu. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vitae aut optio, quis in esse corporis! Unde officia quia, ex blanditiis optio saepe obcaecati. Neque laboriosam eligendi quaerat animi eius!
                </p>
            </StoryContent>

            {/* Nota do Autor  */}
            <AuthorNote>
                <p>
                    Esta história foi inspirada em minhas próprias aventuras na infância, quando descobri o poder dos livros e da imaginação.
                </p>
            </AuthorNote>

            {/* Navegação  */}
            <StoryNavigation 
                previous={{
                    href: "/publications/o-misterio-da-floresta-encantada",
                    title: "O Mistério da Floresta Encantada"
                }}
                next={{
                    href: "/publications/o-segredo-do-castelo-antigo",
                    title: "O Segredo do Castelo Antigo"
                }}
                series={{
                    href: "/publication/o-menino-que-comeu-um-livro-de-magia",
                    title: "O Menino que Comeu um Livro de Magia"
                }}
            />
        </ReadingLayout>
        </>
    )
}