import { useScrollReveal } from '../hooks/useScrollReveal';
import './Projects.css';

const PROJECTS = [
  {
    name: 'IRON RAIN',
    description: 'Python MAVLink framework targeting ArduPilot/PX4 with ACK-verified attack modules. ESP32/ESP-IDF MitM firmware injecting over a SiK link, hardware-validated on a real airframe.',
    tech: ['Python', 'MAVLink', 'ArduPilot/PX4', 'ESP32', 'ESP-IDF', 'SiK'],
    link: undefined,
  },
  {
    name: 'RE-RASSOR SYSTEM SOFTWARE',
    subtitle: 'Team Lead',
    description: 'Led agile team building autonomous C++/ROS2 navigation with Nav2, OpenCV, and ARUCO for a NASA lunar rover. Engineered multi-threaded SLAM and path planning across Kubernetes-deployed distributed nodes.',
    tech: ['C++', 'ROS2', 'Nav2', 'OpenCV', 'ARUCO', 'Kubernetes'],
    link: undefined,
  },
  {
    name: 'RADIO ANTI-JAM SYSTEM',
    description: '3 radio modules — static, frequency hopping, and jamming — achieving secure wireless communication',
    tech: ['C++', 'Arduino', 'PlatformIO', 'SPI', 'UART'],
    link: 'https://github.com/cjpastika/Radio-Anti-Jam-System',
  },
  {
    name: 'MINI-AWACS RADAR',
    description: 'Modified COTS radar for airspace scanning and real-time UAS domain awareness with SOUTHCOM and DIU',
    tech: ['C++', 'Raymarine API', 'Qt', 'OpenCV'],
    link: 'https://github.com/cjpastika/Radar-HUD',
  },
];

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section className="projects fade-in-section" id="projects" ref={ref}>
      <div className="container">
        <span className="section-tag">// PROJECTS</span>
        <h2 className="section-heading">SYSTEMS DEPLOYED</h2>
        <div className="projects-grid">
          {PROJECTS.map((project, i) => {
            const inner = (
              <>
                <div className="project-header">
                  <h3 className="project-name">
                    {project.name}
                    {project.subtitle && <span className="project-subtitle"> — {project.subtitle}</span>}
                  </h3>
                  {project.link && (
                    <svg className="project-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>
              </>
            );

            return project.link ? (
              <a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card stagger-child"
              >
                {inner}
              </a>
            ) : (
              <div key={i} className="project-card stagger-child">
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
