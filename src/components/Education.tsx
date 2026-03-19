import { useScrollReveal } from '../hooks/useScrollReveal';
import './Education.css';

export default function Education() {
  const ref = useScrollReveal();

  return (
    <section className="education fade-in-section" id="education" ref={ref}>
      <div className="container">
        <span className="section-tag">// EDUCATION</span>
        <div className="education-block stagger-child">
          <h3 className="education-school">UNIVERSITY OF CENTRAL FLORIDA</h3>
          <p className="education-college">Burnett Honors College</p>
          <p className="education-details">
            B.S. Computer Science &middot; GPA: 3.6 &middot; August 2023 — August 2026
          </p>
          <p className="education-courses">
            <span className="education-courses-label">Selected Coursework:</span> Robot Vision,
            Security in Computing, Cyber Defense Analysis, Computer Logic &amp; Organization,
            Systems Software
          </p>
        </div>
      </div>
    </section>
  );
}
