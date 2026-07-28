"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

// Single-page navigation: every entry is an in-page anchor, never a route.
const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Story", href: "#story" },
  { label: "Rooms", href: "#rooms" },
  { label: "Dining", href: "#dining" },
  { label: "Spa", href: "#spa" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#booking" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smoothly scrolls to the target section instead of navigating routes.
  // scroll-behavior: smooth (globals.css) handles the easing; this just
  // moves scroll position and closes the mobile sheet if open.
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${scrolled
          ? "border-b border-white/10 bg-black/40 py-4 backdrop-blur-xl"
          : "bg-transparent py-6"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Brand mark scrolls to top of page, not a route change */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, "#hero")}
          className="group flex items-center gap-2"
        >
          <span className="font-serif text-2xl tracking-[0.2em] text-amber-200 transition-colors group-hover:text-amber-100">
            AURELIA
          </span>
          <span className="hidden text-2xl font-light tracking-[0.2em] text-white/80 sm:inline">
            GRAND
          </span>
        </a>

        {/* Desktop navigation — smooth-scroll anchors only */}
        <nav className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="group relative text-sm font-light uppercase tracking-[0.15em] text-white/80 transition-colors hover:text-amber-200"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-amber-200 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a href="#booking" onClick={(e) => scrollToSection(e, "#booking")}>
            <Button
              variant="outline"
              className="border-amber-200/40 bg-transparent text-amber-100 hover:bg-amber-200 hover:text-black"
            >
              Reserve
            </Button>
          </a>
        </nav>

        {/* Mobile menu trigger, uses existing shadcn Sheet */}
        <div className="lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger className="text-white transition-colors hover:text-amber-200">
              <Menu className="h-6 w-6" />
              <span className="sr-only">
                Open menu
              </span>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="border-white/10 bg-black/95 backdrop-blur-2xl"
            >
              <SheetHeader>
                <SheetTitle className="font-serif text-xl tracking-[0.2em] text-amber-200">
                  AURELIA GRAND
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-10 flex flex-col gap-6 px-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-lg font-light uppercase tracking-[0.15em] text-white/80 transition-colors hover:text-amber-200"
                  >
                    {link.label}
                  </a>
                ))}
                <Button className="mt-4 bg-amber-200 text-black hover:bg-amber-100">
                  Reserve
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
