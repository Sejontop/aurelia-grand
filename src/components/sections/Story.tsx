"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/components/animations/variants";

export default function Story() {
  return (
    <section id="story" className="relative w-full bg-black py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        {/* Image reveal: a clip-path wipe rather than a plain fade, for a more editorial feel */}
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          whileInView={{ clipPath: "inset(0 0 0% 0)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[500px] overflow-hidden rounded-lg lg:order-2"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
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
