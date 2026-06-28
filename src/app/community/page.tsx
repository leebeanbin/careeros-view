import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface CommunityCard {
  platform: string;
  heading: string;
  description: string;
  cta: string;
  href: string;
  iconPath: string;
}

const CARDS: CommunityCard[] = [
  {
    platform: "Slack",
    heading: "Join our Slack community",
    description:
      "5,000+ members discussing product best practices, sharing templates, and helping each other.",
    cta: "Join Slack",
    href: "https://linear-community.slack.com",
    iconPath:
      "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z",
  },
  {
    platform: "X / Twitter",
    heading: "Follow @linear",
    description:
      "Product updates, tips, and the occasional behind-the-scenes look at how we build.",
    cta: "Follow",
    href: "https://x.com/linear",
    iconPath:
      "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.629L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z",
  },
  {
    platform: "GitHub",
    heading: "Linear on GitHub",
    description:
      "Open source SDKs, integrations, and our public roadmap.",
    cta: "View GitHub",
    href: "https://github.com/linear",
    iconPath:
      "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  },
  {
    platform: "YouTube",
    heading: "Linear on YouTube",
    description:
      "Tutorials, product walkthroughs, and team interviews.",
    cta: "Subscribe",
    href: "https://youtube.com/@linear",
    iconPath:
      "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

export default function CommunityPage() {
  return (
    <main style={{ backgroundColor: "rgb(8, 9, 10)", minHeight: "100vh", color: "rgb(247, 248, 248)" }}>
      <Navbar />
      <div style={{ paddingTop: "73px" }}>
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            padding: "80px 64px",
          }}
        >
          <div style={{ textAlign: "center" as const, marginBottom: "72px" }}>
            <h1
              style={{
                fontSize: "52px",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                color: "rgb(247, 248, 248)",
                margin: "0 0 20px 0",
                lineHeight: 1.1,
              }}
            >
              Join the Linear community
            </h1>
            <p
              style={{
                fontSize: "18px",
                color: "rgb(138, 143, 152)",
                margin: 0,
                lineHeight: 1.6,
                maxWidth: "480px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Connect with thousands of product teams around the world.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            {CARDS.map((card) => (
              <div
                key={card.platform}
                style={{
                  backgroundColor: "rgb(13, 14, 15)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "16px",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: "0",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="rgb(208, 214, 224)"
                    aria-hidden="true"
                  >
                    <path d={card.iconPath} />
                  </svg>
                </div>

                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase" as const,
                    color: "rgb(138, 143, 152)",
                    marginBottom: "8px",
                  }}
                >
                  {card.platform}
                </div>

                <h2
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "rgb(247, 248, 248)",
                    margin: "0 0 10px 0",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                  }}
                >
                  {card.heading}
                </h2>

                <p
                  style={{
                    fontSize: "14px",
                    color: "rgb(138, 143, 152)",
                    margin: "0 0 24px 0",
                    lineHeight: 1.65,
                    flex: 1,
                  }}
                >
                  {card.description}
                </p>

                <div>
                  <Link
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      height: "34px",
                      padding: "0 16px",
                      backgroundColor: "rgba(255, 255, 255, 0.06)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "8px",
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "rgb(208, 214, 224)",
                      textDecoration: "none",
                      transition: "background-color 0.15s ease",
                    }}
                  >
                    {card.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
