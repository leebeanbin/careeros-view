import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";

interface DownloadCard {
  platform: string;
  emoji: string;
  version: string;
  subtitle: string;
  description: string;
  fileSize: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

const DOWNLOAD_CARDS: DownloadCard[] = [
  {
    platform: "macOS",
    emoji: "🍎",
    version: "1.12.0",
    subtitle: "Native app for macOS 12+",
    description:
      "The full Linear experience, built as a native Mac app. Blazing fast with keyboard shortcuts, notifications, and offline support.",
    fileSize: "142 MB · Universal binary",
    primaryLabel: "Direct Download",
    primaryHref: "#",
    secondaryLabel: "Mac App Store",
    secondaryHref: "#",
  },
  {
    platform: "Windows",
    emoji: "🪟",
    version: "1.12.0",
    subtitle: "Native app for Windows 10+",
    description:
      "Linear for Windows with native notifications, system tray integration, and automatic updates.",
    fileSize: "98 MB · Linear-Setup.exe",
    primaryLabel: "Download for Windows",
    primaryHref: "#",
  },
  {
    platform: "iOS",
    emoji: "📱",
    version: "1.10.2",
    subtitle: "Native app for iOS 16+",
    description:
      "Manage your issues, review updates, and triage your inbox from anywhere. Built with SwiftUI for the fastest possible experience.",
    fileSize: "Free on App Store",
    primaryLabel: "App Store",
    primaryHref: "#",
  },
  {
    platform: "Web",
    emoji: "🌐",
    version: "Always latest",
    subtitle: "Use Linear in any browser",
    description:
      "Access Linear directly in Chrome, Firefox, Safari, or Edge. No installation required. Always up to date.",
    fileSize: "No download needed",
    primaryLabel: "Open Linear",
    primaryHref: "/",
  },
];

const SYSTEM_REQUIREMENTS = [
  {
    platform: "macOS",
    requirements: ["macOS 12 Monterey or later", "Apple Silicon or Intel", "512 MB RAM minimum"],
  },
  {
    platform: "Windows",
    requirements: ["Windows 10 64-bit or later", "x64 processor required", "512 MB RAM minimum"],
  },
  {
    platform: "iOS",
    requirements: ["iOS 16.0 or later", "iPhone 8 or later", "iPad (6th gen) or later"],
  },
  {
    platform: "Web",
    requirements: [
      "Chrome 90+, Firefox 88+, Safari 14+",
      "JavaScript enabled",
      "Stable internet connection",
    ],
  },
];

function VersionBadge({ version }: { version: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "2px 8px",
        borderRadius: "9999px",
        fontSize: "11px",
        fontWeight: 510,
        backgroundColor: "rgba(96, 121, 241, 0.12)",
        border: "1px solid rgba(96, 121, 241, 0.2)",
        color: "rgb(96, 121, 241)",
      }}
    >
      v{version}
    </span>
  );
}

function DownloadCardComponent({ card }: { card: DownloadCard }) {
  return (
    <div
      style={{
        backgroundColor: "rgb(13, 14, 15)",
        border: "1px solid rgba(255, 255, 255, 0.06)",
        borderRadius: "16px",
        padding: "32px",
        display: "flex",
        flexDirection: "column" as const,
        gap: "20px",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "14px",
            backgroundColor: "rgba(255, 255, 255, 0.06)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "28px",
          }}
        >
          {card.emoji}
        </div>
        <VersionBadge version={card.version} />
      </div>

      <div>
        <h3
          style={{
            fontSize: "20px",
            fontWeight: 510,
            color: "rgb(247, 248, 248)",
            margin: "0 0 4px",
            letterSpacing: "-0.3px",
          }}
        >
          {card.platform}
        </h3>
        <p
          style={{
            fontSize: "13px",
            color: "rgb(96, 121, 241)",
            margin: "0 0 12px",
            fontWeight: 510,
          }}
        >
          {card.subtitle}
        </p>
        <p
          style={{
            fontSize: "14px",
            lineHeight: "22px",
            color: "rgb(138, 143, 152)",
            margin: 0,
          }}
        >
          {card.description}
        </p>
      </div>

      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column" as const, gap: "8px" }}>
        <Link
          href={card.primaryHref}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "38px",
            borderRadius: "8px",
            backgroundColor: "rgb(96, 121, 241)",
            color: "rgb(247, 248, 248)",
            fontSize: "14px",
            fontWeight: 510,
            textDecoration: "none",
            transition: "opacity 0.15s ease",
          }}
        >
          {card.primaryLabel}
        </Link>
        {card.secondaryLabel && card.secondaryHref && (
          <Link
            href={card.secondaryHref}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "38px",
              borderRadius: "8px",
              backgroundColor: "transparent",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              color: "rgb(208, 214, 224)",
              fontSize: "14px",
              fontWeight: 400,
              textDecoration: "none",
              transition: "background-color 0.15s ease",
            }}
          >
            {card.secondaryLabel}
          </Link>
        )}
        <p
          style={{
            fontSize: "11px",
            color: "rgb(138, 143, 152)",
            textAlign: "center" as const,
            margin: 0,
          }}
        >
          {card.fileSize}
        </p>
      </div>
    </div>
  );
}

export default function DownloadPage() {
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
            macOS · Windows · iOS · Web
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
            Download Linear
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "28px",
              color: "rgb(138, 143, 152)",
              margin: 0,
            }}
          >
            Available on macOS, Windows, iOS, and web.
          </p>
        </section>

        <section
          style={{
            padding: "0 64px 80px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px",
            }}
          >
            {DOWNLOAD_CARDS.map((card) => (
              <DownloadCardComponent key={card.platform} card={card} />
            ))}
          </div>
        </section>

        <section
          style={{
            padding: "0 64px 96px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 510,
              color: "rgb(247, 248, 248)",
              margin: "0 0 32px",
              letterSpacing: "-0.4px",
            }}
          >
            System requirements
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
            }}
          >
            {SYSTEM_REQUIREMENTS.map((item) => (
              <div
                key={item.platform}
                style={{
                  backgroundColor: "rgb(13, 14, 15)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <h3
                  style={{
                    fontSize: "13px",
                    fontWeight: 510,
                    color: "rgb(208, 214, 224)",
                    margin: "0 0 12px",
                  }}
                >
                  {item.platform}
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column" as const,
                    gap: "6px",
                  }}
                >
                  {item.requirements.map((req) => (
                    <li
                      key={req}
                      style={{
                        fontSize: "12px",
                        color: "rgb(138, 143, 152)",
                        lineHeight: "18px",
                        paddingLeft: "12px",
                        position: "relative" as const,
                      }}
                    >
                      <span
                        style={{
                          position: "absolute" as const,
                          left: 0,
                          color: "rgba(255, 255, 255, 0.2)",
                        }}
                      >
                        ·
                      </span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <CtaSection />
        <Footer />
      </div>
    </main>
  );
}
