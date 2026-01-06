import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ExternalLink, Sparkles, Copy, Check } from 'lucide-react';
import './App.css';

function App() {
  const [activeProject, setActiveProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('corporate');
  const [activeInitiative, setActiveInitiative] = useState('platform');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('stephane.ritty@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const projects = [
    {
      id: 1,
      title: "VitalEat",
      subtitle: "AI-Powered Food Intolerance Tracker",
      description: "An intelligent nutrition companion that helps identify food intolerances through seamless intake tracking. Built to analyze patterns at the molecular level, it learns your body's responses to different foods, stress levels, and sleep patterns.",
      tags: ["AI/ML", "Health Tech", "React Native", "Voice Interface"],
      url: "https://vitaleat.vercel.app",
      status: "In Active Dev.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      id: 2,
      title: "WineCard Selector",
      subtitle: "Your Pocket Sommelier",
      description: "Snap a photo of any wine card or bottle, and instantly access comprehensive wine information. Perfect for restaurant dining or wine shopping.",
      tags: ["Computer Vision", "Web Scraping", "React", "API Integration"],
      url: "https://winecardselctor.vercel.app",
      status: "Live Beta",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      title: "MissionMot",
      subtitle: "Social Dinner Game",
      description: "A playful party game where each player assumes a character and must cleverly guide others to say rare, assigned words during dinner conversations.",
      tags: ["Game Design", "Social", "React", "Real-time"],
      url: "https://missionmot.vercel.app",
      status: "Live",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const initiatives = [
    { id: 'platform', label: 'B2B2C Platform', shortLabel: 'Platform' },
    { id: 'rental', label: 'Sales-to-Rental Transformation', shortLabel: 'Rental Model' },
    { id: 'dct', label: 'Decentralized Clinical Trials', shortLabel: 'DCT' },
    { id: 'adherence', label: 'Adherence Portfolio Strategy', shortLabel: 'Adherence' },
    { id: 'operations', label: 'Operational Excellence', shortLabel: 'Operations' }
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
            Product & Business Innovation Leader | PMO & New Product Introduction Leader | Business Model Innovation | Turning Fortune 100 Complexity into Shipped Revenue
          </p>
          
          <p className="hero-description">
            I optimize what exists, build what's next, and envision what redefines the industry, then I ship all three. 
            Triple-threat across Product, Project, and Change leadership. I don't just orchestrate from 30,000 feet: 
            I build vision, architect business and operating models, financial models, design business processes, negotiate MSAs, and structure pricing to maintain momentum.
          </p>
          
          <p className="hero-description">
            <strong>The track record:</strong> 5+ end-to-end innovation programs | $70M+ new revenue within 3 years | 
            50% faster time-to-market | Led teams of 200+ cross-functional contributors with 88% satisfaction.
          </p>

          <div className="hero-cta">
            <button onClick={copyEmail} className="btn btn-primary">
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
        <div className="why-bg"></div>
        <div className="why-overlay"></div>
        
        <div className="why-content">
          <div className="why-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Building From the Ground Up
          </div>
          <h2>Why I Build</h2>
          
          <div className="why-text-block">
            <p>
              Since I was a kid, I've been the person people turn to with problems. I've always had an endless curiosity, 
              a need to explore, experience, and understand everything. That's what made me the trusted voice. The one 
              people come to for perspective. It's not something I learned. It's just how my brain works. It's in my DNA.
            </p>
          </div>
          
          <div className="why-text-block">
            <p>
              Whether I'm designing a strategic initiative from the ground up, spotting the market gap, architecting a 
              5-sided platform that connects an entire value chain, or building AI apps at 2 AM, it's the same muscle. 
              Find the opportunity. Align the stakeholders. Ship it.
            </p>
          </div>
          
          <div className="why-text-block">
            <p className="why-closing">
              Different scales, different stakes, but always the same thing: building bridges between chaos and clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section with Tabs */}
      <section id="projects" className="projects-section">
        {/* Main Tab Navigation */}
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

            {/* Initiative Sub-tabs */}
            <div className="initiative-tabs">
              {initiatives.map((init) => (
                <button
                  key={init.id}
                  className={`initiative-tab ${activeInitiative === init.id ? 'active' : ''}`}
                  onClick={() => setActiveInitiative(init.id)}
                >
                  <span className="initiative-tab-full">{init.label}</span>
                  <span className="initiative-tab-short">{init.shortLabel}</span>
                </button>
              ))}
            </div>

            {/* B2B2C Platform Initiative */}
            {activeInitiative === 'platform' && (
              <div className="initiative-content">
                <div className="transformation-card featured">
                  <div className="transformation-header">
                    <div className="company-badge">Fortune 100 Chemical</div>
                    <span className="initiative-status ready">Ready to Launch</span>
                  </div>
                  <h3>B2B2C Demand Generation Platform</h3>
                  <p className="transformation-subtitle">From Market Outsider to Ecosystem Architect: A 5-Sided Digital Marketplace</p>
                  
                  {/* The Challenge */}
                  <div className="case-section">
                    <h4 className="case-section-title">
                      <span className="section-icon">🎯</span>
                      The Challenge
                    </h4>
                    <p className="transformation-description">
                      The company had virtually no presence in EMEA's roofing market. 94% of the market was locked by membrane manufacturers 
                      through established channels and certification bodies. Traditional go-to-market was impossible — we were simply 
                      too far from demand.
                    </p>
                    <div className="challenge-stats">
                      <div className="stat-item negative">
                        <span className="stat-number">7%</span>
                        <span className="stat-label">Liquid membrane share in EMEA</span>
                      </div>
                      <div className="stat-item positive">
                        <span className="stat-number">62%</span>
                        <span className="stat-label">Same product share in North America</span>
                      </div>
                      <div className="stat-item neutral">
                        <span className="stat-number">94%</span>
                        <span className="stat-label">Market locked by incumbents</span>
                      </div>
                    </div>
                  </div>

                  {/* My Strategic Analysis */}
                  <div className="case-section">
                    <h4 className="case-section-title">
                      <span className="section-icon">🔍</span>
                      My Strategic Analysis
                    </h4>
                    <p className="transformation-description">
                      I conducted deep market research and identified a critical insight: the warehouse segment was underserved 
                      and perfectly suited for disruption. These were rational, financially-driven global players who would 
                      adopt any solution that optimized lifecycle costs.
                    </p>
                    <div className="market-opportunity">
                      <div className="opportunity-card">
                        <span className="opportunity-number">345M m²</span>
                        <span className="opportunity-label">European warehouse surface</span>
                      </div>
                      <div className="opportunity-card">
                        <span className="opportunity-number">207M m²</span>
                        <span className="opportunity-label">Renovation market</span>
                      </div>
                      <div className="opportunity-card">
                        <span className="opportunity-number">351K MT</span>
                        <span className="opportunity-label">Binder volume opportunity</span>
                      </div>
                      <div className="opportunity-card">
                        <span className="opportunity-number">60%</span>
                        <span className="opportunity-label">Buildings over 10 years old</span>
                      </div>
                    </div>
                  </div>

                  {/* The Problem I Solved */}
                  <div className="case-section">
                    <h4 className="case-section-title">
                      <span className="section-icon">💡</span>
                      The Problem I Solved
                    </h4>
                    <div className="problem-box">
                      <p>
                        <strong>Industry reality:</strong> 60% of renovations require tear-off (€25/m²) + new insulation (€15-25/m²). 
                        Before even considering waterproofing, costs start at <strong>€40/m² minimum</strong>.
                      </p>
                      <p>
                        <strong>Root cause:</strong> Renovations only happen after leakages. Reactive, not preventive. 
                        No tool existed for "just-in-time" renovation planning.
                      </p>
                      <p>
                        <strong>My solution:</strong> A platform that bundles prevention tools, premium products, qualified contractors, 
                        and insurance benefits, making proactive renovation financially attractive.
                      </p>
                    </div>
                  </div>

                  {/* Target Customers */}
                  <div className="case-section">
                    <h4 className="case-section-title">
                      <span className="section-icon">🏢</span>
                      Target Customers I Identified & Pursued
                    </h4>
                    <div className="customer-grid">
                      <div className="customer-card">
                        <span className="customer-name">Global Logistics Leaders</span>
                        <span className="customer-stat">20+ MM m² portfolios</span>
                        <span className="customer-note">Active business cases initiated</span>
                      </div>
                      <div className="customer-card">
                        <span className="customer-name">REITs</span>
                        <span className="customer-stat">60+ MM m² globally</span>
                        <span className="customer-note">World's largest logistics real estate</span>
                      </div>
                      <div className="customer-card">
                        <span className="customer-name">Private Equity</span>
                        <span className="customer-stat">10+ MM m² in Europe</span>
                        <span className="customer-note">Value-driven asset managers</span>
                      </div>
                      <div className="customer-card">
                        <span className="customer-name">Developers</span>
                        <span className="customer-stat">15+ MM m² globally</span>
                        <span className="customer-note">Major logistics developers</span>
                      </div>
                    </div>
                    <p className="customer-insight">
                      <strong>Key insight:</strong> 1% of a single global player's buildings = 400 MT of binder. These players standardize solutions globally once KPIs are met.
                    </p>
                  </div>

                  {/* Business Model Innovation */}
                  <div className="case-section">
                    <h4 className="case-section-title">
                      <span className="section-icon">🔄</span>
                      Business Model Transformation I Designed
                    </h4>
                    <div className="transformation-visual">
                      <div className="model-before">
                        <h5>Before: Linear Value Chain</h5>
                        <p>Manufacturer → Distributors → Formulators → Contractors → End Users</p>
                        <span className="model-problem">Too far from demand, no control, no data</span>
                      </div>
                      <div className="model-arrow">→</div>
                      <div className="model-after">
                        <h5>After: Hub Platform</h5>
                        <p>All stakeholders connected through our platform</p>
                        <span className="model-benefit">At the center, owns relationships & data</span>
                      </div>
                    </div>
                  </div>

                  {/* Ecosystem Architecture */}
                  <div className="case-section">
                    <h4 className="case-section-title">
                      <span className="section-icon">🕸️</span>
                      Ecosystem Architecture
                    </h4>
                    <div className="value-chain-hub">
                      <svg viewBox="0 0 400 400" className="hub-diagram">
                        <line x1="200" y1="200" x2="200" y2="60" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="2" strokeDasharray="5,5" />
                        <line x1="200" y1="200" x2="330" y2="120" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="2" strokeDasharray="5,5" />
                        <line x1="200" y1="200" x2="330" y2="280" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="2" strokeDasharray="5,5" />
                        <line x1="200" y1="200" x2="200" y2="340" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="2" strokeDasharray="5,5" />
                        <line x1="200" y1="200" x2="70" y2="280" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="2" strokeDasharray="5,5" />
                        <line x1="200" y1="200" x2="70" y2="120" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="2" strokeDasharray="5,5" />
                        
                        <circle cx="200" cy="200" r="55" fill="#dc2626" />
                        <text x="200" y="192" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Digital</text>
                        <text x="200" y="207" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Platform</text>
                        <text x="200" y="220" textAnchor="middle" fill="white" fontSize="9" opacity="0.8">(We own it)</text>
                        
                        <rect x="155" y="25" width="90" height="50" rx="8" fill="#3b82f6" />
                        <text x="200" y="50" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">Building Owners</text>
                        <text x="200" y="63" textAnchor="middle" fill="white" fontSize="8" opacity="0.8">Global players</text>
                        
                        <rect x="285" y="85" width="90" height="50" rx="8" fill="#22c55e" />
                        <text x="330" y="107" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">Insurance</text>
                        <text x="330" y="120" textAnchor="middle" fill="white" fontSize="8" opacity="0.8">Premium discounts</text>
                        
                        <rect x="285" y="245" width="90" height="50" rx="8" fill="#f59e0b" />
                        <text x="330" y="267" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">Contractors</text>
                        <text x="330" y="280" textAnchor="middle" fill="white" fontSize="8" opacity="0.8">100+ qualified</text>
                        
                        <rect x="155" y="315" width="90" height="50" rx="8" fill="#8b5cf6" />
                        <text x="200" y="337" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">Engineers &</text>
                        <text x="200" y="350" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">Architects</text>
                        
                        <rect x="25" y="245" width="90" height="50" rx="8" fill="#0f766e" />
                        <text x="70" y="267" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">Strategic</text>
                        <text x="70" y="280" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">Partner</text>
                        
                        <rect x="25" y="85" width="90" height="50" rx="8" fill="#dc2626" />
                        <text x="70" y="107" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">Raw</text>
                        <text x="70" y="120" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">Materials</text>
                      </svg>
                      <p className="hub-caption">Virtual Integrated Company: All stakeholders win, we own the platform & data</p>
                    </div>
                  </div>

                  {/* Video Explainer */}
                  <div className="case-section">
                    <h4 className="case-section-title">
                      <span className="section-icon">🎬</span>
                      Watch the Business Model in Action
                    </h4>
                    <div className="video-container">
                      <video controls className="business-model-video">
                        <source src="/business-model.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <p className="video-caption">Animated walkthrough of the platform's value flow and stakeholder interactions</p>
                    </div>
                  </div>

                  {/* What I Delivered */}
                  <div className="case-section">
                    <h4 className="case-section-title">
                      <span className="section-icon">✅</span>
                      What I Delivered
                    </h4>
                    <div className="results-grid">
                      <div className="result-item">
                        <span className="result-number">1</span>
                        <span className="result-text">Functional platform, ready for launch</span>
                      </div>
                      <div className="result-item">
                        <span className="result-number">✓</span>
                        <span className="result-text">Strategic partnership signed with partner CEO</span>
                      </div>
                      <div className="result-item">
                        <span className="result-number">100+</span>
                        <span className="result-text">Qualified contractors in the pool</span>
                      </div>
                      <div className="result-item">
                        <span className="result-number">~10</span>
                        <span className="result-text">Building owners ready for renovation</span>
                      </div>
                      <div className="result-item">
                        <span className="result-number">6/6</span>
                        <span className="result-text">Stakeholder groups aligned & committed</span>
                      </div>
                      <div className="result-item">
                        <span className="result-number">✓</span>
                        <span className="result-text">Active business cases with global players</span>
                      </div>
                    </div>
                  </div>

                  {/* My Roles */}
                  <div className="case-section">
                    <h4 className="case-section-title">
                      <span className="section-icon">👤</span>
                      Hats I Wore (All of Them)
                    </h4>
                    <div className="roles-grid">
                      <div className="role-card">
                        <span className="role-title">Strategist</span>
                        <span className="role-desc">Market analysis, competitive positioning, go-to-market strategy</span>
                      </div>
                      <div className="role-card">
                        <span className="role-title">Business Model Architect</span>
                        <span className="role-desc">Designed the linear-to-hub transformation, value capture model</span>
                      </div>
                      <div className="role-card">
                        <span className="role-title">BD & Sales</span>
                        <span className="role-desc">Built pipeline, negotiated with C-level executives across 6 stakeholder groups</span>
                      </div>
                      <div className="role-card">
                        <span className="role-title">Product Owner</span>
                        <span className="role-desc">Defined requirements, prioritized backlog, led V1 development</span>
                      </div>
                      <div className="role-card">
                        <span className="role-title">Product Manager</span>
                        <span className="role-desc">Roadmap planning, feature prioritization, stakeholder alignment</span>
                      </div>
                      <div className="role-card">
                        <span className="role-title">UX/UI Design Lead</span>
                        <span className="role-desc">Led the Scrum team on user experience and interface design decisions</span>
                      </div>
                      <div className="role-card">
                        <span className="role-title">Ecosystem Builder</span>
                        <span className="role-desc">Orchestrated partnerships, aligned incentives across all parties</span>
                      </div>
                    </div>
                  </div>

                  {/* Strategic Vision */}
                  <div className="case-section">
                    <h4 className="case-section-title">
                      <span className="section-icon">🚀</span>
                      The Vision I Built Toward
                    </h4>
                    <div className="vision-grid">
                      <div className="vision-item">
                        <span className="vision-title">x15 Revenue</span>
                        <span className="vision-desc">10-year projection for single application, single segment, single geography</span>
                      </div>
                      <div className="vision-item">
                        <span className="vision-title">Platform Expansion</span>
                        <span className="vision-desc">Roofs → Floors → Walls → Roads</span>
                      </div>
                      <div className="vision-item">
                        <span className="vision-title">Geographic Scale</span>
                        <span className="vision-desc">EMEA → Global rollout</span>
                      </div>
                      <div className="vision-item">
                        <span className="vision-title">Data Ownership</span>
                        <span className="vision-desc">We generate and own all platform data</span>
                      </div>
                    </div>
                    <div className="competitive-advantage">
                      <p><strong>Competitive Moat:</strong> This type of ecosystem innovation is either very long or impossible to copy. First mover advantage with locked-in stakeholders.</p>
                    </div>
                  </div>

                  {/* Outcome */}
                  <div className="transformation-outcome">
                    <p><strong>Outcome:</strong> Platform was built, contracts signed, all stakeholders committed, active business cases with global logistics leaders. 
                    A company restructuring and leadership change stopped the launch before go-live.</p>
                    <p><strong>Legacy:</strong> The concept was disseminated across the organization, influencing future digital transformation initiatives.</p>
                  </div>

                  {/* Personal Reflection */}
                  <div className="personal-reflection">
                    <h4>💡 Personal Note</h4>
                    <p>
                      This project was my baby. Honestly? It was a blast to build. From the first market insight to signing 
                      contracts with CEOs, from sketching the UX wireframes to watching the platform come alive, every step 
                      was exhilarating. The kind of work that doesn't feel like work.
                    </p>
                  </div>

                  {/* Lessons Learned */}
                  <div className="lessons-learned">
                    <h4>🎓 What I'd Do Differently</h4>
                    <p>
                      Looking back, what I missed was <strong>change management</strong>. I had the strategy, the product, the 
                      partnerships, the execution, but I underestimated the internal politics and organizational resistance. 
                      Today, with the change management skills I've developed since, I'm confident this would have been pushed 
                      across the entire business. That lesson cost me a launch, but it made me a more complete leader.
                    </p>
                  </div>

                  {/* B2B CTA */}
                  <div className="b2b-cta">
                    <h4>🚀 A Message to B2B Commodity Businesses</h4>
                    <p>
                      If you're a <strong>commodity B2B business struggling to increase revenue and value</strong>, this is your playbook. 
                      Stop competing on price. Stop being a distant supplier in a locked value chain.
                    </p>
                    <p>
                      <strong>Build a marketplace.</strong> Identify a key application. Connect the stakeholders. Own the platform. 
                      Own the data. Expand from there. It's not easy, but it's the path from commodity to ecosystem leader.
                    </p>
                    <div className="cta-offer">
                      <p>
                        <strong>I'd be more than happy to help anyone willing to disrupt a locked value chain.</strong><br/>
                        If this resonates with you, let's talk.
                      </p>
                    </div>
                  </div>

                  <div className="transformation-note">
                    <em>This was 40% of my role, while simultaneously leading product marketing for roofing and wall applications across EMEA.</em>
                  </div>

                  <div className="transformation-tags">
                    <span className="tag">Business Model Innovation</span>
                    <span className="tag">Ecosystem Architecture</span>
                    <span className="tag">Platform Strategy</span>
                    <span className="tag">0→1 Product Development</span>
                    <span className="tag">B2B2C Marketplace</span>
                    <span className="tag">Digital Transformation</span>
                    <span className="tag">C-Level Negotiations</span>
                    <span className="tag">Go-to-Market Strategy</span>
                  </div>
                </div>
              </div>
            )}

            {/* Sales-to-Rental Transformation */}
            {activeInitiative === 'rental' && (
              <div className="initiative-content">
                <div className="coming-soon-card">
                  <div className="coming-soon-icon">🔄</div>
                  <h3>Sales-to-Rental Business Model Transformation</h3>
                  <p className="coming-soon-subtitle">9-Month Strategic Pivot for Medical Devices in Clinical Trials</p>
                  <div className="coming-soon-badge">
                    <span>Coming Soon</span>
                  </div>
                  <p className="coming-soon-desc">
                    Full case study being prepared. This initiative transformed the business model from one-time sales 
                    to recurring rental revenue for medical devices used in clinical trials.
                  </p>
                </div>
              </div>
            )}

            {/* Decentralized Clinical Trials */}
            {activeInitiative === 'dct' && (
              <div className="initiative-content">
                <div className="coming-soon-card">
                  <div className="coming-soon-icon">🏥</div>
                  <h3>Decentralized Clinical Trials</h3>
                  <p className="coming-soon-subtitle">Bringing Clinical Trials to Patients' Homes</p>
                  <div className="coming-soon-badge">
                    <span>Coming Soon</span>
                  </div>
                  <p className="coming-soon-desc">
                    Full case study being prepared. This initiative enabled remote patient monitoring and 
                    decentralized trial execution, reducing site dependency and improving patient access.
                  </p>
                </div>
              </div>
            )}

            {/* Adherence Portfolio Strategy */}
            {activeInitiative === 'adherence' && (
              <div className="initiative-content">
                <div className="coming-soon-card">
                  <div className="coming-soon-icon">📊</div>
                  <h3>Adherence Measurement Portfolio Strategy</h3>
                  <p className="coming-soon-subtitle">Strategic Business Portfolio Optimization</p>
                  <div className="coming-soon-badge">
                    <span>Coming Soon</span>
                  </div>
                  <p className="coming-soon-desc">
                    Full case study being prepared. This initiative developed the strategic roadmap for 
                    the adherence measurement product portfolio, aligning business objectives with market opportunities.
                  </p>
                </div>
              </div>
            )}

            {/* Operational Excellence */}
            {activeInitiative === 'operations' && (
              <div className="initiative-content">
                <div className="coming-soon-card">
                  <div className="coming-soon-icon">⚙️</div>
                  <h3>Operational Transformation</h3>
                  <p className="coming-soon-subtitle">Process Excellence & Project Delivery</p>
                  <div className="coming-soon-badge">
                    <span>Coming Soon</span>
                  </div>
                  <p className="coming-soon-desc">
                    A collection of operational achievements: process optimization, project delivery excellence, 
                    and organizational transformation initiatives.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* AI Apps Tab Content */}
        {activeTab === 'ai' && (
          <div className="tab-content">
            <div className="section-header">
              <h2>AI Apps</h2>
              <p>Personal projects, built from scratch, live in production</p>
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
