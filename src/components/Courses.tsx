"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Courses() {
  const courses = [
    {
      title: "Master of Computer Applications (MCA)",
      duration: "2 Years Full-Time",
      description: "A professional postgraduate program focusing on advanced software development, computer applications, and management systems to prepare IT leaders.",
      icon: Code,
      highlights: ["AI & ML", "Cloud Computing", "Mobile Dev", "Full-Stack"]
    },
    {
      title: "Doctor of Philosophy (Ph.D.)",
      duration: "3-5 Years Research",
      description: "Advanced research program in Computer Applications and Management, leading to specialized expertise and contribution to existing knowledge.",
      icon: GraduationCap,
      highlights: ["Data Science", "Cyber Security", "Blockchain", "Info Systems"]
    }
  ];

  return (
    <section id="courses" className="py-16 bg-muted/30 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-primary font-black tracking-widest uppercase text-xs mb-3"
            >
              <BookOpen className="h-4 w-4" />
              Academic Programs
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-black text-foreground tracking-tight"
            >
              Courses <span className="text-primary italic font-serif">Offered</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm font-medium max-w-md md:text-right"
          >
            Developing specialized skills and research capabilities to meet the evolving demands of the global IT industry.
          </motion.p>
        </div>

        {/* Compact Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card p-8 rounded-xl border border-border/40 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFCC00]/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="flex items-start gap-5 mb-6">
                <div className="p-3.5 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <course.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-foreground tracking-tight leading-snug">{course.title}</h3>
                  <p className="text-primary font-black text-[10px] uppercase tracking-widest mt-1">{course.duration}</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 text-sm font-medium">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {course.highlights.map((item, hIdx) => (
                  <span key={hIdx} className="px-3 py-1 bg-muted/65 text-muted-foreground rounded-full text-[10px] font-black uppercase tracking-wider border border-border/10">
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border/20">
                <Button size="sm" className="rounded-full px-6 py-4 font-bold text-xs">
                  Course Details
                </Button>
                <Button variant="ghost" className="text-primary font-black uppercase tracking-widest text-[10px] hover:bg-transparent px-2">
                  Curriculum →
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
