"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white blur-3xl" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            מוכנים לחיוך חדש?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-lg mx-auto">
            צרו קשר עוד היום לתיאום תור וקבלו ייעוץ ראשוני
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="tel:036426994"
              className="flex items-center gap-2 bg-white text-primary-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-accent hover:text-white transition-all hover:shadow-2xl hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              תיאום תור
            </a>
          </div>

          <div className="flex items-center justify-center gap-8 text-white/60">
            <a
              href="tel:036426994"
              className="hover:text-white transition-colors"
              dir="ltr"
            >
              03-6426994
            </a>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <a
              href="tel:0539405051"
              className="hover:text-white transition-colors"
              dir="ltr"
            >
              053-9405051
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
