"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Events() {
  const events = [
    {
      id: 1,
      image: "/images/events/cyber.PNG",
      title: "Vision 2026: National IT Symposium",
      date: "15 MAR",
      category: "CONFERENCE",
      description: "A flagship technical symposium bringing together industry leaders and students to discuss the future of AI and Cloud Computing."
    },
    {
      id: 2,
      image: "/images/events/p10.PNG", 
      title: "Full-Stack Development Workshop",
      date: "22 APR",
      category: "WORKSHOP",
      description: "Intensive 3-day workshop focusing on modern web architectures using Next.js, TypeScript, and distributed systems."
    },
    {
      id: 3,
      image: "/images/events/digi.jpeg",
      title: "Research Colloquium",
      date: "10 MAY",
      category: "ACADEMIC",
      description: "Annual gathering of researchers and faculty to present institutional progress and collaborative research opportunities."
    },
    {
      id: 4,
      image: "/images/events/expert.PNG",
      title: "Internal Hackathon (SIH 2026)",
      date: "18 JAN",
      category: "COMPETITION",
      description: "A 24-hour coding hackathon encouraging students to develop innovative solutions for real-world problem statements."
    },
    {
      id: 5,
      image: "/images/events/paper.PNG",
      title: "Annual Cultural Festival: Manthan",
      date: "05 FEB",
      category: "CULTURAL",
      description: "A week-long celebration of sports, creativity, and visual performances showcasing the diverse talents of our students."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      return;
    }

    autoplayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % events.length);
    }, 6000);

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isPaused, events.length]);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);

    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 10000); // Resume autoplay after 10 seconds of user inactivity
  };

  const featuredEvent = events[activeIndex];

  return (
    <section id="events" className="py-16 bg-muted/30 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Title Block */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-border/20 pb-6">
          <div className="max-w-2xl">
            <div className="text-primary font-black tracking-[0.2em] uppercase text-xs mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Campus Life & News
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">
              Institutional <span className="text-primary italic font-serif">Events</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm font-medium max-w-md md:text-right leading-relaxed">
            Fostering a vibrant academic ecosystem through high-impact technical and cultural events.
          </p>
        </header>

        {/* Editorial Magazine Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Flagship Featured Event Showcase (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col min-h-[480px] relative">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col bg-card border border-border/40 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group flex-1"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                  <Image 
                    src={featuredEvent.image} 
                    alt={featuredEvent.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-103 brightness-[0.9]" 
                    sizes="(max-w-1024px) 100vw, 800px"
                  />
                  {/* Overlay Date stamp */}
                  <div className="absolute top-6 left-6 bg-background/95 dark:bg-[#060B18]/95 backdrop-blur-md border border-white/10 px-4 py-3 rounded-xl shadow-xl flex flex-col items-center justify-center min-w-[60px]">
                    <time className="flex flex-col items-center">
                      <span className="text-xl font-black text-primary leading-none">{featuredEvent.date.split(' ')[0]}</span>
                      <span className="text-[9px] font-black uppercase text-muted-foreground mt-1">{featuredEvent.date.split(' ')[1]}</span>
                    </time>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <span className="inline-block px-3.5 py-1 bg-primary/10 text-primary text-[9px] font-black uppercase tracking-widest rounded-full mb-3">
                      {featuredEvent.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-foreground tracking-tight leading-snug mb-3">
                      {featuredEvent.title}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm font-semibold leading-relaxed mb-4 line-clamp-3">
                      {featuredEvent.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/20 mt-auto">
                    <div className="flex items-center text-[9px] font-black text-muted-foreground uppercase tracking-widest">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      Belapur Campus
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary font-black uppercase tracking-widest text-[10px] hover:bg-transparent p-0 group/btn h-auto flex items-center gap-1.5">
                      Read Details
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Right Column: Stacked Supporting News List (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-3">
              {events.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <article 
                    key={item.id} 
                    onClick={() => handleSelect(idx)}
                    className={`flex items-start gap-4 p-3 rounded-lg border transition-all duration-300 group/row cursor-pointer ${
                      isActive 
                        ? "bg-primary/5 dark:bg-primary/10 border-primary pl-4" 
                        : "bg-transparent border-transparent hover:bg-muted/40"
                    }`}
                  >
                    {/* Thumbnail Frame */}
                    <div className="relative w-24 h-16 rounded-md overflow-hidden shrink-0 bg-muted border border-border/30">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        loading="lazy"
                        className="object-cover transition-transform duration-500 group-hover/row:scale-105"
                        sizes="96px"
                      />
                    </div>

                    {/* Thumbnail text contents */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${
                          isActive ? "bg-primary text-white" : "bg-primary/10 text-primary"
                        }`}>
                          {item.category}
                        </span>
                        <span className="text-[9px] font-bold text-muted-foreground uppercase">
                          {item.date}
                        </span>
                      </div>
                      <h4 className={`font-black text-xs leading-snug tracking-tight mb-0.5 transition-colors line-clamp-1 ${
                        isActive ? "text-primary" : "text-foreground group-hover/row:text-primary"
                      }`}>
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-muted-foreground font-semibold leading-relaxed line-clamp-1">
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Academic Calendar CTA */}
            <div className="pt-4 border-t border-border/20 lg:pt-0 lg:border-0 flex justify-center lg:justify-start">
              <Button size="sm" variant="outline" className="rounded-full px-8 border-primary/20 text-primary hover:bg-primary/5 font-black uppercase tracking-widest text-[9px] h-11">
                View Academic Calendar
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}