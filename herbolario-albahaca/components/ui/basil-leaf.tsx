interface BasilLeafProps {
  className?: string;
}

/**
 * Signature line-drawn basil leaf — the recurring visual motif of the page.
 * A single botanical specimen rendered as a continuous contour line with
 * a central vein structure, echoing herbarium illustration plates.
 */
export function BasilLeaf({ className }: BasilLeafProps) {
  return (
    <svg
      viewBox="0 0 400 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer leaf contour */}
      <path
        d="M200 30
           C 290 70, 360 160, 365 280
           C 368 360, 340 440, 290 500
           C 255 542, 225 565, 200 585
           C 175 565, 145 542, 110 500
           C 60 440, 32 360, 35 280
           C 40 160, 110 70, 200 30 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Central vein */}
      <path
        d="M200 60 C 198 200, 200 380, 200 575"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Lateral veins - right */}
      <path d="M200 130 C 240 145, 280 165, 310 195" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M200 200 C 245 218, 290 245, 325 285" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M200 270 C 245 290, 285 320, 315 365" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M200 345 C 235 365, 265 395, 285 435" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M200 420 C 225 438, 248 462, 262 492" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {/* Lateral veins - left (mirrored) */}
      <path d="M200 130 C 160 145, 120 165, 90 195" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M200 200 C 155 218, 110 245, 75 285" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M200 270 C 155 290, 115 320, 85 365" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M200 345 C 165 365, 135 395, 115 435" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M200 420 C 175 438, 152 462, 138 492" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
