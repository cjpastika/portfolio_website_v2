import { useScrollReveal } from '../hooks/useScrollReveal';
import './Experience.css';

const ROLES = [
  {
    date: 'JAN 2026 — MAY 2026',
    location: 'CAPE CANAVERAL, FL',
    company: 'NASA',
    title: 'Software Engineering Intern — Spaceport Command & Control Software',
    bullets: [
      'Developed C++ Wireshark plugins to parse multi-protocol telemetry and command data for spacecraft ground systems',
      'Built protocol parsing tools integrating spacecraft data with Launch Control System for mission-critical launch operations',
    ],
  },
  {
    date: 'AUG 2025 — NOV 2025',
    location: 'ORLANDO, FL',
    company: 'DeepWork Capital',
    title: 'Technology & Investment Intern',
    bullets: [
      'Sole developer building custom full-stack web apps, including web scraper and image exporter tools',
      'Translated business needs into technical solutions collaborating with non-technical stakeholders',
    ],
  },
  {
    date: 'MAY 2025 — AUG 2025',
    location: 'TAMPA, FL',
    company: 'CAE',
    title: 'Software Engineering Intern',
    bullets: [
      'Developed VUHF Radio control interface software using TCP/IP, UDP, RS-232 in multi-domain military systems',
      'Coordinated cross-team software and hardware testing for $455M General Dynamics contract',
      'Gained experience with HAVEQUICK and SINCGARS anti-jam systems for contested environments',
    ],
  },
  {
    date: 'MAY 2024 — JUL 2024',
    location: 'ORLANDO, FL',
    company: 'Cru',
    title: 'US Tech Web Engineering Intern',
    bullets: [
      'Supported web app migration from Angular to React (Node.js, GraphQL) serving 90,000+ employees',
    ],
  },
];

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section className="experience fade-in-section" id="experience" ref={ref}>
      <div className="container">
        <span className="section-tag">// EXPERIENCE</span>
        <h2 className="section-heading">OPERATIONS LOG</h2>
        <div className="experience-list">
          {ROLES.map((role, i) => (
            <div key={i} className="experience-card stagger-child">
              <div className="experience-meta">
                <span className="experience-date">{role.date}</span>
                <span className="experience-location">{role.location}</span>
              </div>
              <h3 className="experience-company">{role.company}</h3>
              <p className="experience-title">{role.title}</p>
              <ul className="experience-bullets">
                {role.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
