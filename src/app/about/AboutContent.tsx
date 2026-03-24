"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BASE_PATH } from "@/lib/constants";
import {
  Award,
  GraduationCap,
  Stethoscope,
  Heart,
  CheckCircle2,
} from "lucide-react";

const qualifications = [
  "מומחה בכירורגיה פומית ולסת",
  "מומחה בשיקום הפה",
  "טיפולי חניכיים מתקדמים",
  "השתלות שיניים",
  "טיפולי שורש מורכבים",
  "רפואת שיניים אסתטית",
];

const values = [
  {
    icon: Stethoscope,
    title: "מקצועיות",
    description:
      "שימוש בטכנולוגיות המתקדמות ביותר ובשיטות הטיפול העדכניות ביותר בתחום רפואת השיניים.",
  },
  {
    icon: Heart,
    title: "אכפתיות",
    description:
      "גישה אישית לכל מטופל, הקשבה לצרכים ומתן תשומת לב מלאה לכל פרט בטיפול.",
  },
  {
    icon: Award,
    title: "מצוינות",
    description:
      "שאיפה מתמדת למצוינות ולתוצאות הטובות ביותר עבור כל מטופל ומטופלת.",
  },
  {
    icon: GraduationCap,
    title: "למידה מתמדת",
    description:
      "השתלמויות מקצועיות ולמידה רציפה של טכנולוגיות וטכניקות חדשניות בתחום.",
  },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary-dark to-primary" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary-light blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent font-semibold text-sm tracking-wider mb-3">
              אודות
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
              ד&quot;ר דניאל וקסלר
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              מומחה ברפואת שיניים מתקדמת עם ניסיון רב בכירורגיה פומית ושיקום הפה
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4]">
                <Image
                  src={`${BASE_PATH}/images/dr-wexler.jpg`}
                  alt="ד״ר דניאל וקסלר במרפאת השיניים"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-6">
                הסיפור שלי
              </h2>
              <div className="space-y-4 text-text-muted text-lg leading-relaxed">
                <p>
                  ד&quot;ר דניאל וקסלר הוא רופא שיניים מומחה עם ניסיון רב שנים
                  בתחום רפואת השיניים. את השכלתו רכש במיטב המוסדות האקדמיים בארץ,
                  ומאז הקדיש את חייו המקצועיים לטיפול בחולים ברמה הגבוהה ביותר.
                </p>
                <p>
                  ד&quot;ר וקסלר מאמין שכל מטופל ראוי לקבל טיפול מקצועי, אישי
                  ונטול כאב. הוא משקיע בציוד מתקדם ובהכשרה מתמדת כדי להבטיח
                  שהמטופלים שלו מקבלים את הטיפול הטוב ביותר שקיים.
                </p>
                <p>
                  המרפאה של ד&quot;ר וקסלר מציעה סביבה נעימה ומרגיעה, המשלבת
                  טכנולוגיה מתקדמת עם גישה אנושית וחמה. כל טיפול מותאם אישית
                  לצרכים ולמצב של כל מטופל.
                </p>
              </div>

              {/* Qualifications */}
              <div className="mt-8">
                <h3 className="font-bold text-secondary text-xl mb-4">
                  תחומי התמחות
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {qualifications.map((q) => (
                    <div key={q} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-text-muted">{q}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-secondary mb-4">
              הערכים שלנו
            </h2>
            <p className="text-text-muted text-lg">
              העקרונות שמנחים אותנו בכל טיפול
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface-card rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">
                  {value.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
