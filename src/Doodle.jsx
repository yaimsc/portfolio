// Dibujos de trazo a mano alzada: destello del moodboard y las tres aficiones
const PATHS = {
  sparkle: "M24 4c1.5 11 7 17 20 20-13 3-18.5 9-20 20-1.5-11-7-17-20-20 13-3 18.5-9 20-20z",
  book: "M24 12c-5-3-12-3-18-1v26c6-2 13-2 18 1 5-3 12-3 18-1V11c-6-2-13-2-18 1zM24 12v26",
  pot: "M10 22h28v8a10 10 0 0 1-10 10H20a10 10 0 0 1-10-10zM6 24h4M38 24h4M18 16c0-3 3-3 3-6M27 16c0-3 3-3 3-6",
  yarn: "M22 12a14 14 0 1 0 0.1 0zM9 22c8 4 18 4 26 0M9 30c9 4 19 4 28 0M15 15c6 5 14 5 20 0M30 38l14-28M43 8l3 2",
};

export default function Doodle({ name, size = 40, className = "" }) {
  return (
    <svg className={`doodle ${className}`} width={size} height={size} viewBox="0 0 48 48" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={PATHS[name]} />
    </svg>
  );
}
