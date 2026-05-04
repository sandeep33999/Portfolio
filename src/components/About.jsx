import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { about } = portfolioData.personal;

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-start mb-12 w-full">
          <span className="text-[var(--color-accent-1)] font-bold text-sm tracking-widest uppercase mb-2">Discover</span>
          <div className="flex items-center gap-4 w-full">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-text-main)] tracking-tight">
              About Me
            </h2>
            <div className="h-[2px] bg-gradient-to-r from-[var(--color-accent-1)]/40 to-transparent flex-grow max-w-md ml-4"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2 text-[var(--color-text-muted)] text-lg leading-relaxed space-y-6">
            <p>{about}</p>
            <p>
              My journey started with a deep curiosity for how complex systems operate, leading me to explore both low-level programming with C/C++ and modern web development.
            </p>
            <p>
              Currently, I'm focusing on building scalable software architectures and diving deeper into machine learning models And LLMs.
            </p>
          </div>
          
          <div className="relative group">
            {/* Profile Photo */}
            <div className="w-full max-w-sm mx-auto aspect-square rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] relative z-10 overflow-hidden transition-all duration-300 shadow-md group-hover:shadow-xl group-hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-accent-1)]/10 to-[var(--color-accent-2)]/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-300"></div>
              <img 
                src={portfolioData.personal.profilePic} 
                alt={portfolioData.personal.name}
                className="w-full h-full object-cover filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute inset-0 w-full max-w-sm mx-auto aspect-square rounded-3xl border border-[var(--color-accent-1)] translate-x-4 translate-y-4 -z-10 transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6 opacity-30"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
