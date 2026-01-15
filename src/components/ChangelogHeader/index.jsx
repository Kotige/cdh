export default function ChangelogHeader() {
    return (
        <header className="mb-14">
            <h1 
                className="
                    mb-4 
                    font-serif 
                    text-3xl 
                    md:text-4xl
                    leading-tight
                    text-text-main
                ">
                Changelog
            </h1>

            <p 
                className="
                    max-w-prose 
                    text-text-muted
                    leading-relaxed
                ">
                Este blog não nasce pronto. Ele muda, quebra, melhora e responde.
                <br />
                Aqui registro as transformações técnicas e os aprendizados que acompanham esse processo.
            </p>
        </header>
    )
}