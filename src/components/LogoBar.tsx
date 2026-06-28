const logos = [
  { prefix: "▲", name: "Vercel" },
  { prefix: "⌘", name: "CURSOR" },
  { prefix: "", name: "OSCAR" },
  { prefix: "", name: "OpenAI" },
  { prefix: "", name: "coinbase" },
  { prefix: "$", name: "Cash App" },
  { prefix: "", name: "BOOM" },
  { prefix: "", name: "ramp ↗" },
];

export function LogoBar() {
  return (
    <div
      style={{
        backgroundColor: "rgb(8, 9, 10)",
        padding: "48px 64px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "48px",
          flexWrap: "nowrap",
          overflowX: "auto",
        }}
      >
        {logos.map((logo) => (
          <span
            key={logo.name}
            style={{
              color: "rgb(247, 248, 248)",
              opacity: 0.5,
              fontSize: "16px",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            {logo.prefix ? `${logo.prefix} ${logo.name}` : logo.name}
          </span>
        ))}
      </div>
    </div>
  );
}
