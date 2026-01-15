
export default function ChangelogEntry({
    title,
    description,
    items=[],
    date,
}) {
    return (
        <article 
            className="
                pb-10 
                border-b 
                border-border-subtle
                last:border-b-0
        ">
            <time 
                className="
                    block
                    mb-2
                    text-sm
                    text-text-muted
                "
            >
                {date}          
            </time>

            <h3 className="
                mb-3
                text-xl
                font-medium
                leading-snug
                text-text-main
            ">
                {title}
            </h3>

            <p 
                className="
                    mb-4
                    text-text-main
                    opacity-90
            ">
                {description}
            </p>

            {items.length > 0 && (
                <ul 
                className="
                    list-disc
                    pl-5
                    space-y-1
                    text-sm
                    text-text-muted
                ">
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </article>
    );
}