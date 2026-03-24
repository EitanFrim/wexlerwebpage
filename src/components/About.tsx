"use client";

import { motion } from "framer-motion";
import { Award, Clock, Users, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BASE_PATH } from "@/lib/constants";

const highlights = [
  { icon: Award, label: "מומחיות", value: "ניסיון רב" },
  { icon: Clock, label: "זמינות", value: "מענה מהיר" },
  { icon: Users, label: "מטופלים", value: "אלפי מטופלים" },
];

export default function About() {
  return (
    <section className="py-28 bg-surface-low">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <Image
                src={`${BASE_PATH}/images/dr-wexler.jpg`}
                alt="ד״ר דניאל וקסלר במרפאת השיניים"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl shadow-primary/5 p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-bold text-secondary text-lg">מומחה</p>
                  <p className="text-text-muted text-sm">כירורגיה ושיקום</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block text-primary font-semibold text-sm tracking-wider mb-3">
              אודות
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-6">
              ד&quot;ר דניאל וקסלר
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              ד&quot;ר דניאל וקסלר מתמחה ברפואת שיניים מתקדמת ומספק טיפולים ברמה
              הגבוהה ביותר. עם ציוד מתקדם וגישה מקצועית, ד&quot;ר וקסלר מלווה את
              המטופלים לאורך כל הטיפול באופן נעים, מרגיע וללא כאב.
            </p>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              המרפאה מציעה מגוון רחב של טיפולים הכוללים כירורגיה פומית, שיקום הפה
              וטיפולי חניכיים — הכל תחת קורת גג אחת ובליווי צמוד ואישי.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-6 mb-8">
              {highlights.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-secondary text-sm">{item.value}</p>
                    <p className="text-text-muted text-xs">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              קראו עוד
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
