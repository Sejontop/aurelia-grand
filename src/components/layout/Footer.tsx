export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <span className="font-serif text-2xl tracking-[0.2em] text-amber-200">
              AURELIA GRAND
            </span>
            <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-white/50">
              An address for those who refuse the ordinary. Timeless
              hospitality, reimagined for the modern era.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-white/40">
              Explore
            </h4>
            <ul className="mt-4 space-y-3 text-sm font-light text-white/70">
              <li>
                <a href="#story" className="hover:text-amber-200">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-amber-200">
                  Suites
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-amber-200">
                  Dining
                </a>
              </li>
              <li>
                <a href="#spa" className="hover:text-amber-200">
                  Spa &amp; Wellness
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-white/40">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm font-light text-white/70">
              <li>12 Marbella Crescent, Monte Cristo</li>
              <li>+1 (800) 555-0192</li>
              <li>reservations@aureliagrand.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-white/40">
              Follow
            </h4>
            <div className="mt-4 flex gap-4">
              <div className="flex gap-6 text-sm text-white/50">
  <a
    href="#"
    className="transition hover:text-amber-300"
  >
    Instagram
  </a>

  <a
    href="#"
    className="transition hover:text-amber-300"
  >
    Facebook
  </a>

  <a
    href="#"
    className="transition hover:text-amber-300"
  >
    YouTube
  </a>
</div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs font-light text-white/30">
          © {new Date().getFullYear()} Aurelia Grand Hotel. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
