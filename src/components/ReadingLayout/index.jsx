export default function ReadingLayout({children, className="", immersive=false}) {
    return (
        <main className={`
            min-h-screeen
            mx-auto
            ${immersive ? "max-w-5xl md:max-w-6xl" : "max-w-6xl"}
        `}>
            <div className={`
                mx-auto
                w-full
                max-w-[82ch]
                px-14
                pt-12
                pb-16
                ${className}
                `}>
                    {children}
            </div>
        </main>
    )
}