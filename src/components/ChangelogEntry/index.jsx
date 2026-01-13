import { formatDateTime } from '../../utils/formatDateTime.js';

export default function ChangelogEntry({
    title,
    description,
    items=[],
    date = formatDateTime(),
}) {
    return (
        <article className='mb-10'>
            <time 
                className='block mb-2 text-sm text-neutral-500'
            >
                {date}            
            </time>

            <h2 className='mb-3 text-xl font-medium leading-snug'>
                {title}
            </h2>

            <p className='mb-4 text-neutral-700 dark:text-neutral-300'>
                {description}
            </p>

            {items.length > 0 && (
                <ul className='list-disc pl-5 space-y-1 text-sm text-neutral-600 dark:text-neutral-400'>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </article>
    );
}