"use client";

import { useEffect, useState } from "react";
import { Menu, ChevronDown } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

const NAV_DROPDOWNS = {
   
  experience: [
    { label: "Our Story", href: "#story" },
    { label: "Amenities", href: "#amenities" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  stay: [
    { label: "Rooms", href: "#rooms" },
  ]
 
};

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Dining", href: "#dining" },
  { label: "Spa", href: "#spa" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#footer" },
];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    document
      .querySelector(href)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    setMobileOpen(false);
  };


  const scrollDirect = (href: string) => {
    document
      .querySelector(href)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    setMobileOpen(false);
  };


  const NavItem = ({
    label,
    href,
  }: {
    label: string;
    href: string;
  }) => (
    <a
      href={href}
      onClick={(e) => scrollToSection(e, href)}
      className="group relative text-sm font-light uppercase tracking-[0.15em] text-white/80 transition-colors hover:text-amber-200">
      {label}

      <span
        className="absolute -bottom-1 left-0 h-px w-0 bg-amber-200 transition-all duration-300 group-hover:w-full"/>
    </a>
  );


  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500${scrolled ? "border-b border-white/10 bg-black/60 py-4 backdrop-blur-xl" : "bg-transparent py-6"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, "#hero")}
          className="flex items-center gap-2"
        >
        <span className="font-serif text-2xl tracking-[0.2em] text-amber-200">
            AURELIA
          </span>

          <span
            className="hidden text-2xl font-light tracking-[0.2em] text-white/80 sm:inline">
            GRAND
          </span>
        </a>


        {/* Desktop */}
        <nav
          className="hidden items-center gap-10 lg:flex">

          <NavItem
            label="Home"
            href="#hero"
          />


          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex items-center gap-1 text-sm uppercase tracking-[0.15em] text-white/80 hover:text-amber-200">
              Experience
              <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>

            <DropdownMenuContent
              className=" border-white/10 bg-black/90 text-white backdrop-blur-xl">
              {NAV_DROPDOWNS.experience.map((item) => (
                <DropdownMenuItem
                  key={item.href}
                  onClick={() => scrollDirect(item.href)}
                  className="cursor-pointer text-white/80 hover:text-amber-200">
                  {item.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>



          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex items-center gap-1 text-sm uppercase tracking-[0.15em] text-white/80 hover:text-amber-200">
              Stay
              <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>

            <DropdownMenuContent
              className="border-white/10 bg-black/90 text-white backdrop-blur-xl">
              {NAV_DROPDOWNS.stay.map((item) => (
                <DropdownMenuItem
                  key={item.href}
                  onClick={() => scrollDirect(item.href)}
                  className="cursor-pointer text-white/80 hover:text-amber-200">
                  {item.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>



          {NAV_LINKS.slice(1).map((link) => (
            <NavItem
              key={link.href}
              {...link}
            />
          ))}


          <Button
            variant="outline"
            onClick={() => scrollDirect("#booking")}
            className="hover:border-amber-200/40 hover:bg-transparent hover:text-amber-100 bg-amber-200 text-black">
            Reserve
          </Button>

        </nav>



        {/* Mobile
        <div className="lg:hidden">

          <Sheet
            open={mobileOpen}
            onOpenChange={setMobileOpen}
          >

            <SheetTrigger className="text-white">
              <Menu />
            </SheetTrigger>


            <SheetContent
              side="right"
              className="border-white/10 bg-black/95 backdrop-blur-xl">

              <SheetHeader>
                <SheetTitle
                  className="font-serif tracking-[0.2em] text-amber-200">
                  AURELIA GRAND
                </SheetTitle>
              </SheetHeader>


              <nav
                className="mt-10 flex flex-col gap-6">

                {[
                  ...NAV_LINKS,
                  ...NAV_DROPDOWNS.experience,
                  ...NAV_DROPDOWNS.stay,
                ].map((link) => (
                  <NavItem
                    key={link.href}
                    {...link}
                  />
                ))}


                <Button
                  onClick={() => scrollDirect("#booking")}
                  className="mt-4 bg-amber-200 text-black">
                  Reserve
                </Button>

              </nav>

            </SheetContent>

          </Sheet>

        </div>
*/}
        {/* Mobile */}
<div className="lg:hidden">
  <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
    <SheetTrigger className="text-white transition-colors hover:text-amber-200">
      <Menu className="h-6 w-6" />
    </SheetTrigger>

    <SheetContent side="right" className="w-[320px] border-white/10 bg-black/95 px-8 backdrop-blur-xl">
      <SheetHeader className="border-b border-white/10 pb-6">
        <SheetTitle className="text-center font-serif text-2xl tracking-[0.2em] text-amber-200">
          AURELIA GRAND
        </SheetTitle>
      </SheetHeader>

      <nav className="mt-8 flex flex-col">

        <a href="#hero" onClick={(e) => scrollToSection(e, "#hero")} className="py-3 text-sm uppercase tracking-[0.15em] text-white/80 transition-colors hover:text-amber-200">
          Home
        </a>

        <div className="mt-6 border-t border-white/10 pt-6">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-amber-200/80">
            Experience
          </p>

          <div className="flex flex-col gap-3 pl-4">
            {NAV_DROPDOWNS.experience.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-sm text-white/70 transition-colors hover:text-amber-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-6">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-amber-200/80">
            Stay
          </p>

          <div className="flex flex-col gap-3 pl-4">
            {NAV_DROPDOWNS.stay.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-sm text-white/70 transition-colors hover:text-amber-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-6 flex flex-col">
          {NAV_LINKS.slice(1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="py-3 text-sm uppercase tracking-[0.15em] text-white/80 transition-colors hover:text-amber-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mt-8 border-t border-white/10 pt-8">
          <Button onClick={() => scrollDirect("#booking")} className="h-10 rounded-full bg-amber-200 px-6 text-black transition-colors hover:bg-amber-100 hover:text-black">
            Reserve
          </Button>
        </div>

      </nav>
    </SheetContent>
  </Sheet>
</div>
      </div> 
    </header>
  );
}