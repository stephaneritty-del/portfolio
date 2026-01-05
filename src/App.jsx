import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, ChevronRight, Sparkles, Copy, Check } from 'lucide-react';
import './App.css';

function App() {
  const [activeProject, setActiveProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('stephane.ritty@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  // Scroll animation for Why I Build section - brick by brick construction
  useEffect(() => {
    const whySection = document.querySelector('.why-section');
    const brickWall = document.querySelector('.brick-wall');
    
    if (!whySection || !brickWall) return;

    // Create brick grid (10 columns x 8 rows = 80 bricks for fuller wall)
    const cols = 10;
    const rows = 8;
    const totalBricks = cols * rows;
    
    // Clear and create bricks
    brickWall.innerHTML = '';
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const brick = document.createElement('div');
        brick.className = 'brick';
        // Offset every other row for realistic brick pattern
        brick.style.left = `${(col * 10) + (row % 2 === 1 ? 5 : 0)}%`;
        brick.style.top = `${row * 12.5}%`;
        // Random slight delay for organic feel
        brick.style.transitionDelay = `${Math.random() * 0.2}s`;
        brickWall.appendChild(brick);
      }
    }
    
    const bricks = document.querySelectorAll('.brick');

    const handleScroll = () => {
      const rect = whySection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      // Wall builds throughout the section - slower build
      const scrollStart = windowHeight * 0.9;
      const scrollEnd = -sectionHeight * 0.5; // Complete wall much later
      const currentPosition = rect.top;
      const progress = Math.min(Math.max((scrollStart - currentPosition) / (scrollStart - scrollEnd), 0), 1);
      
      // Build bricks from bottom to top based on scroll progress
      const bricksToShow = Math.floor(progress * totalBricks);
      
      // Sort bricks: bottom rows first, then left to right
      const sortedBrickIndices = [];
      for (let row = rows - 1; row >= 0; row--) {
        for (let col = 0; col < cols; col++) {
          sortedBrickIndices.push(row * cols + col);
        }
      }
      
      bricks.forEach((brick, index) => {
        const sortedIndex = sortedBrickIndices.indexOf(index);
        if (sortedIndex < bricksToShow) {
          brick.classList.add('visible');
        } else {
          brick.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "VitalEat",
      subtitle: "AI-Powered Food Intolerance Tracker",
      description: "An intelligent nutrition companion that helps identify food intolerances through seamless intake tracking. Built to analyze patterns at the molecular level, it learns your body's responses to different foods, stress levels, and sleep patterns. Uses AI to predict and prevent adverse reactions while coaching you towards optimal nutrition.",
      tags: ["AI/ML", "Health Tech", "React Native", "Voice Interface"],
      url: "https://vitaleat.vercel.app",
      status: "In Active Dev.",
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
            <span>Fortune 100 Innovation Leadership</span>
          </div>
          
          <h1 className="hero-title">
            <span className="gradient-text">Stephane Ritty</span>
          </h1>
          
          <p className="hero-subtitle">
            Senior Product & PMO Leader | Business Model Innovation | Turning Fortune 100 Complexity into Shipped Revenue
          </p>
          
          <p className="hero-description">
            I optimize what exists, build what's next, and envision what redefines the industry—then I ship all three. 
            Triple-threat across Product, Project, and Change leadership. I don't just orchestrate from 30,000 feet: 
            I build financial models, design business processes, negotiate MSAs, structure pricing, and more to maintain momentum.
          </p>
          
          <p className="hero-description">
            <strong>The track record:</strong> 5+ end-to-end innovation programs | $70M+ new revenue within 3 years | 
            50% faster time-to-market | Led teams of 200+ cross-functional contributors with 88% satisfaction.
          </p>

          <div className="hero-cta">

            <button onClick={copyEmail} className="btn btn-secondary">
              {emailCopied ? <Check size={20} /> : <Copy size={20} />}
              {emailCopied ? 'Copied!' : 'Copy Email'}
            </button>
            <a href="https://www.linkedin.com/in/stephaneritty/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/stephaneritty-del" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/stephaneritty/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
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

      {/* Why I Build Section */}
      <section className="why-section">
        {/* Mountain Background */}
        <div className="mountain-bg"></div>
        
        {/* Brick Wall that builds on scroll */}
        <div className="brick-wall"></div>
        
        {/* Emerald overlay on top of bricks */}
        <div className="emerald-overlay"></div>
        
        <div className="why-content">
          <div className="why-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Building From the Ground Up
          </div>
          <h2>Why I Build</h2>
          
          {/* Text blocks - always visible */}
          <div className="why-text-block">
            <p>
              Since I was a kid, I've been the person people come to with problems. The hub of information among friends, 
              the one who listens and connects the dots others miss. It's not a skill I learned—it's how I'm wired. 
              I became an engineer because that's what you do when you instinctively grasp complex, multi-stakeholder 
              problems and feel compelled to build solutions. It's in my DNA.
            </p>
          </div>
          
          <div className="why-text-block">
            <p>
              Whether I'm leading a product department and owning the "why," orchestrating Fortune 100 innovation ecosystems, 
              or coding AI apps at 2 AM, it's the same muscle. I see the complexity, find the thread that connects everyone's 
              needs, and architect holistic solutions where all stakeholders win. These projects aren't side hustles—they're 
              me doing what I've always done, just applied to challenges I've lived personally.
            </p>
          </div>
          
          <div className="why-text-block">
            <p className="why-closing">
              That's product leadership. That's problem-solving at scale. That's what happens when you're born to build bridges 
              between chaos and clarity.
            </p>
          </div>
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
            <div className="phone-frame">
              <div className="phone-screen">
                <iframe
                  src={projects[activeProject].url}
                  title={projects[activeProject].title}
                  className="project-iframe"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-content">
          <h2>Let's Build Something Transformative</h2>
          <p>
            Need a PMO lead who builds business moats, a product leader who de-risks million-dollar bets, 
            or both in one? Whether you're navigating Fortune 100 complexity or launching bold innovation, 
            let's talk about turning vision into shipped revenue.
          </p>
          <div className="contact-email-group">
            <a href="mailto:stephane.ritty@gmail.com" className="contact-email">
              stephane.ritty@gmail.com
            </a>
            <button onClick={copyEmail} className="copy-email-btn">
              {emailCopied ? <Check size={18} /> : <Copy size={18} />}
            </button>
          </div>
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
