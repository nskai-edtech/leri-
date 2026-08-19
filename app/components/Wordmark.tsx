export default function Wordmark({ size = 25, accent = "#A8452A" }: { size?: number; accent?: string }) {
  return (
    <span
      aria-label="Leri"
      style={{
        display: "inline-flex",
        alignItems: "baseline",
        fontSize: size,
        fontWeight: 700,
        letterSpacing: "-0.045em",
      }}
    >
      L
      <span
        style={{
          display: "inline-block",
          transform: "rotate(-18deg)",
          transformOrigin: "50% 62%",
          margin: "0 0 0 -1px",
          color: accent,
        }}
      >
        e
      </span>
      ri
    </span>
  );
}
