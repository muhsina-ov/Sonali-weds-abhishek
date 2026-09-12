import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
const heroArch = "https://media.invitestory.in/sage-parchment/src/assets/hero-arch.jpg";
import { invitation } from "@/config/invitation";
import { AuroraBackdrop } from "./AuroraBackdrop";
import { useOpened } from "./OpenGate";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const { couple } = invitation;
  const opened = useOpened();

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col items-center justify-between overflow-hidden bg-parchment"
    >
      <AuroraBackdrop />

      <motion.div style={{ y: imgY }} className="absolute -top-10 inset-x-0 bottom-0">
        <img
          src={heroArch}
          alt="Illustrated Mughal arch with an Indian bride and groom surrounded by lotus flowers"
          width={1024}
          height={1536}
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pine/25 via-transparent via-40% to-parchment" />
      </motion.div>

      {/* Fixed bottom gradient to guarantee seamless transition to next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-72 bg-gradient-to-t from-parchment via-parchment/95 via-60% to-transparent" />

      {/* Sacred Ganesh Ji Shloka at the top */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={opened ? { opacity: 1, y: 0 } : false}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-20 pt-8 sm:pt-10 px-4 text-center max-w-md mx-auto"
      >
        <div className="rounded-2xl border border-gold/40 bg-parchment/85 p-3.5 shadow-sm backdrop-blur-xs">
          <p className="font-serif text-sm font-semibold tracking-widest text-pine">
            {invitation.shloka.title}
          </p>
          <p className="mt-1 font-serif text-xs md:text-sm leading-relaxed text-ink/90 whitespace-pre-line">
            {invitation.shloka.verse}
          </p>
        </div>
      </motion.div>

      {/* Couple Names */}
      <motion.div
        style={{ y: textY }}
        className="relative z-20 mt-auto w-full px-5 pt-8 pb-4 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 24, letterSpacing: "0.3em" }}
          animate={opened ? { opacity: 1, y: 0, letterSpacing: "0.14em" } : false}
          transition={{ duration: 1.4, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-md text-3xl leading-tight font-light text-pine uppercase sm:text-5xl"
        >
          {couple.brideShort}
          <span className="mx-2.5 inline-block font-display text-xl lowercase italic text-gold">
            weds
          </span>
          {couple.groomShort}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0.4 }}
          animate={opened ? { opacity: 1, scaleX: 1 } : false}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="mx-auto mt-4 w-44 gold-rule"
        />
      </motion.div>

      <motion.div style={{ opacity: fade }} className="relative z-20 pb-6 text-center">
        <span className="text-[0.6rem] tracking-[0.3em] text-ink/60 uppercase">scroll</span>
        <motion.div
          animate={{ scaleY: [0.2, 1, 0.2], originY: 0 }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto mt-2 h-8 w-px bg-gold"
        />
      </motion.div>
    </section>
  );
}
