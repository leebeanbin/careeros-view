import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

type StatusType = "done" | "in-progress" | "planned";

interface IssueItem {
  id: string;
  title: string;
  status: StatusType;
  date: string;
}

interface IssueSection {
  title: string;
  items: IssueItem[];
}

const ISSUE_SECTIONS: IssueSection[] = [
  {
    title: "Shipping this week",
    items: [
      { id: "LIN-4821", title: "Linear Agents — automated issue triage and routing", status: "done", date: "Jun 28" },
      { id: "LIN-4839", title: "Diffs & Code Review — inline diff view on issues", status: "in-progress", date: "Jun 28" },
      { id: "LIN-4844", title: "Weekly Pulse AI — team-level progress digest", status: "in-progress", date: "Jun 27" },
      { id: "LIN-4851", title: "Mobile offline mode — full offline read and write", status: "planned", date: "Jun 29" },
    ],
  },
  {
    title: "Coming soon",
    items: [
      { id: "LIN-4872", title: "Roadmap view improvements — swimlane grouping by team", status: "planned", date: "Jul 7" },
      { id: "LIN-4880", title: "GitHub Copilot integration — suggest issues from PRs", status: "planned", date: "Jul 14" },
      { id: "LIN-4891", title: "Enterprise SSO enhancements — SCIM provisioning v2", status: "planned", date: "Jul 21" },
      { id: "LIN-4903", title: "Slack notifications v2 — threaded issue digests", status: "planned", date: "Jul 28" },
    ],
  },
  {
    title: "Recently shipped",
    items: [
      { id: "LIN-4780", title: "API v2 — REST & GraphQL unified gateway", status: "done", date: "Jun 18" },
      { id: "LIN-4761", title: "Roadmap public sharing — shareable read-only links", status: "done", date: "Jun 12" },
      { id: "LIN-4744", title: "Issue templates v3 — per-team and per-project defaults", status: "done", date: "Jun 5" },
      { id: "LIN-4731", title: "Figma integration — embed Figma frames in issues", status: "done", date: "May 29" },
    ],
  },
];

const STATUS_CONFIG: Record<StatusType, { color: string; label: string }> = {
  done: { color: "rgb(50, 200, 120)", label: "Done" },
  "in-progress": { color: "rgb(240, 180, 40)", label: "In progress" },
  planned: { color: "rgb(138, 143, 152)", label: "Planned" },
};

interface StatusDotProps {
  status: StatusType;
}

function StatusDot({ status }: StatusDotProps) {
  const config = STATUS_CONFIG[status];

  if (status === "done") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
        <circle cx="8" cy="8" r="7" stroke={config.color} strokeWidth="1.5" />
        <path
          d="M5 8L7 10L11 6"
          stroke={config.color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (status === "in-progress") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
        <circle cx="8" cy="8" r="7" stroke={config.color} strokeWidth="1.5" />
        <path
          d="M8 4.5V8L10.5 10"
          stroke={config.color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="8" cy="8" r="7" stroke={config.color} strokeWidth="1.5" strokeDasharray="3 2" />
    </svg>
  );
}

interface IssueRowProps {
  item: IssueItem;
}

function IssueRow({ item }: IssueRowProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "14px 0",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      <StatusDot status={item.status} />
      <span
        style={{
          fontSize: "12px",
          fontWeight: 400,
          color: "rgb(138, 143, 152)",
          fontFamily: "monospace",
          flexShrink: 0,
          minWidth: "72px",
        }}
      >
        {item.id}
      </span>
      <span
        style={{
          fontSize: "14px",
          color: "rgb(208, 214, 224)",
          flex: 1,
        }}
      >
        {item.title}
      </span>
      <span
        style={{
          fontSize: "12px",
          color: "rgb(138, 143, 152)",
          flexShrink: 0,
        }}
      >
        {item.date}
      </span>
    </div>
  );
}

interface IssueSectionBlockProps {
  section: IssueSection;
}

function IssueSectionBlock({ section }: IssueSectionBlockProps) {
  return (
    <div style={{ marginBottom: "48px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "4px",
        }}
      >
        <h2
          style={{
            fontSize: "15px",
            fontWeight: 510,
            color: "rgb(247, 248, 248)",
            margin: 0,
          }}
        >
          {section.title}
        </h2>
        <span
          style={{
            fontSize: "12px",
            color: "rgb(138, 143, 152)",
            backgroundColor: "rgba(255, 255, 255, 0.06)",
            borderRadius: "9999px",
            padding: "2px 8px",
          }}
        >
          {section.items.length}
        </span>
      </div>
      <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
        {section.items.map((item) => (
          <IssueRow key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function NowPage() {
  return (
    <main style={{ backgroundColor: "rgb(8, 9, 10)", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ paddingTop: "73px" }}>
        <section
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "80px 32px 48px",
          }}
        >
          <div style={{ marginBottom: "48px" }}>
            <h1
              style={{
                fontSize: "72px",
                fontWeight: 600,
                letterSpacing: "-2px",
                color: "rgb(247, 248, 248)",
                marginBottom: "12px",
                lineHeight: 1,
              }}
            >
              Now
            </h1>
            <p
              style={{
                fontSize: "18px",
                color: "rgb(138, 143, 152)",
                lineHeight: 1.6,
              }}
            >
              What we&apos;re shipping right now.
            </p>
          </div>

          <div>
            {ISSUE_SECTIONS.map((section) => (
              <IssueSectionBlock key={section.title} section={section} />
            ))}
          </div>

          <div
            style={{
              marginTop: "32px",
              padding: "24px",
              backgroundColor: "rgb(13, 14, 15)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "rgb(50, 200, 120)",
                flexShrink: 0,
                boxShadow: "0 0 8px rgb(50, 200, 120)",
              }}
            />
            <div>
              <div style={{ fontSize: "14px", fontWeight: 510, color: "rgb(247, 248, 248)", marginBottom: "2px" }}>
                This is a live snapshot
              </div>
              <div style={{ fontSize: "13px", color: "rgb(138, 143, 152)" }}>
                We update this page as our roadmap evolves. Follow{" "}
                <a
                  href="https://x.com/linear"
                  style={{ color: "rgb(96, 121, 241)", textDecoration: "none" }}
                >
                  @linear
                </a>{" "}
                for announcements.
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
