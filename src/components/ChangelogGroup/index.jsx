import ChangelogEntry from "../ChangelogEntry";

export default function ChangelogGroup({period, entries =[]}) {
    return (
        <section className="mb-16">
            <h2 className="mb-8 text-lg font-semibold tracking-wide text-neutral-500 uppercase">
                {period}
            </h2>
            <div>
                {entries.map((entry, index) => (
                    <ChangelogEntry 
                        key={index}
                        title={entry.title}
                        description={entry.description}
                        items={entry.items}
                        date={entry.date}
                    />
                ))}
            </div>
        </section>
    );
}