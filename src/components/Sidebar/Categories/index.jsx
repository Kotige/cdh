import { Link } from "react-router-dom";
import { stories } from "../../../data/stories";
import { SlUserFollowing } from "react-icons/sl";

export default function Categories() {
    const categories = [
        ...new Map(
            stories.map((story) => [
                story.series.slug,
                story.series.title,
            ])
        ),
    ];

    return (
        <section>
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-6">
                Arquivos
            </h3>

            <ul className="space-y-2">
                {categories.map(([slug, title]) => (
                    <li key={slug}>
                        <Link
                            to={`/categoria/${slug}`}
                            className="text-sm hover:underline"
                        >
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}