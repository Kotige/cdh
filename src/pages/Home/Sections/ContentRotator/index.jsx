import { useMemo } from "react";
import "./styles.scss";

export default function ContentRotator({
    items = [],
    title = "Prompt do Dia",
}) {
      const dailyIndex = useMemo(() => {
        if (!items.length) return 0;

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const dayNumber = Math.floor(today.getTime() / 86400000);
        return dayNumber % items.length;
      }, [items.length]);

  return (
      <section
          id="content-rotator"
          className="
            w-full h-full
            flex flex-col
            min-h-0 max-h-full
          "
      >
        {/* TÍTULO FIXO */}
        <h3
          className="
            mb-2
            shrink-0
            text-center
            text-xl
            font-medium
            tracking-wide
            text-neutral-700
          "
        >
          {title}
        </h3>

      {/* Scroll area */}
      <div
        className="
          flex-1
          min-h-0
          w-full
          overflow-y-auto
          overflow-x-hidden
        "
      >
        {items.length ? items[dailyIndex] : null}
      </div>
    </section>
  );
}
