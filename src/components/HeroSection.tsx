export function HeroSection() {
  return (
    <section
      style={{
        backgroundColor: "rgb(8, 9, 10)",
        paddingTop: "160px",
        paddingLeft: "64px",
        paddingRight: "64px",
        overflow: "hidden",
        maxWidth: "1440px",
        margin: "0 auto",
      }}
    >
      {/* Top row: h1 block + feature link */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        {/* Left: headline + subtitle */}
        <div>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 510,
              lineHeight: "64px",
              letterSpacing: "-1.408px",
              color: "rgb(247, 248, 248)",
              maxWidth: "800px",
              marginBottom: "20px",
              marginTop: 0,
            }}
          >
            The product development system for teams and agents
          </h1>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              color: "rgb(138, 143, 152)",
              margin: 0,
            }}
          >
            Purpose-built for planning and building products. Designed for the AI era.
          </p>
        </div>

        {/* Right: feature link */}
        <a
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "15px",
            textDecoration: "none",
            flexShrink: 0,
            marginTop: "4px",
          }}
        >
          <span
            style={{
              fontWeight: 510,
              color: "rgb(208, 214, 224)",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              padding: "2px 8px",
              borderRadius: "9999px",
              fontSize: "12px",
            }}
          >
            New
          </span>
          <span style={{ color: "rgba(255, 255, 255, 0.3)", margin: "0 4px" }}>·</span>
          <span style={{ color: "rgb(208, 214, 224)", fontWeight: 400 }}>
            Coding Sessions →
          </span>
        </a>
      </div>

      {/* App mockup */}
      <div
        style={{
          marginTop: "48px",
          borderRadius: "12px 12px 0 0",
          backgroundColor: "rgb(15, 16, 17)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderBottom: "none",
          overflow: "hidden",
          width: "100%",
          minHeight: "520px",
          display: "flex",
          position: "relative",
        }}
      >
        {/* LEFT PANEL */}
        <div
          style={{
            width: "220px",
            flexShrink: 0,
            backgroundColor: "rgb(13, 14, 15)",
            borderRight: "1px solid rgba(255, 255, 255, 0.06)",
            padding: "12px 0",
            fontSize: "13px",
            color: "rgb(247, 248, 248)",
          }}
        >
          {/* Workspace header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "4px 12px",
              marginBottom: "8px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ fontSize: "14px" }}>◉</span>
              <span style={{ fontWeight: 510 }}>Linear</span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "10px" }}>∨</span>
            </div>
            <div style={{ display: "flex", gap: "8px", color: "rgba(255,255,255,0.4)" }}>
              <span style={{ cursor: "pointer" }}>🔍</span>
              <span style={{ cursor: "pointer" }}>✎</span>
            </div>
          </div>

          <div
            style={{
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.06)",
              marginBottom: "8px",
            }}
          />

          {/* Nav items */}
          {[
            { icon: "□", label: "Inbox" },
            { icon: "↩", label: "My issues" },
            { icon: "≡", label: "Reviews" },
            { icon: "✦", label: "Pulse" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "5px 12px",
                color: "rgba(255,255,255,0.6)",
                cursor: "pointer",
              }}
            >
              <span style={{ fontSize: "12px", width: "14px", textAlign: "center" }}>
                {item.icon}
              </span>
              <span>{item.label}</span>
            </div>
          ))}

          <div
            style={{
              padding: "12px 12px 4px",
              color: "rgba(255,255,255,0.35)",
              fontSize: "11px",
              fontWeight: 510,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Workspace
          </div>

          {[
            { icon: "⬡", label: "Initiatives" },
            { icon: "📁", label: "Projects" },
            { icon: "···", label: "More" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "5px 12px",
                color: "rgba(255,255,255,0.6)",
                cursor: "pointer",
              }}
            >
              <span style={{ fontSize: "12px", width: "14px", textAlign: "center" }}>
                {item.icon}
              </span>
              <span>{item.label}</span>
            </div>
          ))}

          <div
            style={{
              padding: "12px 12px 4px",
              color: "rgba(255,255,255,0.35)",
              fontSize: "11px",
              fontWeight: 510,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Favorites
          </div>

          {/* Highlighted row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "5px 12px",
              backgroundColor: "rgba(255,255,255,0.07)",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "9999px",
                backgroundColor: "#f59e0b",
                flexShrink: 0,
                display: "inline-block",
              }}
            />
            <span>Faster app launch</span>
          </div>
        </div>

        {/* CENTER PANEL */}
        <div
          style={{
            flex: 1,
            backgroundColor: "rgb(15, 16, 17)",
            borderRight: "1px solid rgba(255, 255, 255, 0.06)",
            padding: 0,
          }}
        >
          {/* Top bar */}
          <div
            style={{
              height: "44px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "0 16px",
              fontSize: "13px",
              color: "rgb(247, 248, 248)",
            }}
          >
            <span style={{ fontWeight: 510 }}>Faster app launch</span>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>⭐</span>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>···</span>
            <div
              style={{
                height: "16px",
                width: "1px",
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
            />
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>02/145</span>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px" }}>↑↓</span>
            <div
              style={{
                height: "16px",
                width: "1px",
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
            />
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>ENG-2703</span>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px" }}>🔗</span>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px" }}>📋</span>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px" }}>⑂</span>
          </div>

          {/* Issue content */}
          <div style={{ padding: "24px" }}>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: 510,
                color: "rgb(247, 248, 248)",
                marginBottom: "12px",
                marginTop: 0,
              }}
            >
              Faster app launch
            </h3>
            <p
              style={{
                fontSize: "13px",
                color: "rgb(138, 143, 152)",
                lineHeight: "20px",
                margin: 0,
              }}
            >
              Render UI before{" "}
              <code
                style={{
                  fontFamily: "monospace",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: "4px",
                  padding: "2px 6px",
                  fontSize: "12px",
                  color: "rgb(208, 214, 224)",
                }}
              >
                vehicle_state
              </code>{" "}
              sync when minimum required state is present, instead of blocking on full
              refresh during iOS startup.
            </p>

            <div
              style={{
                fontSize: "12px",
                fontWeight: 510,
                color: "rgb(138, 143, 152)",
                marginTop: "24px",
                marginBottom: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Activity
            </div>

            {/* Activity items */}
            {[
              {
                bg: "rgba(99,102,241,0.5)",
                text: "Linear created the issue via Slack on behalf of karri · 2min ago",
              },
              {
                bg: "rgba(16,185,129,0.5)",
                text: "Triage Intelligence added the label Performance and iOS · 2min ago",
              },
              {
                bg: "rgba(245,158,11,0.5)",
                text: "karri · 4 min ago",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "flex-start",
                  marginBottom: "12px",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "9999px",
                    backgroundColor: item.bg,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    color: "rgb(138, 143, 152)",
                    lineHeight: "20px",
                  }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div
          style={{
            width: "260px",
            flexShrink: 0,
            backgroundColor: "rgb(15, 16, 17)",
            padding: "16px",
            fontSize: "13px",
          }}
        >
          {[
            {
              left: (
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "9999px",
                      backgroundColor: "#f59e0b",
                      display: "inline-block",
                    }}
                  />
                  <span style={{ color: "rgb(247,248,248)" }}>In Progress</span>
                </div>
              ),
              right: <span style={{ color: "rgba(255,255,255,0.3)" }}>●</span>,
            },
            {
              left: (
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span>📊</span>
                  <span style={{ color: "rgb(247,248,248)" }}>High</span>
                </div>
              ),
              right: null,
            },
            {
              left: (
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "9999px",
                      backgroundColor: "rgba(99,102,241,0.6)",
                    }}
                  />
                  <span style={{ color: "rgb(247,248,248)" }}>jori</span>
                </div>
              ),
              right: null,
            },
            {
              left: (
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ fontSize: "14px" }}>◉</span>
                  <span style={{ color: "rgb(247,248,248)" }}>Linear</span>
                </div>
              ),
              right: null,
            },
          ].map((row, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {row.left}
              {row.right}
            </div>
          ))}
        </div>

        {/* Floating AI Panel */}
        <div
          style={{
            position: "absolute",
            bottom: "16px",
            right: 0,
            width: "320px",
            backgroundColor: "rgb(20, 21, 22)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px 8px 0 0",
            overflow: "hidden",
          }}
        >
          {/* AI Panel Header */}
          <div
            style={{
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 12px",
              backgroundColor: "rgb(15, 16, 17)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <span style={{ fontSize: "12px", color: "rgb(208, 214, 224)" }}>
              ● Linear &nbsp; Opus 4.8
            </span>
            <div
              style={{
                display: "flex",
                gap: "8px",
                color: "rgb(138, 143, 152)",
                fontSize: "11px",
              }}
            >
              <span style={{ cursor: "pointer" }}>−</span>
              <span style={{ cursor: "pointer" }}>□</span>
              <span style={{ cursor: "pointer" }}>×</span>
            </div>
          </div>

          {/* AI Panel Content */}
          <div
            style={{
              padding: "12px",
              fontSize: "12px",
              color: "rgb(138, 143, 152)",
              lineHeight: "18px",
            }}
          >
            <div style={{ marginBottom: "6px" }}>jori connected Linear to ENG-2703</div>
            <div style={{ marginBottom: "6px" }}>Examining the startup path...</div>
            <div>Worked for 7s ▼</div>
          </div>
        </div>
      </div>
    </section>
  );
}
