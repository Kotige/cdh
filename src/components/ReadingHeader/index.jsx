import { Link } from "react-router-dom";

export default function ReadingHeader({title="Kernel"}) {
    return (
        <header className="
            sticky top-0 z-40
            bg-neutral-50/90
            dark:bg-neutral-900/90
            backdrop-blur
            border-b border-neutral-200
            dark:border-neutral-800
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
                    text-neutral-600
                    dark:text-neutral-400
                    hover:text-neutral-900
                    dar:hover:text-neutral-100
                    transition
                ">
                    ← Início
                </Link>

                <span className="
                    font-medium
                    tracking-wide
                    text-neutral-700
                    dark:text-neutral-300
                ">
                    {title}
                </span>

            </div>

        </header>
    )
}