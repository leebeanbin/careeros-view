import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";

type Category = "All" | "Development" | "Communication" | "Design" | "Productivity";

interface Integration {
  name: string;
  description: string;
  emoji: string;
  category: Exclude<Category, "All">;
}

const INTEGRATIONS: Integration[] = [
  { name: "GitHub", description: "Sync PRs and branches", emoji: "🐙", category: "Development" },
  { name: "GitLab", description: "Sync merge requests", emoji: "🦊", category: "Development" },
  { name: "Bitbucket", description: "Track commits", emoji: "🪣", category: "Development" },
  { name: "Sentry", description: "Link errors to issues", emoji: "🚨", category: "Development" },
  { name: "Slack", description: "Get notifications", emoji: "💬", category: "Communication" },
  { name: "Discord", description: "Team updates", emoji: "🎮", category: "Communication" },
  { name: "Microsoft Teams", description: "Enterprise messaging", emoji: "🟦", category: "Communication" },
  { name: "PagerDuty", description: "Incident response", emoji: "🔔", category: "Communication" },
  { name: "Figma", description: "Design to implementation", emoji: "✦", category: "Design" },
  { name: "Notion", description: "Link documentation", emoji: "📄", category: "Design" },
  { name: "Confluence", description: "Enterprise docs", emoji: "📚", category: "Productivity" },
  { name: "Loom", description: "Video updates", emoji: "🎥", category: "Communication" },
  { name: "Zapier", description: "Automate workflows", emoji: "⚡", category: "Productivity" },
  { name: "Make", description: "No-code automation", emoji: "⚙️", category: "Productivity" },
  { name: "Webhook", description: "Custom integrations", emoji: "🔗", category: "Development" },
  { name: "REST API", description: "Build your own", emoji: "🛠", category: "Development" },
  { name: "Jira", description: "Migrate from Jira", emoji: "🔷", category: "Productivity" },
  { name: "Asana", description: "Import issues", emoji: "🌀", category: "Productivity" },
  { name: "Trello", description: "Card import", emoji: "🟩", category: "Productivity" },
  { name: "Height", description: "Team sync", emoji: "📐", category: "Productivity" },
  { name: "Vercel", description: "Deployment tracking", emoji: "▲", category: "Development" },
  { name: "Railway", description: "Deploy status", emoji: "🚂", category: "Development" },
  { name: "GitHub Actions", description: "CI/CD", emoji: "🤖", category: "Development" },
  { name: "Linear API", description: "Build on Linear", emoji: "⬡", category: "Development" },
];

const CATEGORY_ICON_COLORS: Record<Exclude<Category, "All">, string> = {
  Development: "rgb(59, 130, 246)",
  Communication: "rgb(139, 92, 246)",
  Design: "rgb(236, 72, 153)",
  Productivity: "rgb(249, 115, 22)",
};

const FILTER_TABS: Category[] = ["All", "Development", "Communication", "Design", "Productivity"];

function FilterBar() {
  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        justifyContent: "center",
        flexWrap: "wrap" as const,
        marginBottom: "64px",
      }}
    >
      {FILTER_TABS.map((tab) => {
        const isActive = tab === "All";
        return (
          <button
            key={tab}
            type="button"
            style={{
              padding: "6px 16px",
              borderRadius: "9999px",
              fontSize: "13px",
              fontWeight: isActive ? 510 : 400,
              cursor: "pointer",
              border: isActive
                ? "1px solid rgba(255, 255, 255, 0.2)"
                : "1px solid rgba(255, 255, 255, 0.08)",
              backgroundColor: isActive ? "rgb(247, 248, 248)" : "transparent",
              color: isActive ? "rgb(8, 9, 10)" : "rgb(138, 143, 152)",
              transition: "all 0.15s ease",
            }}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}

function IntegrationCard({ integration }: { integration: Integration }) {
  const iconColor = CATEGORY_ICON_COLORS[integration.category];
  return (
    <div
      style={{
        backgroundColor: "rgb(13, 14, 15)",
        border: "1px solid rgba(255, 255, 255, 0.06)",
        borderRadius: "12px",
        padding: "24px",
        display: "flex",
        flexDirection: "column" as const,
        gap: "12px",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "10px",
          backgroundColor: `${iconColor}18`,
          border: `1px solid ${iconColor}30`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          flexShrink: 0,
        }}
      >
        {integration.emoji}
      </div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: "14px",
            fontWeight: 510,
            color: "rgb(247, 248, 248)",
            marginBottom: "4px",
          }}
        >
          {integration.name}
        </div>
        <div style={{ fontSize: "13px", color: "rgb(138, 143, 152)", lineHeight: "18px" }}>
          {integration.description}
        </div>
      </div>
      <button
        type="button"
        style={{
          alignSelf: "flex-start",
          padding: "5px 14px",
          borderRadius: "9999px",
          fontSize: "12px",
          fontWeight: 510,
          color: "rgb(208, 214, 224)",
          backgroundColor: "rgba(255, 255, 255, 0.06)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          cursor: "pointer",
          transition: "background-color 0.15s ease",
        }}
      >
        Connect
      </button>
    </div>
  );
}

export default function IntegrationsPage() {
  return (
    <main style={{ backgroundColor: "rgb(8, 9, 10)", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ paddingTop: "73px" }}>
        <section
          style={{
            padding: "96px 64px 80px",
            textAlign: "center" as const,
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 12px",
              borderRadius: "9999px",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              fontSize: "12px",
              color: "rgb(138, 143, 152)",
              marginBottom: "24px",
            }}
          >
            24+ integrations
          </div>
          <h1
            style={{
              fontSize: "56px",
              fontWeight: 510,
              lineHeight: "60px",
              letterSpacing: "-1.12px",
              color: "rgb(247, 248, 248)",
              margin: "0 0 20px",
            }}
          >
            Connect your tools
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "28px",
              color: "rgb(138, 143, 152)",
              margin: 0,
            }}
          >
            Linear integrates with the tools your team already uses.
          </p>
        </section>

        <section
          style={{
            padding: "0 64px 96px",
            maxWidth: "1280px",
            margin: "0 auto",
          }}
        >
          <FilterBar />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
            }}
          >
            {INTEGRATIONS.map((integration) => (
              <IntegrationCard key={integration.name} integration={integration} />
            ))}
          </div>
        </section>

        <CtaSection />
        <Footer />
      </div>
    </main>
  );
}
