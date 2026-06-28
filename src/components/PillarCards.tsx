const cards = [
  {
    title: "Built for purpose",
    description:
      "Linear is shaped by the practices and principles of world-class product teams.",
    illustration: (
      <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
        {/* Isometric cube - single unit */}
        <polygon
          points="80,20 140,55 140,110 80,145 20,110 20,55"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
          fill="rgba(255,255,255,0.02)"
        />
        <polygon
          points="80,20 140,55 80,90 20,55"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
          fill="rgba(255,255,255,0.04)"
        />
        <line
          x1="80"
          y1="20"
          x2="80"
          y2="90"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
        <line
          x1="80"
          y1="90"
          x2="80"
          y2="145"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
        {/* Additional layers below */}
        <polygon
          points="80,35 130,62 130,107 80,130 30,107 30,62"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
          fill="none"
          transform="translate(0, 12)"
        />
        <polygon
          points="80,35 130,62 130,107 80,130 30,107 30,62"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
          fill="none"
          transform="translate(0, 22)"
        />
      </svg>
    ),
  },
  {
    title: "Powered by AI agents",
    description:
      "Designed for workflows shared by humans and agents. From drafting PRDs to pushing PRs.",
    illustration: (
      <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
        {/* Large cube on right */}
        <polygon
          points="100,30 140,52 140,96 100,118 60,96 60,52"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
          fill="rgba(255,255,255,0.03)"
        />
        <polygon
          points="100,30 140,52 100,74 60,52"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
          fill="rgba(255,255,255,0.05)"
        />
        {/* Small cube on left */}
        <polygon
          points="55,55 80,68 80,95 55,108 30,95 30,68"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
          fill="rgba(255,255,255,0.03)"
        />
        <polygon
          points="55,55 80,68 55,81 30,68"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
          fill="rgba(255,255,255,0.05)"
        />
        {/* Medium cube bottom */}
        <polygon
          points="95,90 125,106 125,130 95,146 65,130 65,106"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
          fill="rgba(255,255,255,0.02)"
        />
      </svg>
    ),
  },
  {
    title: "Designed for speed",
    description:
      "Reduces noise and restores momentum to help teams ship with high velocity and focus.",
    illustration: (
      <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
        {/* Stack of horizontal sheets */}
        <rect
          x="30"
          y="115"
          width="100"
          height="8"
          rx="2"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
          fill="rgba(255,255,255,0.03)"
        />
        <rect
          x="30"
          y="105"
          width="100"
          height="8"
          rx="2"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
          fill="rgba(255,255,255,0.04)"
        />
        <rect
          x="30"
          y="95"
          width="100"
          height="8"
          rx="2"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="1"
          fill="rgba(255,255,255,0.05)"
        />
        <rect
          x="30"
          y="83"
          width="100"
          height="10"
          rx="2"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1"
          fill="rgba(255,255,255,0.06)"
        />
        <rect
          x="30"
          y="68"
          width="100"
          height="13"
          rx="2"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
          fill="rgba(255,255,255,0.07)"
        />
        <rect
          x="30"
          y="49"
          width="100"
          height="16"
          rx="2"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1"
          fill="rgba(255,255,255,0.09)"
        />
        <rect
          x="30"
          y="27"
          width="100"
          height="19"
          rx="2"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
          fill="rgba(255,255,255,0.12)"
        />
      </svg>
    ),
  },
];

export function PillarCards() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "8px",
      }}
    >
      {cards.map((card) => (
        <div
          key={card.title}
          style={{
            backgroundColor: "rgb(15, 16, 17)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            borderRadius: "8px",
            padding: "0 24px 28px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              height: "220px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px",
              overflow: "hidden",
            }}
          >
            {card.illustration}
          </div>
          <h3
            style={{
              fontSize: "15px",
              fontWeight: 510,
              color: "rgb(247, 248, 248)",
              marginBottom: "8px",
              margin: "0 0 8px 0",
            }}
          >
            {card.title}
          </h3>
          <p
            style={{
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(138, 143, 152)",
              margin: 0,
            }}
          >
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}
