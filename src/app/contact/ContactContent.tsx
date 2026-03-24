"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

const contactInfo = [
  {
    icon: Phone,
    title: "טלפון",
    details: ["03-6426994", "053-9405051"],
    links: ["tel:036426994", "tel:0539405051"],
  },
  {
    icon: MapPin,
    title: "כתובת",
    details: ["נווטו אלינו בקלות דרך Waze"],
    links: [
      "https://waze.com/ul?ll=32.125285,34.800616&navigate=yes",
    ],
  },
  {
    icon: Clock,
    title: "שעות פעילות",
    details: ["ימים א׳-ה׳", "בתיאום מראש"],
    links: [],
  },
];

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary-dark to-primary" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-20 w-80 h-80 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent font-semibold text-sm tracking-wider mb-3">
              צור קשר
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
              נשמח לשמוע מכם
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              מלאו את הטופס או התקשרו אלינו ישירות לתיאום תור
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info Cards */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-surface-card rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary text-lg mb-1">
                        {item.title}
                      </h3>
                      {item.details.map((detail, j) => (
                        <div key={detail}>
                          {item.links[j] ? (
                            <a
                              href={item.links[j]}
                              target={
                                item.links[j].startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                item.links[j].startsWith("http")
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="text-text-muted hover:text-primary transition-colors"
                              dir={detail.match(/\d/) ? "ltr" : undefined}
                            >
                              {detail}
                            </a>
                          ) : (
                            <p className="text-text-muted">{detail}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Map embed placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center"
              >
                <a
                  href="https://waze.com/ul?ll=32.125285,34.800616&navigate=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  פתחו ב-Waze
                </a>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-surface-card rounded-3xl p-8 md:p-10">
                <h2 className="text-2xl font-extrabold text-secondary mb-2">
                  השאירו פרטים
                </h2>
                <p className="text-text-muted mb-8">
                  מלאו את הטופס ונחזור אליכם בהקדם
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-2">
                      תודה רבה!
                    </h3>
                    <p className="text-text-muted">
                      קיבלנו את הפרטים שלכם. ניצור קשר בהקדם.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-secondary mb-1.5">
                          שם מלא
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full bg-surface-low rounded-xl px-4 py-3 text-text outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                          placeholder="הזינו את שמכם"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary mb-1.5">
                          טלפון
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full bg-surface-low rounded-xl px-4 py-3 text-text outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                          placeholder="מספר הטלפון שלכם"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-1.5">
                        אימייל
                      </label>
                      <input
                        type="email"
                        className="w-full bg-surface-low rounded-xl px-4 py-3 text-text outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                        placeholder="כתובת האימייל שלכם (לא חובה)"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-1.5">
                        נושא הפנייה
                      </label>
                      <select className="w-full bg-surface-low rounded-xl px-4 py-3 text-text outline-none focus:ring-2 focus:ring-primary/40 transition-all">
                        <option value="">בחרו נושא</option>
                        <option value="appointment">תיאום תור</option>
                        <option value="surgery">כירורגיה פומית</option>
                        <option value="rehab">שיקום הפה</option>
                        <option value="gums">טיפולי חניכיים</option>
                        <option value="other">אחר</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-1.5">
                        הודעה
                      </label>
                      <textarea
                        rows={4}
                        className="w-full bg-surface-low rounded-xl px-4 py-3 text-text outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none"
                        placeholder="ספרו לנו כיצד נוכל לעזור..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-4 rounded-full font-bold text-lg transition-all hover:shadow-lg hover:shadow-primary/25"
                    >
                      <Send className="w-5 h-5" />
                      שלחו הודעה
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
