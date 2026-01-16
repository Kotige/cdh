export default function StoryHeader(
    {
        title,
        epigraph,
        epigraphAuthor,
        author,
        date,
        readingTime,
        series,
    }) {
        return (
            <header className="mb-10 flex flex-col items-center">
                {/* Série */}
                {series && (
                    <p className="
                        mb-2
                        text-sm
                        uppercase
                        tracking-widest
                        text-text-muted
                        text-center
                    ">
                        {series}
                    </p>
                )}
                {/* Título */}
                <h1 className="
                    font-serif
                    text-3xl
                    sm:text-4xl
                    leading-tight
                    text-accent
                    text-center
                ">
                    {title}
                </h1>

                {/* Epígrafe */}
                {epigraph && (
                    <blockquote className="
                        mt-6
                        max-w-prose
                        italic
                        text-text-muted
                        border-b
                        border-t
                        border-border-subtle
                        p-5
                        text-center
                    ">
                        "{epigraph}"
                        <p  className="text-sm text-right ">
                            — {epigraphAuthor}
                        </p>
                    </blockquote>
                )}

                {/* Meta tags */}
                <p className="
                    font-sans
                    mt-6
                    text-sm
                    text-text-muted
                    text-center
                ">
                    por {author} • {date} • {readingTime} min de leitura
                </p>

                {/* Separador */}
                <div className="
                    mt-8
                    h-px
                    w-16
                    bg-border-subtle
                    hidden
                "/>
            </header>
        )
    }