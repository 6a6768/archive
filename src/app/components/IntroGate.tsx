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
      <button
        type="button"
        className="intro-gate__hit"
        onClick={onEnter}
        aria-label="Enter"
      >
        <span className="intro-orb" aria-hidden="true">
          <span className="intro-orb__ring intro-orb__ring--outer" />
          <span className="intro-orb__ring intro-orb__ring--mid" />
          <span className="intro-orb__ring intro-orb__ring--inner" />
          <span className="intro-orb__core" />
          <span className="intro-orb__tick intro-orb__tick--n" />
          <span className="intro-orb__tick intro-orb__tick--e" />
          <span className="intro-orb__tick intro-orb__tick--s" />
          <span className="intro-orb__tick intro-orb__tick--w" />
        </span>
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
