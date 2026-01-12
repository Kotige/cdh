import { Link } from "react-router-dom";

export default function StoryNavigation({previous, next, series}) {
    if (!previous && !next && !series) return null;

    return (
        <nav className="
            mt-20
            pt-8
            border-t
            border-neutral-200
            dark:border-neutral-800
        "
            aria-label="Navegação entre contos"
        >
            <div className="
                grid
                gap-6
                sm:grid-cols-2
            ">
                {/* Anterior */}
                {previous ? (
                    <Link to={previous.href} className="
                        group
                        text-left
                        block
                    " >
                        <span className="
                            block
                            mb-1
                            text-xs
                            uppercase
                            tracking-widest
                            text-neutral-500
                            dark:text-neutral-400
                        ">
                            ← Conto anterior
                        </span>

                        <span className="
                            block
                            font-serif
                            text-lg
                            text-neutral-900
                            dark:text-neutral-100
                            group-hover:underline
                        ">
                            {previous.title}
                        </span>
                    </Link>
                ) : (
                    <span />
                )}

                {/* Próximo  */}
                {next && (
                    <Link to={next.href} className="
                        group
                        text-left
                        sm:text-right
                        block
                    ">
                        <span className="
                            block
                            mb-1
                            text-xs
                            uppercase
                            tracking-widest
                            text-neutral-500
                            dark:text-neutral-400
                        ">
                            Próximo conto →
                        </span>

                        <span className="
                            block
                            font-serif
                            text-lg
                            text-neutral-900
                            dark:text-neutral-100
                            group-hover:underline
                        ">
                            {next.title}
                        </span>
                    </Link>
                    )}
            </div>

            {/* Série */}
            {series && (
                <div className="mt-10 text-center">
                    <Link to={series.href} className="
                        text-sm
                        text-neutral-600
                        dark:text-neutral-400
                        hover:underline
                    ">
                        Ver todos os contos da série "{series.title}"
                    </Link>
                </div>
            )}

        </nav>
    );
}