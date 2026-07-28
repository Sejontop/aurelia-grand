"use client";

import { motion } from "framer-motion";
import { Car, Dumbbell, Sparkles, Waves, Wifi, Wine } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/components/animations/variants";

const AMENITIES = [
  { icon: Waves, title: "Infinity Pool", desc: "A rooftop infinity edge overlooking the bay, open until midnight." },
  { icon: Dumbbell, title: "Private Fitness Studio", desc: "One-on-one training available around the clock." },
  { icon: Wine, title: "Rooftop Wine Lounge", desc: "An 800-label cellar curated by our in-house sommelier." },
  { icon: Car, title: "Valet & Chauffeur", desc: "A private fleet on call for arrivals, departures, and city excursions." },
  { icon: Wifi, title: "Seamless Connectivity", desc: "Fibre-grade connectivity throughout every suite and public space." },
  { icon: Sparkles, title: "24-Hour Concierge", desc: "Dedicated concierge service anticipating every request, day or night." },
];

export default function Amenities() {
  return (
    <section id="amenities" className="w-full bg-black py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-amber-200">
            Amenities
          </span>
          <h2 className="mt-6 font-serif text-4xl text-white md:text-5xl">
            Every Detail, Considered
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {AMENITIES.map((a) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.title}
                variants={fadeInUp}
                className="group rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-colors hover:border-amber-200/40 hover:bg-white/10"
              >
                <Icon className="h-8 w-8 text-amber-200 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mt-6 font-serif text-xl text-white">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-white/60">
                  {a.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
