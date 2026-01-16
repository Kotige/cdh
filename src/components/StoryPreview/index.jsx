import { Link } from 'react-router-dom';

export default function StoryPreview({ 
    title,
    excerpt,
    readingTime,
    author,
    slug,
    genreSlug,
}) {
    return (
        <article className="
            bg-bg-surface
            rounded-lg
            px-6 py-6
            mb-6
            transition
            hover:bg-bg-elevated
        ">
            <h2 className='text-xl font-medium leading-snug mb-2 text-text-main'>
                <Link to={`/${genreSlug}/${slug}`}
                    className='hover:underline underline-offset-4'
                >
                    {title}
                </Link>
            </h2>

            <p className='mb-4 text-text-muted leading-relaxed'>
                {excerpt}
            </p>

            <div className='text-sm text-text-muted'>
                {readingTime} min · por {author}
            </div>

        </article>
    )
}