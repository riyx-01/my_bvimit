"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const directory = [
    {
      icon: Phone,
      title: "Admissions Hub",
      value: "022 2757 1074 / 2757 2433",
      sub: "Available Mon - Sat, 9:00 AM - 5:00 PM"
    },
    {
      icon: Mail,
      title: "Official Email Address",
      value: "bvimit@bharatividyapeeth.edu",
      sub: "Submit admissions or administrative queries"
    },
    {
      icon: MapPin,
      title: "Campus Address",
      value: "Sector 8, C.B.D. Belapur, Navi Mumbai, 400614",
      sub: "Located adjacent to Belapur railway station"
    },
    {
      icon: MessageSquare,
      title: "Alumni Relations & Careers",
      value: "alumni.bvimit@edu.in",
      sub: "Connect with our placement & graduate cell"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-background transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black tracking-[0.2em] uppercase text-xs mb-3 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Get In Touch
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-black text-foreground tracking-tight"
            >
              Connect With <span className="text-primary italic font-serif">BVIMIT</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground font-bold text-sm max-w-md md:text-right leading-relaxed"
          >
            Reach out to our admissions team and administrative offices for enrollment assistance.
          </motion.p>
        </div>

        {/* 2-Column Main Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Typographic Borderless Contact List Directory */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-6 pr-4">
              {directory.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0 mt-0.5">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-black text-xs text-foreground uppercase tracking-wider mb-1">{item.title}</h4>
                    <p className="text-sm font-bold text-primary mb-1">{item.value}</p>
                    <p className="text-[11px] text-muted-foreground font-semibold">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Inline warning-style administrative notice box */}
            <div className="p-6 bg-primary/5 dark:bg-[#111A30]/40 rounded-lg border border-border/40 flex items-center gap-5">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-black text-foreground mb-0.5">Administrative Hours</h4>
                <p className="text-muted-foreground text-[11px] font-semibold leading-relaxed">
                  Open Monday to Saturday (9:00 AM - 5:00 PM). Visited for document verification and campus walks.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Sleek Inquiry Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-6 bg-card p-8 md:p-10 rounded-xl border border-border/40 shadow-xl"
          >
            <div className="mb-6">
              <h3 className="text-xl font-black text-foreground mb-1 tracking-tight">Inquiry Portal</h3>
              <p className="text-muted-foreground text-xs font-semibold">Please submit your details and our team will get back to you.</p>
            </div>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-muted/30 border border-border/40 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-semibold placeholder:opacity-40 text-xs"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-muted/30 border border-border/40 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-semibold placeholder:opacity-40 text-xs"
                    placeholder="name@email.com"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground ml-1">Subject</label>
                <select className="w-full bg-muted/30 border border-border/40 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-semibold text-xs text-foreground">
                  <option>Admissions Inquiry</option>
                  <option>Transcript / Documentation</option>
                  <option>Placements & HR</option>
                  <option>General Feedback</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                <textarea
                  rows={4}
                  required
                  className="w-full bg-muted/30 border border-border/40 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-semibold placeholder:opacity-40 resize-none text-xs"
                  placeholder="How can we help you today?"
                />
              </div>

              <Button size="lg" className="w-full rounded-md h-12 font-black uppercase tracking-widest text-[10px] shadow-md shadow-primary/10 group">
                Send Message
                <Send className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}