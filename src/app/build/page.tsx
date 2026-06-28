import { Navbar } from "@/components/Navbar";
import { SubPageHero } from "@/components/SubPageHero";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

const AGENT_ICONS = [
  { top: "12%", left: "30%", label: "⬡", color: "rgb(139, 92, 246)" },
  { top: "25%", left: "50%", label: "⬡", color: "rgb(59, 130, 246)" },
  { top: "8%", right: "20%", label: "⬡", color: "rgb(234, 179, 8)" },
  { top: "38%", left: "18%", label: "⬡", color: "rgb(139, 92, 246)" },
  { top: "18%", right: "38%", label: "⬡", color: "rgb(34, 197, 94)" },
  { top: "48%", right: "12%", label: "⬡", color: "rgb(59, 130, 246)" },
  { top: "30%", left: "65%", label: "⬡", color: "rgb(234, 179, 8)" },
  { top: "55%", left: "38%", label: "⬡", color: "rgb(139, 92, 246)" },
  { top: "20%", left: "8%", label: "⬡", color: "rgb(34, 197, 94)" },
];

function BuildBackground() {
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      {AGENT_ICONS.map((icon, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: icon.top,
            left: "left" in icon ? icon.left : undefined,
            right: "right" in icon ? icon.right : undefined,
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            color: icon.color,
            opacity: 0.3,
          }}
        >
          {icon.label}
        </div>
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

function AgentTerminalIllustration() {
  return (
    <div style={{ display: "flex", width: "100%", minHeight: "400px" }}>
      <div style={{
        flex: 1,
        padding: "24px",
        borderRight: "1px solid rgba(255,255,255,0.06)",
        fontFamily: "monospace",
        fontSize: "12px",
      }}>
        <div style={{ color: "rgb(138, 143, 152)", marginBottom: "16px", paddingBottom: "12px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          ⬡ Codex &nbsp;&nbsp;&nbsp; ···
        </div>
        {[
          { text: "On it! I've received your request.", highlight: false },
          { text: "Kicked off a task in kinetic/kinetic-iOS environment.", highlight: false },
          { text: "Searching for root AGENTS file", highlight: false },
          { text: "kinetic/kinetic-iOS$ /bin/bash -lc rg --files -g 'AGENTS.md'", highlight: true },
          { text: "AGENTS.md", highlight: false },
          { text: "Locating initialization logic for vehicle_state", highlight: false },
          { text: "⠙ Thinking...", highlight: false },
        ].map((line, i) => (
          <div key={i} style={{
            color: line.highlight ? "rgb(247, 248, 248)" : "rgb(138, 143, 152)",
            marginBottom: "8px",
            lineHeight: "18px",
          }}>
            {line.text}
          </div>
        ))}
      </div>
      <div style={{ flex: 1, padding: "24px" }}>
        <div style={{
          padding: "8px 12px",
          borderRadius: "6px",
          border: "1px solid rgba(255,255,255,0.1)",
          fontSize: "12px",
          color: "rgb(138, 143, 152)",
          marginBottom: "12px",
        }}>
          Assign to...
        </div>
        {[
          { name: "Codex", type: "agent", selected: true, color: "rgb(139, 92, 246)" },
          { name: "Steven", type: "human", selected: false, color: null },
          { name: "Ema", type: "human", selected: false, color: null },
          { name: "GitHub Copilot", type: "agent", selected: false, color: "rgb(59, 130, 246)" },
          { name: "Cursor", type: "agent", selected: false, color: "rgb(34, 197, 94)" },
          { name: "Meg", type: "human", selected: false, color: null },
        ].map((item) => (
          <div key={item.name} style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 12px",
            borderRadius: "6px",
            backgroundColor: item.selected ? "rgba(255,255,255,0.04)" : "transparent",
          }}>
            <div style={{
              width: "24px",
              height: "24px",
              borderRadius: item.type === "agent" ? "4px" : "50%",
              backgroundColor: item.color ? `${item.color}20` : "rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "10px",
              color: item.color || "rgb(138, 143, 152)",
            }}>
              {item.type === "agent" ? "⬡" : ""}
            </div>
            <span style={{ fontSize: "13px", color: "rgb(208, 214, 224)", flex: 1 }}>{item.name}</span>
            {item.type === "agent" && (
              <span style={{
                fontSize: "10px",
                padding: "1px 6px",
                borderRadius: "4px",
                backgroundColor: "rgba(255,255,255,0.08)",
                color: "rgb(138, 143, 152)",
              }}>
                Agent
              </span>
            )}
            {item.selected && <span style={{ color: "rgb(247, 248, 248)", fontSize: "12px" }}>✓</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BuildPage() {
  return (
    <main style={{ backgroundColor: "rgb(8, 9, 10)", minHeight: "100vh" }}>
      <Navbar />
      <SubPageHero
        number="3.0"
        name="Build"
        heading={"Move work forward\nacross teams and agents"}
        background={<BuildBackground />}
      />

      <FeatureSubSection
        number="3.1 Linear Agent"
        heading={"Build and deploy\nAI agents"}
        description="Build and deploy AI agents that work alongside your team. Work on complex tasks together or delegate fully to an agent of your choice."
        linkLabel="3.1 Linear Agent"
        illustration={<AgentTerminalIllustration />}
      />

      <FeatureSubSection
        number="3.2 Coding Sessions"
        heading={"Code together\nwith AI"}
        description="Start a coding session and let AI handle the implementation while you focus on the design. Review, iterate, and ship faster than ever."
        linkLabel="3.2 Coding Sessions"
      />

      <FeatureSubSection
        number="3.3 Integrations"
        heading={"Connect your\nentire workflow"}
        description="Sync with GitHub, GitLab, Figma, Slack, and more. Keep your tools in harmony without switching context."
        linkLabel="3.3 Integrations"
      />

      <CtaSection />
      <Footer />
    </main>
  );
}
