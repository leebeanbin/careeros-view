import { Navbar } from "@/components/Navbar";
import { SubPageHero } from "@/components/SubPageHero";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

const PARTICLES = [
  { top: "12%", left: "18%", size: 6, color: "rgb(96, 165, 250)" },
  { top: "8%", left: "32%", size: 4, color: "rgb(167, 139, 250)" },
  { top: "20%", left: "48%", size: 5, color: "rgb(74, 222, 128)" },
  { top: "15%", left: "62%", size: 4, color: "rgb(96, 165, 250)" },
  { top: "28%", left: "25%", size: 5, color: "rgb(74, 222, 128)" },
  { top: "32%", left: "55%", size: 6, color: "rgb(167, 139, 250)" },
  { top: "25%", left: "72%", size: 4, color: "rgb(96, 165, 250)" },
  { top: "40%", left: "15%", size: 5, color: "rgb(74, 222, 128)" },
  { top: "38%", left: "38%", size: 4, color: "rgb(96, 165, 250)" },
  { top: "45%", left: "60%", size: 6, color: "rgb(167, 139, 250)" },
  { top: "35%", left: "80%", size: 4, color: "rgb(74, 222, 128)" },
  { top: "50%", left: "28%", size: 5, color: "rgb(96, 165, 250)" },
  { top: "55%", left: "45%", size: 4, color: "rgb(74, 222, 128)" },
  { top: "48%", left: "70%", size: 6, color: "rgb(167, 139, 250)" },
  { top: "10%", left: "85%", size: 4, color: "rgb(96, 165, 250)" },
  { top: "22%", left: "90%", size: 5, color: "rgb(74, 222, 128)" },
  { top: "42%", left: "88%", size: 4, color: "rgb(167, 139, 250)" },
  { top: "18%", left: "10%", size: 5, color: "rgb(167, 139, 250)" },
  { top: "30%", left: "8%", size: 4, color: "rgb(96, 165, 250)" },
  { top: "52%", left: "8%", size: 5, color: "rgb(74, 222, 128)" },
];

function MonitorBackground() {
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            backgroundColor: p.color,
            opacity: 0.5,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
}

function FeatureSubSection({
  number, heading, description, linkLabel, illustration,
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
          <p style={{ fontSize: "16px", lineHeight: "26px", color: "rgb(138, 143, 152)", margin: "0 0 20px" }}>
            {description}
          </p>
          <a href="#" style={{ fontSize: "14px", fontWeight: 510, color: "rgb(247, 248, 248)", textDecoration: "none" }}>
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
          minHeight: "400px",
          display: "flex",
        }}>
          {illustration}
        </div>
      )}
    </section>
  );
}

function PulseIllustration() {
  return (
    <div style={{ display: "flex", width: "100%", minHeight: "400px" }}>
      <div style={{ flex: "0 0 45%", padding: "24px", borderRight: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
          <span style={{ fontSize: "13px", fontWeight: 510, color: "rgb(208, 214, 224)" }}>Weekly Pulse for Jun 27</span>
          <span style={{
            fontSize: "11px",
            padding: "3px 8px",
            borderRadius: "4px",
            backgroundColor: "rgba(255,255,255,0.06)",
            color: "rgb(138, 143, 152)",
          }}>▶ Listen  1.0×</span>
        </div>
        <div style={{ fontSize: "11px", fontWeight: 510, color: "rgb(138, 143, 152)", marginBottom: "12px", textTransform: "uppercase" as const, letterSpacing: "0.05em" }}>
          Projects
        </div>
        {[
          { name: "UI refresh", status: "⚠ At risk", statusColor: "rgb(234, 179, 8)", author: "romain", time: "1 day ago", detail: "iOS implementation is mostly complete, but Android updates are still work in progress. Risk of timeline slip if remaining design decisions aren't finalized soon." },
          { name: "Tokyo launch", status: "✓ On track", statusColor: "rgb(74, 222, 128)", author: "julian", time: "3 hours ago", detail: "Localization efforts have been completed. Everything else on track for launch in early September." },
        ].map((p) => (
          <div key={p.name} style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
              <span style={{ fontSize: "13px", color: "rgb(208, 214, 224)", fontWeight: 510 }}>{p.name}</span>
            </div>
            <div style={{ fontSize: "12px", color: p.statusColor, marginBottom: "6px" }}>
              {p.status} &nbsp;
              <span style={{ color: "rgb(138, 143, 152)" }}>By {p.author} · {p.time}</span>
            </div>
            <div style={{ fontSize: "12px", color: "rgb(138, 143, 152)", lineHeight: "18px" }}>{p.detail}</div>
          </div>
        ))}
      </div>

      <div style={{ flex: 1, padding: "24px" }}>
        <div style={{ fontSize: "13px", fontWeight: 510, color: "rgb(208, 214, 224)", marginBottom: "20px" }}>
          Cycle time by agent
        </div>
        <div style={{ position: "relative", height: "300px" }}>
          {["Cursor", "Codex", "No agent"].map((label, col) => {
            const dots = col === 0
              ? [{ y: 20 }, { y: 35 }, { y: 25 }, { y: 40 }, { y: 15 }]
              : col === 1
              ? [{ y: 10 }, { y: 20 }, { y: 15 }, { y: 25 }, { y: 12 }]
              : [{ y: 55 }, { y: 70 }, { y: 60 }, { y: 80 }, { y: 65 }];
            const colors = ["rgb(96, 165, 250)", "rgb(251, 146, 60)", "rgb(148, 163, 184)"];
            return (
              <div key={label} style={{
                position: "absolute",
                left: `${(col * 33) + 10}%`,
                top: 0,
                bottom: "24px",
                width: "80px",
              }}>
                {dots.map((dot, i) => (
                  <div key={i} style={{
                    position: "absolute",
                    bottom: `${dot.y}%`,
                    left: `${20 + i * 12}px`,
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: colors[col],
                    opacity: 0.8,
                  }} />
                ))}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  fontSize: "11px",
                  color: "rgb(138, 143, 152)",
                }}>
                  {label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function MonitorPage() {
  return (
    <main style={{ backgroundColor: "rgb(8, 9, 10)", minHeight: "100vh" }}>
      <Navbar />
      <SubPageHero
        number="5.0"
        name="Monitor"
        heading={"Understand\nprogress at scale"}
        background={<MonitorBackground />}
      />

      <FeatureSubSection
        number="5.1 Weekly Pulse"
        heading={"AI-generated project\nupdates, automatically"}
        description="Take the guesswork out of product development with project updates, analytics, and dashboards that show you what's happening and why."
        linkLabel="5.1 Weekly Pulse"
        illustration={<PulseIllustration />}
      />

      <FeatureSubSection
        number="5.2 Analytics"
        heading={"Data-driven\ndecision making"}
        description="Track cycle time, throughput, and velocity across teams and agents. Understand where work slows down and optimize accordingly."
        linkLabel="5.2 Analytics"
      />

      <FeatureSubSection
        number="5.3 Insights"
        heading={"Surface what\nmatters most"}
        description="Linear Insights automatically surfaces patterns, risks, and opportunities across your entire product development workflow."
        linkLabel="5.3 Insights"
      />

      <CtaSection />
      <Footer />
    </main>
  );
}
