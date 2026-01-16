export default function AuthorNote({title="Nota do Autor", children }) {
    return (
        <aside className="
            mt-16
            rounded-lg
            bg-bg-elevated/10
            px-5
            py-4
        ">
            <h2 className="
                mb-3
                text-sm
                font-medium
                uppercase
                tracking-wider
                text-accent
            ">
                {title}
            </h2>
            <div className="
                prose
                prose-sm
                max-w-none
                text-reading-text
            ">
                {children}
            </div>
        </aside>
    );
}