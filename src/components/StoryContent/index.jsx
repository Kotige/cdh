export default function StoryContent({children}){
    return (
        <article className="
            prose
            prose-lg
            max-w-none
            font-serif
            leading-relaxed

            prose-p:leading-relaxed
            prose-p:text-text-main

            prose-blockquote:border-l-4
            prose-blockquote:border-accent
            prose-blockquote:pl-4
            prose-blockquote:italic
            prose-blockquote:my-6
            prose-blockquote:text-text-muted

            prose-hr:border-border-subtle
        ">
            {children}
        </article>
    )
}