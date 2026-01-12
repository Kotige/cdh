export default function StoryHeader(
    {
        title,
        epigraph,
        author,
        date,
        readingTime,
        series,
    }) {
        return (
            <header className="mb-10">
                {/* Série */}
                {series && (
                    <p className="
                        mb-2
                        text-sm
                        uppercase
                        tracking-widest
                        text-neutral-500
                        dark:text-neutral-400
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
                    text-neutral-900
                    dark:text-neutral-100
                ">
                    {title}
                </h1>

                {/* Epígrafe */}
                {epigraph && (
                    <blockquote className="
                        mt-6
                        max-w-prose
                        italic
                        text-neutral-600
                        dark:text-neutral-400
                    ">
                        "{epigraph}"
                    </blockquote>
                )}

                {/* Meta tags */}
                <p className="
                    mt-6
                    text-sm
                    text-neutral-500
                    dark:text-neutral-400
                ">
                    por {author} • {date} • {readingTime} min de leitura
                </p>

                {/* Separador */}
                <div className="
                    mt-8
                    h-px
                    w-16
                    bg-neutral-300
                    dark:bg-neutral-700
                "/>
            </header>
        )
    }