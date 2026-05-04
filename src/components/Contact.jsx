import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/3cb4b287a76f60312bf28a51cf877903", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: "New Message from Portfolio Visitor!"
        })
      });
      
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('Failed to send message. Please try again.');
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-center mb-12 w-full">
          <span className="text-[var(--color-accent-1)] font-bold text-sm tracking-widest uppercase mb-2"></span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-text-main)] tracking-tight">
            Get In Touch
          </h2>
        </div>
        
        <p className="text-[var(--color-text-muted)] font-medium text-lg mb-12 max-w-2xl mx-auto">
          My inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="bg-[var(--color-surface)] p-8 rounded-3xl border border-[var(--color-border)] shadow-md text-left max-w-2xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent-2)] rounded-full filter blur-[64px] opacity-10"></div>
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-[var(--color-text-main)] mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-accent-1)] focus:ring-2 focus:ring-[var(--color-accent-1)]/20 transition-all shadow-sm"
                placeholder="your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-[var(--color-text-main)] mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-accent-1)] focus:ring-2 focus:ring-[var(--color-accent-1)]/20 transition-all shadow-sm"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-[var(--color-text-main)] mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-white border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-accent-1)] focus:ring-2 focus:ring-[var(--color-accent-1)]/20 transition-all shadow-sm resize-none"
                placeholder="Write Here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[var(--color-accent-1)] text-white hover:bg-[#005bb5] font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-md"
            >
              Send Message
            </button>
            {status && <p className="text-center text-[var(--color-accent-2)] font-medium mt-4">{status}</p>}
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
