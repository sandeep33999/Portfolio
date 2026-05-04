import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-start mb-16 w-full">
          <span className="text-[var(--color-accent-1)] font-bold text-sm tracking-widest uppercase mb-2">Career</span>
          <div className="flex items-center gap-4 w-full">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-text-main)] tracking-tight">
              Experience
            </h2>
            <div className="h-[2px] bg-gradient-to-r from-[var(--color-accent-1)]/40 to-transparent flex-grow max-w-md ml-4"></div>
          </div>
        </div>

        <div>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--color-border)] before:to-transparent">
            {experience.map((exp, index) => (
              <div key={exp.id} className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[var(--color-accent-1)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-white font-bold text-sm">
                  {index + 1}
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-accent-1)] transition-colors shadow-sm hover:shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-xl text-[var(--color-text-main)]">{exp.role}</h4>
                  </div>
                  <div className="text-[var(--color-accent-1)] font-bold text-sm mb-4 tracking-wide uppercase">
                    {exp.company} | {exp.duration}
                  </div>
                  <p className="text-[var(--color-text-muted)] text-base mb-6 font-medium leading-relaxed">{exp.description}</p>
                  <ul className="space-y-3 text-sm text-[var(--color-text-main)] font-medium">
                    {exp.achievements.map((achieve, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[var(--color-accent-1)] mt-1 font-bold">▸</span> 
                        <span className="leading-relaxed">{achieve}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
