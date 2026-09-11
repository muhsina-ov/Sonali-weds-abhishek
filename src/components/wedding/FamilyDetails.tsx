import { MapPin, Home } from "lucide-react";
import { invitation } from "@/config/invitation";
import { Reveal } from "./Reveal";

export function FamilyDetails() {
  const { couple } = invitation;

  return (
    <section className="relative px-5 py-12">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-[0.62rem] tracking-[0.38em] text-gold uppercase font-medium">
          Two Families, One Blessed Union
        </p>
        <h2 className="mt-2 font-display text-3xl tracking-[0.12em] text-pine uppercase">
          The Families &amp; Ancestral Homes
        </h2>
        <div className="mx-auto mt-4 w-24 gold-rule" />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Bride Family Card */}
          <div className="relative rounded-[2.5rem] border border-gold/40 bg-parchment-deep/40 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-pine/10 text-gold border border-gold/40">
                <Home className="size-5 text-pine" />
              </span>
              <div>
                <span className="text-[0.65rem] tracking-[0.25em] text-gold uppercase font-semibold">
                  Bride's Family
                </span>
                <h3 className="font-display text-xl text-pine">{couple.bride}</h3>
              </div>
            </div>

            <div className="mt-5 space-y-3 text-xs md:text-sm text-ink/85">
              <div>
                <p className="text-[0.6rem] tracking-wider text-ink/60 uppercase">Daughter of</p>
                <p className="font-medium text-pine mt-0.5">{couple.brideParents}</p>
              </div>
              <div className="pt-2 border-t border-gold/20">
                <p className="flex items-start gap-1.5 text-ink/75">
                  <MapPin className="size-4 shrink-0 text-gold mt-0.5" />
                  <span>{couple.brideAddress}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Groom Family Card */}
          <div className="relative rounded-[2.5rem] border border-gold/40 bg-parchment-deep/40 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-pine/10 text-gold border border-gold/40">
                <Home className="size-5 text-pine" />
              </span>
              <div>
                <span className="text-[0.65rem] tracking-[0.25em] text-gold uppercase font-semibold">
                  Groom's Family
                </span>
                <h3 className="font-display text-xl text-pine">{couple.groom}</h3>
              </div>
            </div>

            <div className="mt-5 space-y-3 text-xs md:text-sm text-ink/85">
              <div>
                <p className="text-[0.6rem] tracking-wider text-ink/60 uppercase">Son of</p>
                <p className="font-medium text-pine mt-0.5">{couple.groomParents}</p>
              </div>
              <div className="pt-2 border-t border-gold/20">
                <p className="flex items-start gap-1.5 text-ink/75">
                  <MapPin className="size-4 shrink-0 text-gold mt-0.5" />
                  <span>{couple.groomAddress}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
