import { Calendar, CalendarPlus, Clock, Sparkles } from "lucide-react";
import jaali from "@/assets/jaali.jpg";
import { invitation } from "@/config/invitation";
import { directionsUrl, googleCalendarUrl } from "@/lib/wedding";
import { Reveal } from "./Reveal";

export function Details() {
  const { event, functions } = invitation;

  return (
    <section className="relative overflow-hidden px-5 py-20">
      <div
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{ backgroundImage: `url(${jaali})`, backgroundSize: "260px" }}
      />
      <div aria-hidden className="absolute inset-0 bg-parchment/70" />

      <Reveal className="relative mx-auto max-w-xl">
        <div className="relative rounded-t-[7rem] rounded-b-[3rem] border border-gold/50 bg-parchment px-6 sm:px-10 pt-16 pb-12 text-center shadow-[0_30px_60px_-45px_var(--color-ink)] paper-grain">
          <div className="pointer-events-none absolute inset-x-3 top-3 bottom-3 rounded-t-[6.4rem] rounded-b-[2.6rem] border border-gold/30" />

          <p className="text-[0.62rem] tracking-[0.4em] text-ink/60 uppercase">The Sacred Festivities</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl tracking-[0.1em] text-pine uppercase">
            Wedding Functions
          </h2>
          <div className="mx-auto mt-4 w-28 gold-rule" />

          {/* Timeline of 3 Days */}
          <div className="mt-10 space-y-8 text-left">
            {functions.map((dayGroup, groupIdx) => (
              <div
                key={dayGroup.date}
                className="relative rounded-2xl border border-gold/35 bg-parchment-deep/45 p-5 shadow-xs"
              >
                <div className="flex items-center gap-2 border-b border-gold/25 pb-3">
                  <Calendar className="size-4 text-gold shrink-0" />
                  <h3 className="font-display text-lg font-semibold tracking-wide text-pine">
                    {dayGroup.date}
                  </h3>
                </div>

                <div className="mt-4 space-y-4">
                  {dayGroup.events.map((item, idx) => (
                    <div
                      key={item.name}
                      className="flex items-start justify-between gap-3 text-sm"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <Sparkles className="size-3.5 text-gold" />
                          <span className="font-semibold text-pine text-base">
                            {item.name}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-ink/75 leading-relaxed pl-5">
                          {item.desc}
                        </p>
                      </div>
                      <div className="shrink-0 flex items-center gap-1 rounded-full border border-gold/50 bg-parchment px-3 py-1 text-xs font-medium text-pine shadow-xs">
                        <Clock className="size-3 text-gold" />
                        <span>{item.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 font-display text-lg italic text-ink/70">
            {event.note}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={googleCalendarUrl()}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-pine px-7 py-3.5 text-[0.7rem] tracking-[0.24em] text-parchment uppercase transition-transform duration-200 active:scale-95 shadow-md"
            >
              <CalendarPlus className="size-4 transition-transform group-hover:rotate-6" />
              Add to calendar
            </a>
            <a
              href={directionsUrl()}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-gold/70 py-3.5 px-7 text-[0.68rem] tracking-[0.2em] text-ink/80 uppercase transition-colors hover:bg-gold/15"
            >
              Get Directions
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
