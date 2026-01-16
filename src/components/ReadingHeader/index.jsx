import { Link } from "react-router-dom";

export default function ReadingHeader({title="Kernel"}) {
    return (
        <header className="
            sticky top-0 z-40
            bg-bg-surface/90
            backdrop-blur
            border-b border-border-subtle
        ">
            <div className="
                mx-auto
                max-w-72ch
                px-4
                py-3
                flex
                items-center
                justify-between
                text-sm
            ">
                <Link to="/" className="
                    text-text-muted
                    hover:text-accent
                    transition-colors
                ">
                    ← Início
                </Link>

                <span className="
                    font-medium
                    tracking-wide
                    text-text-main
                ">
                    {title}
                </span>

            </div>

        </header>
    )
}