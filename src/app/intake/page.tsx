import { Navbar } from "@/components/Navbar";
import { SubPageHero } from "@/components/SubPageHero";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

const CARD_POSITIONS: { top?: string; bottom?: string; left?: string; right?: string; rotate: string; text: string; label: string }[] = [
  { top: "12%", left: "35%", rotate: "-2deg", text: "ENG-926 Remove UI inconsistencies", label: "Performance" },
  { top: "20%", right: "8%", rotate: "1.5deg", text: "MKT-1028 Launch page assets", label: "Design" },
  { top: "8%", right: "25%", rotate: "-1deg", text: "ENG-2088 TypeError: Cannot read properties", label: "Bug" },
  { top: "45%", left: "55%", rotate: "2deg", text: "ENG-2187 Prevent duplicate ride requests", label: "Bug" },
  { top: "30%", left: "15%", rotate: "-1.5deg", text: "ENG-924 Upgrade to Claude Opus 4.5", label: "AI" },
  { top: "60%", right: "15%", rotate: "1deg", text: "ENG-1182 Optimize load times", label: "Performance" },
  { top: "15%", left: "62%", rotate: "-0.5deg", text: "Remove contentData from GraphQL API", label: "" },
];

function IntakeBackground() {
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      {CARD_POSITIONS.map((card, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: card.top,
            bottom: card.bottom,
            left: card.left,
            right: card.right,
            transform: `rotate(${card.rotate})`,
            opacity: 0.12,
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "11px",
            color: "rgb(247, 248, 248)",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: "rgb(208, 214, 224)",
            flexShrink: 0,
          }} />
          {card.text}
          {card.label && (
            <span style={{
              fontSize: "10px",
              padding: "1px 6px",
              borderRadius: "4px",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgb(138, 143, 152)",
            }}>
              {card.label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function FeatureSubSection({
  number, heading, description, linkText,
  illustration,
}: {
  number: string;
  heading: string;
  description: string;
  linkText: string;
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
        marginBottom: "48px",
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
            fontWeight: 400,
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
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}>
            <span style={{ color: "rgb(138, 143, 152)" }}>{number.split(" ")[0]}</span>
            {" "}{number.split(" ").slice(1).join(" ")} →
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
          alignItems: "center",
          justifyContent: "center",
        }}>
          {illustration}
        </div>
      )}
    </section>
  );
}

function SlackIntakeIllustration() {
  return (
    <div style={{ display: "flex", width: "100%", minHeight: "400px" }}>
      <div style={{
        width: "45%",
        padding: "24px",
        borderRight: "1px solid rgba(255,255,255,0.06)",
        fontFamily: "monospace",
      }}>
        <div style={{
          fontSize: "12px",
          color: "rgb(138, 143, 152)",
          marginBottom: "16px",
          paddingBottom: "12px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}>
          # Thread in #feedback
        </div>
        {[
          { user: "lena", time: "2:49 PM", msg: "Anyone else noticing the iOS app feels slow to open if you haven't used it in a bit?" },
          { user: "didier", time: "2:49 PM", msg: "Yea, we're still blocking initial render on a full vehicle_state sync every time..." },
          { user: "andreas", time: "2:49 PM", msg: "Feels like we could render sooner and load the rest in the background." },
        ].map((m, i) => (
          <div key={i} style={{ marginBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
              <div style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.1)" }} />
              <span style={{ fontSize: "12px", fontWeight: 510, color: "rgb(208, 214, 224)" }}>{m.user}</span>
              <span style={{ fontSize: "11px", color: "rgb(138, 143, 152)" }}>{m.time}</span>
            </div>
            <div style={{ fontSize: "12px", color: "rgb(138, 143, 152)", paddingLeft: "28px", lineHeight: "18px" }}>{m.msg}</div>
          </div>
        ))}
        <div style={{
          marginTop: "16px",
          padding: "8px 12px",
          borderRadius: "6px",
          border: "1px solid rgba(255,255,255,0.1)",
          fontSize: "12px",
          color: "rgb(96, 121, 241)",
        }}>
          @Linear create urgent issues and assign to me
        </div>
      </div>

      <div style={{ flex: 1, padding: "24px" }}>
        <div style={{ display: "flex", gap: "32px", marginBottom: "16px" }}>
          {["Todo  71", "In Progress  3"].map((col) => (
            <span key={col} style={{ fontSize: "12px", fontWeight: 510, color: "rgb(247, 248, 248)" }}>{col}</span>
          ))}
        </div>
        {[
          { id: "ENG-926", title: "Remove UI inconsistencies", labels: ["Bug", "Design"] },
          { id: "ENG-2088", title: "TypeError: Cannot read properties", labels: ["Bug"] },
          { id: "ENG-924", title: "Upgrade to Claude Opus 4.5", labels: ["AI"] },
          { id: "ENG-1182", title: "Optimize load times", labels: ["Performance"] },
        ].map((issue) => (
          <div key={issue.id} style={{
            padding: "10px 12px",
            borderRadius: "6px",
            border: "1px solid rgba(255,255,255,0.06)",
            backgroundColor: "rgba(255,255,255,0.02)",
            marginBottom: "6px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}>
            <span style={{ fontSize: "11px", fontFamily: "monospace", color: "rgb(138, 143, 152)", flexShrink: 0 }}>{issue.id}</span>
            <span style={{ fontSize: "12px", color: "rgb(208, 214, 224)", flex: 1 }}>{issue.title}</span>
            <div style={{ display: "flex", gap: "4px" }}>
              {issue.labels.map((l) => (
                <span key={l} style={{
                  fontSize: "10px",
                  padding: "1px 6px",
                  borderRadius: "4px",
                  backgroundColor: "rgba(255,255,255,0.06)",
                  color: "rgb(138, 143, 152)",
                }}>
                  {l}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function IntakePage() {
  return (
    <main style={{ backgroundColor: "rgb(8, 9, 10)", minHeight: "100vh" }}>
      <Navbar />
      <SubPageHero
        number="1.0"
        name="Intake"
        heading={"Make product\noperations self-driving"}
        background={<IntakeBackground />}
      />

      <FeatureSubSection
        number="1.1 Linear Agent"
        heading={"Issue intake,\nfully automated"}
        description="Turn Slack conversations, customer support interactions, and sales calls into actionable issues that are routed, labeled, and prioritized for the right team."
        linkText="1.1 Linear Agent"
        illustration={<SlackIntakeIllustration />}
      />

      <FeatureSubSection
        number="1.2 Triage Intelligence"
        heading={"Triage at the\nspeed of thought"}
        description="Let AI handle the routine work. Label, assign, and prioritize issues automatically based on your team's historical patterns and preferences."
        linkText="1.2 Triage Intelligence"
      />

      <FeatureSubSection
        number="1.3 Customer Asks"
        heading={"Customer feedback\ndirectly linked to issues"}
        description="Connect Intercom, Zendesk, or any support tool. Surface the most-requested features from real customer conversations and link them to your roadmap."
        linkText="1.3 Customer Asks"
      />

      <CtaSection />
      <Footer />
    </main>
  );
}
