"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function NavLink({ href, ...props }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const updateActiveLink = () => setIsActive(window.location.hash === href);

    updateActiveLink();
    window.addEventListener("hashchange", updateActiveLink);

    return () => window.removeEventListener("hashchange", updateActiveLink);
  }, [href]);

  return <Link href={href} aria-current={isActive ? "location" : undefined} {...props} />;
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-4 py-4 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1280px] rounded-[20px] border border-white/10 bg-[#191d25] shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
        <nav className="flex items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Link href="/" className="flex shrink-0 items-center" aria-label="Hireloop home">
            <Image src="/hireloop-logo.svg" alt="Hireloop" width={100} height={28} priority />
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium text-[#f5f7fb]/85 md:flex">
            <NavLink href="#jobs" className="transition-opacity hover:opacity-100 opacity-90">
              Browse Jobs
            </NavLink>
            <NavLink href="#company" className="transition-opacity hover:opacity-100 opacity-90">
              Company
            </NavLink>
            <NavLink href="#pricing" className="transition-opacity hover:opacity-100 opacity-90">
              Pricing
            </NavLink>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <NavLink href="#signin" className="hidden text-sm font-medium text-white/90 transition-opacity hover:opacity-100 md:inline-flex">
              Sign In
            </NavLink>
            <button
              type="button"
              className="rounded-xl bg-gradient-to-r from-[#5c6cff] to-[#6d63ff] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(98,87,255,0.45)] transition-transform hover:-translate-y-0.5"
            >
              Get Started
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white md:hidden"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              Menu
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="flex flex-col gap-4 border-t border-white/10 p-4 md:hidden">
            <NavLink href="#jobs" onClick={() => setIsMenuOpen(false)} className="text-white/85">
              Browse Jobs
            </NavLink>
            <NavLink href="#company" onClick={() => setIsMenuOpen(false)} className="text-white/85">
              Company
            </NavLink>
            <NavLink href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-white/85">
              Pricing
            </NavLink>
            <NavLink href="#signin" onClick={() => setIsMenuOpen(false)} className="text-white/85">
              Sign In
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;