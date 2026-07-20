import { useScrollReveal } from '../hooks/useScrollReveal';
import './Skills.css';

const SKILLS = [
  { category: 'LANGUAGES', items: ['C++', 'C', 'Python', 'Bash', 'JavaScript', 'Java'] },
  { category: 'PROTOCOLS', items: ['TCP/IP', 'UDP', 'RS-232', 'MIL-STD-1553', 'HAVEQUICK', 'SINCGARS', 'DDS'] },
  { category: 'FRAMEWORKS', items: ['ROS2', 'Nav2', 'Qt', 'OpenCV', 'Google Test', 'React.js', 'Node.js'] },
  { category: 'TOOLS', items: ['Git', 'Wireshark', 'CMake', 'Jenkins', 'GitHub Actions', 'Jira', 'Confluence', 'SonarQube', 'Docker', 'Kubernetes', 'Red Hat Linux', 'Ubuntu'] },
];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section className="skills fade-in-section" id="skills" ref={ref}>
      <div className="container">
        <span className="section-tag">// CAPABILITIES</span>
        <h2 className="section-heading">TECH STACK</h2>
        <div className="skills-list">
          {SKILLS.map((row, i) => (
            <div key={i} className="skills-row stagger-child">
              <span className="skills-category">{row.category}</span>
              <span className="skills-items">
                {row.items.map((item, j) => (
                  <span key={j}>
                    {item}
                    {j < row.items.length - 1 && <span className="skills-dot"> &middot; </span>}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
