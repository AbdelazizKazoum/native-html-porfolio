const fs = require('fs');
let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100" height="100">
  <defs>
    <linearGradient id="ak-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#8b5cf6" />
    </linearGradient>
  </defs>
  
  <!-- Outer glowing hexagon style container, but purely modern subtle lines -->
  <polygon points="60,5 110,35 110,85 60,115 10,85 10,35" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
  <polygon points="60,10 105,37 105,83 60,110 15,83 15,37" fill="rgba(59, 130, 246, 0.05)" stroke="url(#ak-gradient)" stroke-width="1.5" stroke-dasharray="4 4"/>

  <g transform="translate(30, 30)">
    <!-- Letter A : Modern strict polygon format -->
    <path d="M0 60 L20 0 L40 60" fill="none" stroke="#f8fafc" stroke-width="8" stroke-linejoin="bevel" stroke-linecap="square"/>
    <path d="M12 35 L28 35" fill="none" stroke="#f8fafc" stroke-width="8" stroke-linejoin="bevel" stroke-linecap="square"/>
    
    <!-- Letter K : Shared center structure leaning onto right -->
    <!-- The vertical line of K exactly at X=30 so it intersects the right leg of A cleanly -->
    <path d="M30 15 L30 60" fill="none" stroke="url(#ak-gradient)" stroke-width="8" stroke-linejoin="bevel" stroke-linecap="square"/>
    <!-- The branches of K -->
    <path d="M60 0 L30 30 L60 60" fill="none" stroke="url(#ak-gradient)" stroke-width="8" stroke-linejoin="bevel" stroke-linecap="square"/>
  </g>
</svg>`;
fs.writeFileSync('src/assets/logo.svg', svg);
