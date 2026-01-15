import { Link } from "react-router-dom";

export default function FeaturedPost({ story }) {
    if (!story) return null;

    return (
        <section
            className="
                bg-bg-surface
                px-6 py-10
                md:px:10 md:py-14
                lg:px-14
            ">
                {/* Selo Editorial  */}
                <span
                    className="
                        block
                        mb-3
                        text-xs
                        tracking-widest
                        uppercase
                        text-text-muted
                        ">
                            História em Destaque
                </span>

                {/* Título  */}
                <h1
                className="
                    font-serif
                    text-2xl md:text-3xl
                    leading-tight
                    text-text-main
                    mb-4
                    lg:max-w-3xl
                ">
                    {story.title}
                </h1>

                {/* Metadados  */}
                <p className="
                    text-xs
                    text-text-muted
                    mb-6
                ">
                    Postado em {story.date} por {story.author}
                </p>

                {/* Epígrafe  */}
                {story.epigraph && (
                    <p className="
                        text-base mb:text-lg
                        leading-relaxed
                        text-text-main
                        mb-8
                        md:max-w-2xl
                    ">
                        {story.epigraph}
                    </p>
                )}

                {/* CTA  */}
                <Link 
                    to={`/${story.genre}/${story.slug}`}
                    className="
                        inline-block
                        text-sm
                        text-accent
                        border-b
                        border-transparent
                        hover:border-accent
                        transition
                    "
                >
                    Continuar leitura →
                </Link>
        </section>
    )
}