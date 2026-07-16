import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Announcements from "@/components/Announcements";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Placements from "@/components/Placements";
import Events from "@/components/Events";
import Contact from "@/components/Contact";

export default function Landing() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Welcome />
      <Announcements />
      <About />
      <Courses />
      <Placements />
      <Events />
      <Contact />
    </motion.main>
  );
}
