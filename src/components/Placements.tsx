"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { TrendingUp, Award, Building2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

function CountUp({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endValue = end;
    if (start === endValue) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.abs(Math.floor(totalMiliseconds / endValue));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= endValue) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

export default function Placements() {
  const stats = [
    {
      icon: TrendingUp,
      number: 9,
      suffix: " LPA",
      label: "Highest Salary Package",
      description: "Offered on-campus",
      highlight: true
    },
    {
      icon: Award,
      number: 4.5,
      suffix: " LPA",
      label: "Average Salary Package",
      description: "Offered on-campus",
      highlight: false
    },
    {
      icon: Building2,
      number: 47,
      suffix: "+",
      label: "Companies Visited",
      description: "Active corporate partners",
      highlight: false
    }
  ];

  const companyLogos = [
    "https://harmless-tapir-303.convex.cloud/api/storage/8355377a-f356-4a02-83dd-1cb6b4038f23",
    "https://harmless-tapir-303.convex.cloud/api/storage/635b8350-7422-44d6-9d35-5fb8fb02cafd",
    "https://harmless-tapir-303.convex.cloud/api/storage/34c864a0-d4be-4831-afa6-a9726103811b",
    "https://harmless-tapir-303.convex.cloud/api/storage/3dfd0b6f-c953-4deb-b03e-34bccc342831",
    "https://harmless-tapir-303.convex.cloud/api/storage/6235a095-3a80-45fe-8a9c-d82fe1cb9b5e",
    "https://harmless-tapir-303.convex.cloud/api/storage/72eeee92-6aed-4f2f-84ec-cbd9bd147d12",
    "https://harmless-tapir-303.convex.cloud/api/storage/5ce9ae7d-4cb3-4ac3-b2c4-78a1edeb45ab",
    "https://harmless-tapir-303.convex.cloud/api/storage/7b6e455e-b116-4367-9ae4-cd4ba129aec9",
    "https://harmless-tapir-303.convex.cloud/api/storage/b05f2886-923a-40ab-bf22-5e72229459fe",
    "https://harmless-tapir-303.convex.cloud/api/storage/2d967117-5e83-4a26-b9b4-8724f35df734",
    "https://harmless-tapir-303.convex.cloud/api/storage/9b5c70b3-3ace-43e9-bc43-fafb9a4d0f88"
  ];

  return (
    <section id="placements" className="py-16 bg-background transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Block */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 gap-8 border-b border-border/20 pb-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black tracking-[0.2em] uppercase text-xs mb-3 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Career Development & Placements
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-black text-foreground tracking-tight mb-4"
            >
              Fostering Global <span className="text-primary italic font-serif">Outcomes</span>
            </motion.h2>
            <p className="text-sm text-muted-foreground font-medium leading-relaxed max-w-2xl">
              BVIMIT’s Career Development & Placement Cell operates as a dedicated interface with the IT industry, offering rigorous pre-placement preparation, internships, and dynamic recruiting drives to launch successful student careers.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#FFCC00]/10 text-primary dark:text-[#FFD700] text-[10px] font-black uppercase tracking-[0.2em] rounded-md border border-[#FFCC00]/25 shadow-sm">
              25 Years of Placement Excellence
            </div>
          </div>
        </div>

        {/* VJTI-Style Side-by-Side Statistics and Recruiter Network */}
        <div className="mb-12">
          <div className="inline-block relative mb-8">
            <h3 className="text-2xl font-black text-foreground relative z-10 uppercase tracking-wider">Top Recruiters @ BVIMIT</h3>
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#FFCC00]/40 -rotate-1 rounded-full z-0" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column (lg:col-span-5): 3 key statistics grid */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`p-5 rounded-lg border transition-all duration-300 flex flex-col justify-between h-36 bg-card border-border/40 ${
                    stat.highlight ? "border-[#FFCC00] shadow-sm shadow-[#FFCC00]/5 ring-1 ring-[#FFCC00]/10" : "hover:border-primary/20 shadow-sm"
                  }`}
                >
                  <div>
                    <div className={`mb-2 inline-block p-2 rounded-lg ${
                      stat.highlight ? "bg-[#FFCC00]/10 text-[#FFCC00]" : "bg-primary/10 text-primary"
                    }`}>
                      <stat.icon className="h-4 w-4" />
                    </div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground leading-none mb-1">
                      {stat.label}
                    </h4>
                    <p className="text-[9px] text-muted-foreground/80 font-bold leading-none">{stat.description}</p>
                  </div>
                  <div className={`text-2xl font-black tracking-tight ${stat.highlight ? "text-[#FFCC00]" : "text-foreground"}`}>
                    <CountUp end={stat.number} suffix={stat.suffix} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column (lg:col-span-7): Recruiter logo grid (Transparent, no cards, no borders, no boxes) */}
            <div className="lg:col-span-7 grid grid-cols-3 sm:grid-cols-4 gap-6 md:gap-8 justify-items-center">
              {companyLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08 }}
                  className="w-full h-16 flex items-center justify-center p-2 transition-transform duration-300 cursor-pointer"
                >
                  <img
                    src={logo}
                    alt={`Recruiter logo ${index + 1}`}
                    className="max-h-8 max-w-[90%] object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="text-center pt-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 h-12 font-black uppercase tracking-widest text-[10px] shadow-lg">
              <a href="/placements">Placement Office Portal</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 font-black uppercase tracking-widest text-[10px]">
              <a href="/legacy/pdfs/FRA-2025-2026.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-primary" />
                Download Brochure
              </a>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}