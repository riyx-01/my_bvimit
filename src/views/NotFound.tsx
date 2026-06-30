import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-24 md:py-32"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-5xl mx-auto relative px-4 text-center">
          <div className="flex items-center justify-center min-h-[200px]">
            <div>
              <h1 className="text-6xl font-black text-foreground mb-6 uppercase tracking-tighter">404 <span className="text-primary">Error</span></h1>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-foreground font-bold mb-4">The page you are looking for does not exist or has been moved.</p>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                At Bharati Vidyapeeth Institute of Management and Information Technology (BVIMIT), we are constantly updating our digital portal to bring you the best academic resources, latest event details, and institutional news. If you followed a legacy link, the information might have been reorganized.
              </p>
              <div className="flex items-center justify-center gap-4">
                <a href="/" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-xl font-bold transition-all shadow-sm">
                  Return to Homepage
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
