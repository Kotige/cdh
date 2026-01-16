import { Link } from "react-router-dom";
import { stories } from "../../../data/stories";

export default function Categories() {
    const categories = [
        ...new Map(
            stories.map((story) => [
                story.slug, 
                {
                    title: story.title,
                    slug: story.slug,
                    genre: story.genre,
                },
            ])
        ).values(),
    ];

    return (
        <section className="
            bg-bg-surface
            px-6 py-8
        ">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-6">
                Arquivos
            </h3>

            <ul className="space-y-3">
                {categories.map(({slug, title, genre}) => (
                    <li key={slug}>
                        <Link
                            to={`/${genre.slug}/${slug}`}
                            className="text-sm text-text-main leading-snug hover:underline"
                        >
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}