"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-black py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <span className="text-xs uppercase tracking-[0.4em] text-amber-200">
          Guest Testimonials
        </span>
        <h2 className="mt-6 font-serif text-4xl text-white md:text-5xl">
          Words From Our Guests
        </h2>
      </div>

      <div className="mx-auto mt-16 max-w-3xl px-6">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-md">
                <div className="mb-4 flex justify-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-200 text-amber-200"
                    />
                  ))}
                </div>
                <p className="font-serif text-xl italic leading-relaxed text-white/90 md:text-2xl">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-amber-200">
                    {t.name}
                  </p>
                  <p className="mt-1 text-xs text-white/50">{t.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
