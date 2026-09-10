'use client';

const assetBase = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Atmosphere() {
  return (
    <div className="atmosphere" aria-hidden="true">
      <div className="atmosphere__wash" />
      <div
        className="atmosphere__photo"
        style={{
          backgroundImage: `url(${assetBase}/metalheart-ref.png)`,
        }}
      />
      <div className="atmosphere__bloom" />

      <svg
        className="atmosphere__art"
        viewBox="0 0 1600 1200"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="leftDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d1520" stopOpacity="1" />
            <stop offset="45%" stopColor="#1a2740" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#1a2130" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="girder" x1="0%" y1="100%" x2="80%" y2="0%">
            <stop offset="0%" stopColor="#0a1018" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#24344c" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#6a7f9a" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="lightBeam" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="45%" stopColor="#e8f0f8" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="ghostChevron" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c5ced6" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#b0bac4" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#d8dee4" stopOpacity="0.12" />
          </linearGradient>
          <pattern
            id="dotGrid"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.7" fill="#7a90a8" opacity="0.35" />
          </pattern>
          <filter id="softBlur">
            <feGaussianBlur stdDeviation="14" />
          </filter>
          <filter id="midBlur">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        {/* LEFT: reinforce photo with dark veil + HUD only (photo carries girders) */}
        <path
          className="atmosphere__dark-mass"
          d="M-40 -40 L560 -40 L300 1280 L-40 1280 Z"
          fill="url(#leftDark)"
          opacity="0.28"
        />
        <rect
          x="0"
          y="0"
          width="160"
          height="1200"
          fill="url(#dotGrid)"
          opacity="0.3"
        />
        <rect x="0" y="0" width="18" height="1200" fill="#152033" opacity="0.65" />

        {/* Left HUD micro-graphics */}
        <g fill="#c5d4e4" opacity="0.55">
          <rect x="40" y="180" width="3" height="10" />
          <rect x="46" y="186" width="3" height="8" />
          <rect x="52" y="182" width="3" height="12" />
          <rect x="40" y="320" width="2" height="6" />
          <rect x="45" y="318" width="2" height="10" />
          <rect x="50" y="322" width="2" height="5" />
          <rect x="40" y="520" width="8" height="2" />
          <rect x="40" y="526" width="5" height="2" />
          <rect x="40" y="532" width="11" height="2" />
          <rect x="40" y="700" width="3" height="14" />
          <rect x="46" y="706" width="3" height="8" />
        </g>
        <g fill="none" stroke="#9eb0c4" strokeWidth="1.2" opacity="0.5">
          <circle cx="56" cy="980" r="10" />
          <circle cx="56" cy="980" r="5" />
          <circle cx="56" cy="1018" r="10" />
          <circle cx="56" cy="1018" r="5" />
        </g>

        {/* RIGHT: ghosted chevron bands (reference right concentration) */}
        <g className="atmosphere__right-shapes">
          <path
            d="M980 780 L1380 420 L1480 480 L1080 840 Z"
            fill="url(#ghostChevron)"
          />
          <path
            d="M1020 860 L1420 500 L1500 555 L1100 915 Z"
            fill="#c5ced6"
            opacity="0.16"
          />
          <path
            d="M1060 940 L1460 580 L1520 630 L1120 990 Z"
            fill="#b8c2cc"
            opacity="0.12"
          />
          <path
            d="M920 640 L1280 320 L1340 365 L980 685 Z"
            fill="#d0d6dc"
            opacity="0.14"
          />
          {/* Soft parallelogram slab behind mark cluster */}
          <path
            d="M1180 520 L1520 480 L1500 620 L1160 650 Z"
            fill="#d8dee4"
            opacity="0.28"
          />
          <path
            d="M1220 700 L1580 640 L1600 780 L1240 820 Z"
            fill="#cfd6dd"
            opacity="0.2"
          />
        </g>

        {/* Right hairlines + crosshairs */}
        <g stroke="#b0bac4" strokeWidth="1" opacity="0.55">
          <line x1="1180" y1="0" x2="1180" y2="420" />
          <line x1="1180" y1="560" x2="1600" y2="560" />
          <line x1="980" y1="720" x2="1600" y2="720" />
          <line x1="1400" y1="200" x2="1400" y2="900" />
          <g stroke="#9aa6b2" strokeWidth="1.15">
            <line x1="1572" y1="556" x2="1588" y2="556" />
            <line x1="1580" y1="548" x2="1580" y2="564" />
            <line x1="1172" y1="412" x2="1188" y2="412" />
            <line x1="1180" y1="404" x2="1180" y2="420" />
            <line x1="1392" y1="716" x2="1408" y2="716" />
            <line x1="1400" y1="708" x2="1400" y2="724" />
          </g>
        </g>

        {/* Right mark cluster — original geometric block (not their logo) */}
        <g className="atmosphere__mark-cluster" transform="translate(1240, 560)">
          <g fill="none" stroke="#9aa6b2" strokeWidth="1.4" opacity="0.7">
            <circle cx="18" cy="0" r="11" />
            <circle cx="18" cy="0" r="5.5" />
            <circle cx="52" cy="0" r="11" />
            <circle cx="52" cy="0" r="5.5" />
          </g>
          {/* Blocky abstract emblem */}
          <path
            d="M0 36 L42 28 L58 28 L58 96 L28 96 L28 68 L0 72 Z"
            fill="#1a2130"
          />
          <path
            d="M66 28 L118 28 L118 96 L88 96 L88 52 L66 52 Z"
            fill="#1a2130"
          />
          <rect x="0" y="108" width="78" height="6" fill="#1a2130" opacity="0.85" />
          <rect x="0" y="118" width="48" height="3" fill="#6b7782" opacity="0.7" />
        </g>
      </svg>

      {/* Right-edge column like the reference logo strip */}
      <div className="atmosphere__side">
        <span className="atmosphere__side-line" />
        <span className="atmosphere__side-line atmosphere__side-line--mid" />
        <span className="atmosphere__side-mark">+</span>
        <div className="atmosphere__side-rings">
          <span />
          <span />
        </div>
        <div className="atmosphere__side-brand" />
        <div className="atmosphere__side-rule" />
        <div className="atmosphere__side-panel" />
      </div>
    </div>
  );
}
