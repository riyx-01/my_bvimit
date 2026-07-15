"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Award, ShieldCheck, Landmark } from "lucide-react";

export default function About() {
  const highlights = [
    { icon: Landmark, title: "BV Legacy", desc: "Part of 156+ Bharati Vidyapeeth institutions established since 1964" },
    { icon: ShieldCheck, title: "Approvals", desc: "Approved by AICTE New Delhi & Affiliated to University of Mumbai" },
    { icon: Award, title: "IT Excellence", desc: "Recognized PG Research Center for Computer Applications" },
  ];

  return (
    <section id="about" className="py-16 bg-background text-foreground transition-colors duration-300 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Header */}
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black tracking-[0.2em] uppercase text-xs mb-3 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Institutional Profile
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-black text-foreground tracking-tight"
            >
              Defining the <span className="text-primary italic font-serif">Standard</span> of IT Excellence
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground font-medium text-sm max-w-md md:text-right"
          >
            Serving as a cornerstone of management and technical education in Navi Mumbai since 2002.
          </motion.div>
        </div>

        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative Content & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4">
              <div className="inline-block relative">
                <h3 className="text-xl md:text-2xl font-black text-foreground relative z-10 tracking-tight uppercase">Founder's Vision</h3>
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#FFCC00]/40 -rotate-1 rounded-full z-0" />
              </div>
              
              <p className="text-base font-bold text-foreground leading-relaxed italic border-l-4 border-[#FFCC00] pl-5 py-1">
                "I am indeed happy to welcome you to Bharati Vidyapeeth's Institute of Management & Information 
                Technology, Navi Mumbai, where innovation meets tradition."
              </p>

              <div className="text-xs text-muted-foreground leading-relaxed font-semibold space-y-3">
                <p>
                  Established in 1964, Bharati Vidyapeeth has been a pioneer of social transformation through quality 
                  education. Our Belapur campus continues this mission by fostering an environment that balances academic rigor with corporate relevance. We celebrate our silver jubilee marking 25 years of educational commitment.
                </p>
              </div>
            </div>

            {/* Tight Highlight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-card border border-border/40 hover:border-primary/20 transition-all duration-300">
                  <div className="p-2 bg-primary/10 text-primary w-fit rounded-lg mb-3">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <h4 className="font-black text-xs text-foreground uppercase tracking-wide mb-1">{item.title}</h4>
                  <p className="text-[11px] text-muted-foreground leading-snug font-medium">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button className="rounded-full px-6 h-11 font-black uppercase tracking-widest text-[9px] shadow-md shadow-primary/10">
                Institutional History
              </Button>
              <Button variant="outline" className="rounded-full px-6 h-11 font-black uppercase tracking-widest text-[9px]">
                Accreditations
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Centered Compliant Portrait Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[320px]">
              <div className="absolute inset-0 bg-[#FFCC00]/10 rounded-xl transform translate-x-3 translate-y-3 -z-10 dark:bg-[#FFD700]/5" />
              <div className="relative rounded-xl overflow-hidden border border-border/40 shadow-2xl bg-card">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
                  <Image
                    src="https://harmless-tapir-303.convex.cloud/api/storage/9a35e636-a4eb-419e-ba2b-edb716eef88b"
                    alt="Dr. Patangrao Kadam"
                    fill
                    className="object-cover object-top hover:scale-102 transition-transform duration-500"
                    priority
                    sizes="(max-w-768px) 100vw, 320px"
                  />
                </div>
                <div className="p-5 bg-card border-t border-border/40 text-center">
                  <p className="text-[9px] font-black uppercase text-primary tracking-widest mb-0.5">Visionary Founder</p>
                  <h4 className="text-lg font-black text-foreground">Dr. Patangrao Kadam</h4>
                  <p className="text-[10px] text-muted-foreground font-bold italic mt-0.5">Founder, Bharati Vidyapeeth</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}