// Subtle background motifs inspired by residential development:
// blueprint grids, site plans, parcel mapping, topographic contours.
// All purely decorative — keep aria-hidden, low opacity, pointer-events-none.

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function BlueprintGrid({ className = "", ...rest }: DivProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        maskImage:
          "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 80%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 80%)",
      }}
      {...rest}
    />
  );
}

export function ContourLines({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1">
        {Array.from({ length: 14 }).map((_, i) => {
          const r = 80 + i * 70;
          return (
            <ellipse
              key={i}
              cx="900"
              cy="500"
              rx={r}
              ry={r * 0.6}
              opacity={0.5 - i * 0.025}
            />
          );
        })}
      </g>
    </svg>
  );
}

export function SitePlanMotif({ className = "" }: { className?: string }) {
  // Stylized parcel / site-plan: curved road with parcel divisions.
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1">
        {/* Outer boundary */}
        <path d="M60 540 L60 120 L520 60 L1140 180 L1140 540 Z" opacity="0.5" />
        {/* Curving road */}
        <path
          d="M60 380 C 280 320, 480 460, 720 360 S 1080 280, 1140 320"
          strokeWidth="1.25"
          opacity="0.55"
        />
        <path
          d="M60 380 C 280 320, 480 460, 720 360 S 1080 280, 1140 320"
          strokeDasharray="2 8"
          strokeWidth="0.75"
          opacity="0.35"
          transform="translate(0,18)"
        />
        {/* Parcel divisions */}
        {[140, 220, 300, 380, 460, 540, 620, 700, 780, 860, 940, 1020].map(
          (x, i) => (
            <line
              key={i}
              x1={x}
              y1={i % 2 ? 120 : 180}
              x2={x + (i % 2 ? -20 : 20)}
              y2={i % 2 ? 360 : 340}
              opacity="0.4"
            />
          ),
        )}
        {/* Cul-de-sac */}
        <circle cx="980" cy="460" r="36" opacity="0.45" />
        <circle cx="980" cy="460" r="14" opacity="0.3" />
        {/* North arrow */}
        <g transform="translate(110,130)" opacity="0.6">
          <circle r="14" />
          <path d="M0 -10 L4 6 L0 2 L-4 6 Z" fill="currentColor" />
        </g>
      </g>
    </svg>
  );
}

export function BlueprintCorner({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 400"
      className={`pointer-events-none absolute ${className}`}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5">
        <rect x="20" y="20" width="360" height="360" />
        <rect x="40" y="40" width="320" height="320" strokeDasharray="3 6" />
        <line x1="20" y1="120" x2="380" y2="120" />
        <line x1="20" y1="280" x2="380" y2="280" />
        <line x1="120" y1="20" x2="120" y2="380" />
        <line x1="280" y1="20" x2="280" y2="380" />
        <text x="30" y="34" fontSize="9" fill="currentColor" stroke="none" fontFamily="monospace">
          A-101 / SHEET 01
        </text>
      </g>
    </svg>
  );
}
