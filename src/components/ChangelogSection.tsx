interface ChangelogCard {
  dotColor: string;
  title: string;
  excerpt: string;
  date: string;
}

const cards: ChangelogCard[] = [
  {
    dotColor: "rgb(234, 179, 8)",
    title: "Agent assisted project updates",
    excerpt:
      "Project and initiative updates keep teams aligned, but writing them means pulling out recent changes from issues, documents, and conversations.",
    date: "JUN 17, 2026",
  },
  {
    dotColor: "rgb(99, 102, 241)",
    title: "Coding sessions in Linear",
    excerpt:
      "Earlier this year, we launched Linear Agent, giving teams a new way to plan and coordinate their issues and projects. Since then, we've continued to expand what's possible with agents.",
    date: "JUN 10, 2026",
  },
  {
    dotColor: "rgb(34, 197, 94)",
    title: "Team documents",
    excerpt:
      "Important team context doesn't always belong in a specific issue, project, or initiative. Teams also need a dedicated place for the notes, specs, and decisions that keep everyone aligned.",
    date: "JUN 3, 2026",
  },
  {
    dotColor: "rgb(59, 130, 246)",
    title: "Linear Diffs",
    excerpt:
      "Agents generate large volumes of code, but individuals are still accountable for the changes that merge. This leads to a lot of review work.",
    date: "MAY 27, 2026",
  },
];

export function ChangelogSection() {
  return (
    <div
      style={{
        backgroundColor: "rgb(8, 9, 10)",
        padding: "80px 64px",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        maxWidth: 1440,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
          marginBottom: 32,
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 9999,
                marginBottom: 16,
                backgroundColor: card.dotColor,
                flexShrink: 0,
              }}
            />
            <p
              style={{
                fontSize: 15,
                fontWeight: 510,
                color: "rgb(247, 248, 248)",
                lineHeight: "22px",
                margin: "0 0 8px 0",
              }}
            >
              {card.title}
            </p>
            <p
              style={{
                fontSize: 14,
                fontWeight: 400,
                lineHeight: "20px",
                color: "rgb(138, 143, 152)",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                flex: 1,
                margin: "0 0 16px 0",
              }}
            >
              {card.excerpt}
            </p>
            <span
              style={{
                fontSize: 12,
                color: "rgb(138, 143, 152)",
                fontFamily: "monospace",
                letterSpacing: "0.5px",
              }}
            >
              {card.date}
            </span>
          </div>
        ))}
      </div>

      <a
        href="#"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontSize: 14,
          fontWeight: 510,
          color: "rgb(247, 248, 248)",
          textDecoration: "none",
        }}
      >
        View all →
      </a>
    </div>
  );
}
