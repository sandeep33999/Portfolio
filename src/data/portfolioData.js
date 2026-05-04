import resumePdf from '../assets/sandeep__Machine_learning_CV.pdf';
import profilePic from '../assets/IMG_20260504_061737.jpg';

import ecom1 from '../assets/e-commerce_data/Pasted image.png';
import ecom2 from '../assets/e-commerce_data/Pasted image (2).png';
import ecom3 from '../assets/e-commerce_data/Pasted image (3).png';
import ecom4 from '../assets/e-commerce_data/Pasted image (4).png';
import ecom5 from '../assets/e-commerce_data/Pasted image (5).png';
import ecom6 from '../assets/e-commerce_data/Pasted image (6).png';
import ecom7 from '../assets/e-commerce_data/Pasted image (7).png';
import ecom8 from '../assets/e-commerce_data/Pasted image (8).png';
import ecom9 from '../assets/e-commerce_data/Pasted image (9).png';

import ml1 from '../assets/ML/Pasted image.png';
import ml2 from '../assets/ML/Pasted image (2).png';

export const portfolioData = {
  personal: {
    name: "Sandeep Prasad Gond",
    tagline: "Software Developer | ML Enthusiast | Problem Solver",
    intro: "I build efficient software solutions and AI-based applications with clean code and strong fundamentals.",
    about: "I am Sandeep, a third-year student pursuing a BS in Physics with Specialization at Indian Institute of Technology Jodhpur (IIT Jodhpur), India. I am passionate about building scalable software systems and solving real-world problems using Ai/ML, DSA, and Python. My interests span from Machine Learning & Full-stack web development As well Scientific Computation using Quantum Computing",
    email: "sandeep7379025@gmail.com",
    linkedin: "https://www.linkedin.com/in/sandeep-prasad-gond-2393b228a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    github: "https://github.com/sandeep33999",
    instagram: "https://instagram.com/",
    resumeLink: resumePdf,
    profilePic: profilePic
  },
  skills: {
    programming: ["C", "C++", "Python", "JavaScript"],
    web: ["HTML", "CSS", "React", "Tailwind"],
    tools: ["Git", "GitHub", "Linux", "VS Code"],
    ml: ["Scikit-learn", "NumPy", "Pandas", "Matplotlib"],
    others: ["Geant4", "Pythia","libRadtran"]
  },
  projects: [
    {
      id: 1,
      title: "QR Payment System with Timeout",
      description: "A secure QR-based payment system that implements timeout validation to prevent replay attacks.",
      tech: ["Python", "Flask", "Cryptography"],
      github: "https://github.com/sandeepusername/qr-payment",
      live: "",
      report: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600",
      features: [
        "Dynamic QR code generation",
        "Transaction timeout handling",
        "Secure token validation"
      ]
    },
    {
      id: 2,
      title: "Earthquake Detector",
      description: "An IoT-based early warning system for earthquakes using Arduino and NodeMCU.",
      tech: ["Arduino", "NodeMCU", "Blynk", "C++"],
      github: "https://github.com/sandeepusername/earthquake-detector",
      live: "",
      report: "#",
      image: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?auto=format&fit=crop&q=80&w=600",
      features: [
        "Real-time seismic activity monitoring",
        "Mobile alerts via Blynk App",
        "Low latency sensor reading"
      ]
    },
    {
      id: 3,
      title: "ML Models from Scratch",
      description: "Implementations of Logistic Regression and PCA from scratch without using high-level ML libraries.",
      tech: ["Python", "NumPy", "Matplotlib"],
      github: "https://github.com/sandeepusername/ml-from-scratch",
      live: "",
      report: "#",
      image: [ml1,ml2],
      features: [
        "Custom gradient descent implementation",
        "Data visualization and dimensionality reduction",
        "Comparative analysis with Scikit-learn models"
      ]
    },
    {
      id: 4,
      title: "E-commerce platform",
      description: "A complete end to end e-commerce platform, with all the features of a normal e-commerce website.",
      tech: ["C++","MySQL", "JavaScript","Python", "HTML", "CSS"],
      github: "https://github.com/sandeepusername/cpp-shopping",
      live: "",
      report: "#",
      image: [ecom1, ecom2, ecom3, ecom4, ecom5, ecom6, ecom7, ecom8, ecom9],
      features: [
        "Inventory management",
        "User authentication",
        "Billing and invoice generation",
        "Product selling and revenue tracking",
        "real time sync"
      ]
    }
  ],
  experience: [
    {
      id: 1,
      role: "Research Intern / Student Researcher",
      company: "IIT Jodhpur",
      duration: "May 2023 - Present",
      description: "Radiative Transfer Simulation",
      achievements: [
        "Implemented Monte Carlo photon transport simulation.",
        "Improved visualization pipeline for experimental comparison.",
        "Worked with libRadtran and atmospheric models."
      ]
    }
  ],
  achievements: [
    {
      id: 1,
      title: "Hackathon Winner - Smart India Hackathon",
      description: "Built a hardware-software integrated solution for smart cities."
    },
    {
      id: 2,
      title: "NPTEL Certification in Machine Learning",
      description: "Completed with Elite certification."
    }
  ]
};
