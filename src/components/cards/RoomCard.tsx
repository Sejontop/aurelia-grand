"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { Room } from "@/data/rooms";

interface RoomCardProps {
  room: Room;
  index: number;
}

export default function RoomCard({ room, index }: RoomCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className="group relative h-[70vh] w-[85vw] flex-shrink-0 overflow-hidden rounded-2xl sm:w-[60vw] lg:w-[38vw]"
    >
      {/* Image scales up on hover for a subtle luxury "zoom" effect */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
        style={{ backgroundImage: `url(${room.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 w-full p-8">
        <span className="text-xs uppercase tracking-[0.3em] text-amber-200">
          {room.category}
        </span>
        <h3 className="mt-2 font-serif text-3xl text-white">{room.name}</h3>
        <p className="mt-3 max-w-sm text-sm font-light leading-relaxed text-white/70">
          {room.description}
        </p>
        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-lg text-amber-200">
            {room.price}
            <span className="text-xs text-white/50"> / night</span>
          </span>
          <Button
            variant="outline"
            size="sm"
            className="border-white/30 bg-white/5 text-white backdrop-blur-md hover:bg-amber-200 hover:text-black"
          >
            View Suite
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
