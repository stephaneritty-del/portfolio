// Platform case study content (moved from the old tabbed homepage).
export default function Platform() {
  return (
    <>
      {/* The Challenge */}
      <div className="case-section">
        <h4 className="case-section-title">
          The Challenge
        </h4>
        <p className="transformation-description">
          The company had virtually no presence in EMEA's roofing market. 94% of the market was locked by membrane manufacturers 
          through established channels and certification bodies. Traditional go-to-market was impossible: we were simply 
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

      {/* How I Ran It */}
      <div className="case-section">
        <h4 className="case-section-title">
          How I Ran It
        </h4>
        <p className="transformation-description">
          The whole project was managed with <strong>Jobs-to-be-Done</strong> and the <strong>Business Model
          Canvas</strong>: Jobs-to-be-Done to understand what each stakeholder group (building owners, contractors,
          insurers, engineers) was really trying to get done, and the canvas to design and iterate the business model
          around those jobs.
        </p>
      </div>

      {/* The Problem I Solved */}
      <div className="case-section">
        <h4 className="case-section-title">
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
          Ecosystem Architecture
        </h4>
        <div className="value-chain-hub">
          <svg viewBox="0 0 400 400" className="hub-diagram">
            <line x1="200" y1="200" x2="200" y2="60" stroke="rgba(217, 183, 126, 0.5)" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="200" y1="200" x2="330" y2="120" stroke="rgba(217, 183, 126, 0.5)" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="200" y1="200" x2="330" y2="280" stroke="rgba(217, 183, 126, 0.5)" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="200" y1="200" x2="200" y2="340" stroke="rgba(217, 183, 126, 0.5)" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="200" y1="200" x2="70" y2="280" stroke="rgba(217, 183, 126, 0.5)" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="200" y1="200" x2="70" y2="120" stroke="rgba(217, 183, 126, 0.5)" strokeWidth="2" strokeDasharray="5,5" />

            <circle cx="200" cy="200" r="55" fill="#D9B77E" />
            <text x="200" y="192" textAnchor="middle" fill="#1B1A18" fontSize="11" fontWeight="bold">Digital</text>
            <text x="200" y="207" textAnchor="middle" fill="#1B1A18" fontSize="11" fontWeight="bold">Platform</text>
            <text x="200" y="220" textAnchor="middle" fill="#1B1A18" fontSize="9" opacity="0.8">(We own it)</text>

            <rect x="155" y="25" width="90" height="50" rx="4" fill="#2E2C29" stroke="#5A564F" />
            <text x="200" y="50" textAnchor="middle" fill="#F2EFE8" fontSize="10" fontWeight="600">Building Owners</text>
            <text x="200" y="63" textAnchor="middle" fill="#F2EFE8" fontSize="8" opacity="0.8">Global players</text>

            <rect x="285" y="85" width="90" height="50" rx="4" fill="#2E2C29" stroke="#5A564F" />
            <text x="330" y="107" textAnchor="middle" fill="#F2EFE8" fontSize="10" fontWeight="600">Insurance</text>
            <text x="330" y="120" textAnchor="middle" fill="#F2EFE8" fontSize="8" opacity="0.8">Premium discounts</text>

            <rect x="285" y="245" width="90" height="50" rx="4" fill="#2E2C29" stroke="#5A564F" />
            <text x="330" y="267" textAnchor="middle" fill="#F2EFE8" fontSize="10" fontWeight="600">Contractors</text>
            <text x="330" y="280" textAnchor="middle" fill="#F2EFE8" fontSize="8" opacity="0.8">100+ qualified</text>

            <rect x="155" y="315" width="90" height="50" rx="4" fill="#2E2C29" stroke="#5A564F" />
            <text x="200" y="337" textAnchor="middle" fill="#F2EFE8" fontSize="10" fontWeight="600">Engineers &</text>
            <text x="200" y="350" textAnchor="middle" fill="#F2EFE8" fontSize="10" fontWeight="600">Architects</text>

            <rect x="25" y="245" width="90" height="50" rx="4" fill="#2E2C29" stroke="#5A564F" />
            <text x="70" y="267" textAnchor="middle" fill="#F2EFE8" fontSize="10" fontWeight="600">Strategic</text>
            <text x="70" y="280" textAnchor="middle" fill="#F2EFE8" fontSize="10" fontWeight="600">Partner</text>

            <rect x="25" y="85" width="90" height="50" rx="4" fill="#2E2C29" stroke="#5A564F" />
            <text x="70" y="107" textAnchor="middle" fill="#F2EFE8" fontSize="10" fontWeight="600">Raw</text>
            <text x="70" y="120" textAnchor="middle" fill="#F2EFE8" fontSize="10" fontWeight="600">Materials</text>
          </svg>
          <p className="hub-caption">Virtual Integrated Company: All stakeholders win, we own the platform & data</p>
        </div>
      </div>

      {/* Video Explainer */}
      <div className="case-section">
        <h4 className="case-section-title">
          Watch the Business Model in Action
        </h4>
        <div className="video-container">
          <video controls preload="none" poster="/business-model-poster.jpg" className="business-model-video" width="1280" height="720">
            <source src="/business-model.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="video-caption">Animated walkthrough of the platform's value flow and stakeholder interactions</p>
        </div>
      </div>

      {/* What I Delivered */}
      <div className="case-section">
        <h4 className="case-section-title">
          What I Delivered
        </h4>
        <div className="results-grid">
          <div className="result-item">
            <span className="result-number">1</span>
            <span className="result-text">Functional platform, ready for launch</span>
          </div>
          <div className="result-item">
            <span className="result-number"></span>
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
            <span className="result-number">4/4</span>
            <span className="result-text">Stakeholder groups aligned & committed</span>
          </div>
          <div className="result-item">
            <span className="result-number"></span>
            <span className="result-text">Active business cases with global players</span>
          </div>
        </div>
      </div>

      {/* My Roles */}
      <div className="case-section">
        <h4 className="case-section-title">
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
        <h4>Personal Note</h4>
        <p>
          This project was my baby. Honestly? It was a blast to build. From the first market insight to signing 
          contracts with CEOs, from sketching the UX wireframes to watching the platform come alive, every step 
          was exhilarating. The kind of work that doesn't feel like work.
        </p>
      </div>

      {/* Lessons Learned */}
      <div className="lessons-learned">
        <h4>What I'd Do Differently</h4>
        <p>
          Looking back, what I missed was <strong>change management</strong>. I had the strategy, the product, the 
          partnerships, the execution, but I underestimated the internal politics and organizational resistance. 
          Today, with the change management skills I've developed since, I'm confident this would have been pushed 
          across the entire business. That lesson cost me a launch, but it made me a more complete leader.
        </p>
      </div>

      {/* B2B CTA */}
      <div className="transformation-note">
        <em>This was 40% of my role, while simultaneously leading product marketing for roofing and wall applications across EMEA.</em>
      </div>

      <div className="transformation-tags">
        <span className="tag">Jobs-to-be-Done</span>
        <span className="tag">Business Model Canvas</span>
        <span className="tag">Business Model Innovation</span>
        <span className="tag">Ecosystem Architecture</span>
        <span className="tag">Platform Strategy</span>
        <span className="tag">0→1 Product Development</span>
        <span className="tag">B2B2C Marketplace</span>
        <span className="tag">Digital Transformation</span>
        <span className="tag">C-Level Negotiations</span>
        <span className="tag">Go-to-Market Strategy</span>
      </div>
    </>
  );
}
