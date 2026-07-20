import { useScrollReveal } from '../hooks/useScrollReveal';
import './Experience.css';

const ROLES = [
  {
    date: 'AUG 2026 — PRESENT',
    location: 'ORLANDO, FL',
    company: 'General Dynamics Mission Systems',
    title: 'Engineering Leadership Program',
    bullets: [],
  },
  {
    date: 'MAY 2026 — JUL 2026',
    location: 'TAMPA, FL',
    company: 'CAE',
    title: 'Software Engineering Intern',
    bullets: [
      'Prototyped 0→1 radio comms simulation for the FLRAA/Cheyenne II and wrote requirements-based test manuals',
      'Contributed to an F-16 SAR radar simulator by adding shared-memory target insertion, resolution scaling, and GUI updates',
    ],
  },
  {
    date: 'JAN 2026 — MAY 2026',
    location: 'CAPE CANAVERAL, FL',
    company: 'NASA',
    title: 'Software Engineering Intern',
    bullets: [
      'Built XTCE parser which cut dissector load time 98% (3min to 4s) and developed 5 Wireshark dissectors for Artemis III+',
      'Resolved Orion dissector bug for Artemis II post-launch analysis, fixing command storage and duplicate ID handling',
    ],
  },
  {
    date: 'AUG 2025 — NOV 2025',
    location: 'ORLANDO, FL',
    company: 'DeepWork Capital',
    title: 'Technology & Investment Intern',
    bullets: [
      'Architected full-stack web apps as a sole developer, including a web scraper and image exporter, to streamline workflows',
      'Translated business needs into technical solutions by collaborating with non-technical stakeholders',
    ],
  },
  {
    date: 'MAY 2025 — AUG 2025',
    location: 'TAMPA, FL',
    company: 'CAE',
    title: 'Software Engineering Intern',
    bullets: [
      'Developed VUHF Radio control interface software using TCP/IP, UDP, and RS-232, increasing ATP pass rate 50%',
      'Leveraged internal messaging frameworks like Wraith and dispatchers to test low-level comms and system synchronization',
    ],
  },
  {
    date: 'MAY 2024 — JUL 2024',
    location: 'ORLANDO, FL',
    company: 'Cru',
    title: 'Web Engineering Intern',
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
