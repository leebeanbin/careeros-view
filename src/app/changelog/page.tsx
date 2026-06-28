import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface ChangelogEntry {
  date: string;
  dotColor: string;
  title: string;
  description: string;
  slug: string;
}

const ENTRIES: ChangelogEntry[] = [
  {
    date: "JUN 17, 2026",
    dotColor: "rgb(251, 146, 60)",
    title: "Agent assisted project updates",
    description:
      "Project and initiative updates keep teams aligned, but writing them means pulling out recent changes from issues, documents, and conversations. Linear Agent now does this automatically.",
    slug: "agent-assisted-project-updates",
  },
  {
    date: "JUN 10, 2026",
    dotColor: "rgb(96, 121, 241)",
    title: "Coding sessions in Linear",
    description:
      "Earlier this year, we launched Linear Agent, giving teams a new way to plan and coordinate their issues. Since then, we've been thinking about the next step: how to connect planning with actual code.",
    slug: "coding-sessions",
  },
  {
    date: "JUN 3, 2026",
    dotColor: "rgb(74, 222, 128)",
    title: "Team documents",
    description:
      "Important team context doesn't always belong in a specific issue, project, or initiative. Teams also need a dedicated place for the notes, specs, and guides that define how the team works.",
    slug: "team-documents",
  },
  {
    date: "MAY 27, 2026",
    dotColor: "rgb(96, 121, 241)",
    title: "Linear Diffs",
    description:
      "Agents generate large volumes of code, but individuals are still accountable for the changes that merge. This leads to a lot of code that gets shipped without adequate review.",
    slug: "linear-diffs",
  },
  {
    date: "MAY 20, 2026",
    dotColor: "rgb(192, 132, 252)",
    title: "Roadmap improvements",
    description:
      "We've shipped several improvements to roadmaps that make it easier to plan and communicate product direction.",
    slug: "roadmap-improvements",
  },
  {
    date: "MAY 13, 2026",
    dotColor: "rgb(251, 146, 60)",
    title: "Mobile offline mode",
    description:
      "Linear for iOS now works offline. Browse your issues, projects, and roadmaps without an internet connection.",
    slug: "mobile-offline-mode",
  },
  {
    date: "MAY 6, 2026",
    dotColor: "rgb(74, 222, 128)",
    title: "GitHub Copilot integration",
    description:
      "You can now assign issues to GitHub Copilot directly from Linear. Copilot will pick up the context and start working.",
    slug: "github-copilot-integration",
  },
  {
    date: "APR 29, 2026",
    dotColor: "rgb(96, 121, 241)",
    title: "Enterprise SSO improvements",
    description:
      "We've shipped several improvements to our enterprise SSO that make it easier to manage access for large organizations.",
    slug: "enterprise-sso-improvements",
  },
  {
    date: "APR 22, 2026",
    dotColor: "rgb(192, 132, 252)",
    title: "API v2",
    description:
      "The new Linear API v2 is available. It's faster, more consistent, and includes new endpoints for projects, roadmaps, and more.",
    slug: "api-v2",
  },
  {
    date: "APR 15, 2026",
    dotColor: "rgb(251, 146, 60)",
    title: "Weekly Pulse",
    description:
      "Weekly Pulse is a new AI-generated summary of what happened in your projects each week. It's automatically created every Monday.",
    slug: "weekly-pulse",
  },
];

export default function ChangelogPage() {
  return (
    <main style={{ backgroundColor: "rgb(8, 9, 10)", minHeight: "100vh", color: "rgb(247, 248, 248)" }}>
      <Navbar />
      <div style={{ paddingTop: "73px" }}>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "80px 64px",
          }}
        >
          <div style={{ marginBottom: "64px" }}>
            <h1
              style={{
                fontSize: "48px",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                color: "rgb(247, 248, 248)",
                margin: "0 0 16px 0",
                lineHeight: 1.1,
              }}
            >
              Changelog
            </h1>
            <p
              style={{
                fontSize: "18px",
                color: "rgb(138, 143, 152)",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              See what&apos;s new in Linear.
            </p>
          </div>

          <div>
            {ENTRIES.map((entry, index) => (
              <div key={entry.slug}>
                <div
                  style={{
                    display: "flex",
                    gap: "24px",
                    padding: "32px 0",
                  }}
                >
                  <div style={{ flexShrink: 0, paddingTop: "6px" }}>
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: entry.dotColor,
                      }}
                    />
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: "11px",
                        fontWeight: 500,
                        letterSpacing: "0.08em",
                        color: "rgb(138, 143, 152)",
                        marginBottom: "10px",
                        textTransform: "uppercase" as const,
                      }}
                    >
                      {entry.date}
                    </div>
                    <h2
                      style={{
                        fontSize: "20px",
                        fontWeight: 600,
                        color: "rgb(247, 248, 248)",
                        margin: "0 0 10px 0",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.3,
                      }}
                    >
                      {entry.title}
                    </h2>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "rgb(138, 143, 152)",
                        margin: "0 0 16px 0",
                        lineHeight: 1.65,
                      }}
                    >
                      {entry.description}
                    </p>
                    <Link
                      href={`/changelog/${entry.slug}`}
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "rgb(96, 121, 241)",
                        textDecoration: "none",
                      }}
                    >
                      Read more →
                    </Link>
                  </div>
                </div>

                {index < ENTRIES.length - 1 && (
                  <div
                    style={{
                      height: "1px",
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
