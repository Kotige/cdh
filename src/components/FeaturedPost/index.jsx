import { Link } from "react-router-dom";

export default function FeaturedPost({ story }) {
    if (!story) return null;

    return (
        <div>
            <span className="block text-xs tracking-widest uppercase text-neutral-500 mb-4">
                Texto em Destaque
            </span>

            <h1 className="text-3xl md:text-4xl font-serif mb-3">
                {story.title}
            </h1>

            <p className="text-sm text-neutral max-w-none">
                Postado em {story.date} por {story.author}.
            </p>

            <div className="prose prose-neutral max-w-none">
                <p>{story.epigraph}</p>
            </div>

            <Link
                to={`/${story.genre}/${story.slug}`}
                className="inline-block mt-8 text-sm border-b border-neutral-800 hover:border-neutral-400 transition"
            >
                Continuar leitura →
            </Link>
        </div>
    )
}