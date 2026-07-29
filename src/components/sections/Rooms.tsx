"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import RoomCard from "@/components/cards/RoomCard";
import { rooms } from "@/data/rooms";

gsap.registerPlugin(ScrollTrigger);

export default function Rooms() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Pins the section in place and translates the card track horizontally
  // in lockstep with vertical scroll, turning normal page scroll into a
  // horizontal showcase without hijacking the wheel/touch events.
  useGSAP(
    () => {
      if (!trackRef.current || !containerRef.current) return;

      const track = trackRef.current;

      const trigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${track.scrollWidth - window.innerWidth}`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const maxScroll = track.scrollWidth - window.innerWidth;
          gsap.set(track, { x: -maxScroll * self.progress });
        },
      });

      return () => trigger.kill();
    },
    { scope: containerRef }
  );

  return (
    <section
      id="rooms"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <div className="absolute top-20 left-6 z-10 lg:left-10">
        <span className="text-xs uppercase tracking-[0.4em] text-amber-200">
          Luxury Suites
        </span>
        <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl">
          Rooms Designed for Reverie
        </h2>
      </div>

      <div
        ref={trackRef}
        className="flex h-full items-center gap-8 pl-6 pr-[10vw] pt-28 lg:pl-10"
      >
        {rooms.map((room, i) => (
          <RoomCard key={room.id} room={room} index={i} />
        ))}
      </div>
    </section>
  );
}
