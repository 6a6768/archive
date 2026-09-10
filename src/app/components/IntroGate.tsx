'use client';

import { useEffect, useState } from 'react';

type IntroGateProps = {
  onEnter: () => void;
};

export default function IntroGate({ onEnter }: IntroGateProps) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') return;
      onEnter();
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onEnter]);

  return (
    <div className="intro-gate" role="dialog" aria-label="Enter portfolio">
      <button type="button" className="intro-gate__hit" onClick={onEnter}>
        <div className="intro-gate__frame" aria-hidden="true">
          <span className="hud-corner hud-corner--tl" />
          <span className="hud-corner hud-corner--tr" />
          <span className="hud-corner hud-corner--bl" />
          <span className="hud-corner hud-corner--br" />
        </div>
        <p className="intro-gate__mark">Portfolio</p>
        <h1 className="intro-gate__title">Jesus Rafael Palo</h1>
        <p className="intro-gate__line">
          Work across systems, models, and the web.
        </p>
        <span className="intro-gate__cta" aria-hidden="true">
          →
        </span>
        <span className="intro-gate__hint">Click or press any key</span>
      </button>
    </div>
  );
}

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const [phase, setPhase] = useState<'boot' | 'gate' | 'site'>('boot');

  useEffect(() => {
    const seen = sessionStorage.getItem('archive-entered') === '1';
    setPhase(seen ? 'site' : 'gate');
  }, []);

  const enter = () => {
    sessionStorage.setItem('archive-entered', '1');
    setPhase('site');
  };

  if (phase === 'boot') {
    return <div className="site-boot" aria-hidden="true" />;
  }

  if (phase === 'gate') {
    return <IntroGate onEnter={enter} />;
  }

  return <div className="site-entered">{children}</div>;
}
