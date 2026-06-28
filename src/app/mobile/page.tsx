import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";

const IOS_FEATURES = [
  "Full issue management",
  "Offline support",
  "Apple shortcuts",
  "Widget support",
  "Siri integration",
];

function PhoneMockup() {
  return (
    <div
      style={{
        width: "240px",
        height: "480px",
        backgroundColor: "rgb(20, 21, 22)",
        borderRadius: "36px",
        border: "2px solid rgba(255, 255, 255, 0.12)",
        padding: "20px 16px",
        display: "flex",
        flexDirection: "column" as const,
        gap: "8px",
        boxShadow: "0 32px 64px rgba(0, 0, 0, 0.6)",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: "60px",
          height: "6px",
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          borderRadius: "3px",
          margin: "0 auto 8px",
        }}
      />
      <div
        style={{
          height: "28px",
          backgroundColor: "rgba(255, 255, 255, 0.04)",
          borderRadius: "6px",
          border: "1px solid rgba(255, 255, 255, 0.06)",
          display: "flex",
          alignItems: "center",
          padding: "0 10px",
          gap: "6px",
        }}
      >
        <span style={{ fontSize: "10px", color: "rgb(96, 121, 241)" }}>⬡</span>
        <span style={{ fontSize: "10px", color: "rgb(138, 143, 152)", flex: 1 }}>My Issues</span>
        <span style={{ fontSize: "10px", color: "rgb(138, 143, 152)" }}>3</span>
      </div>
      {[
        { title: "Fix auth bug", label: "In Progress", color: "rgb(249, 115, 22)" },
        { title: "Update API docs", label: "Todo", color: "rgb(138, 143, 152)" },
        { title: "Deploy v2.1", label: "Done", color: "rgb(34, 197, 94)" },
        { title: "Design review", label: "In Review", color: "rgb(96, 121, 241)" },
        { title: "Write tests", label: "Todo", color: "rgb(138, 143, 152)" },
      ].map((issue) => (
        <div
          key={issue.title}
          style={{
            padding: "8px 10px",
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            borderRadius: "6px",
            border: "1px solid rgba(255, 255, 255, 0.05)",
          }}
        >
          <div style={{ fontSize: "10px", color: "rgb(208, 214, 224)", marginBottom: "3px" }}>
            {issue.title}
          </div>
          <div style={{ fontSize: "9px", color: issue.color }}>{issue.label}</div>
        </div>
      ))}
      <div
        style={{
          marginTop: "auto",
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "8px",
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        {["⬡", "📋", "🔔", "👤"].map((icon) => (
          <span key={icon} style={{ fontSize: "14px", opacity: 0.5 }}>
            {icon}
          </span>
        ))}
      </div>
    </div>
  );
}

function AppStoreBadge({ store, available }: { store: "ios" | "android"; available: boolean }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px 20px",
        borderRadius: "10px",
        backgroundColor: available ? "rgb(247, 248, 248)" : "rgba(255, 255, 255, 0.06)",
        border: available
          ? "1px solid rgb(247, 248, 248)"
          : "1px solid rgba(255, 255, 255, 0.08)",
        cursor: available ? "pointer" : "not-allowed",
        opacity: available ? 1 : 0.5,
      }}
    >
      <span style={{ fontSize: "20px" }}>{store === "ios" ? "🍎" : "▶"}</span>
      <div>
        <div
          style={{
            fontSize: "9px",
            color: available ? "rgb(60, 60, 60)" : "rgb(138, 143, 152)",
            lineHeight: "12px",
          }}
        >
          {store === "ios" ? "Download on the" : available ? "Get it on" : "Coming soon"}
        </div>
        <div
          style={{
            fontSize: "14px",
            fontWeight: 600,
            color: available ? "rgb(8, 9, 10)" : "rgb(138, 143, 152)",
            lineHeight: "18px",
          }}
        >
          {store === "ios" ? "App Store" : "Google Play"}
        </div>
      </div>
    </div>
  );
}

export default function MobilePage() {
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
            iOS &amp; Android
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
            Linear on mobile
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "28px",
              color: "rgb(138, 143, 152)",
              margin: 0,
            }}
          >
            Your product management system, everywhere you go.
          </p>
        </section>

        <section
          style={{
            padding: "0 64px 96px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "32px",
            }}
          >
            <div
              style={{
                backgroundColor: "rgb(13, 14, 15)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                borderRadius: "16px",
                padding: "48px",
                display: "flex",
                flexDirection: "column" as const,
                gap: "32px",
              }}
            >
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "4px 12px",
                    borderRadius: "9999px",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    fontSize: "11px",
                    color: "rgb(138, 143, 152)",
                    marginBottom: "20px",
                  }}
                >
                  🍎 iOS
                </div>
                <h2
                  style={{
                    fontSize: "32px",
                    fontWeight: 510,
                    lineHeight: "38px",
                    letterSpacing: "-0.64px",
                    color: "rgb(247, 248, 248)",
                    margin: "0 0 16px",
                  }}
                >
                  Native iOS app built for speed.
                </h2>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "24px",
                    color: "rgb(138, 143, 152)",
                    margin: "0 0 24px",
                  }}
                >
                  Triage your inbox, review updates, and manage issues on the go. Built with SwiftUI
                  for the fastest possible experience.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column" as const, gap: "10px" }}>
                  {IOS_FEATURES.map((feature) => (
                    <li
                      key={feature}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "14px",
                        color: "rgb(208, 214, 224)",
                      }}
                    >
                      <span
                        style={{
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          backgroundColor: "rgba(34, 197, 94, 0.15)",
                          border: "1px solid rgba(34, 197, 94, 0.3)",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "9px",
                          color: "rgb(34, 197, 94)",
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <AppStoreBadge store="ios" available={true} />
              </div>
            </div>

            <div
              style={{
                backgroundColor: "rgb(13, 14, 15)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                borderRadius: "16px",
                padding: "48px",
                display: "flex",
                flexDirection: "column" as const,
                gap: "32px",
              }}
            >
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "4px 12px",
                    borderRadius: "9999px",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    fontSize: "11px",
                    color: "rgb(138, 143, 152)",
                    marginBottom: "20px",
                  }}
                >
                  ▶ Android
                </div>
                <h2
                  style={{
                    fontSize: "32px",
                    fontWeight: 510,
                    lineHeight: "38px",
                    letterSpacing: "-0.64px",
                    color: "rgb(247, 248, 248)",
                    margin: "0 0 16px",
                  }}
                >
                  Coming to Android.
                </h2>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "24px",
                    color: "rgb(138, 143, 152)",
                    margin: "0 0 32px",
                  }}
                >
                  Android app is in development. Join the waitlist to be notified when it&#39;s
                  ready.
                </p>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: "12px", marginBottom: "32px" }}>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    style={{
                      padding: "10px 16px",
                      borderRadius: "8px",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      color: "rgb(247, 248, 248)",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                  <button
                    type="button"
                    style={{
                      padding: "10px 20px",
                      borderRadius: "8px",
                      backgroundColor: "rgb(96, 121, 241)",
                      border: "none",
                      color: "rgb(247, 248, 248)",
                      fontSize: "14px",
                      fontWeight: 510,
                      cursor: "pointer",
                    }}
                  >
                    Join waitlist
                  </button>
                </div>
                <AppStoreBadge store="android" available={false} />
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "80px",
              padding: "64px",
              backgroundColor: "rgb(13, 14, 15)",
              borderRadius: "16px",
              border: "1px solid rgba(255, 255, 255, 0.06)",
            }}
          >
            <PhoneMockup />
          </div>
        </section>

        <CtaSection />
        <Footer />
      </div>
    </main>
  );
}
