import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, ChevronRight, Sparkles, Copy, Check } from 'lucide-react';
import './App.css';

function App() {
  const [activeProject, setActiveProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('corporate'); // 'corporate' or 'ai'

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
            I build financial models, design business processes, negotiate MSAs, and structure pricing to maintain momentum.
          </p>
          
          <p className="hero-description">
            <strong>The track record:</strong> 5+ end-to-end innovation programs | $70M+ new revenue within 3 years | 
            50% faster time-to-market | Led teams of 200+ cross-functional contributors with 88% satisfaction.
          </p>

          <div className="hero-cta">
            <a href="mailto:stephane.ritty@gmail.com" className="btn btn-primary">
              <Mail size={20} />
              Email Me
            </a>
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
              Since I was a kid, I've been the person people turn to with problems. I've always had an endless curiosity, 
              a need to explore, experience, and understand everything. That's what made me the trusted voice. The one 
              people come to for perspective. It's not something I learned. It's just how my brain works. It's in my DNA.
            </p>
          </div>
          
          <div className="why-text-block">
            <p>
              Whether I'm designing a strategic initiative from the ground up—spotting the market gap, architecting a 
              5-sided platform that connects an entire value chain—or building AI apps at 2 AM, it's the same muscle. 
              Find the opportunity. Align the stakeholders. Ship it.
            </p>
          </div>
          
          <div className="why-text-block">
            <p className="why-closing">
              Different scales, different stakes—but always the same thing: building bridges between chaos and clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section with Tabs */}
      <section id="projects" className="projects-section">
        {/* Tab Navigation */}
        <div className="tabs-container">
          <button 
            className={`tab-button ${activeTab === 'corporate' ? 'active' : ''}`}
            onClick={() => setActiveTab('corporate')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Corporate Transformation
          </button>
          <button 
            className={`tab-button ${activeTab === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveTab('ai')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z"></path>
              <circle cx="12" cy="14" r="2"></circle>
            </svg>
            AI Apps
          </button>
        </div>

        {/* Corporate Transformation Tab Content */}
        {activeTab === 'corporate' && (
          <div className="tab-content">
            <div className="section-header">
              <h2>Corporate Transformation</h2>
              <p>Strategic initiatives at Fortune 100 scale</p>
            </div>

            <div className="transformation-grid">
              {/* Dow Platform */}
              <div className="transformation-card">
                <div className="transformation-header">
                  <div className="company-badge">Dow</div>
                  <span className="initiative-status ready">Ready to Launch</span>
                </div>
                <h3>Renufix — Demand Generation Platform</h3>
                <p className="transformation-subtitle">5-Sided B2B2C Marketplace for Construction</p>
                
                <p className="transformation-description">
                  Identified a massive market gap—7% liquid membrane share in EMEA vs 62% in North America—and 
                  conceived, built, and validated a multi-sided digital platform to disrupt the roofing value chain.
                </p>

                {/* Product Screenshots */}
                <div className="product-screenshots">
                  <img src="/renufix-screens.png" alt="Renufix Platform - Stand-alone webpage, Registration flow, and Project Dashboard" />
                  <div className="screenshot-labels">
                    <span>Stand-alone webpage</span>
                    <span>Registration flow</span>
                    <span>Project Dashboard</span>
                  </div>
                </div>

                <div className="value-chain-hub">
                  <svg viewBox="0 0 400 400" className="hub-diagram">
                    {/* Connection lines */}
                    <line x1="200" y1="200" x2="200" y2="60" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="200" y1="200" x2="330" y2="120" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="200" y1="200" x2="330" y2="280" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="200" y1="200" x2="200" y2="340" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="200" y1="200" x2="70" y2="280" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="200" y1="200" x2="70" y2="120" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="2" strokeDasharray="5,5" />
                    
                    {/* Center Hub - Dow Platform */}
                    <circle cx="200" cy="200" r="55" fill="#dc2626" />
                    <text x="200" y="195" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Dow</text>
                    <text x="200" y="212" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Platform</text>
                    
                    {/* Building Owner - Top */}
                    <rect x="155" y="25" width="90" height="50" rx="8" fill="#3b82f6" />
                    <text x="200" y="50" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">Building</text>
                    <text x="200" y="65" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">Owner</text>
                    
                    {/* Promoter - Top Right */}
                    <rect x="285" y="85" width="90" height="50" rx="8" fill="#22c55e" />
                    <text x="330" y="115" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">Promoter</text>
                    
                    {/* Contractors - Right */}
                    <rect x="285" y="245" width="90" height="50" rx="8" fill="#f59e0b" />
                    <text x="330" y="275" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">Contractors</text>
                    
                    {/* Distributors - Bottom */}
                    <rect x="155" y="315" width="90" height="50" rx="8" fill="#8b5cf6" />
                    <text x="200" y="345" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">Distributors</text>
                    
                    {/* Formulator - Bottom Left */}
                    <rect x="25" y="245" width="90" height="50" rx="8" fill="#0f766e" />
                    <text x="70" y="275" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">Formulator</text>
                    
                    {/* Dow Materials - Top Left */}
                    <rect x="25" y="85" width="90" height="50" rx="8" fill="#dc2626" />
                    <text x="70" y="110" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">Dow</text>
                    <text x="70" y="125" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">Materials</text>
                  </svg>
                  <p className="hub-caption">One platform orchestrating the entire value chain</p>
                </div>

                <div className="transformation-results">
                  <h4>What I Built & Achieved:</h4>
                  <div className="results-grid">
                    <div className="result-item">
                      <span className="result-number">1</span>
                      <span className="result-text">Platform built & functional</span>
                    </div>
                    <div className="result-item">
                      <span className="result-number">✓</span>
                      <span className="result-text">Contracts signed with formulators</span>
                    </div>
                    <div className="result-item">
                      <span className="result-number">100+</span>
                      <span className="result-text">Roofers in the contractor pool</span>
                    </div>
                    <div className="result-item">
                      <span className="result-number">~10</span>
                      <span className="result-text">Building owners ready for renovation</span>
                    </div>
                    <div className="result-item">
                      <span className="result-number">5/5</span>
                      <span className="result-text">Stakeholder groups committed</span>
                    </div>
                  </div>
                </div>

                <div className="transformation-details">
                  <h4>My Role — Full Ownership:</h4>
                  <ul>
                    <li>Market analysis & business model conception</li>
                    <li>BD pipeline — built relationships across all 5 stakeholder groups</li>
                    <li>Strategic partnership — signed directly with formulator CEO</li>
                    <li>Product Owner for V1 + Product Manager for roadmap</li>
                    <li>Fed the pipeline, managed contracts, aligned all parties</li>
                  </ul>
                </div>

                <div className="transformation-outcome">
                  <p><strong>Outcome:</strong> Platform was built, contracts signed, all stakeholders ready—but a company restructuring and leadership change stopped the launch before go-live.</p>
                  <p><strong>Vision:</strong> x15 revenue potential • Expandable to floors, walls, roads • Multi-geography scale</p>
                </div>

                <div className="transformation-note">
                  <em>This was 40% of my role—while also leading product marketing for roofing and wall applications across EMEA.</em>
                </div>

                <div className="transformation-tags">
                  <span className="tag">Platform Strategy</span>
                  <span className="tag">Multi-sided Marketplace</span>
                  <span className="tag">0→1 Innovation</span>
                  <span className="tag">B2B2C</span>
                  <span className="tag">Digital Transformation</span>
                </div>
              </div>

              {/* More to come placeholder */}
              <div className="more-coming-card">
                <div className="more-coming-icon">+</div>
                <h4>More to come</h4>
                <p>Thermo Fisher initiatives coming soon</p>
              </div>
            </div>
          </div>
        )}

        {/* AI Apps Tab Content */}
        {activeTab === 'ai' && (
          <div className="tab-content">
            <div className="section-header">
              <h2>AI Apps</h2>
              <p>Personal projects — built from scratch, live in production</p>
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
          </div>
        )}
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
