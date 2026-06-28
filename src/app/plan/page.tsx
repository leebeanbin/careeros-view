import { Navbar } from "@/components/Navbar";
import { SubPageHero } from "@/components/SubPageHero";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

const DATE_ELEMENTS = [
  { top: "8%", left: "25%", size: "64px", text: "12", opacity: 0.08 },
  { top: "18%", left: "8%", size: "48px", text: "19", opacity: 0.07 },
  { top: "5%", left: "10%", size: "36px", text: "26", opacity: 0.06 },
  { top: "28%", left: "38%", size: "80px", text: "28", opacity: 0.09 },
  { top: "10%", left: "48%", size: "16px", text: "MAR", opacity: 0.1 },
  { top: "35%", left: "55%", size: "56px", text: "38", opacity: 0.07 },
  { top: "15%", right: "20%", size: "40px", text: "14", opacity: 0.08 },
  { top: "42%", right: "8%", size: "64px", text: "7", opacity: 0.06 },
  { top: "22%", right: "35%", size: "24px", text: "APR", opacity: 0.09 },
  { top: "50%", left: "20%", size: "72px", text: "21", opacity: 0.07 },
  { top: "55%", left: "42%", size: "32px", text: "MAY", opacity: 0.08 },
  { top: "38%", right: "22%", size: "48px", text: "3", opacity: 0.1 },
];

function PlanBackground() {
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      {DATE_ELEMENTS.map((el, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            top: el.top,
            left: "left" in el ? el.left : undefined,
            right: "right" in el ? el.right : undefined,
            fontSize: el.size,
            fontWeight: 500,
            color: "rgb(247, 248, 248)",
            opacity: el.opacity,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          {el.text}
        </span>
      ))}
    </div>
  );
}

function FeatureSubSection({
  number, heading, description, linkLabel,
  illustration,
}: {
  number: string;
  heading: string;
  description: string;
  linkLabel: string;
  illustration?: React.ReactNode;
}) {
  return (
    <section style={{
      padding: "80px 64px",
      borderTop: "1px solid rgba(255, 255, 255, 0.05)",
      backgroundColor: "rgb(8, 9, 10)",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "0 80px",
        alignItems: "end",
        marginBottom: illustration ? "48px" : 0,
      }}>
        <h2 style={{
          fontSize: "48px",
          fontWeight: 510,
          lineHeight: "52px",
          letterSpacing: "-0.96px",
          color: "rgb(247, 248, 248)",
          margin: 0,
          whiteSpace: "pre-line",
        }}>
          {heading}
        </h2>
        <div>
          <p style={{
            fontSize: "16px",
            lineHeight: "26px",
            color: "rgb(138, 143, 152)",
            margin: "0 0 20px",
          }}>
            {description}
          </p>
          <a href="#" style={{
            fontSize: "14px",
            fontWeight: 510,
            color: "rgb(247, 248, 248)",
            textDecoration: "none",
          }}>
            <span style={{ color: "rgb(138, 143, 152)" }}>{linkLabel.split(" ")[0]}</span>
            {" "}{linkLabel.split(" ").slice(1).join(" ")} →
          </a>
        </div>
      </div>
      {illustration && (
        <div style={{
          backgroundColor: "rgb(13, 14, 15)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.06)",
          overflow: "hidden",
          minHeight: "420px",
          display: "flex",
          alignItems: "stretch",
        }}>
          {illustration}
        </div>
      )}
    </section>
  );
}

function RoadmapIllustration() {
  const months = ["MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP"];
  const tracks = [
    { name: "✦ UI Refresh", color: "rgb(234, 179, 8)", start: 2, width: 3 },
    { name: "✦ Split fares", color: "rgb(139, 92, 246)", start: 1, width: 4 },
    { name: "✦ Autonomy status clarity", color: "rgb(59, 130, 246)", start: 3, width: 2 },
  ];

  return (
    <div style={{ flex: 1, padding: "24px", overflow: "auto" }}>
      <div style={{ display: "flex", marginBottom: "16px", paddingLeft: "160px", gap: "0" }}>
        {months.map((m) => (
          <div key={m} style={{
            flex: 1,
            fontSize: "11px",
            color: "rgb(138, 143, 152)",
            textAlign: "center",
            fontWeight: 510,
          }}>
            {m}
          </div>
        ))}
      </div>
      {tracks.map((track, i) => (
        <div key={i} style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "12px",
          height: "32px",
        }}>
          <div style={{
            width: "150px",
            fontSize: "12px",
            color: "rgb(208, 214, 224)",
            paddingRight: "12px",
            flexShrink: 0,
          }}>
            {track.name}
          </div>
          <div style={{ flex: 1, position: "relative", height: "100%" }}>
            <div style={{
              position: "absolute",
              left: `${(track.start / months.length) * 100}%`,
              width: `${(track.width / months.length) * 100}%`,
              height: "8px",
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: track.color,
              borderRadius: "4px",
              opacity: 0.8,
            }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PlanPage() {
  return (
    <main style={{ backgroundColor: "rgb(8, 9, 10)", minHeight: "100vh" }}>
      <Navbar />
      <SubPageHero
        number="2.0"
        name="Plan"
        heading={"Plan and navigate\nfrom idea to launch"}
        background={<PlanBackground />}
      />

      <FeatureSubSection
        number="2.1 Initiatives"
        heading={"Align your team\naround big bets"}
        description="Plan and track your most ambitious work with product initiatives. See how projects contribute to top-level goals and keep everyone aligned on what matters most."
        linkLabel="2.1 Initiatives"
      />

      <FeatureSubSection
        number="2.2 Roadmaps"
        heading={"See the big picture\nat a glance"}
        description="Build visual roadmaps that communicate what's happening and when. Share progress and adjust timelines with drag-and-drop simplicity."
        linkLabel="2.2 Roadmaps"
        illustration={<RoadmapIllustration />}
      />

      <FeatureSubSection
        number="2.3 Documents"
        heading={"Documents that\nstay in sync"}
        description="Write PRDs, specs, and meeting notes directly in Linear. Documents link to issues and update in real time as work progresses."
        linkLabel="2.3 Documents"
      />

      <CtaSection />
      <Footer />
    </main>
  );
}
