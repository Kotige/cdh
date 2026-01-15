import { Link } from "react-router-dom";

export default function RecentPosts({ posts }) {
    return (
        <section className="
            bg-bg-surface
            px-6 py-8
        ">
            <h3 className="
                text-xs
                font-semibold
                tracking-widest
                uppercase
                text-text-muted
                mb-6
            ">
                Publicações Recentes
            </h3>

            <ul className="space-y-6">
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link
                            to={`/${post.genre}/${post.slug}`}
                            className="
                                block
                                font-serif
                                text-text-main
                                leading-snug
                                hover:underline
                            "
                        >
                            {post.title}
                        </Link>

                        <span className="
                            block
                            mt-1
                            text-xs
                            text-text-muted
                        ">
                            Publicado em {post.date}
                        </span>
                    </li>
                ))}
            </ul>

        </section>
    );
}