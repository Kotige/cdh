import { Link } from 'react-router-dom';

export default function StoryPreview({ 
    title,
    excerpt,
    readingTime,
    author,
    slug,
}) {
    return (
        <article className='py-8'>
            <h2 className='text-xl font-medium leading-snug mb-2'>
                <Link to={`/contos/${slug}`}
                    className='hover:underline underline-offset-4'
                >
                    {title}
                </Link>
            </h2>

            <p className='mb-3 text-neutral-700 dark:text-neutral-300'>
                {excerpt}
            </p>

            <div className='text-sm text-neutral-500 dark:text-neutral-400'>
                {readingTime} min · por {author}
            </div>

        </article>
    )
}