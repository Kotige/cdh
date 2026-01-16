import { useParams } from "react-router-dom";
import { stories } from "../../data/stories";

import ReadingHeader from "../../components/ReadingHeader";
import ReadingLayout from "../../components/ReadingLayout";
import StoryPreview from "../../components/StoryPreview"; 

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
    const { genreSlug } = useParams();
    const meta = genreMeta[genreSlug];

    const filteredStories = stories.filter(
        (story) => story.genre.slug === genreSlug
    ).slice().reverse();

    if (!meta) {
        return (
            <div className="bg-bg-main min-h-screen">
                <ReadingLayout>
                <p className="
                    text-text-muted
                ">
                    Essa categoria não existe — ou ainda não foi escrita.
                </p>
            </ReadingLayout>
            </div>
        );
    }

    return (
        <div className="bg-bg-main min-h-screen">
            <ReadingHeader title={`Arquivo — ${meta.title}`} />
            <ReadingLayout>
                {/* Prefácio da Categoria */}
                <header className="mb-12 max-w-2xl">

                    <h1 className="
                        font-serif
                        text-3xl
                        text-text-main
                        mb-4
                    ">
                        {meta.title}
                    </h1>

                    <p className="
                        text-base
                        leading-relaxed
                        text-text-muted
                        ">
                        {meta.description}
                    </p>
                </header>

                {/* Sumário  */}
                <section className="space-y-10">
                    {filteredStories.map((story) => (
                        <StoryPreview
                            key={story.slug}
                            slug={story.slug}
                            genreSlug={story.genre.slug}
                            title={story.title}
                            excerpt={story.epigraph?.text ?? ""}
                            readingTime={story.readingTime}
                            author={story.author}
                        />
                    ))}

                    {filteredStories.length === 0 && (
                        <p className="text-text-muted italic">
                            Esta seção ainda está em silêncio. As histórias virão.
                        </p>
                    )}
                </section>
            </ReadingLayout>
        </div>
    )
}