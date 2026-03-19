import { useState, useEffect, useCallback } from 'react';
import './BootSequence.css';

interface BootLine {
  text: string;
  suffix?: string;
}

const BOOT_LINES: BootLine[] = [
  { text: '> INITIALIZING SYSTEM...' },
  { text: '> LOADING KERNEL MODULES..............', suffix: ' [OK]' },
  { text: '> ESTABLISHING SECURE CONNECTION......', suffix: ' [OK]' },
  { text: '> AUTHENTICATING CREDENTIALS..........', suffix: ' [OK]' },
  { text: '> CLEARANCE: ELIGIBLE' },
  { text: '> OPERATOR: COLLIN PASTIKA' },
  { text: '> ROLE: SOFTWARE ENGINEER' },
  { text: '> SECTOR: AEROSPACE // DEFENSE' },
  { text: '> STATUS: ACTIVE' },
  { text: '>' },
  { text: '> SYSTEM ONLINE. WELCOME.' },
];

const CHAR_DELAY = 22;
const SUFFIX_DELAY = 150;
const INITIAL_DELAY = 250;
const END_PAUSE = 400;
const FADE_DURATION = 500;

interface Props {
  onComplete: () => void;
}

export default function BootSequence({ onComplete }: Props) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineText, setCurrentLineText] = useState('');
  const [phase, setPhase] = useState<'delay' | 'typing' | 'waiting' | 'fading' | 'done'>('delay');
  const [lineIndex, setLineIndex] = useState(0);

  const finish = useCallback(() => {
    setPhase('fading');
    setTimeout(() => {
      setPhase('done');
      onComplete();
    }, FADE_DURATION);
  }, [onComplete]);

  // Initial delay
  useEffect(() => {
    if (phase !== 'delay') return;
    const t = setTimeout(() => setPhase('typing'), INITIAL_DELAY);
    return () => clearTimeout(t);
  }, [phase]);

  // Typing logic
  useEffect(() => {
    if (phase !== 'typing') return;
    if (lineIndex >= BOOT_LINES.length) {
      const t = setTimeout(() => setPhase('waiting'), END_PAUSE);
      return () => clearTimeout(t);
    }

    const line = BOOT_LINES[lineIndex];
    const fullText = line.text;
    let charIdx = 0;

    setCurrentLineText('');

    const typeChar = () => {
      if (charIdx < fullText.length) {
        charIdx++;
        setCurrentLineText(fullText.slice(0, charIdx));
        setTimeout(typeChar, CHAR_DELAY);
      } else if (line.suffix) {
        setTimeout(() => {
          setCurrentLineText(fullText + line.suffix);
          setTimeout(advanceLine, 100);
        }, SUFFIX_DELAY);
      } else {
        setTimeout(advanceLine, 100);
      }
    };

    const advanceLine = () => {
      setDisplayedLines((prev) => [
        ...prev,
        fullText + (line.suffix || ''),
      ]);
      setCurrentLineText('');
      setLineIndex((i) => i + 1);
    };

    typeChar();
  }, [phase, lineIndex, finish]);

  // Key/click listener during waiting phase
  useEffect(() => {
    if (phase !== 'waiting') return;
    const handler = () => finish();
    window.addEventListener('keydown', handler);
    window.addEventListener('pointerdown', handler);
    return () => {
      window.removeEventListener('keydown', handler);
      window.removeEventListener('pointerdown', handler);
    };
  }, [phase, finish]);

  if (phase === 'done') return null;

  return (
    <div className={`boot-screen ${phase === 'fading' ? 'boot-fading' : ''}`}>
      <div className="boot-scanlines" />
      <div className="boot-content">
        {displayedLines.map((line, i) => (
          <div key={i} className="boot-line">{line}</div>
        ))}
        {phase === 'typing' && (
          <div className="boot-line">
            {currentLineText}
            <span className="boot-cursor" />
          </div>
        )}
        {phase === 'waiting' && (
          <div className="boot-line boot-prompt">_ PRESS ANY KEY TO ENTER</div>
        )}
      </div>
    </div>
  );
}
