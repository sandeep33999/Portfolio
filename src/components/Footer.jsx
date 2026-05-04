import { portfolioData } from '../data/portfolioData';
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const { email, linkedin, github, instagram } = portfolioData.personal;

  return (
    <footer className="py-12 text-center border-t border-[var(--color-border)] mt-20 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex justify-center gap-8 mb-8">
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-[#333333] hover:text-[var(--color-accent-1)] hover:scale-110 transition-all transform duration-300">
            <FiGithub size={26} />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-[#0077b5] hover:text-[var(--color-accent-1)] hover:scale-110 transition-all transform duration-300">
            <FiLinkedin size={26} />
          </a>
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-[#e1306c] hover:text-[var(--color-accent-1)] hover:scale-110 transition-all transform duration-300">
              <FiInstagram size={26} />
            </a>
          )}
          <a href={`mailto:${email}`} className="text-[#ea4335] hover:text-[var(--color-accent-1)] hover:scale-110 transition-all transform duration-300">
            <FiMail size={26} />
          </a>
        </div>
        
        <p className="text-[var(--color-text-main)] font-medium text-sm mb-2">
          Designed & Built by {portfolioData.personal.name}
        </p>
        <p className="text-[var(--color-text-muted)] text-xs">
          All rights reserved © {new Date().getFullYear()}. <i style={{color: "var(--color-accent-1)"}}>Live & Let Live...</i>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
