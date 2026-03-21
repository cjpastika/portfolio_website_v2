import { useState, useEffect, useCallback, useRef } from 'react';
import './TerminalSection.css';

export type { TerminalLine };
type TerminalLine =
  | { type: 'heading'; content: string }
  | { type: 'name'; content: string }
  | { type: 'label'; content: string }
  | { type: 'text'; content: string }
  | { type: 'bullet'; content: string }
  | { type: 'link'; content: string; href: string }
  | { type: 'divider' }
  | { type: 'spacer' };

interface Props {
  lines: TerminalLine[];
  isActive: boolean;
  onReady: () => void;
  sectionIndex: number;
  totalSections: number;
  isFirst: boolean;
  isLast: boolean;
  onNext: () => void;
  onPrev: () => void;
}

const LINE_DELAY = 80;

export default function TerminalSection({
  lines, isActive, onReady, sectionIndex, totalSections, isFirst, isLast, onNext, onPrev,
}: Props) {
  const [revealedCount, setRevealedCount] = useState(0);
  const [ready, setReady] = useState(false);
  const onReadyRef = useRef(onReady);
  onReadyRef.current = onReady;

  useEffect(() => {
    if (!isActive) {
      setRevealedCount(0);
      setReady(false);
      return;
    }

    let cancelled = false;
    let idx = 0;

    const step = () => {
      if (cancelled) return;
      idx++;
      setRevealedCount(idx);
      if (idx < lines.length) {
        setTimeout(step, LINE_DELAY);
      } else {
        setTimeout(() => {
          if (!cancelled) {
            setReady(true);
            onReadyRef.current();
          }
        }, 200);
      }
    };

    const t = setTimeout(step, 150);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [isActive, lines.length]);

  const pad = (n: number) => String(n).padStart(2, '0');
  const navHint = isFirst
    ? `[SPACE / →] BEGIN   ${pad(1)} / ${pad(totalSections)}`
    : isLast
    ? `[← ] PREV   [SPACE / →] RESTART   ${pad(sectionIndex + 1)} / ${pad(totalSections)}`
    : `[← ] PREV   [SPACE / →] NEXT   ${pad(sectionIndex + 1)} / ${pad(totalSections)}`;

  const renderLine = useCallback((line: TerminalLine, i: number) => {
    switch (line.type) {
      case 'heading':
        return <div key={i} className="ts-line ts-heading">{line.content}</div>;
      case 'name':
        return <div key={i} className="ts-line ts-name">{line.content}</div>;
      case 'label':
        return <div key={i} className="ts-line ts-label">{line.content}</div>;
      case 'text':
        return <div key={i} className="ts-line ts-text">{line.content}</div>;
      case 'bullet':
        return <div key={i} className="ts-line ts-bullet">{'  · '}{line.content}</div>;
      case 'link':
        return (
          <a
            key={i}
            href={line.href}
            target={line.href.startsWith('mailto') ? undefined : '_blank'}
            rel={line.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            className="ts-line ts-link"
          >
            {'  → '}{line.content}
          </a>
        );
      case 'divider':
        return <div key={i} className="ts-line ts-divider">{'─'.repeat(44)}</div>;
      case 'spacer':
        return <div key={i} className="ts-spacer" />;
    }
  }, []);

  return (
    <div className={`ts-screen ${isActive ? 'ts-active' : ''}`}>
      <div className="ts-scanlines" />
      <div className="ts-content">
        {lines.slice(0, revealedCount).map(renderLine)}
        {isActive && !ready && <span className="ts-cursor" />}
      </div>
      {ready && (
        <>
          <div className="ts-nav-hint">{navHint}</div>
          <div className="ts-mobile-nav">
            <button
              className="ts-mobile-nav-btn"
              onClick={onPrev}
              disabled={isFirst}
              aria-label="Previous section"
            >←</button>
            <span className="ts-mobile-nav-counter">{pad(sectionIndex + 1)} / {pad(totalSections)}</span>
            <button
              className="ts-mobile-nav-btn"
              onClick={onNext}
              aria-label="Next section"
            >→</button>
          </div>
        </>
      )}
    </div>
  );
}
