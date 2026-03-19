import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

const LINKS = [
  { label: 'EMAIL', value: 'cjpastika.opportunities@gmail.com', href: 'mailto:cjpastika.opportunities@gmail.com' },
  { label: 'LINKEDIN', value: 'linkedin.com/in/collin-pastika', href: 'https://linkedin.com/in/collin-pastika' },
  { label: 'GITHUB', value: 'github.com/cjpastika', href: 'https://github.com/cjpastika' },
];

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section className="contact fade-in-section" id="contact" ref={ref}>
      <div className="container">
        <span className="section-tag">// CONTACT</span>
        <h2 className="section-heading">ESTABLISH CONNECTION</h2>
        <div className="contact-links">
          {LINKS.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="contact-row stagger-child"
            >
              <span className="contact-label">{link.label}</span>
              <span className="contact-value">{link.value}</span>
            </a>
          ))}
        </div>
      </div>
      <footer className="footer">
        &copy; 2026 COLLIN PASTIKA
      </footer>
    </section>
  );
}
