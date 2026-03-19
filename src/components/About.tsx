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
            Computer Science student at UCF's Burnett Honors College graduating August 2026.
            Currently at NASA Kennedy Space Center developing C++ Wireshark plugins for spacecraft
            telemetry parsing in the Launch Control System. Previously built radio control interface
            software for multi-domain military systems at CAE on a $455M General Dynamics defense contract.
          </p>
          <p className="stagger-child">
            Leading a team building autonomous navigation software for Florida Space Institute's
            rover platform — based on NASA's RASSOR lunar rover — using C++, ROS2, Nav2, OpenCV,
            and Kubernetes. US Citizen with clearance eligibility. Seeking full-time software
            engineering roles in aerospace and defense starting Fall 2026.
          </p>
        </div>
      </div>
    </section>
  );
}
