"use client";

import { motion } from "framer-motion";
import { galleryImages } from "@/data/gallery";

export default function Gallery() {
  return (
    <section id="gallery" className="w-full py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-amber-200">
            Gallery
          </span>
          <h2 className="mt-6 font-serif text-4xl text-white md:text-5xl">
            Moments Worth Framing
          </h2>
        </div>

        <div className="grid auto-rows-55 grid-cols-2 gap-4 md:grid-cols-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
              className={`group relative overflow-hidden rounded-lg ${img.span ?? ""}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${img.src})` }}
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
