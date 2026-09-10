'use client';

import type { CSSProperties } from 'react';

export default function Atmosphere() {
  return (
    <div className="atmosphere" aria-hidden="true">
      <div className="atmosphere__fog atmosphere__fog--a" />
      <div className="atmosphere__fog atmosphere__fog--b" />
      <div className="atmosphere__fog atmosphere__fog--c" />
      <div className="atmosphere__motes">
        {Array.from({ length: 18 }, (_, i) => (
          <span
            key={i}
            className="atmosphere__mote"
            style={
              {
                '--x': `${(i * 37) % 100}%`,
                '--delay': `${(i % 9) * 1.1}s`,
                '--dur': `${14 + (i % 7) * 2.5}s`,
                '--size': `${1 + (i % 3)}px`,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
