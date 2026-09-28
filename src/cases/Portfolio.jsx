// NPI portfolio and innovation framework case study content.
export default function Portfolio() {
  return (
    <>
      {/* The Framework */}
      <div className="case-section">
        <h4 className="case-section-title">
          The Framework
        </h4>
        <p className="transformation-description">
          Together with the PMO Director, I co-owned the rollout of a new PMO framework: <strong>stage-gate
          governance</strong>, plus a <strong>filter that sorts every project by its level of uncertainty and
          unknowns</strong>.
        </p>
        <p className="transformation-description">
          Predictable projects followed the classic stage-gate path. The uncertain ones, mostly new services, came
          into my NPI portfolio, where they needed a different way of working.
        </p>
      </div>

      {/* How We Ran the Portfolio */}
      <div className="case-section">
        <h4 className="case-section-title">
          How We Ran the NPI Portfolio
        </h4>
        <p className="transformation-description">
          I led a team of <strong>five project managers</strong>, using innovation management best practices for new
          services: Steve Blank&apos;s <strong>Customer Development</strong>, <strong>Jobs-to-be-Done</strong>,
          Strategyzer tools and Lean Startup&apos;s iterative test cycles, run in parallel with stage-gate rather
          than instead of it.
        </p>
        <div className="vision-grid">
          <div className="vision-item">
            <span className="vision-title">1. Filter by uncertainty</span>
            <span className="vision-desc">Route each project by how much is still unknown, not only by size.</span>
          </div>
          <div className="vision-item">
            <span className="vision-title">2. Map the assumptions</span>
            <span className="vision-desc">Make explicit what has to be true for the service to work and sell.</span>
          </div>
          <div className="vision-item">
            <span className="vision-title">3. Place rapid bets</span>
            <span className="vision-desc">Test the leap-of-faith assumptions first, quickly and cheaply.</span>
          </div>
          <div className="vision-item">
            <span className="vision-title">4. Focus or kill early</span>
            <span className="vision-desc">Narrow the scope toward the highest-value space, or stop before the big spend.</span>
          </div>
        </div>
        <div className="process-image">
          <img src="/parallel-process.jpg" alt="Parallel process: business model canvas and agile test sprints alongside stage-gate governance" className="case-study-image" />
          <p className="image-caption">Business Model Canvas and agile test sprints running in parallel with stage-gate governance</p>
        </div>
      </div>

      {/* With Product Executives */}
      <div className="case-section">
        <h4 className="case-section-title">
          With the Product Executives
        </h4>
        <p className="transformation-description">
          I implemented these evidence-based frameworks with the product executives, so that go/no-go decisions were
          based on tested assumptions. That de-risked go-to-market strategy and cut the time it took to launch.
        </p>
      </div>

      {/* Results */}
      <div className="case-section">
        <h4 className="case-section-title">
          Results
        </h4>
        <div className="results-grid">
          <div className="result-item">
            <span className="result-number">$70M</span>
            <span className="result-text">New revenue generated over 4 years</span>
          </div>
          <div className="result-item">
            <span className="result-number">50%</span>
            <span className="result-text">Faster time-to-launch</span>
          </div>
          <div className="result-item">
            <span className="result-number">88/100</span>
            <span className="result-text">Employee engagement score</span>
          </div>
          <div className="result-item">
            <span className="result-number">5</span>
            <span className="result-text">Project managers led</span>
          </div>
        </div>
      </div>

      {/* From the portfolio */}
      <div className="case-section">
        <h4 className="case-section-title">
          Launched From This Portfolio
        </h4>
        <div className="roles-grid">
          <a className="role-card" href="/work/adherence-marketplace">
            <span className="role-title">Medication Adherence Marketplace</span>
            <span className="role-desc">$20M revenue line by year 3</span>
          </a>
          <a className="role-card" href="/work/just-in-time-labeling">
            <span className="role-title">Just-in-Time Labeling</span>
            <span className="role-desc">Process time from 26 to 5 days, 99%+ on time</span>
          </a>
          <a className="role-card" href="/work/rental-business-model">
            <span className="role-title">Sales-to-Rental Business Model</span>
            <span className="role-desc">Launched in 9 months after 10 stalled years</span>
          </a>
          <div className="role-card">
            <span className="role-title">Direct-to-Patient (DTP)</span>
            <span className="role-desc">Clinical trial supply delivered directly to patients</span>
          </div>
        </div>
      </div>

      <div className="transformation-tags">
        <span className="tag">Portfolio Management</span>
        <span className="tag">NPI</span>
        <span className="tag">Stage-Gate</span>
        <span className="tag">Customer Development</span>
        <span className="tag">Jobs-to-be-Done</span>
        <span className="tag">Strategyzer</span>
        <span className="tag">Lean Startup</span>
        <span className="tag">Team Leadership</span>
        <span className="tag">Life Sciences</span>
      </div>
    </>
  );
}
