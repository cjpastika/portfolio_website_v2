import { useState, useEffect, useCallback } from 'react';
import BootSequence from './components/BootSequence';
import Navbar from './components/Navbar';
import TerminalSection from './components/TerminalSection';
import type { TerminalLine } from './components/TerminalSection';

const HERO_LINES: TerminalLine[] = [
  { type: 'divider' },
  { type: 'name', content: 'COLLIN PASTIKA' },
  { type: 'label', content: 'SOFTWARE ENGINEER // AEROSPACE & DEFENSE' },
  { type: 'spacer' },
  { type: 'label', content: "NASA · CAE · FLORIDA SPACE INSTITUTE · UCF '26" },
  { type: 'divider' },
];

const ABOUT_LINES: TerminalLine[] = [
  { type: 'label', content: '// ABOUT' },
  { type: 'heading', content: 'MISSION BRIEF' },
  { type: 'divider' },
  { type: 'text', content: "Computer Science student at UCF's Burnett Honors College graduating August 2026." },
  { type: 'spacer' },
  { type: 'text', content: 'Currently at NASA Kennedy Space Center developing C++ Wireshark plugins for spacecraft telemetry parsing in the Launch Control System.' },
  { type: 'spacer' },
  { type: 'text', content: 'Previously built radio control interface software for multi-domain military systems at CAE on a $455M General Dynamics defense contract.' },
  { type: 'spacer' },
  { type: 'text', content: "Leading autonomous navigation software for FSI's rover platform (based on NASA's RASSOR lunar rover) using C++, ROS2, Nav2, OpenCV, and Kubernetes." },
  { type: 'spacer' },
  { type: 'text', content: 'US Citizen · Clearance eligible · Seeking full-time roles from Fall 2026.' },
];

const EXPERIENCE_LINES: TerminalLine[] = [
  { type: 'label', content: '// EXPERIENCE' },
  { type: 'heading', content: 'OPERATIONS LOG' },
  { type: 'divider' },
  { type: 'label', content: '[JAN 2026 — MAY 2026] // CAPE CANAVERAL, FL' },
  { type: 'heading', content: 'NASA — SOFTWARE ENGINEERING INTERN' },
  { type: 'bullet', content: 'Developed C++ Wireshark plugins to parse multi-protocol telemetry and command data for spacecraft ground systems' },
  { type: 'bullet', content: 'Built protocol parsing tools integrating spacecraft data with Launch Control System for mission-critical launch operations' },
  { type: 'divider' },
  { type: 'label', content: '[AUG 2025 — NOV 2025] // ORLANDO, FL' },
  { type: 'heading', content: 'DEEPWORK CAPITAL — TECHNOLOGY & INVESTMENT INTERN' },
  { type: 'bullet', content: 'Sole developer building custom full-stack web apps, including web scraper and image exporter tools' },
  { type: 'bullet', content: 'Translated business needs into technical solutions collaborating with non-technical stakeholders' },
  { type: 'divider' },
  { type: 'label', content: '[MAY 2025 — AUG 2025] // TAMPA, FL' },
  { type: 'heading', content: 'CAE — SOFTWARE ENGINEERING INTERN' },
  { type: 'bullet', content: 'Developed VUHF Radio control interface software using TCP/IP, UDP, RS-232 in multi-domain military systems' },
  { type: 'bullet', content: 'Coordinated cross-team software and hardware testing for $455M General Dynamics defense contract' },
  { type: 'bullet', content: 'Gained experience with HAVEQUICK and SINCGARS anti-jam systems for contested environments' },
  { type: 'divider' },
  { type: 'label', content: '[MAY 2024 — JUL 2024] // ORLANDO, FL' },
  { type: 'heading', content: 'CRU — US TECH WEB ENGINEERING INTERN' },
  { type: 'bullet', content: 'Supported web app migration from Angular to React (Node.js, GraphQL) serving 90,000+ employees' },
];

const PROJECTS_LINES: TerminalLine[] = [
  { type: 'label', content: '// PROJECTS' },
  { type: 'heading', content: 'SYSTEMS DEPLOYED' },
  { type: 'divider' },
  { type: 'heading', content: 'RE-RASSOR SYSTEM SOFTWARE' },
  { type: 'label', content: 'Team Lead · C++ · ROS2 · Nav2 · OpenCV · ARUCO · Kubernetes' },
  { type: 'text', content: "Autonomous navigation for Florida Space Institute's rover platform, built on NASA's RASSOR lunar rover." },
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
  { type: 'divider' },
  { type: 'heading', content: 'RADAR SIMULATION SYSTEM' },
  { type: 'label', content: 'JavaScript · Node.js · MySQL · C++' },
  { type: 'text', content: 'Radar signal generator simulating moving targets with realistic physics and dynamic signal strengths.' },
  { type: 'link', content: 'github.com/cjpastika/Radar-Data-Visualization', href: 'https://github.com/cjpastika/Radar-Data-Visualization' },
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
  { type: 'text', content: 'Git · Wireshark · CMake · Jenkins · GitHub Actions · Docker · Kubernetes' },
  { type: 'spacer' },
  { type: 'label', content: 'PLATFORMS' },
  { type: 'text', content: 'Red Hat Linux · Ubuntu · Jira · Confluence · SonarQube' },
];

const EDUCATION_LINES: TerminalLine[] = [
  { type: 'label', content: '// EDUCATION' },
  { type: 'divider' },
  { type: 'heading', content: 'UNIVERSITY OF CENTRAL FLORIDA' },
  { type: 'text', content: 'Burnett Honors College' },
  { type: 'text', content: 'B.S. Computer Science · GPA: 3.6 · August 2023 — August 2026' },
  { type: 'spacer' },
  { type: 'label', content: 'SELECTED COURSEWORK' },
  { type: 'text', content: 'Robot Vision · Security in Computing · Cyber Defense Analysis' },
  { type: 'text', content: 'Computer Logic & Organization · Systems Software' },
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
