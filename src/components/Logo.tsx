export function Logo({ size = 38 }: { size?: number }) {
  return (
    <span className="logo-mark" style={{ width: size, height: size }}>
      <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24" fill="none">
        {/* leaf + drop */}
        <path d="M12 3C7 3 4 7 4 11c0 3.5 2.5 6 5 7 0-4 1-7 3-9-1 4-1 7 0 11 4-1 8-4 8-9 0-4-3-8-8-8z" fill="currentColor" opacity="0.95" />
        <circle cx="17" cy="17" r="2.2" fill="#F7F3EC" />
      </svg>
    </span>
  );
}
