import react from "react";

export default function ReadingLayout({children, className="", immersive=false}) {
    return (
        <main className={`
            min-h-screeen
            bg-neutral-50
            text-neutral-900
            dark:bg-neutral-900
            dark:text-neutral-100
            mx-auto
            ${immersive ? "max-w-none md:max-w-5xl" : "max-w-none"}
        `}>
            <div className={`
                mx-auto
                w-full
                max-w-[72ch]
                lg:max-w-[100ch]
                px-4
                pt-6
                pb-16
                sm:px-6
                lg:px-0
                ${className}
                `}>
                    {children}
            </div>
        </main>
    )
}