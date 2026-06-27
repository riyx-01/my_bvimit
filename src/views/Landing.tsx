import { motion } from "framer-motion";
import { ArrowRight, FileText, Trophy, GraduationCap, Building } from "lucide-react";
import { documentAssetPaths } from "@/data/publicAssetMap";

export default function Landing() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-background text-foreground antialiased selection:bg-secondary selection:text-secondary-foreground overflow-x-hidden"
    >
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/60 z-10"></div>
        <img
          className="absolute inset-0 w-full h-full object-cover z-0"
          alt="Industrial Visit"
          src="https://harmless-tapir-303.convex.cloud/api/storage/9a35e636-a4eb-419e-ba2b-edb716eef88b"
        />
        <div className="relative z-20 text-center text-primary-foreground px-4 max-w-4xl mx-auto flex flex-col items-center gap-6">
          <h1 className="text-5xl md:text-[64px] md:leading-[72px] font-bold text-white drop-shadow-lg">
            BVIMIT Mumbai<br />
            <span className="text-secondary">Industrial Visit 2025</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl text-center">
            IOS Innotech Chandigarh - Shaping Future Leaders through rigorous academics and industry exposure.
          </p>
          <div className="flex gap-4 mt-4">
            <button className="bg-secondary text-secondary-foreground font-semibold px-8 py-3 rounded shadow-lg hover:bg-opacity-90 transition-all">
              Apply Now
            </button>
            <button className="border border-primary-foreground text-primary-foreground font-semibold px-8 py-3 rounded hover:bg-white/10 transition-all backdrop-blur-sm">
              Explore Campus
            </button>
          </div>
        </div>
      </section>

      {/* Welcome & Intro (Mapped to About Founder & Institution) */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Welcome to BVIMIT</h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Bharati Vidyapeeth is an institution planted in the year 1964 by our founder Dr. Patangrao Kadam. 
            During the last 59 years, Bharati Vidyapeeth has made astonishing strides in the field of education.
          </p>
          <p className="text-base md:text-lg text-muted-foreground italic border-l-4 border-primary pl-4 py-2">
            "I am indeed happy to welcome you to MCA. Bharati Vidyapeeth's Institute of Management & Information Technology, Navi Mumbai. We aim to form youth with creative abilities to face the corporate world."
          </p>
          <div>
            <button className="bg-primary text-primary-foreground font-semibold px-6 py-2 rounded mt-2 hover:bg-primary/90 transition-colors">
              Read more
            </button>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md border border-border">
          <img
            className="w-full h-full object-cover"
            alt="Founder Dr. Patangrao Kadam"
            src="https://harmless-tapir-303.convex.cloud/api/storage/9a35e636-a4eb-419e-ba2b-edb716eef88b"
          />
        </div>
      </section>

      {/* Latest Updates Grid (Mapped to Notifications & Placements) */}
      <section className="bg-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Notifications */}
            <div className="bg-card border border-border p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 flex flex-col gap-4">
              <div className="flex justify-between items-center border-b border-border pb-4">
                <h3 className="text-2xl font-bold text-primary">Notifications</h3>
                <FileText className="text-secondary w-6 h-6" />
              </div>
              <div className="flex flex-col gap-6 mt-4">
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-base font-bold text-foreground">MCA Latest Updates</h4>
                    <p className="text-sm text-muted-foreground mt-1">First Year MCA Admission 2024-25</p>
                    <a href="#" className="text-sm text-primary font-medium hover:underline mt-1 block">View Details <ArrowRight className="w-3 h-3 inline" /></a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-base font-bold text-foreground flex items-center gap-2">
                       MCA Brochure 2025-26 <span className="bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded-full">NEW</span>
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">Download the latest brochure for the upcoming academic year.</p>
                    <a href={documentAssetPaths.mcaBrochure2025} target="_blank" className="text-sm text-primary font-medium hover:underline mt-1 block">Download PDF <ArrowRight className="w-3 h-3 inline" /></a>
                  </div>
                </div>
              </div>
            </div>
            {/* Placements */}
            <div className="bg-card border border-border p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 flex flex-col gap-4">
              <div className="flex justify-between items-center border-b border-border pb-4">
                <h3 className="text-2xl font-bold text-primary">Placement Highlights</h3>
                <Building className="text-secondary w-6 h-6" />
              </div>
              <div className="flex flex-col gap-6 mt-4">
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-base font-bold text-foreground">Saint Gobain (Batch 2025)</h4>
                    <p className="text-sm text-muted-foreground mt-1">CTC - 4.5 LPA</p>
                    <p className="text-sm text-muted-foreground italic mt-1">Placed: Bhavik Deshmukh</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-base font-bold text-foreground">Batch 2024 Records</h4>
                    <p className="text-sm text-muted-foreground mt-1">Total 47 Companies Visited for Campus | Average CTC 4.5 LPA</p>
                    <a href="#" className="text-sm text-primary font-medium hover:underline mt-1 block">View Full List <ArrowRight className="w-3 h-3 inline" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Banner (Mapped to Vision & Mission Highlight) */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-20">
        <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-md flex items-center justify-center">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            alt="Campus Life"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9FuQqzRfEOoP4AGvqtjcOmj1fYKiC4pcjnCkT2SqK4SeGXzr4LTO9TBzLoK3olj8R5xh39QdQR_JBmQyQIIP3eaXovUSeMbPu3qBqOvQQnYNanqf_z5x1nDIZ6oYpOQbb-J107-fbmk7J9lg4IxLG5RL-tVym52E4h1x4R60aQ8G4Vh-3XQZVMx2GQZD3tU3MJcx0wJVxaokQ40q8vxAG2MXH80elcY_ghoHaD2DrRXoWm6HFVkYt9yRPvBKe73IOkGhvCdlueaAk"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
          <div className="relative z-10 text-center text-white p-6 max-w-2xl">
            <span className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full uppercase tracking-wider font-bold mb-4 inline-block">
              Vision & Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Social transformation through Dynamic Education</h2>
            <p className="text-base text-primary-foreground/80 mb-6">
              Preparing students for successful careers in IT by developing professionalism, ethical values, and holistic development.
            </p>
            <button className="border border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold px-6 py-2 rounded transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
