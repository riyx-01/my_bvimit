"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Welcome() {
  return (
    <section className="py-20 bg-background text-foreground transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Information & Silver Jubilee Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FFCC00]/10 text-primary dark:text-[#FFD700] text-[9px] font-black uppercase tracking-widest rounded-md border border-[#FFCC00]/25">
                Silver Jubilee Year • 2002-2027
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
                Welcome to <span className="text-primary italic font-serif">BVIMIT</span>
              </h2>
            </div>

            <p className="text-xl font-medium text-foreground/80 leading-relaxed">
              Celebrating 25 years of defining excellence in management and information technology education in Navi Mumbai.
            </p>

            <div className="space-y-6 text-base text-muted-foreground leading-relaxed font-medium">
              <p>
                Bharati Vidyapeeth’s Institute of Management & Information Technology (BVIMIT) was established in 2002 with a visionary mandate to nurture software engineers, systems analysts, and IT leaders. Over the past two and a half decades, we have continuously bridged the gap between cutting-edge technological innovations and academic foundations.
              </p>
              <p>
                Our state-of-the-art campus in Belapur, Navi Mumbai provides a learning ecosystem that merges intensive theoretical classes with hands-on lab projects, research capabilities, and corporate networking.
              </p>
            </div>

            <div className="pt-2">
              <Button asChild size="lg" className="rounded-full px-10 h-14 font-black uppercase tracking-widest text-xs shadow-lg shadow-primary/10 hover:shadow-xl transition-all">
                <Link href="/about">
                  Read More
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Campus Photograph */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-[#FFCC00]/10 rounded-[2rem] transform translate-x-4 translate-y-4 -z-10 dark:bg-[#FFD700]/5" />
            <div className="relative rounded-[2rem] overflow-hidden border border-border/40 shadow-2xl bg-card aspect-[4/3] w-full">
              <Image
                src="/assets/images/campusbanner.jpg"
                alt="BVIMIT Belapur Campus Building"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-w-1024px) 100vw, 40vw"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
