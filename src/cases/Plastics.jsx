// Plastics case study content (moved from the old tabbed homepage).
export default function Plastics() {
  return (
    <>
      {/* CEO Quote */}
      <div className="case-section">
        <blockquote className="ceo-quote">
          <p>"Plastic waste is the sustainability issue of our time. We must do a better job of capturing and reusing plastic by scaling investments in collection, waste management, recycling technologies, and new end markets. Working together, we can create a circular world for plastics."</p>
          <cite><strong>Jim Fitterling</strong>, CEO of Dow</cite>
        </blockquote>
      </div>

      {/* The Opportunity */}
      <div className="case-section">
        <h4 className="case-section-title">
          The Opportunity I Spotted
        </h4>
        <p className="transformation-description">
          I proposed a project to Dow's Sustainability Academy that was selected. The vision: solve two global problems with one solution.
        </p>
        <div className="problem-box">
          <p>
            <strong>Problem 1:</strong> Plastic waste is a nightmare. It stays forever in nature, polluting oceans and ecosystems.
          </p>
          <p>
            <strong>Problem 2:</strong> Sand and raw material scarcity. The world needs construction that stands, but resources are depleting.
          </p>
          <p>
            <strong>My insight:</strong> Why not use plastic waste in construction materials? Solving both problems at once. And leverage the 4-sided platform I built (<a href="/work/b2b2c-platform">see the B2B2C case</a>) as the central demand generation engine.
          </p>
        </div>
      </div>

      {/* Why DCC */}
      <div className="case-section">
        <h4 className="case-section-title">
          Why Construction Chemicals Had to Lead
        </h4>
        <div className="process-image">
          <img src="/how-dcc-can-lead.jpg" alt="How DCC can lead - 4 strategic roles: Channel, Enable, Cross-sell, Facilitate" className="case-study-image" />
          <p className="image-caption">Strategic framework: 4 roles DCC could play in the circular plastics ecosystem</p>
        </div>
      </div>

      {/* The Vision */}
      <div className="case-section">
        <h4 className="case-section-title">
          The Vision: Affordable Housing from Plastic Waste
        </h4>
        <div className="problem-box" style={{background: 'rgba(16, 185, 129, 0.08)', borderColor: 'rgba(16, 185, 129, 0.25)', borderLeftColor: '#10b981'}}>
          <p>
            <strong>Design goal:</strong> An affordable house, 80% based on locally recycled plastic waste.
          </p>
          <p>
            <strong>Design specs:</strong> Great living experience, waste management at its core, culturally appropriate, healthy, durable, resilient, modular and scalable.
          </p>
          <p>
            <strong>Business model:</strong> This wasn't just about materials—it was about orchestrating the entire ecosystem: recyclers, material scientists, construction players, and demand generators using the digital platform as the hub. Proof of concept and demand generation as parallel tasks.
          </p>
        </div>
      </div>

      {/* Team */}
      <div className="case-section">
        <h4 className="case-section-title">
          The Team
        </h4>
        <p className="transformation-description">
          A cross-functional team from the Sustainability Academy cohort wanted to work on this project:
        </p>
        <div className="roles-grid">
          <div className="role-card">
            <span className="role-title">Process Safety Engineer</span>
          </div>
          <div className="role-card">
            <span className="role-title">Account Manager</span>
          </div>
          <div className="role-card">
            <span className="role-title">Associate Analytical Manager</span>
          </div>
          <div className="role-card">
            <span className="role-title">Associate Research Scientist</span>
          </div>
        </div>
        <p className="transformation-description" style={{marginTop: '1rem'}}>
          I led the team, directing each member toward specific domains where they conducted state-of-the-art research.
        </p>
      </div>

      {/* Outcome */}
      <div className="transformation-outcome">
        <p><strong>Outcome:</strong> The concept remained too advanced for the organization at the time. I couldn't push it higher 
        due to lack of time and competing priorities. However, I laid the foundation for cross-division sustainability strategy between P&SP and DCC.</p>
        <p><strong>Current relevance:</strong> I still believe this approach is highly relevant today. The circular economy 
        for plastics needs demand generation tools, and construction is a perfect sink for recycled materials.</p>
      </div>

      {/* Personal Reflection */}
      <div className="personal-reflection">
        <h4>Personal Note</h4>
        <p>
          "The future will be sustainable or won't be." I initiated this because I saw Dow as one of the unique places 
          where the plastic waste issue could be tackled at scale. Sometimes you have to plant seeds even when you know 
          you might not be around to see them grow.
        </p>
      </div>

      <div className="transformation-tags">
        <span className="tag">Sustainability</span>
        <span className="tag">Circular Economy</span>
        <span className="tag">Cross-Division Strategy</span>
        <span className="tag">Open Innovation</span>
        <span className="tag">Platform Extension</span>
        <span className="tag">Construction</span>
        <span className="tag">Plastic Recycling</span>
      </div>
    </>
  );
}
