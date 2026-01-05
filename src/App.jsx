import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, ChevronRight, Sparkles } from 'lucide-react';
import './App.css';

function App() {
  const [activeProject, setActiveProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "VitalEat",
      subtitle: "AI-Powered Food Intolerance Tracker",
      description: "An intelligent nutrition companion that helps identify food intolerances through seamless intake tracking. Built to analyze patterns at the molecular level, it learns your body's responses to different foods, stress levels, and sleep patterns. Uses AI to predict and prevent adverse reactions while coaching you towards optimal nutrition.",
      tags: ["AI/ML", "Health Tech", "React Native", "Voice Interface"],
      url: "https://stephaneritty-del.vercel.app",
      status: "In Active Development",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      id: 2,
      title: "WineCard Selector",
      subtitle: "Your Pocket Sommelier",
      description: "Snap a photo of any wine card or bottle, and instantly access comprehensive wine information scraped from across the internet. Perfect for restaurant dining or wine shopping. Future releases will include intelligent food pairing recommendations to elevate your dining experience.",
      tags: ["Computer Vision", "Web Scraping", "React", "API Integration"],
      url: "https://winecardselctor.vercel.app",
      status: "Live Beta",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      title: "MissionMot",
      subtitle: "Social Dinner Game",
      description: "A playful party game where each player assumes a character and must cleverly guide others to say rare, assigned words during dinner conversations. Created by popular demand from friends seeking memorable evening entertainment. Designed for laughter and creative social interaction.",
      tags: ["Game Design", "Social", "React", "Real-time"],
      url: "https://missionmot.vercel.app",
      status: "Live",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section className={`hero ${isVisible ? 'visible' : ''}`}>
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>Available for Collaboration</span>
          </div>
          
          <h1 className="hero-title">
            <span className="gradient-text">Stephane Ritty</span>
          </h1>
          
          <p className="hero-subtitle">
            Product & PMO Leader
          </p>
          
          <p className="hero-description">
            Building intelligent experiences at the intersection of AI, health tech, and user-centered design. 
            Transforming complex problems into elegant solutions.
          </p>

          <div className="hero-cta">
            <a href="mailto:stephane.ritty@gmail.com" className="btn btn-primary">
              <Mail size={20} />
              Get in Touch
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Projects
              <ChevronRight size={20} />
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/stephaneritty-del" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/stephane-ritty" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card card-1"></div>
          <div className="floating-card card-2"></div>
          <div className="floating-card card-3"></div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>Interactive demos of live applications</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${activeProject === index ? 'active' : ''}`}
              onClick={() => setActiveProject(index)}
            >
              <div className="project-header">
                <div className={`project-icon bg-gradient-to-br ${project.gradient}`}>
                  {project.title.charAt(0)}
                </div>
                <div className="project-title-group">
                  <h3>{project.title}</h3>
                  <span className="project-subtitle">{project.subtitle}</span>
                </div>
                <span className={`status-badge ${project.status === 'Live' ? 'live' : project.status === 'Live Beta' ? 'beta' : 'dev'}`}>
                  {project.status}
                </span>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>

              <div className="project-actions">
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  Launch App
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Live Demo Preview */}
        <div className="demo-preview">
          <div className="demo-header">
            <h3>Live Demo: {projects[activeProject].title}</h3>
            <a 
              href={projects[activeProject].url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="demo-expand"
            >
              Open in new tab
              <ExternalLink size={16} />
            </a>
          </div>
          <div className="demo-frame">
            <iframe
              src={projects[activeProject].url}
              title={projects[activeProject].title}
              className="project-iframe"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-content">
          <h2>Let's Build Something Amazing</h2>
          <p>
            Interested in collaboration, discussing product strategy, or exploring innovative solutions? 
            I'd love to hear from you.
          </p>
          <a href="mailto:stephane.ritty@gmail.com" className="contact-email">
            stephane.ritty@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Stephane Ritty. Crafted with purpose and precision.</p>
      </footer>
    </div>
  );
}

export default App;
