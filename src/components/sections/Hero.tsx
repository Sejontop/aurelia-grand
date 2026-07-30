"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  fadeInUp,
  staggerContainer,
} from "@/components/animations/variants";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2400&auto=format&fit=crop";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const [mounted, setMounted] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 0.9]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex h-screen min-h-180 w-full items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 -z-10 h-[130%] w-full"
      >
        {/* Static fallback image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${HERO_IMAGE})`,
          }}
        />

        {/* Video only fades in after mount + loading */}
        <motion.video
          initial={{ opacity: 0 }}
          animate={{
            opacity: mounted && videoReady ? 1 : 0,
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
          onCanPlay={() => setVideoReady(true)}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_IMAGE}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero_video.mp4" type="video/mp4" />
        </motion.video>
      </motion.div>

      {/* Dark overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 -z-10 bg-linear-to-b from-black/70 via-black/50 to-black"
      />

      {/* Content */}
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
          className="mt-8 max-w-xl text-base font-light leading-relaxed text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] md:text-lg"
        >
          Nestled between marble courtyards and gilded skylines, Aurelia Grand
          offers an address for those who refuse the ordinary.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          custom={3}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button
            onClick={() => scrollToSection("#booking")}
            size="lg"
            className="bg-amber-200 px-8 text-black hover:bg-amber-100"
          >
            Reserve Your Stay
          </Button>

          <Button
            onClick={() => scrollToSection("#rooms")}
            size="lg"
            variant="outline"
            className="border-white/30 bg-transparent px-8 text-white hover:bg-white"
          >
            Explore Rooms
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <button
  onClick={() => scrollToSection("#story")}
  className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 cursor-pointer"
  aria-label="Scroll to story section"
>
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5, duration: 1 }}
  >
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
      }}
    >
      <ChevronDown className="h-6 w-6 text-amber-200/80" />
    </motion.div>
  </motion.div>
</button>
    </section>
  );
}