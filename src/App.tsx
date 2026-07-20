import { useState, useEffect, useCallback } from 'react';
import BootSequence from './components/BootSequence';
import Navbar from './components/Navbar';
import TerminalSection from './components/TerminalSection';
import type { TerminalLine } from './components/TerminalSection';

const HERO_LINES: TerminalLine[] = [
  { type: 'divider' },
  { type: 'name', content: 'COLLIN PASTIKA' },
  { type: 'label', content: 'SOFTWARE ENGINEER // GENERAL DYNAMICS MISSION SYSTEMS' },
  { type: 'spacer' },
  { type: 'label', content: "GDMS · NASA · CAE · FLORIDA SPACE INSTITUTE · UCF '26" },
  { type: 'divider' },
];

const ABOUT_LINES: TerminalLine[] = [
  { type: 'label', content: '// ABOUT' },
  { type: 'heading', content: 'MISSION BRIEF' },
  { type: 'divider' },
  { type: 'text', content: "UCF Burnett Honors College graduate with a B.S. in Computer Science." },
  { type: 'spacer' },
  { type: 'text', content: 'Software engineer at General Dynamics Mission Systems in the Engineering Leadership Program.' },
  { type: 'spacer' },
  { type: 'text', content: 'Previously at NASA Kennedy Space Center building Wireshark dissectors for Artemis II and III+ spacecraft telemetry.' },
  { type: 'spacer' },
  { type: 'text', content: 'Built radio control interface software and F-16 SAR radar simulation tools at CAE for General Dynamics defense contracts.' },
  { type: 'spacer' },
  { type: 'text', content: "Led autonomous navigation software for FSI's rover platform (based on NASA's RASSOR lunar rover) using C++, ROS2, Nav2, OpenCV, and Kubernetes." },
  { type: 'spacer' },
  { type: 'text', content: 'US Citizen · Clearance eligible.' },
];

const EXPERIENCE_LINES: TerminalLine[] = [
  { type: 'label', content: '// EXPERIENCE' },
  { type: 'heading', content: 'OPERATIONS LOG' },
  { type: 'divider' },
  { type: 'label', content: '[AUG 2026 — PRESENT] // ORLANDO, FL' },
  { type: 'heading', content: 'GENERAL DYNAMICS MISSION SYSTEMS — SOFTWARE ENGINEER' },
  { type: 'bullet', content: 'Engineering Leadership Program' },
  { type: 'divider' },
  { type: 'label', content: '[MAY 2026 — JUL 2026] // TAMPA, FL' },
  { type: 'heading', content: 'CAE — SOFTWARE ENGINEERING INTERN' },
  { type: 'bullet', content: 'Prototyped 0→1 radio comms simulation for the FLRAA/Cheyenne II and wrote requirements-based test manuals' },
  { type: 'bullet', content: 'Contributed to an F-16 SAR radar simulator by adding shared-memory target insertion, resolution scaling, and GUI updates' },
  { type: 'divider' },
  { type: 'label', content: '[JAN 2026 — MAY 2026] // CAPE CANAVERAL, FL' },
  { type: 'heading', content: 'NASA — SOFTWARE ENGINEERING INTERN' },
  { type: 'bullet', content: 'Built XTCE parser which cut dissector load time 98% (3min to 4s) and developed 5 Wireshark dissectors for Artemis III+' },
  { type: 'bullet', content: 'Resolved Orion dissector bug for Artemis II post-launch analysis, fixing command storage and duplicate ID handling' },
  { type: 'divider' },
  { type: 'label', content: '[AUG 2025 — NOV 2025] // ORLANDO, FL' },
  { type: 'heading', content: 'DEEPWORK CAPITAL — TECHNOLOGY & INVESTMENT INTERN' },
  { type: 'bullet', content: 'Architected full-stack web apps as a sole developer, including a web scraper and image exporter, to streamline workflows' },
  { type: 'bullet', content: 'Translated business needs into technical solutions by collaborating with non-technical stakeholders' },
  { type: 'divider' },
  { type: 'label', content: '[MAY 2025 — AUG 2025] // TAMPA, FL' },
  { type: 'heading', content: 'CAE — SOFTWARE ENGINEERING INTERN' },
  { type: 'bullet', content: 'Developed VUHF Radio control interface software using TCP/IP, UDP, and RS-232, increasing ATP pass rate 50%' },
  { type: 'bullet', content: 'Leveraged internal messaging frameworks like Wraith and dispatchers to test low-level comms and system synchronization' },
  { type: 'divider' },
  { type: 'label', content: '[MAY 2024 — JUL 2024] // ORLANDO, FL' },
  { type: 'heading', content: 'CRU — WEB ENGINEERING INTERN' },
  { type: 'bullet', content: 'Supported web app migration from Angular to React (Node.js, GraphQL) serving 90,000+ employees' },
];

const PROJECTS_LINES: TerminalLine[] = [
  { type: 'label', content: '// PROJECTS' },
  { type: 'heading', content: 'SYSTEMS DEPLOYED' },
  { type: 'divider' },
  { type: 'heading', content: 'IRON RAIN' },
  { type: 'label', content: 'Python · MAVLink · ArduPilot/PX4 · ESP32 · ESP-IDF · SiK' },
  { type: 'text', content: 'Python MAVLink framework targeting ArduPilot/PX4 with 7 ACK-verified attack modules, validated in ArduCopter.' },
  { type: 'text', content: 'ESP32/ESP-IDF MAVLink MitM firmware injecting over a SiK link, hardware-validated on a real airframe.' },
  { type: 'divider' },
  { type: 'heading', content: 'RE-RASSOR SYSTEM SOFTWARE' },
  { type: 'label', content: 'Team Lead · C++ · ROS2 · Nav2 · OpenCV · ARUCO · Kubernetes' },
  { type: 'text', content: 'Led agile team building autonomous C++/ROS2 navigation with Nav2, OpenCV, and ARUCO for a NASA lunar rover.' },
  { type: 'text', content: 'Engineered multi-threaded SLAM and path planning across Kubernetes-deployed distributed nodes.' },
  { type: 'divider' },
  { type: 'heading', content: 'RADIO ANTI-JAM SYSTEM' },
  { type: 'label', content: 'C++ · Arduino · PlatformIO · SPI · UART' },
  { type: 'text', content: '3 radio modules — static, frequency hopping, and jamming — achieving secure wireless communication.' },
  { type: 'link', content: 'github.com/cjpastika/Radio-Anti-Jam-System', href: 'https://github.com/cjpastika/Radio-Anti-Jam-System' },
  { type: 'divider' },
  { type: 'heading', content: 'MINI-AWACS RADAR' },
  { type: 'label', content: 'C++ · Raymarine API · Qt · OpenCV' },
  { type: 'text', content: 'Modified COTS radar for airspace scanning and real-time UAS domain awareness with SOUTHCOM and DIU.' },
  { type: 'link', content: 'github.com/cjpastika/Radar-HUD', href: 'https://github.com/cjpastika/Radar-HUD' },
];

const SKILLS_LINES: TerminalLine[] = [
  { type: 'label', content: '// CAPABILITIES' },
  { type: 'heading', content: 'TECH STACK' },
  { type: 'divider' },
  { type: 'label', content: 'LANGUAGES' },
  { type: 'text', content: 'C++ · C · Python · Bash · JavaScript · Java' },
  { type: 'spacer' },
  { type: 'label', content: 'PROTOCOLS' },
  { type: 'text', content: 'TCP/IP · UDP · RS-232 · MIL-STD-1553 · HAVEQUICK · SINCGARS · DDS' },
  { type: 'spacer' },
  { type: 'label', content: 'FRAMEWORKS' },
  { type: 'text', content: 'ROS2 · Nav2 · Qt · OpenCV · Google Test · React.js · Node.js' },
  { type: 'spacer' },
  { type: 'label', content: 'TOOLS' },
  { type: 'text', content: 'Git · Wireshark · CMake · Jenkins · GitHub Actions · Jira · Confluence · SonarQube · Docker · Kubernetes · Red Hat Linux · Ubuntu' },
];

const EDUCATION_LINES: TerminalLine[] = [
  { type: 'label', content: '// EDUCATION' },
  { type: 'divider' },
  { type: 'heading', content: 'UNIVERSITY OF CENTRAL FLORIDA' },
  { type: 'text', content: 'Burnett Honors College' },
  { type: 'text', content: 'B.S. Computer Science · GPA: 3.7 · August 2023 — July 2026' },
  { type: 'spacer' },
  { type: 'label', content: 'SELECTED COURSEWORK' },
  { type: 'text', content: 'Robot Vision · Security in Computing · Cyber Defense Analysis' },
  { type: 'text', content: 'Computer Logic & Organization · Systems Software · Entrepreneurship for Defense' },
];

const CONTACT_LINES: TerminalLine[] = [
  { type: 'label', content: '// CONTACT' },
  { type: 'heading', content: 'ESTABLISH CONNECTION' },
  { type: 'divider' },
  { type: 'label', content: 'EMAIL' },
  { type: 'link', content: 'cjpastika.opportunities@gmail.com', href: 'mailto:cjpastika.opportunities@gmail.com' },
  { type: 'spacer' },
  { type: 'label', content: 'LINKEDIN' },
  { type: 'link', content: 'linkedin.com/in/collin-pastika', href: 'https://linkedin.com/in/collin-pastika' },
  { type: 'spacer' },
  { type: 'label', content: 'GITHUB' },
  { type: 'link', content: 'github.com/cjpastika', href: 'https://github.com/cjpastika' },
  { type: 'spacer' },
  { type: 'divider' },
  { type: 'label', content: '© 2026 COLLIN PASTIKA' },
];

const SECTIONS = [
  { id: 'hero',       lines: HERO_LINES },
  { id: 'about',      lines: ABOUT_LINES },
  { id: 'experience', lines: EXPERIENCE_LINES },
  { id: 'projects',   lines: PROJECTS_LINES },
  { id: 'skills',     lines: SKILLS_LINES },
  { id: 'education',  lines: EDUCATION_LINES },
  { id: 'contact',    lines: CONTACT_LINES },
];

export default function App() {
  const [booted, setBooted] = useState(() => sessionStorage.getItem('bootCompleted') === 'true');
  const [showSite, setShowSite] = useState(booted);
  const [currentSection, setCurrentSection] = useState(0);
  const [sectionReady, setSectionReady] = useState(false);

  const handleBootComplete = () => {
    window.scrollTo(0, 0);
    sessionStorage.setItem('bootCompleted', 'true');
    setBooted(true);
  };

  useEffect(() => {
    if (booted && !showSite) {
      requestAnimationFrame(() => setShowSite(true));
    }
  }, [booted, showSite]);

  const navigateTo = useCallback((i: number) => {
    setCurrentSection(i);
    setSectionReady(false);
  }, []);

  const goNext = useCallback(() => {
    if (!sectionReady) return;
    navigateTo(currentSection === SECTIONS.length - 1 ? 0 : currentSection + 1);
  }, [sectionReady, currentSection, navigateTo]);

  const goPrev = useCallback(() => {
    if (!sectionReady || currentSection === 0) return;
    navigateTo(currentSection - 1);
  }, [sectionReady, currentSection, navigateTo]);

  const handleSectionReady = useCallback(() => setSectionReady(true), []);

  useEffect(() => {
    if (!showSite) return;
    const onKey = (e: KeyboardEvent) => {
      if (['ArrowRight', 'ArrowDown', ' ', 'Enter'].includes(e.key)) {
        e.preventDefault();
        goNext();
      } else if (['ArrowLeft', 'ArrowUp'].includes(e.key)) {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showSite, goNext, goPrev]);

  useEffect(() => {
    if (!showSite) return;
    let startX = 0;
    const onTouchStart = (e: TouchEvent) => { startX = e.touches[0].clientX; };
    const onTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) dx < 0 ? goNext() : goPrev();
    };
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [showSite, goNext, goPrev]);

  return (
    <>
      {!booted && <BootSequence onComplete={handleBootComplete} />}
      {showSite && (
        <>
          <Navbar currentSection={currentSection} navigateTo={navigateTo} />
          {SECTIONS.map((section, i) => (
            <TerminalSection
              key={section.id}
              lines={section.lines}
              isActive={currentSection === i}
              onReady={handleSectionReady}
              sectionIndex={i}
              totalSections={SECTIONS.length}
              isFirst={i === 0}
              isLast={i === SECTIONS.length - 1}
              onNext={goNext}
              onPrev={goPrev}
            />
          ))}
        </>
      )}
    </>
  );
}
