"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { BASE_PATH } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "דף הבית" },
  { href: "/about", label: "אודות" },
  { href: "/#services", label: "שירותים" },
  { href: "/contact", label: "צור קשר" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src={`${BASE_PATH}/images/logo.png`}
              alt="ד״ר דניאל וקסלר - מרפאת שיניים"
              width={140}
              height={60}
              className={`h-12 w-auto transition-all ${
                scrolled ? "brightness-0" : ""
              }`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  scrolled ? "text-text-muted" : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:036426994"
              className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              <Phone className="w-4 h-4" />
              תיאום תור
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-xl transition-colors ${
              scrolled ? "text-secondary" : "text-white"
            }`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-outline/20"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-secondary font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:036426994"
                className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-full font-semibold"
              >
                <Phone className="w-4 h-4" />
                תיאום תור
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
