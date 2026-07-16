"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[95vh] md:min-h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-[#060B18] border-b border-border/10 transition-colors duration-300 pt-24 pb-48 md:pb-64">

      {/* Premium Tech Background: Grid pattern + radial gradient glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(0,8,136,0.25)_0%,_transparent_65%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,204,0,0.04)_0%,_transparent_45%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <motion.div
        className="relative z-30 text-center px-4 md:px-8 max-w-6xl mx-auto mb-12"
        style={{ opacity, y }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        {/* Silver Jubilee Crest / Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 bg-[#FFCC00]/10 text-[#FFCC00] text-[10px] font-black uppercase tracking-[0.25em] rounded-full border border-[#FFCC00]/25 mb-8 shadow-lg shadow-[#FFCC00]/5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00] animate-pulse" />
          Silver Jubilee Celebration • 25 Years
        </motion.div>

        <h2 className="text-4xl sm:text-6xl md:text-[5.5rem] font-black text-white mb-6 leading-[1.05] tracking-tight transition-colors duration-300">
          Excellence in <br />
          <span className="text-[#FFCC00] italic font-serif animate-subtle-glow bg-gradient-to-r from-[#FFCC00] via-yellow-200 to-[#FFCC00] bg-clip-text text-transparent">IT Education.</span>
        </h2>

        <p className="text-base sm:text-lg md:text-2xl text-slate-300 max-w-4xl mx-auto mb-10 font-medium leading-relaxed transition-colors duration-300">
          Bharati Vidyapeeth’s Institute of Management & Information Technology
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(0, 8, 136, 0.5)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#000888] text-white px-10 py-4 rounded-xl text-xs font-black tracking-widest uppercase shadow-2xl transition-all w-full sm:w-auto border border-[#3339A0]"
          >
            Academic Catalog
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-white/10 backdrop-blur-xl text-white border border-white/20 px-10 py-4 rounded-xl text-xs font-black tracking-widest uppercase shadow-2xl transition-all w-full sm:w-auto"
          >
            Admissions 2026
          </motion.button>
        </div>
      </motion.div>

      {/* Scroll Down Prompt */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: [0.4, 1, 0.4], y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-40 md:bottom-48 z-30 flex flex-col items-center gap-1.5 cursor-pointer text-white/40 hover:text-white transition-colors"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Explore</span>
        <ArrowDown className="w-4 h-4 text-slate-400" />
      </motion.div>

      {/* Structured Info Bar - Floating Glassmorphism Box */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-6 left-4 right-4 md:bottom-10 md:left-8 md:right-8 max-w-6xl xl:mx-auto bg-[#0B1224]/60 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl z-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { label: "Faculty Experts", val: "45+" },
            { label: "Successful Alumni", val: "5000+" },
            { label: "Avg CTC Package", val: "4.5 Lakhs" },
            { label: "Years of Legacy", val: "22+" }
          ].map((stat, i) => (
            <div key={i} className="text-center group border-r border-white/10 last:border-0 hover:bg-[#FFCC00]/5 transition-colors py-2 rounded-2xl">
              <motion.p 
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-black text-[#FFCC00] tracking-tighter mb-1"
              >
                {stat.val}
              </motion.p>
              <p className="text-[9px] md:text-xs font-black text-slate-300 uppercase tracking-widest leading-none group-hover:text-white transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}