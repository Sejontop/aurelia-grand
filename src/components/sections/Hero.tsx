"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/components/animations/variants";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll progress across the hero section only, used to drive
  // the parallax background and fade-out of the hero content as the
  // user scrolls into the next section.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 0.9]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    // id="hero" is the anchor target for the "Home" nav link
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex h-screen min-h-[720px] w-full items-center justify-center overflow-hidden"
    >
      {/* Parallax background layer — replace with next/image or <video> once real assets are ready */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 -z-10 h-[130%] w-full bg-[url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2400&auto=format&fit=crop')] bg-cover bg-center"
      />

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/50 to-black"
      />

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        <motion.span
          variants={fadeInUp}
          className="mb-6 text-xs font-light uppercase tracking-[0.4em] text-amber-200"
        >
          An Icon of Timeless Hospitality
        </motion.span>

        <motion.h1
          variants={fadeInUp}
          custom={1}
          className="font-serif text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Where Every Stay
          <br />
          Becomes <span className="italic text-amber-200">Legend</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          custom={2}
          className="mt-8 max-w-xl text-base font-light leading-relaxed text-white/70 md:text-lg"
        >
          Nestled between marble courtyards and gilded skylines, Aurelia
          Grand offers an address for those who refuse the ordinary.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          custom={3}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="bg-amber-200 px-8 text-black hover:bg-amber-100"
          >
            Reserve Your Stay
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 bg-transparent px-8 text-white hover:bg-white/10"
          >
            Explore Rooms
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-amber-200/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}
