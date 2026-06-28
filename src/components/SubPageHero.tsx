interface SubPageHeroProps {
  number: string;
  name: string;
  heading: string;
  rightLink?: { text: string; href: string };
  background: React.ReactNode;
}

export function SubPageHero({ number, name, heading, rightLink, background }: SubPageHeroProps) {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "rgb(8, 9, 10)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 64px 80px",
      }}
    >
      {background}

      <div style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "16px",
          }}
        >
          <span style={{ fontSize: "13px", fontWeight: 400, color: "rgb(138, 143, 152)" }}>
            {number}
          </span>
          <span style={{ fontSize: "13px", fontWeight: 400, color: "rgb(247, 248, 248)" }}>
            {name}
          </span>
        </div>
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 500,
            lineHeight: "72px",
            letterSpacing: "-1.584px",
            color: "rgb(247, 248, 248)",
            whiteSpace: "pre-line",
            maxWidth: "800px",
            margin: 0,
          }}
        >
          {heading}
        </h1>
      </div>

      {rightLink && (
        <a
          href={rightLink.href}
          style={{
            position: "absolute",
            right: "64px",
            bottom: "80px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "13px",
            fontWeight: 400,
            color: "rgb(247, 248, 248)",
            textDecoration: "none",
            zIndex: 2,
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "rgb(96, 121, 241)",
              display: "inline-block",
            }}
          />
          {rightLink.text}
          <span style={{ color: "rgb(138, 143, 152)" }}> →</span>
        </a>
      )}
    </section>
  );
}
