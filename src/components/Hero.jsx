import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Hero = () => {
  const { name, tagline, intro, resumeLink } = portfolioData.personal;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--color-accent-1)] rounded-full filter blur-[128px] opacity-[0.15] animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[var(--color-accent-2)] rounded-full filter blur-[128px] opacity-[0.15] animate-blob animation-delay-2000"></div>

      <div className="max-w-4xl mx-auto text-center z-10 relative">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[var(--color-accent-1)] font-medium mb-4 text-lg tracking-wide uppercase"
        >
          you are welcome!
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-[var(--color-text-main)] mb-6 tracking-tight"
        >
          {name}
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold text-[var(--color-text-muted)] mb-6"
        >
          {tagline}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {intro}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer group flex items-center gap-2 bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-500/30 transition-transform hover:-translate-y-1"
          >
            View Projects
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white border-2 border-[var(--color-border)] hover:border-[var(--color-accent-1)] text-[var(--color-text-main)] px-8 py-4 rounded-full font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            <FiDownload />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
