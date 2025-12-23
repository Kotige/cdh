import "./styles.scss";

export default function RecentPosts({ posts = [] }) {
    return (
        <section id="recent-posts" className="h-full max-h-full  flex flex-col overflow-hidden">
            
            {/* Título do componente */}
            <h3 className="text-center text-sm text-xl text-neutral-800 mb-3 shrink-0">
                Publicações Recentes
            </h3>

            {/* Área rolável */}
            <div className="flex-1 min-h-0 overflow-y-auto scroll-smooth pr-2 space-y-4">
                {posts.slice(0, 6).map((post, index) => (
                    <article
                        key={index}
                        className="border border-neutral-200 rounded-md p-3 hover:bg-neutral-50 transition-colors"
                    >
                        {/* Título do card */}
                        <h4 className="text-sm md:text-base font-semibold text-neutral-900 leading-snug text-left">
                            {post.title}
                        </h4>

                        {/* Subtítulo do card */}
                        <h5 className="text-xs md:text-sm text-neutral-500 mt-1 text-left">
                            {post.subtitle}
                        </h5>

                        {/* Excerpt */}
                        <p className="text-xs md:text-sm text-neutral-700 mt-3 text-justify leading-relaxed">
                            {post.excerpt}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}
