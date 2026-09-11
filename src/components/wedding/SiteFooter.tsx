import { Phone } from "lucide-react";
const footerFloral = "https://media.invitestory.in/sage-parchment/src/assets/footer-floral.jpg";
import { invitation } from "@/config/invitation";
import { Reveal } from "./Reveal";

export function SiteFooter() {
  const { couple, footer } = invitation;

  return (
    <footer className="relative isolate overflow-hidden pt-24 pb-12 text-center">
      <img
        src={footerFloral}
        alt=""
        aria-hidden
        loading="lazy"
        width={1920}
        height={912}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-bottom"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-parchment/55" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-parchment to-transparent"
      />

      <Reveal className="px-6">
        <p className="font-display text-3xl tracking-[0.16em] text-pine uppercase">
          {couple.brideShort} <span className="text-gold">&</span> {couple.groomShort}
        </p>
        <div className="mx-auto mt-5 w-24 gold-rule" />

        <div className="mt-8">
          <p className="text-[0.68rem] tracking-[0.3em] text-gold uppercase font-medium">
            {footer.compliments}
          </p>
          <p className="mt-1 font-display text-2xl text-pine">{footer.families}</p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {footer.contacts.map((c) => (
            <a
              key={c.phone}
              href={`tel:${c.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-parchment/70 px-5 py-2.5 text-[0.68rem] tracking-[0.15em] text-ink/80 uppercase transition-colors hover:bg-gold/15 active:scale-95"
            >
              <Phone className="size-3.5 text-gold" aria-hidden />
              <span>{c.name}: {c.phone}</span>
            </a>
          ))}
        </div>

        <p className="mt-10 text-[0.62rem] tracking-[0.32em] text-ink/60 uppercase">
          {couple.hashtag}
        </p>
      </Reveal>
      <a
        href="https://www.instagram.com/invitestory.in/"
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block text-[10px] uppercase tracking-[0.35em] text-current opacity-70 transition-opacity hover:opacity-100"
      >
        Follow @invitestory.in on Instagram
      </a>
    </footer>
  );
}
