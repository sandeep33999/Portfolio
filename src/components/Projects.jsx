import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FiGithub, FiExternalLink, FiChevronRight, FiChevronLeft, FiFileText } from 'react-icons/fi';

const ImageCarousel = ({ images, altText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="w-full h-full relative overflow-hidden rounded-2xl shadow-md border border-[var(--color-border)] group-hover:shadow-xl transition-all duration-500 bg-[var(--color-surface)] group/carousel">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`${altText} slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}
      
      <button 
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white p-2 rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 transform group-hover/carousel:translate-x-0 -translate-x-4 flex items-center justify-center cursor-pointer focus:outline-none"
      >
        <FiChevronLeft size={28} />
      </button>

      <button 
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white p-2 rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 transform group-hover/carousel:translate-x-0 translate-x-4 flex items-center justify-center cursor-pointer focus:outline-none"
      >
        <FiChevronRight size={28} />
      </button>
    </div>
  );
};

const Projects = () => {
  const projects = portfolioData.projects;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-start mb-12 w-full">
          <span className="text-[var(--color-accent-1)] font-bold text-sm tracking-widest uppercase mb-2">Portfolio</span>
          <div className="flex items-center gap-4 w-full">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-text-main)] tracking-tight">
              Featured Projects
            </h2>
            <div className="h-[2px] bg-gradient-to-r from-[var(--color-accent-1)]/40 to-transparent flex-grow max-w-md ml-4"></div>
          </div>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-12 relative`}
            >
              {/* Mobile Title (visible only on small screens) */}
              <div className="w-full block lg:hidden text-left z-20">
                <p className="text-[var(--color-accent-2)] font-medium text-sm mb-2 uppercase tracking-wide">Featured Project</p>
                <h3 className="text-2xl font-bold text-[var(--color-text-main)] hover:text-[var(--color-accent-1)] transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Project Image */}
              <div className="w-full lg:w-3/5 relative group cursor-pointer aspect-video">
                <div className="absolute inset-0 bg-white/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-300 rounded-2xl z-20 pointer-events-none"></div>
                
                {Array.isArray(project.image) ? (
                  <ImageCarousel images={project.image} altText={project.title} />
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover rounded-2xl shadow-md border border-[var(--color-border)] filter group-hover:shadow-xl transition-all duration-500"
                  />
                )}
              </div>

              {/* Project Content */}
              <div className={`w-full lg:w-2/5 flex flex-col ${index % 2 !== 0 ? 'lg:items-start text-left' : 'lg:items-end lg:text-right'} z-20`}>
                <p className="hidden lg:block text-[var(--color-accent-2)] font-medium text-sm mb-2 uppercase tracking-wide">Featured Project</p>
                <h3 className="hidden lg:block text-3xl font-bold text-[var(--color-text-main)] mb-6 hover:text-[var(--color-accent-1)] transition-colors">
                  {project.title}
                </h3>
                
                <div className="bg-[var(--color-surface)] p-6 rounded-2xl shadow-sm border border-[var(--color-border)] mb-6 lg:-ml-12 lg:mr-0 z-20 hover:border-[var(--color-accent-1)] transition-colors w-full">
                  <p className="text-[var(--color-text-muted)] text-base leading-relaxed font-medium">
                    {project.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-[var(--color-text-main)] text-left">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 justify-start font-medium">
                        <span className="text-[var(--color-accent-1)] mt-0.5 font-bold">▸</span> 
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`flex flex-wrap gap-3 mb-6 text-sm font-bold ${index % 2 !== 0 ? 'justify-start' : 'lg:justify-end'}`}>
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] text-white px-4 py-1.5 rounded-full shadow-sm">{tech}</span>
                  ))}
                </div>

                <div className={`flex items-center gap-4 ${index % 2 !== 0 ? 'justify-start' : 'lg:justify-end'}`}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-[#24292e] text-white p-2.5 rounded-full shadow-sm hover:bg-[var(--color-accent-1)] hover:-translate-y-1 hover:shadow-md transition-all duration-300" title="Source Code">
                      <FiGithub size={22} />
                    </a>
                  )}
                  {project.report && (
                    <a href={project.report} target="_blank" rel="noopener noreferrer" className="bg-[#475569] text-white p-2.5 rounded-full shadow-sm hover:bg-[var(--color-accent-1)] hover:-translate-y-1 hover:shadow-md transition-all duration-300" title="Project Report / Document">
                      <FiFileText size={22} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-[#0071e3] text-white p-2.5 rounded-full shadow-sm hover:bg-[var(--color-accent-2)] hover:-translate-y-1 hover:shadow-md transition-all duration-300" title="Live Preview">
                      <FiExternalLink size={22} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
