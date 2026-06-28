import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";

const importSources = [
  { name: "Jira", color: "rgb(0, 82, 204)" },
  { name: "Asana", color: "rgb(252, 100, 45)" },
  { name: "GitHub Issues", color: "rgb(247, 248, 248)" },
  { name: "Trello", color: "rgb(0, 121, 191)" },
  { name: "Shortcut", color: "rgb(125, 75, 196)" },
  { name: "CSV", color: "rgb(138, 143, 152)" },
];

const migrationSteps = [
  {
    step: 1,
    title: "Export from your current tool",
    description:
      "Use your existing tool's built-in export feature. Most tools support exporting to CSV or JSON. Linear also accepts Jira XML exports directly.",
  },
  {
    step: 2,
    title: "Import to Linear",
    description:
      "Go to Settings → Import in Linear and choose your source. We'll map your statuses, labels, priorities, and assignees automatically.",
  },
  {
    step: 3,
    title: "Invite your team",
    description:
      "Send invites from your workspace. Team members can sign in with Google or GitHub. No credit card required during the trial.",
  },
  {
    step: 4,
    title: "Set up integrations",
    description:
      "Connect GitHub, Slack, Figma, and the other tools your team already uses. Most integrations take under two minutes to configure.",
  },
  {
    step: 5,
    title: "Archive the old tool",
    description:
      "Once your team is up and running in Linear, archive or cancel your old subscription. Most teams are fully migrated within a week.",
  },
];

const testimonials = [
  {
    quote:
      "We moved 4,000 Jira issues to Linear in a single afternoon. The import was flawless and the team immediately noticed how much faster everything felt.",
    author: "Sarah Chen",
    role: "Engineering Lead",
    company: "Vercel",
  },
  {
    quote:
      "We'd tried Asana, then Jira, then back to Asana. Linear was different from the first day — it felt like it was built for people who actually ship software.",
    author: "Marcus Webb",
    role: "Head of Product",
    company: "Loom",
  },
  {
    quote:
      "The keyboard shortcuts alone saved us hours a week. But what really won us over was how easy it was to get the whole team to actually use it.",
    author: "Priya Nair",
    role: "CTO",
    company: "Retool",
  },
];

export default function SwitchPage() {
  return (
    <main style={{ backgroundColor: "rgb(8, 9, 10)", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ paddingTop: "73px" }}>
        <section
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "96px 32px 80px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 510,
              lineHeight: "68px",
              letterSpacing: "-1.28px",
              color: "rgb(247, 248, 248)",
              marginBottom: "24px",
            }}
          >
            Switch to Linear
          </h1>
          <p
            style={{
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "32px",
              color: "rgb(138, 143, 152)",
            }}
          >
            Move from Jira, Asana, or any other tool in minutes.
          </p>
        </section>

        <section style={{ maxWidth: "1024px", margin: "0 auto", padding: "0 32px 80px" }}>
          <h2
            style={{
              fontSize: "13px",
              fontWeight: 510,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgb(96, 121, 241)",
              marginBottom: "16px",
            }}
          >
            Import your data
          </h2>
          <p
            style={{
              fontSize: "20px",
              fontWeight: 510,
              lineHeight: "28px",
              letterSpacing: "-0.4px",
              color: "rgb(247, 248, 248)",
              marginBottom: "8px",
            }}
          >
            We support imports from:
          </p>
          <p
            style={{
              fontSize: "15px",
              lineHeight: "24px",
              color: "rgb(138, 143, 152)",
              marginBottom: "40px",
            }}
          >
            Bring your issues, labels, priorities, assignees, and comments — nothing gets left behind.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "12px",
            }}
          >
            {importSources.map((source) => (
              <div
                key={source.name}
                style={{
                  backgroundColor: "rgb(13, 14, 15)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "12px",
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: source.color,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: 510,
                    color: "rgb(208, 214, 224)",
                  }}
                >
                  {source.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ maxWidth: "1024px", margin: "0 auto", padding: "0 32px 80px" }}>
          <h2
            style={{
              fontSize: "13px",
              fontWeight: 510,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgb(96, 121, 241)",
              marginBottom: "40px",
            }}
          >
            Migration guide
          </h2>
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: "19px",
                top: "28px",
                bottom: "28px",
                width: "1px",
                backgroundColor: "rgba(255, 255, 255, 0.06)",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {migrationSteps.map((item) => (
                <div
                  key={item.step}
                  style={{
                    display: "flex",
                    gap: "24px",
                    paddingBottom: "40px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "rgb(13, 14, 15)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      zIndex: 1,
                      fontSize: "14px",
                      fontWeight: 510,
                      color: "rgb(96, 121, 241)",
                    }}
                  >
                    {item.step}
                  </div>
                  <div style={{ paddingTop: "8px" }}>
                    <h3
                      style={{
                        fontSize: "17px",
                        fontWeight: 510,
                        color: "rgb(247, 248, 248)",
                        marginBottom: "6px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "22px",
                        color: "rgb(138, 143, 152)",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ maxWidth: "1024px", margin: "0 auto", padding: "0 32px 96px" }}>
          <h2
            style={{
              fontSize: "13px",
              fontWeight: 510,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgb(96, 121, 241)",
              marginBottom: "40px",
            }}
          >
            Why teams switch
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.author}
                style={{
                  backgroundColor: "rgb(13, 14, 15)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "12px",
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "24px",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "24px",
                    color: "rgb(208, 214, 224)",
                    fontStyle: "italic",
                    margin: 0,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 510,
                      color: "rgb(247, 248, 248)",
                      margin: 0,
                      marginBottom: "2px",
                    }}
                  >
                    {t.author}
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "rgb(138, 143, 152)",
                      margin: 0,
                    }}
                  >
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <CtaSection />
      <Footer />
    </main>
  );
}
