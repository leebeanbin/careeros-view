import React from "react";
import { FeatureSection } from "../FeatureSection";

interface TreeItem {
  label: string;
  count: number;
  icon: string;
  children?: TreeItem[];
}

const initiatives: TreeItem[] = [
  {
    label: "Core Product",
    count: 99,
    icon: "⬡",
    children: [
      { label: "Infra stability", count: 28, icon: "≡" },
      { label: "Autonomous systems", count: 16, icon: "+" },
      { label: "Mobile apps", count: 8, icon: "📱" },
    ],
  },
  {
    label: "APAC Expansion",
    count: 21,
    icon: "⬡",
    children: [
      { label: "Japan Launch", count: 12, icon: "🌸" },
      { label: "Customer-driven priorities", count: 9, icon: "📋" },
    ],
  },
];

const months = ["MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP"];

interface GanttRow {
  label: string;
  barStart: number;
  barWidth: number;
  color: string;
  borderColor: string;
}

const ganttRows: GanttRow[] = [
  {
    label: "✦ UI Refresh ✓",
    barStart: 5,
    barWidth: 38,
    color: "rgba(251, 146, 60, 0.4)",
    borderColor: "rgba(251, 146, 60, 0.6)",
  },
  {
    label: "✦ Split fares ↑",
    barStart: 25,
    barWidth: 35,
    color: "rgba(139, 92, 246, 0.4)",
    borderColor: "rgba(139, 92, 246, 0.6)",
  },
  {
    label: "✦ Autonomy status clarity ✓",
    barStart: 50,
    barWidth: 22,
    color: "rgba(251, 146, 60, 0.4)",
    borderColor: "rgba(251, 146, 60, 0.6)",
  },
];

function InitiativesPanel() {
  return (
    <div
      style={{
        width: "32%",
        borderRight: "1px solid rgba(255, 255, 255, 0.06)",
        padding: "16px 0",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontSize: 13,
          fontWeight: 510,
          color: "rgb(247, 248, 248)",
          padding: "0 16px",
          marginBottom: 8,
        }}
      >
        Initiatives
      </div>

      {initiatives.map((item) => (
        <React.Fragment key={item.label}>
          {/* Parent item */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "6px 16px",
              gap: 8,
              fontSize: 13,
              fontWeight: 510,
              color: "rgb(247, 248, 248)",
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: 12 }}>{item.icon}</span>
            <span style={{ flex: 1 }}>{item.label}</span>
            <span
              style={{
                fontSize: 11,
                color: "rgb(87, 91, 100)",
                fontFamily: "monospace",
              }}
            >
              {item.count}
            </span>
          </div>

          {/* Children */}
          {item.children?.map((child) => (
            <div
              key={child.label}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "6px 16px",
                paddingLeft: 32,
                gap: 8,
                fontSize: 13,
                fontWeight: 400,
                color: "rgb(138, 143, 152)",
                cursor: "pointer",
              }}
            >
              <span style={{ fontSize: 12 }}>{child.icon}</span>
              <span style={{ flex: 1 }}>{child.label}</span>
              <span
                style={{
                  fontSize: 11,
                  color: "rgb(87, 91, 100)",
                  fontFamily: "monospace",
                }}
              >
                {child.count}
              </span>
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

function GanttPanel() {
  return (
    <div style={{ flex: 1, overflow: "auto", display: "flex", flexDirection: "column" }}>
      {/* Month headers */}
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
          padding: "8px 0",
          paddingLeft: "24%",
        }}
      >
        {months.map((month) => (
          <div
            key={month}
            style={{
              flex: 1,
              fontSize: 11,
              color: "rgb(87, 91, 100)",
              textAlign: "center",
              fontFamily: "monospace",
            }}
          >
            {month}
          </div>
        ))}
      </div>

      {/* Timeline rows */}
      {ganttRows.map((row) => (
        <div
          key={row.label}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "12px 16px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.04)",
          }}
        >
          {/* Row label */}
          <div
            style={{
              width: "24%",
              fontSize: 12,
              color: "rgb(208, 214, 224)",
              flexShrink: 0,
              paddingRight: 8,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {row.label}
          </div>

          {/* Bar area */}
          <div
            style={{
              flex: 1,
              position: "relative",
              height: 20,
            }}
          >
            <div
              style={{
                position: "absolute",
                left: `${row.barStart}%`,
                width: `${row.barWidth}%`,
                height: "100%",
                backgroundColor: row.color,
                border: `1px solid ${row.borderColor}`,
                borderRadius: 4,
              }}
            />
            {/* Milestone diamonds */}
            <div
              style={{
                position: "absolute",
                left: `${row.barStart + row.barWidth}%`,
                top: "50%",
                transform: "translate(-50%, -50%) rotate(45deg)",
                width: 8,
                height: 8,
                backgroundColor: row.borderColor,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function PlanSection() {
  return (
    <FeatureSection
      heading={"Define the\nproduct direction"}
      description="Plan and navigate from idea to launch. Align your team with product initiatives, strategic roadmaps, and clear, up-to-date PRDs."
      actionNumber="2.0"
      actionLabel="Plan"
      actionHref="/plan"
    >
      <InitiativesPanel />
      <GanttPanel />
    </FeatureSection>
  );
}
