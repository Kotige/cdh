import { Link } from "react-router-dom";

export default function StoryNavigation({previous, next, series}) {
    if (!previous && !next && !series) return null;

    return (
        <nav className="
            mt-20
            pt-8
            border-t
            border-border-subtle
        "
            aria-label="Navegação entre contos"
        >
            <div className="
                grid
                gap-8
                sm:grid-cols-2
            ">
                {/* Anterior */}
                {previous ? (
                    <Link to={previous.href} 
                    className="
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
                            text-accent
                        ">
                            ← Conto anterior
                        </span>

                        <span className="
                            block
                            font-serif
                            text-lg
                            text-accent
                            group-hover:text-accent-hover
                            transition-colors
                        ">
                            {previous.title}
                        </span>
                    </Link>
                ) : (
                    <span />
                )}

                {/* Próximo  */}
                {next && (
                    <Link to={next.href} 
                        className="
                            group
                            sm:text-right
                            block
                    ">
                        <span className="
                            block
                            mb-1
                            text-xs
                            uppercase
                            tracking-widest
                            text-accent
                        ">
                            Próximo conto →
                        </span>

                        <span className="
                            block
                            font-serif
                            text-lg
                            text-accent
                            group-hover:text-accent-hover
                            transition-colors
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
                        text-accent
                        hover:text-accent-hover
                        transition-colors
                    ">
                        Ver todos os contos da série "{series.title}"
                    </Link>
                </div>
            )}

        </nav>
    );
}