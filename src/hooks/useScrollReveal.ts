import { useEffect, useRef } from 'react';

export function useScrollReveal(staggerDelay = 100) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            const children = entry.target.querySelectorAll('.stagger-child');
            children.forEach((child, i) => {
              setTimeout(() => {
                child.classList.add('visible');
              }, i * staggerDelay);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [staggerDelay]);

  return ref;
}
