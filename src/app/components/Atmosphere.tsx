'use client';

export default function Atmosphere() {
  return (
    <div className="atmosphere" aria-hidden="true">
      <div className="atmosphere__wash" />

      <svg
        className="atmosphere__art"
        viewBox="0 0 1600 1200"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="darkWing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a2130" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#2a3344" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#1a2130" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="darkPanel" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#243040" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#1a2130" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#121820" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="slateBar" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3a4656" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#1a2130" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="chromeRib" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1a2130" stopOpacity="0" />
            <stop offset="35%" stopColor="#2f3b4c" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#1a2130" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="acidRib" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3d7a72" stopOpacity="0" />
            <stop offset="45%" stopColor="#3d7a72" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#3d7a72" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lightCut" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="glass" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#c5d0da" stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id="softBurst" cx="22%" cy="18%" r="35%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#e8eef2" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glowOrb" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5aa89c" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#5aa89c" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="1600" height="1200" fill="url(#softBurst)" />
        <circle cx="1320" cy="180" r="160" fill="url(#glowOrb)" />
        <circle cx="220" cy="860" r="120" fill="url(#glowOrb)" opacity="0.7" />

        {/* Large dark wings */}
        <path
          className="atmosphere__wing atmosphere__wing--a"
          d="M1020 60 L1600 -20 L1600 380 L1120 470 Z"
          fill="url(#darkWing)"
        />
        <path
          className="atmosphere__wing atmosphere__wing--b"
          d="M1180 420 L1600 340 L1600 820 L1240 900 Z"
          fill="url(#darkPanel)"
        />
        <path
          className="atmosphere__wing atmosphere__wing--c"
          d="-60 580 L460 500 L400 980 L-60 1040 Z"
          fill="url(#darkPanel)"
        />
        <path
          className="atmosphere__wing atmosphere__wing--d"
          d="M640 40 L920 -10 L880 220 L620 250 Z"
          fill="url(#darkWing)"
          opacity="0.55"
        />

        {/* Mid shards / broken chrome panels */}
        <g className="atmosphere__shards">
          <polygon points="780,180 920,140 960,260 820,290" fill="#1a2130" opacity="0.55" />
          <polygon points="860,210 1020,170 1060,300 900,330" fill="#2a3344" opacity="0.4" />
          <polygon points="140,120 280,80 310,200 170,230" fill="#1a2130" opacity="0.35" />
          <polygon points="200,150 320,120 340,230 220,250" fill="#3a4656" opacity="0.3" />
          <polygon points="980,700 1140,660 1200,820 1020,850" fill="#1a2130" opacity="0.45" />
          <polygon points="1080,740 1220,710 1260,860 1120,880" fill="#243040" opacity="0.35" />
          <polygon points="520,780 680,740 720,900 560,930" fill="#1a2130" opacity="0.28" />
          <polygon points="1480,900 1600,860 1600,1040 1500,1060" fill="#1a2130" opacity="0.5" />
        </g>

        {/* Layered parallelograms */}
        <path d="M700 720 L1160 650 L1100 1040 L740 1080 Z" fill="#1a2130" opacity="0.2" />
        <path d="M40 40 L220 10 L200 120 L30 140 Z" fill="url(#slateBar)" />
        <path d="M880 300 L1280 250 L1260 320 L900 360 Z" fill="url(#slateBar)" />
        <path d="M40 360 L360 330 L350 390 L50 410 Z" fill="url(#slateBar)" />
        <path d="M560 480 L780 450 L760 520 L550 540 Z" fill="url(#slateBar)" opacity="0.7" />
        <path d="M1300 980 L1560 940 L1540 1020 L1290 1045 Z" fill="url(#slateBar)" />

        {/* Glass / translucent overlays */}
        <path
          className="atmosphere__glass"
          d="M1050 200 L1380 120 L1420 280 L1100 340 Z"
          fill="url(#glass)"
        />
        <path
          className="atmosphere__glass atmosphere__glass--b"
          d="M80 700 L320 660 L300 820 L70 850 Z"
          fill="url(#glass)"
        />

        {/* Pixel-bar clusters */}
        <g opacity="0.55">
          <rect x="48" y="250" width="5" height="70" fill="#1a2130" />
          <rect x="58" y="268" width="5" height="42" fill="#3d7a72" />
          <rect x="68" y="258" width="5" height="55" fill="#3a4656" />
          <rect x="1510" y="200" width="5" height="90" fill="#1a2130" />
          <rect x="1520" y="220" width="5" height="55" fill="#3d7a72" />
          <rect x="1530" y="210" width="5" height="70" fill="#3a4656" />
          <rect x="420" y="980" width="5" height="60" fill="#1a2130" />
          <rect x="430" y="995" width="5" height="35" fill="#3d7a72" />
          <rect x="440" y="988" width="5" height="48" fill="#3a4656" />
        </g>

        {/* Light edge cuts on dark forms */}
        <path d="M1120 140 L1580 70" stroke="url(#lightCut)" strokeWidth="2" />
        <path d="M1240 520 L1580 460" stroke="url(#lightCut)" strokeWidth="1.5" />
        <path d="M660 70 L900 30" stroke="url(#lightCut)" strokeWidth="1.5" />
        <path d="M20 620 L420 550" stroke="url(#lightCut)" strokeWidth="1.25" opacity="0.6" />

        {/* Technical line grid accents */}
        <g stroke="#1a2130" strokeWidth="1" opacity="0.28">
          <line x1="0" y1="220" x2="380" y2="220" />
          <line x1="0" y1="540" x2="240" y2="540" />
          <line x1="1040" y1="620" x2="1600" y2="620" />
          <line x1="600" y1="120" x2="900" y2="120" />
          <line x1="200" y1="960" x2="520" y2="960" />
          <g stroke="#1a2130" strokeWidth="1.2" opacity="0.5">
            <line x1="1280" y1="616" x2="1294" y2="616" />
            <line x1="1287" y1="609" x2="1287" y2="623" />
            <line x1="500" y1="956" x2="514" y2="956" />
            <line x1="507" y1="949" x2="507" y2="963" />
          </g>
        </g>

        {/* Ribbons */}
        <path
          className="atmosphere__ribbon"
          d="M-20 280 C260 160 420 400 680 260 S1100 140 1400 280"
          stroke="url(#chromeRib)"
          strokeWidth="16"
          fill="none"
        />
        <path
          className="atmosphere__ribbon atmosphere__ribbon--slow"
          d="M80 880 C360 760 540 1000 840 840 S1260 720 1620 860"
          stroke="url(#chromeRib)"
          strokeWidth="11"
          fill="none"
        />
        <path
          className="atmosphere__ribbon atmosphere__ribbon--acid"
          d="M200 500 C480 440 720 580 960 500 S1320 420 1560 520"
          stroke="url(#acidRib)"
          strokeWidth="2.5"
          fill="none"
        />

        {/* HUD rings + dots */}
        <g fill="none" stroke="#1a2130" strokeWidth="1.5" opacity="0.4">
          <circle cx="180" cy="400" r="16" />
          <circle cx="180" cy="400" r="9" />
          <circle cx="230" cy="400" r="16" />
          <circle cx="230" cy="400" r="9" />
          <circle cx="1360" cy="980" r="14" />
          <circle cx="1360" cy="980" r="7" />
          <circle cx="1405" cy="980" r="14" />
          <circle cx="1405" cy="980" r="7" />
        </g>
        <g fill="#1a2130" opacity="0.35">
          <circle cx="460" cy="200" r="3" />
          <circle cx="480" cy="200" r="2" />
          <circle cx="500" cy="200" r="3" />
          <circle cx="900" cy="560" r="2.5" />
          <circle cx="920" cy="560" r="2.5" />
          <circle cx="940" cy="560" r="2.5" />
        </g>

        {/* Angular chevrons */}
        <g fill="none" stroke="#1a2130" strokeWidth="2" opacity="0.3">
          <polyline points="40,480 70,500 40,520" />
          <polyline points="55,480 85,500 55,520" />
          <polyline points="1520,560 1550,580 1520,600" />
          <polyline points="1535,560 1565,580 1535,600" />
        </g>
      </svg>

      <div className="atmosphere__floaters">
        <span className="atmosphere__floater atmosphere__floater--1" />
        <span className="atmosphere__floater atmosphere__floater--2" />
        <span className="atmosphere__floater atmosphere__floater--3" />
        <span className="atmosphere__floater atmosphere__floater--4" />
        <span className="atmosphere__floater atmosphere__floater--5" />
      </div>

      <div className="atmosphere__side">
        <span className="atmosphere__side-line" />
        <span className="atmosphere__side-line atmosphere__side-line--mid" />
        <span className="atmosphere__side-line atmosphere__side-line--low" />
        <span className="atmosphere__side-mark">+</span>
        <div className="atmosphere__side-rings">
          <span />
          <span />
        </div>
        <div className="atmosphere__side-brand" />
        <div className="atmosphere__side-ticks">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="atmosphere__side-panel" />
        <div className="atmosphere__side-shard" />
      </div>
    </div>
  );
}
