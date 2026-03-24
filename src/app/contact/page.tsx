import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactContent from "./ContactContent";

export const metadata = {
  title: "צור קשר | ד\"ר דניאל וקסלר",
  description: "צרו קשר עם ד\"ר דניאל וקסלר לתיאום תור. טלפון: 03-6426994",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
