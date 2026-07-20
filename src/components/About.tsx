import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

export default function About() {
  const ref = useScrollReveal();

  return (
    <section className="about fade-in-section" id="about" ref={ref}>
      <div className="container">
        <span className="section-tag">// ABOUT</span>
        <h2 className="section-heading">MISSION BRIEF</h2>
        <div className="about-content">
          <p className="stagger-child">
            UCF Burnett Honors College graduate with a B.S. in Computer Science.
            Software engineer at General Dynamics Mission Systems in the Engineering Leadership Program.
          </p>
          <p className="stagger-child">
            Previously at NASA Kennedy Space Center building Wireshark dissectors for Artemis II
            and III+ spacecraft telemetry. Built radio control interface software and F-16 SAR
            radar simulation tools at CAE for General Dynamics defense contracts.
          </p>
          <p className="stagger-child">
            Led autonomous navigation software for Florida Space Institute's rover platform —
            based on NASA's RASSOR lunar rover — using C++, ROS2, Nav2, OpenCV, and Kubernetes.
            US Citizen with clearance eligibility.
          </p>
        </div>
      </div>
    </section>
  );
}
