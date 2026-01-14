import { useParams } from "react-router-dom";
import { useState } from "react";
import {stories} from "../../data/stories";

import ReadingHeader from "../../components/ReadingHeader";
import ReadingLayout from "../../components/ReadingLayout";
import StoryHeader from "../../components/StoryHeader";
import StoryContent from "../../components/StoryContent";
import DropCap from "../../components/DropCap";
import AuthorNote from "../../components/AuthorNote";
import StoryNavigation from "../../components/StoryNavigation"; 
import ImmersiveToggle from "../../components/ImmersiveToggle";

export default function StoryPage() {

    const [immersive, setImmersive] = useState(false);

    const { slug } = useParams();
    const story = stories.find((s) => s.slug === slug);
    
    if (!story) {
        return <p className="p-8 text-center">Conto não encontrado</p>;
    }

    return (
        <>
        {/* Header de Leitura  */}
        {!immersive && <ReadingHeader title={story.genre}/>}

        {/* Corpo de Leitura  */}
        <ReadingLayout>
            {/* Abertura  */}
            <StoryHeader 
                series={story.series.title}
                title={story.title}
                epigraph={story.epigraph}
                author={story.author}
                date={story.date}
                readingTime={story.readingTime}
            />

            {/* Conteúdo  */}
            <StoryContent>
                {story.content.map((block, index) => {
                    if (block.type === "paragraph") {
                        return (
                            <p key={index}>
                                {block.dropCap && <DropCap letter={block.dropCap} />}
                                {block.text}
                            </p>
                        );
                    }
                    if (block.type === "blockquote") {
                        return <blockquote key={index}>{block.text}</blockquote>;
                    }
                    return null;
                })}
            </StoryContent>

            {/* Nota do Autor  */}
            {story.authorNote && (
                <AuthorNote>
                    <p>{story.authorNote}</p>
                </AuthorNote>
            )}

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
                    title: story.series.title,
                    href: `/series/${story.series.slug}`
                }}
            />
        </ReadingLayout>

        <ImmersiveToggle 
            immersive={immersive} 
            onToggle={() => setImmersive(!immersive)}
        />

        </>
    )
}