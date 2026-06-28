import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import Link from "next/link";

const webhookEvents = [
  "Issue created",
  "Issue updated",
  "Issue deleted",
  "Comment added",
  "Project updated",
  "Cycle started",
  "Cycle completed",
];

const resources = [
  {
    emoji: "📖",
    title: "API Reference",
    description:
      "Complete reference for every query, mutation, and type in the Linear GraphQL schema.",
    href: "https://developers.linear.app/docs/graphql/working-with-the-graphql-api",
  },
  {
    emoji: "📦",
    title: "SDKs",
    description:
      "Official client libraries for Node.js and Python. Type-safe, auto-generated from the schema.",
    href: "https://developers.linear.app/docs/sdk/getting-started",
  },
  {
    emoji: "🧪",
    title: "Examples & recipes",
    description:
      "Copy-paste patterns for common use cases: syncing issues, building bots, automating workflows.",
    href: "https://developers.linear.app/docs/graphql/working-with-the-graphql-api",
  },
];

const graphqlSample = `query {
  issues(filter: { assignee: { isMe: { eq: true } } }) {
    nodes {
      id
      title
      state { name }
      priority
    }
  }
}`;

export default function DevelopersPage() {
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
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "rgba(96, 121, 241, 0.12)",
              border: "1px solid rgba(96, 121, 241, 0.3)",
              borderRadius: "9999px",
              padding: "4px 14px",
              fontSize: "12px",
              fontWeight: 510,
              color: "rgb(96, 121, 241)",
              marginBottom: "24px",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Developers
          </div>
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
            Build on Linear
          </h1>
          <p
            style={{
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "32px",
              color: "rgb(138, 143, 152)",
            }}
          >
            A powerful API for teams that want to customize their workflow.
          </p>
        </section>

        <section style={{ maxWidth: "1024px", margin: "0 auto", padding: "0 32px 80px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "start",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: 510,
                  lineHeight: "40px",
                  letterSpacing: "-0.64px",
                  color: "rgb(247, 248, 248)",
                  marginBottom: "16px",
                }}
              >
                GraphQL API
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "rgb(138, 143, 152)",
                  marginBottom: "24px",
                }}
              >
                Full access to Linear data via our GraphQL API. Query issues, projects, teams,
                and more. Mutate anything you can do in the UI. Paginate efficiently with
                cursor-based pagination.
              </p>
              <Link
                href="https://developers.linear.app/docs"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "14px",
                  fontWeight: 510,
                  color: "rgb(96, 121, 241)",
                  textDecoration: "none",
                }}
              >
                View API docs →
              </Link>
            </div>
            <div
              style={{
                backgroundColor: "rgb(13, 14, 15)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "12px 16px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.12)",
                  }}
                />
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.12)",
                  }}
                />
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.12)",
                  }}
                />
                <span
                  style={{
                    marginLeft: "8px",
                    fontSize: "12px",
                    color: "rgb(138, 143, 152)",
                  }}
                >
                  GraphQL
                </span>
              </div>
              <pre
                style={{
                  margin: 0,
                  padding: "24px",
                  fontFamily:
                    '"JetBrains Mono", "Fira Code", "Cascadia Code", monospace',
                  fontSize: "13px",
                  lineHeight: "22px",
                  color: "rgb(208, 214, 224)",
                  overflowX: "auto",
                }}
              >
                <code>{graphqlSample}</code>
              </pre>
            </div>
          </div>
        </section>

        <section style={{ maxWidth: "1024px", margin: "0 auto", padding: "0 32px 80px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "start",
            }}
          >
            <div
              style={{
                backgroundColor: "rgb(13, 14, 15)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "12px",
                padding: "28px",
              }}
            >
              <h3
                style={{
                  fontSize: "13px",
                  fontWeight: 510,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "rgb(138, 143, 152)",
                  marginBottom: "16px",
                }}
              >
                Webhook events
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {webhookEvents.map((event) => (
                  <li
                    key={event}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "10px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      fontSize: "14px",
                      color: "rgb(208, 214, 224)",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "rgb(96, 121, 241)",
                        flexShrink: 0,
                      }}
                    />
                    {event}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div style={{ marginBottom: "48px" }}>
                <h2
                  style={{
                    fontSize: "32px",
                    fontWeight: 510,
                    lineHeight: "40px",
                    letterSpacing: "-0.64px",
                    color: "rgb(247, 248, 248)",
                    marginBottom: "16px",
                  }}
                >
                  Webhooks
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "26px",
                    color: "rgb(138, 143, 152)",
                  }}
                >
                  Get notified when things change in Linear. Subscribe to specific event types
                  and receive real-time POST requests to your endpoint with a signed payload.
                </p>
              </div>

              <div>
                <h2
                  style={{
                    fontSize: "32px",
                    fontWeight: 510,
                    lineHeight: "40px",
                    letterSpacing: "-0.64px",
                    color: "rgb(247, 248, 248)",
                    marginBottom: "16px",
                  }}
                >
                  OAuth 2.0
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "26px",
                    color: "rgb(138, 143, 152)",
                    marginBottom: "20px",
                  }}
                >
                  Build integrations with Linear OAuth 2.0. Request scoped access on behalf of
                  your users, store tokens securely, and act on their behalf. Supports
                  authorization code flow and refresh tokens.
                </p>
                <Link
                  href="https://developers.linear.app/docs/oauth/authentication"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "14px",
                    fontWeight: 510,
                    color: "rgb(96, 121, 241)",
                    textDecoration: "none",
                  }}
                >
                  OAuth documentation →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section style={{ maxWidth: "1024px", margin: "0 auto", padding: "0 32px 96px" }}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 510,
              color: "rgb(247, 248, 248)",
              marginBottom: "32px",
            }}
          >
            Resources
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "rgb(13, 14, 15)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "12px",
                  padding: "28px",
                  textDecoration: "none",
                  display: "block",
                  transition: "border-color 0.15s ease",
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "16px", lineHeight: 1 }}>
                  {resource.emoji}
                </div>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 510,
                    color: "rgb(247, 248, 248)",
                    marginBottom: "8px",
                  }}
                >
                  {resource.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: "rgb(138, 143, 152)",
                  }}
                >
                  {resource.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <CtaSection />
      <Footer />
    </main>
  );
}
