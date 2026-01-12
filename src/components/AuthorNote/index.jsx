export default function AuthorNote({title="Nota do Autor", children }) {
    return (
        <aside className="
            mt-16
            rounded-lg
            border
            border-neutral-200
            dark:border-neutral-800
            bg-neutral-50
            dark:bg-neutral-900
            px-5
            py-4
        ">
            <h2 className="
                mb-3
                text-sm
                font-medium
                uppercase
                tracking-wider
                text-neutral-600
                dark:text-neutral-400
            ">
                {title}
            </h2>
            <div className="
                prose
                prose-sm
                prose-neutral
                dark:prose-invert
                max-w-none
            ">
                {children}
            </div>
        </aside>
    );
}