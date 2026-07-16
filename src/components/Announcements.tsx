"use client";

import { motion } from "framer-motion";
import { Calendar, ExternalLink, FileText, Bell, Award, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { documentAssetPaths } from "@/data/publicAssetMap";

export default function Announcements() {
  const announcements = [
    {
      title: "MCA First Year Fee Structure for Academic year 2025-2026!",
      date: "January 2025",
      type: "Fee Structure",
      urgent: true,
      link: documentAssetPaths.feeStructureFirstYearAy2025_2026
    },
    {
      title: "MCA Brochure 2025-26 Available",
      date: "January 2025",
      type: "Information",
      urgent: false,
      link: documentAssetPaths.mcaBrochure2025
    },
    {
      title: "Scholarships Details 2025-2026",
      date: "January 2025",
      type: "Scholarship",
      urgent: false,
      link: documentAssetPaths.scholarshipDocuments2025_2026
    },
    {
      title: "Industrial Visit to RedHat Bengaluru",
      date: "December 2024",
      type: "Event",
      urgent: false,
      link: "#"
    },
    {
      title: "International Conference ICET 2024",
      date: "June 2024",
      type: "Conference",
      urgent: false,
      link: "#"
    }
  ];

  const quickResources = [
    { label: "Anti Ragging Committee Notification", link: "/pdf/Anti Raggin Committee.pdf", icon: FileText },
    { label: "PhD Computer Application Advt", link: "/pdf/Ph.D.-Advt.-for-2025-26_BVIMIT (2).pdf", icon: Award },
    { label: "Provisional Merit List 2025-26", link: "/pdf/Provisnal Marit List 2025-26.pdf", icon: FileText },
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      "Admission": "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20",
      "Fee Structure": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20",
      "Information": "bg-green-500/10 text-[#000888] dark:text-blue-400 border border-[#000888]/20",
      "Scholarship": "bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20",
      "Event": "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20",
      "Conference": "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20"
    };
    return colors[type as keyof typeof colors] || "bg-slate-500/10 text-slate-600 dark:text-slate-400 border border-slate-500/20";
  };

  return (
    <section id="announcements" className="py-24 bg-background transition-colors duration-300 border-b border-border/30">
      <style>{`
        @keyframes marquee-vertical-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .vertical-marquee-list {
          animation: marquee-vertical-scroll 24s linear infinite;
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black tracking-[0.2em] uppercase text-xs mb-4"
            >
              Institutional Pulse
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-foreground tracking-tight"
            >
              Latest <span className="text-primary italic font-serif">Updates</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-4"
          >
            <Button variant="outline" className="rounded-full font-bold">Archives</Button>
            <Button className="rounded-full font-bold shadow-lg shadow-primary/20">Newsletter</Button>
          </motion.div>
        </div>

        {/* Board Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Vertical Auto-Scroll Ticker */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="h-[460px] overflow-hidden relative border border-border/40 rounded-3xl bg-card/50 backdrop-blur-sm p-2 shadow-inner">
              
              {/* Fade masks */}
              <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-card to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-card to-transparent z-10 pointer-events-none" />

              <div className="vertical-marquee-list flex flex-col gap-4 py-6 hover:[animation-play-state:paused]">
                {/* Render items twice to support loop wrap */}
                {[...announcements, ...announcements].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target={item.link.startsWith('http') || item.link.endsWith('.pdf') ? "_blank" : undefined}
                    rel={item.link.startsWith('http') || item.link.endsWith('.pdf') ? "noopener noreferrer" : undefined}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 bg-card hover:bg-muted/40 rounded-2xl border border-border/20 transition-all duration-300 hover:shadow-md cursor-pointer group mx-4"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="p-3 rounded-xl bg-primary/5 text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                        <Bell className="h-4 w-4" />
                      </div>
                      <div className="space-y-1.5">
                        <span className={`px-2.5 py-0.5 rounded text-[8px] font-black uppercase tracking-widest ${getTypeColor(item.type)}`}>
                          {item.type}
                        </span>
                        <h4 className="text-sm md:text-base font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between md:justify-end gap-6 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-border/10">
                      <div className="flex items-center text-muted-foreground text-xs font-semibold">
                        <Calendar className="h-3.5 w-3.5 mr-1.5 text-primary" />
                        {item.date}
                      </div>
                      <ExternalLink className="h-4 w-4 text-primary opacity-60 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                    </div>
                  </a>
                ))}
              </div>

            </div>
          </div>

          {/* Right Column: Static Quick Resources Board */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="h-full flex flex-col justify-between p-8 bg-card border border-border/40 rounded-3xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFCC00]/5 rounded-full -mr-16 -mt-16 pointer-events-none" />
              
              <div className="space-y-6">
                <div className="flex items-center gap-2 pb-4 border-b border-border/20">
                  <LinkIcon className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-black text-foreground uppercase tracking-wider">Quick Resources</h3>
                </div>
                
                <div className="flex flex-col gap-4">
                  {quickResources.map((res, index) => (
                    <a
                      key={index}
                      href={res.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 hover:bg-muted/40 rounded-2xl border border-transparent hover:border-border/20 transition-all group"
                    >
                      <div className="p-2.5 bg-primary/5 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors mt-0.5">
                        <res.icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                          {res.label}
                        </h4>
                        <span className="text-[9px] font-black uppercase text-primary/70 tracking-widest mt-1 block">Download PDF</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/20">
                <Button asChild className="w-full rounded-2xl py-6 font-bold text-xs uppercase tracking-widest shadow-md">
                  <a href="/students/important-links">All Resources</a>
                </Button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
