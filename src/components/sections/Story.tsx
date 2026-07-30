"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/components/animations/variants";

export default function Story() {
  return (
    // <section id="story" className="relative w-full py-32"> not good contrast
    <section id="story" className="relative w-full py-32 before:absolute before:inset-0 before:bg-linear-to-r before:from-black/80 before:via-black/40 before:to-transparent">
      {/* <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10"> ..not good contrast*/}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        {/* Image reveal: a clip-path wipe rather than a plain fade, for a more editorial feel */}
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          whileInView={{ clipPath: "inset(0 0 0% 0)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-80 sm:h-96 lg:h-125 overflow-hidden rounded-xl lg:order-2"
        >
          <div className="absolute inset-0 bg-[url('/our_story_image.jpg')] bg-cover bg-top" />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:order-1"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-amber-200">
            Our Story
          </span>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-white md:text-5xl">
            A Century of Quiet Grandeur
          </h2>
          <p className="mt-6 text-base font-light leading-relaxed text-white/70 md:text-lg">
            Founded in 1928 as a private residence for European nobility,
            Aurelia Grand has spent nearly a century perfecting the art of
            welcome. Every marble column and hand-gilded ceiling still
            carries the intention of its original architects: that luxury
            should feel inevitable, not announced.
          </p>
          <p className="mt-4 text-base font-light leading-relaxed text-white/70 md:text-lg">
            Today, that legacy continues through a team devoted to
            anticipating desires before they are spoken — a philosophy of
            hospitality that has earned Aurelia Grand its place among the
            world&apos;s most storied addresses.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
