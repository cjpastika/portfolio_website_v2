import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <span className="hero-label">SOFTWARE ENGINEER // GENERAL DYNAMICS MISSION SYSTEMS</span>
        <h1 className="hero-name">COLLIN PASTIKA</h1>
<span className="hero-orgs">GDMS &middot; NASA &middot; CAE &middot; FLORIDA SPACE INSTITUTE &middot; UCF '26</span>
      </div>
      <div className="hero-scroll-indicator">
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 4L8 20M8 20L2 14M8 20L14 14" stroke="#555555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
