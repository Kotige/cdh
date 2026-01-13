import { useParams } from "react-router-dom";
import { stories } from "../../data/stories";

import ReadingHeader from "../../components/ReadingHeader";
import ReadingLayout from "../../components/ReadingLayout";
import StoryPreview from "../../components/StoryPreview"; 
import { use } from "react";

const genreMeta = {
    fantasia: {
        title: "Fantasia",
        description: "Histórias que transportam você para mundos mágicos e cheios de aventuras.",
    },
    "ficcao-cientifica": {
        title: "Ficção Científica",
        description: "Explorações do futuro, tecnologia avançada e universos desconhecidos.",
    },
    terror: {
        title: "Terror",
        description: "Narrativas sombrias que desafiam seus medos mais profundos.",
    },
};

export default function CategoryPage() {
    const { genre } = useParams();
    const meta = genreMeta[genre];

    const filteredStories = stories.filter(
        (story) => story.genre === genre
    );

    if (!meta) {
        return (
            <ReadingLayout>
                <p>Categoria não encontrada.</p>
            </ReadingLayout>
        );
    }

    return (
        <>
            <ReadingHeader title={meta.title} />
            <ReadingLayout>
                <header className="text-3xl font-semibold mb-4">
                    <h1>
                        {meta.title}
                    </h1>

                    <p className="text-neutral-600 dark:text-neutral-400 max-w-prose">
                        {meta.description}
                    </p>
                </header>

                <section>
                    {filteredStories.map((story, index) => (
                        <div key={story.slug}>
                            <StoryPreview 
                                slug={story.slug}
                                title={story.title}
                                excerpt={story.epigraph}
                                readingTime={`${story.readingTime}`}
                                author={story.author}
                            />
                        </div>
                    ))}

                    {filteredStories.length === 0 && (
                        <p className="text-neutral-500">
                            Nenhuma história encontrada nesta categoria ainda.
                        </p>
                    )}
                </section>
            </ReadingLayout>
        </>
    )
}