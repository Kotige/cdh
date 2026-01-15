import ChangelogEntry from "../ChangelogEntry";

export default function ChangelogGroup({period, entries =[]}) {
    return (
        <section className="mb-16">
            <h2 
                className="
                    mb-8 
                    text-sm 
                    font-medium 
                    tracking-wider
                    uppercase
                    text-text-muted
            ">
                {period}
            </h2>
            <div className="space-y-6">
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