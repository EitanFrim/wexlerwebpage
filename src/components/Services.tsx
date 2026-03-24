"use client";

import { motion } from "framer-motion";
import {
  Syringe,
  Smile,
  HeartPulse,
  BedDouble,
  Wind,
  Zap,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Syringe,
    title: "כירורגיה",
    description:
      "ניתוחים מתקדמים בחלל הפה כולל עקירות שיני בינה, השתלות ועוד, תוך שימוש בטכנולוגיה חדשנית ובגישה מקצועית.",
    color: "from-primary/10 to-primary/5",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: HeartPulse,
    title: "טיפולי חניכיים",
    description:
      "טיפולים מקיפים בחניכיים לשמירה על בריאות הפה, כולל ניקוי עמוק, טיפול בדלקות חניכיים ומניעת מחלות חניכיים.",
    color: "from-secondary/10 to-secondary/5",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    icon: Smile,
    title: "שיקום אסתטי של הפה",
    description:
      "שיקום מלא של הפה הכולל כתרים, גשרים, ציפויים ושתלים לשחזור מלא של התפקוד והאסתטיקה של החיוך שלכם.",
    color: "from-accent/10 to-accent/5",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: BedDouble,
    title: "טיפולים בהרדמה מלאה",
    description:
      "טיפולי שיניים מורכבים תחת הרדמה מלאה לחוויית טיפול נטולת חרדה ומתח, מתאים במיוחד למטופלים עם חרדת שיניים.",
    color: "from-primary/10 to-primary/5",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Wind,
    title: "טיפולים בגז צחוק",
    description:
      "סדציה בגז צחוק להרגעה ושחרור מתח במהלך הטיפול, מאפשרת חוויה נעימה ורגועה ללא צורך בהרדמה מלאה.",
    color: "from-secondary/10 to-secondary/5",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    icon: Zap,
    title: "לייזר לשיכוך כאבים",
    description:
      "שימוש בטכנולוגיית לייזר מתקדמת להפחתת כאבים, האצת ריפוי רקמות וטיפול יעיל ונטול מגע בבעיות שונות בחלל הפה.",
    color: "from-accent/10 to-accent/5",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm tracking-wider mb-3">
            השירותים שלנו
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4">
            מגוון טיפולים מתקדמים
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            טיפולי שיניים מקצועיים ברמה הגבוהה ביותר עם ציוד מתקדם ותוצאות
            מוכחות
          </p>
        </motion.div>

        {/* Cards - 3x2 grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative bg-surface-card rounded-2xl p-8 hover:shadow-[0_8px_40px_rgba(13,115,119,0.08)] transition-all duration-500"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative">
                <div
                  className={`w-14 h-14 ${service.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                >
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {service.title}
                </h3>
                <p className="text-text-muted leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  לפרטים נוספים
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
