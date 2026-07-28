"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// id="booking" doubles as the "Contact" nav target — a single-page site
// has no separate contact route, so booking IS the contact moment.
export default function Booking() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Guests");

  return (
    <section
      id="booking"
      className="relative w-full overflow-hidden bg-black py-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <span className="text-xs uppercase tracking-[0.4em] text-amber-200">
          Reserve Your Stay
        </span>
        <h2 className="mt-6 font-serif text-4xl text-white md:text-6xl">
          Your Chapter <span className="italic text-amber-200">Begins Here</span>
        </h2>
        <p className="mt-6 text-base font-light text-white/70 md:text-lg">
          Secure your suite at Aurelia Grand and step into an experience
          reserved for the few.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto mt-16 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <div className="text-left">
            <label className="text-xs uppercase tracking-[0.2em] text-white/50">
              Check In
            </label>
            <Input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="mt-2 border-white/20 bg-black/30 text-white"
            />
          </div>
          <div className="text-left">
            <label className="text-xs uppercase tracking-[0.2em] text-white/50">
              Check Out
            </label>
            <Input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="mt-2 border-white/20 bg-black/30 text-white"
            />
          </div>
          <div className="text-left">
            <label className="text-xs uppercase tracking-[0.2em] text-white/50">
              Guests
            </label>
            <Input
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="mt-2 border-white/20 bg-black/30 text-white"
            />
          </div>
          <div className="flex items-end">
            <Button className="w-full bg-amber-200 py-6 text-black hover:bg-amber-100">
              Check Availability
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
