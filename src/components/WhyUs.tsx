"use client";

import { motion } from "framer-motion";
import { Monitor, Sparkles, HandHeart, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "ציוד מתקדם",
    description: "שימוש בטכנולוגיות החדשניות ביותר לטיפולים יעילים ומדויקים",
  },
  {
    icon: Sparkles,
    title: "טיפול ללא כאב",
    description: "גישה עדינה ומקצועית המבטיחה חוויית טיפול נעימה ורגועה",
  },
  {
    icon: HandHeart,
    title: "ליווי אישי",
    description: "ד\"ר וקסלר מלווה אתכם אישית בכל שלב לאורך כל הטיפול",
  },
  {
    icon: ShieldCheck,
    title: "מקצועיות ללא פשרות",
    description: "סטנדרטים גבוהים של טיפול, איכות חומרים ותוצאות מוכחות",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyUs() {
  return (
    <section className="py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm tracking-wider mb-3">
            למה לבחור בנו
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4">
            היתרונות שלנו
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mx-auto mb-5 group-hover:from-primary group-hover:to-primary-dark transition-all duration-500">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">
                {feature.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
