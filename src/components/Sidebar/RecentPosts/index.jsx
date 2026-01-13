import { Link } from "react-router-dom";

export default function RecentPosts({ posts }) {
    return (
        <section>
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-6">
                Publicações Recentes
            </h3>

            <ul className="space-y-5">
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link
                            to={`/${post.genre}/${post.slug}`}
                            className="block hover:underline"
                        >
                            <span className="block font-serif">
                                {post.title}
                            </span>
                        </Link>

                        <span className="text-xs text-neutral-500">
                            Publicado em {post.date}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}