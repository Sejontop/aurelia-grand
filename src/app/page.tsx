import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Rooms from "@/components/sections/Rooms";
import Dining from "@/components/sections/Dining";
import Spa from "@/components/sections/Spa";
import Amenities from "@/components/sections/Amenities";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Booking from "@/components/sections/Booking";

// Single route ("/"). The entire site is one continuous vertical scroll —
// no additional pages or routes exist. Navbar links scroll to these
// section IDs instead of navigating.
export default function Home() {
  return (
    <main className="relative w-full bg-black">
      <Navbar />
      <Hero />
      <Story />
      <Rooms />
      <Dining />
      <Spa />
      <Amenities />
      <Gallery />
      <Testimonials />
      <Booking />
      <Footer />
    </main>
  );
}
