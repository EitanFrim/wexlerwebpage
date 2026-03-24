"use client";

import { Phone, MapPin, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary-dark to-primary" />

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary-light blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-accent blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-white/80 text-sm">מרפאת שיניים מתקדמת</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-6">
            חיוך מושלם
            <br />
            <span className="bg-gradient-to-l from-accent-light to-accent bg-clip-text text-transparent">
              מתחיל כאן
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            טיפולי שיניים ברמה הגבוהה ביותר, בגישה אישית ומקצועית.
            <br className="hidden md:block" />
            ד&quot;ר דניאל וקסלר מלווה אתכם לחיוך שתמיד חלמתם עליו.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="tel:036426994"
            className="flex items-center gap-2 bg-white text-primary-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-accent hover:text-white transition-all hover:shadow-2xl hover:shadow-accent/25 hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            תיאום תור
          </a>
          <a
            href="#services"
            className="flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            למידע נוסף
          </a>
        </motion.div>

        {/* Floating info card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-5"
        >
          <a
            href="tel:036426994"
            className="flex items-center gap-3 text-white hover:text-accent transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="font-semibold" dir="ltr">03-6426994</span>
          </a>
          <div className="hidden sm:block w-px h-6 bg-white/20" />
          <a
            href="tel:0539405051"
            className="flex items-center gap-3 text-white hover:text-accent transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="font-semibold" dir="ltr">053-9405051</span>
          </a>
          <div className="hidden sm:block w-px h-6 bg-white/20" />
          <a
            href="https://waze.com/ul?ll=32.125285,34.800616&navigate=yes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white hover:text-accent transition-colors"
          >
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">נווטו אלינו</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-6 h-6 text-white/40" />
      </motion.div>
    </section>
  );
}
