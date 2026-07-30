"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import RoomCard from "@/components/cards/RoomCard";
import { rooms } from "@/data/rooms";

export default function Rooms() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!trackRef.current) return;

    trackRef.current.scrollBy({
      left: direction === "left" ? -420 : 420,
      behavior: "smooth",
    });
  };

  return (
    <section id="rooms" className="relative overflow-hidden py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-amber-200">
              Luxury Suites
            </span>

            <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl">
              Rooms Designed for Reverie
            </h2>
          </div>

          {/* Desktop arrows */}
          <div className="hidden gap-3 md:flex">
            <button
              onClick={() => scroll("left")}
              className="rounded-full border border-white/20 p-3 text-white transition hover:border-amber-200 hover:text-amber-200"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="rounded-full border border-white/20 p-3 text-white transition hover:border-amber-200 hover:text-amber-200"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={trackRef}
          // className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
          className="flex gap-8 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide">
        
          {rooms.map((room, index) => (
            <div key={room.id} className="snap-start shrink-0">
              <RoomCard room={room} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}