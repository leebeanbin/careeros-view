import React from "react";
import { FeatureSection } from "../FeatureSection";

interface ScatterDot {
  x: number;
  y: number;
  color: string;
}

// Cursor dots - low Y values (fast cycle time)
const cursorDots: ScatterDot[] = [
  { x: 12, y: 78 },
  { x: 15, y: 72 },
  { x: 10, y: 82 },
  { x: 18, y: 68 },
  { x: 13, y: 75 },
  { x: 20, y: 65 },
  { x: 9, y: 85 },
  { x: 16, y: 70 },
  { x: 14, y: 80 },
  { x: 11, y: 74 },
  { x: 17, y: 71 },
  { x: 8, y: 88 },
].map((d) => ({ ...d, color: "rgb(99, 102, 241)" }));

// Codex dots - medium Y values
const codexDots: ScatterDot[] = [
  { x: 38, y: 60 },
  { x: 42, y: 55 },
  { x: 36, y: 65 },
  { x: 45, y: 50 },
  { x: 40, y: 58 },
  { x: 35, y: 70 },
  { x: 43, y: 52 },
  { x: 39, y: 62 },
  { x: 37, y: 67 },
  { x: 44, y: 48 },
  { x: 41, y: 57 },
  { x: 46, y: 45 },
].map((d) => ({ ...d, color: "rgb(249, 115, 22)" }));

// No agent dots - higher Y values (slow cycle time)
const noAgentDots: ScatterDot[] = [
  { x: 68, y: 30 },
  { x: 72, y: 22 },
  { x: 65, y: 38 },
  { x: 75, y: 18 },
  { x: 70, y: 28 },
  { x: 67, y: 35 },
  { x: 73, y: 25 },
  { x: 69, y: 32 },
  { x: 71, y: 20 },
  { x: 66, y: 40 },
].map((d) => ({ ...d, color: "rgb(107, 114, 128)" }));

const yAxisLabels = [18, 16, 14, 12, 10, 8, 6, 4, 2, 0];
const xAxisLabels = ["Cursor", "Codex", "No agent"];

function WeeklyPulsePanel() {
  return (
    <div
      style={{
        width: "44%",
        borderRight: "1px solid rgba(255, 255, 255, 0.06)",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16,
          gap: 8,
        }}
      >
        <span
          style={{
            fontSize: 14,
            fontWeight: 510,
            color: "rgb(247, 248, 248)",
          }}
        >
          Weekly Pulse for Jun 27
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              borderRadius: 9999,
              padding: "4px 10px",
              fontSize: 12,
              display: "flex",
              alignItems: "center",
              gap: 4,
              border: "none",
              color: "rgb(208, 214, 224)",
              cursor: "pointer",
            }}
          >
            <span>▶</span>
            <span>Listen</span>
          </button>
          <span style={{ fontSize: 12, color: "rgb(138, 143, 152)", whiteSpace: "nowrap" }}>
            1.0×  ↺
          </span>
        </div>
      </div>

      {/* Projects label */}
      <div
        style={{
          fontSize: 11,
          fontWeight: 510,
          color: "rgb(138, 143, 152)",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
          marginBottom: 12,
        }}
      >
        Projects
      </div>

      {/* Project 1: UI refresh */}
      <div style={{ marginBottom: 4 }}>
        <div
          style={{
            fontSize: 14,
            fontWeight: 510,
            color: "rgb(247, 248, 248)",
            marginBottom: 4,
          }}
        >
          UI refresh
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginBottom: 6,
          }}
        >
          <span style={{ color: "rgb(239, 68, 68)", fontSize: 13 }}>⚠</span>
          <span style={{ color: "rgb(239, 68, 68)", fontSize: 13 }}>At risk</span>
          <span style={{ color: "rgb(138, 143, 152)", fontSize: 12 }}>
            · By romain · 1 day ago
          </span>
        </div>
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
          }}
        >
          <li
            style={{
              fontSize: 13,
              color: "rgb(208, 214, 224)",
              lineHeight: "18px",
              marginBottom: 4,
            }}
          >
            · iOS implementation is mostly complete, but Android updates are still work in progress
          </li>
          <li
            style={{
              fontSize: 13,
              color: "rgb(208, 214, 224)",
              lineHeight: "18px",
            }}
          >
            · Risk of timeline slip if remaining design decisions aren&apos;t finalized soon
          </li>
        </ul>
      </div>

      {/* Divider */}
      <div
        style={{
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
          margin: "16px 0",
        }}
      />

      {/* Project 2: Tokyo launch */}
      <div>
        <div
          style={{
            fontSize: 14,
            fontWeight: 510,
            color: "rgb(247, 248, 248)",
            marginBottom: 4,
          }}
        >
          Tokyo launch
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginBottom: 6,
          }}
        >
          <span style={{ color: "rgb(34, 197, 94)", fontSize: 13 }}>✓</span>
          <span style={{ color: "rgb(34, 197, 94)", fontSize: 13 }}>On track</span>
          <span style={{ color: "rgb(138, 143, 152)", fontSize: 12 }}>
            · By julian · 3 hours ago
          </span>
        </div>
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
          }}
        >
          <li
            style={{
              fontSize: 13,
              color: "rgb(208, 214, 224)",
              lineHeight: "18px",
              marginBottom: 4,
            }}
          >
            · Localization efforts have been completed
          </li>
          <li
            style={{
              fontSize: 13,
              color: "rgb(208, 214, 224)",
              lineHeight: "18px",
            }}
          >
            · Everything else on track for launch in early September
          </li>
        </ul>
      </div>
    </div>
  );
}

function CycleTimeChart() {
  return (
    <div
      style={{
        flex: 1,
        padding: 20,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontSize: 13,
          fontWeight: 510,
          color: "rgb(247, 248, 248)",
          marginBottom: 12,
        }}
      >
        Cycle time by agent
      </div>

      {/* Chart area */}
      <div
        style={{
          flex: 1,
          position: "relative",
          border: "1px solid rgba(255, 255, 255, 0.06)",
          borderRadius: 8,
          padding: "16px 16px 40px",
          display: "flex",
        }}
      >
        {/* Y axis labels */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginRight: 8,
            paddingBottom: 0,
          }}
        >
          {yAxisLabels.map((label) => (
            <span
              key={label}
              style={{
                fontSize: 10,
                color: "rgb(87, 91, 100)",
                lineHeight: "1",
              }}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Plot area */}
        <div style={{ flex: 1, position: "relative" }}>
          {/* Horizontal grid lines */}
          {yAxisLabels.map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: `${(i / (yAxisLabels.length - 1)) * 100}%`,
                borderTop: "1px dashed rgba(255, 255, 255, 0.05)",
              }}
            />
          ))}

          {/* Scatter dots */}
          {[...cursorDots, ...codexDots, ...noAgentDots].map((dot, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${dot.x}%`,
                top: `${dot.y}%`,
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: dot.color,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}

          {/* Connecting orange line between median points */}
          <svg
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              overflow: "visible",
              pointerEvents: "none",
            }}
          >
            <line
              x1="14%"
              y1="75%"
              x2="41%"
              y2="57%"
              stroke="rgb(249, 115, 22)"
              strokeWidth="1.5"
              strokeDasharray="none"
              opacity="0.6"
            />
            <line
              x1="41%"
              y1="57%"
              x2="70%"
              y2="28%"
              stroke="rgb(249, 115, 22)"
              strokeWidth="1.5"
              strokeOpacity="0.3"
              strokeDasharray="4 3"
            />
          </svg>

          {/* X axis labels */}
          <div
            style={{
              position: "absolute",
              bottom: -32,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            {xAxisLabels.map((label) => (
              <span
                key={label}
                style={{
                  fontSize: 11,
                  color: "rgb(138, 143, 152)",
                  textAlign: "center",
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MonitorSection() {
  return (
    <FeatureSection
      heading={"Understand\nprogress at scale"}
      description="Take the guesswork out of product development with project updates, analytics, and dashboards that show you what's happening and why."
      actionNumber="5.0"
      actionLabel="Monitor"
      actionHref="/monitor"
    >
      <WeeklyPulsePanel />
      <CycleTimeChart />
    </FeatureSection>
  );
}
