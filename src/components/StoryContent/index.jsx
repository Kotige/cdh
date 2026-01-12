export default function StoryContent({children}){
    return (
        <article className="
            prose
            prose-neutral
            prose-lg
            dark:prose-invert
            max-w-none

            prose-p:leading-relaxed
            prose-p:text-neutral-800
            dark:prose-p:text-neutral-200

            prose-blockquote:border-1-neutral-400
            dark:prose-blockquote:border-1-neutral-600

            prose-hr:border-neutral-300
            dark:prose-border-neutral-700
        ">
            {children}
        </article>
    )
}