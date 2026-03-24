import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";

const navLinks = [
  { href: "/", label: "דף הבית" },
  { href: "/about", label: "אודות" },
  { href: "/#services", label: "שירותים" },
  { href: "/contact", label: "צור קשר" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                alt="ד״ר דניאל וקסלר"
                width={160}
                height={70}
                className="h-14 w-auto"
              />
            </div>
            <p className="text-white/50 leading-relaxed text-sm">
              טיפולי שיניים ברמה הגבוהה ביותר. כירורגיה פומית, שיקום הפה וטיפולי
              חניכיים בגישה אישית ומקצועית.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">ניווט מהיר</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-primary-light transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">יצירת קשר</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:036426994"
                  className="flex items-center gap-3 text-white/50 hover:text-primary-light transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span dir="ltr">03-6426994</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:0539405051"
                  className="flex items-center gap-3 text-white/50 hover:text-primary-light transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span dir="ltr">053-9405051</span>
                </a>
              </li>
              <li>
                <a
                  href="https://waze.com/ul?ll=32.125285,34.800616&navigate=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 hover:text-primary-light transition-colors text-sm"
                >
                  <MapPin className="w-4 h-4" />
                  <span>נווטו אלינו ב-Waze</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/30 text-sm">
            כל הזכויות שמורות &copy; {new Date().getFullYear()} ד&quot;ר דניאל וקסלר
          </p>
        </div>
      </div>
    </footer>
  );
}
