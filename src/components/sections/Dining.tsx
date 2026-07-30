"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/components/animations/variants";

const VENUES = [
  {
    name: "Lumière",
    tag: "Fine Dining",
    desc: "Seasonal tasting menus from an open kitchen overlooking the skyline.",
  },
  {
    name: "The Marble Bar",
    tag: "Cocktails",
    desc: "Rare spirits and reinvented classics beneath a hand-carved marble ceiling.",
  },
  {
    name: "Terrace Vigne",
    tag: "Rooftop",
    desc: "Mediterranean small plates paired with an award-winning wine cellar.",
  },
];

export default function Dining() {
  return (
    <section
      id="dining"
      className="relative w-full overflow-hidden py-32"
    >
      {/* Cinematic background image with heavy vignette for text legibility */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.4em] text-amber-200"
        >
          Dining Experience
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 font-serif text-4xl text-white md:text-6xl"
        >
          Culinary Artistry, <span className="italic text-amber-200">Redefined</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-base font-light leading-relaxed text-white/70 md:text-lg"
        >
          Three distinct venues, one uncompromising standard — helmed by a
          culinary team devoted to ingredients sourced within a day&apos;s
          drive of the property.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-3 lg:px-10"
      >
        {VENUES.map((venue) => (
          <motion.div
            key={venue.name}
            variants={fadeInUp}
            className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-colors hover:border-amber-200/40"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-amber-200">
              {venue.tag}
            </span>
            <h3 className="mt-4 font-serif text-2xl text-white">
              {venue.name}
            </h3>
            <p className="mt-3 text-sm font-light leading-relaxed text-white/60">
              {venue.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
