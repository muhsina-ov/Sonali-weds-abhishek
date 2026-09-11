import { Phone, Users } from "lucide-react";
import { invitation } from "@/config/invitation";
import { Reveal } from "./Reveal";

export function RSVPSection() {
  const { rsvp } = invitation;

  return (
    <section className="relative px-5 py-16">
      <Reveal className="mx-auto max-w-lg text-center">
        <span className="text-[0.62rem] tracking-[0.4em] text-gold uppercase font-medium">
          Cordially Awaiting Your Presence
        </span>
        <h2 className="mt-2 font-display text-3xl tracking-[0.14em] text-pine uppercase">
          {rsvp.title}
        </h2>
        <div className="mx-auto mt-4 w-24 gold-rule" />

        <p className="mt-5 text-xs sm:text-sm text-ink/75 leading-relaxed">
          Please confirm your warm presence or reach out to our family coordinators for any assistance with travel or accommodations.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {rsvp.contacts.map((c) => (
            <a
              key={c.name}
              href={`tel:${c.phone}`}
              className="group flex flex-col items-center justify-center rounded-2xl border border-gold/45 bg-parchment-deep/50 p-4 transition-all duration-200 hover:border-gold hover:bg-parchment-deep/80 hover:shadow-md active:scale-95"
            >
              <div className="flex size-9 items-center justify-center rounded-full bg-pine/10 text-gold mb-2 group-hover:scale-110 transition-transform">
                <Phone className="size-4 text-pine" />
              </div>
              <span className="font-display text-base font-semibold text-pine">
                {c.name}
              </span>
              <span className="mt-1 text-xs tracking-wider text-gold font-medium">
                +91 {c.phone}
              </span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
