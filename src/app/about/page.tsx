import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutContent from "./AboutContent";

export const metadata = {
  title: "אודות | ד\"ר דניאל וקסלר",
  description: "אודות ד\"ר דניאל וקסלר - מומחה בכירורגיה פומית, שיקום הפה וטיפולי חניכיים.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
