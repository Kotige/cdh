import "./styles.scss"

export default function FeaturedPost({ title, date, author, excerpt, link }) {
    return (
        <section id="featured-post"
            className="relative w-full h-[50vh] p-4 md:p-8 flex flex-col justify-between"
        >
            {/* Cabeçalho */}
            <div className="text-center">
                <h3 className="text-2xl md:text-3xl mb-8">{title}</h3>
                <h4 className="whitespace-nowrap">
                    Postado em {date} por {author}.
                </h4>
            </div>

            {/* Texto do post */}
            <div className="relative flex-1 mt-8 overflow-hidden">
                <div className="h-full overflow-hidden prose prose-sm md:prose-base text-justify indent-8">
                    {excerpt}
                </div>

                {/* Gradiente mais intenso no final do texto */}
                <div className="absolute bottom-0 left-0 w-full h-46 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none"></div>
            </div>

            {/* Botão "Continue lendo" */}
            <div className="absolute bottom-4 left-4 z-10">
                <a
                    href={link}
                    className="px-4 py-2 rounded shadow-lg"
                >
                    Continue lendo
                </a>
            </div>
        </section>
    );
}
