export default function DropCap({letter}) {
    return (
        <span className="
            float-left
            mr-3
            mt-1
            font-serif
            text-6xl
            leading-none
            text-accent
        "
            aria-hidden="true"
        >
            {letter}
        </span>
    )
}