import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const SkillCard = ({ title, skills, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-[var(--color-surface)] p-6 rounded-3xl border border-[var(--color-border)] hover:border-[var(--color-accent-1)] transition-colors duration-300 shadow-sm hover:shadow-md"
  >
    <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-4 flex items-center gap-2">
      <span className="text-[var(--color-accent-2)]">▹</span> {title}
    </h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <span 
          key={index}
          className="px-4 py-2 bg-white text-gray-700 rounded-xl text-sm font-medium border border-[var(--color-border)] hover:text-[var(--color-accent-1)] hover:border-[var(--color-accent-1)] transition-colors cursor-default shadow-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const { programming, web, tools, ml, others } = portfolioData.skills;

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-start mb-12 w-full">
          <span className="text-[var(--color-accent-1)] font-bold text-sm tracking-widest uppercase mb-2">Expertise</span>
          <div className="flex items-center gap-4 w-full">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-text-main)] tracking-tight">
              Technical Skills
            </h2>
            <div className="h-[2px] bg-gradient-to-r from-[var(--color-accent-1)]/40 to-transparent flex-grow max-w-md ml-4"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard title="Programming Languages" skills={programming} delay={0.1} />
          <SkillCard title="Web Development" skills={web} delay={0.2} />
          <SkillCard title="ML & Data Science" skills={ml} delay={0.3} />
          <SkillCard title="Tools & Platforms" skills={tools} delay={0.4} />
          <SkillCard title="Scientific Tools" skills={others} delay={0.5} />
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
