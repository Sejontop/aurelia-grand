"use client";

import { motion } from "framer-motion";

const TREATMENTS = [
  {
    title: "Signature Aurelia Ritual",
    desc: "A 90-minute full-body ritual combining warm marble stones and rare botanical oils.",
  },
  {
    title: "Thermal Marble Suite",
    desc: "Private access to heated marble loungers, steam, and a cold plunge pool.",
  },
  {
    title: "Private Hydrotherapy",
    desc: "A personalized water therapy session designed around your body's needs.",
  },
];

export default function Spa() {
  return (
    <section id="spa" className="relative w-full bg-black">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-32 lg:grid-cols-2 lg:px-10">
        {/* Sticky visual: stays pinned while the treatment list scrolls past it,
            an Apple-style storytelling pattern for long-form pages. */}
        <div className="lg:sticky lg:top-24 lg:h-[70vh]">
          <div className="relative h-[400px] overflow-hidden rounded-lg lg:h-full">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>

        <div className="flex flex-col gap-24 py-12">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-amber-200">
              Spa &amp; Wellness
            </span>
            <h2 className="mt-6 font-serif text-4xl text-white md:text-5xl">
              Stillness, Curated
            </h2>
          </div>

          {TREATMENTS.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="border-t border-white/10 pt-8"
            >
              <h3 className="font-serif text-2xl text-white">{t.title}</h3>
              <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-white/70">
                {t.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
