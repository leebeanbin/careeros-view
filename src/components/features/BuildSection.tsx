import React from "react";
import { FeatureSection } from "../FeatureSection";

interface AssignItem {
  id: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  name: string;
  isAgent: boolean;
  selected: boolean;
}

const assignees: AssignItem[] = [
  {
    id: "codex",
    icon: "C",
    iconBg: "rgb(99, 102, 241)",
    iconColor: "white",
    name: "Codex",
    isAgent: true,
    selected: true,
  },
  {
    id: "steven",
    icon: "S",
    iconBg: "rgba(255, 255, 255, 0.1)",
    iconColor: "rgb(208, 214, 224)",
    name: "Steven",
    isAgent: false,
    selected: false,
  },
  {
    id: "ema",
    icon: "E",
    iconBg: "rgba(255, 255, 255, 0.1)",
    iconColor: "rgb(208, 214, 224)",
    name: "Ema",
    isAgent: false,
    selected: false,
  },
  {
    id: "copilot",
    icon: "G",
    iconBg: "rgba(255, 255, 255, 0.1)",
    iconColor: "rgb(208, 214, 224)",
    name: "GitHub Copilot",
    isAgent: true,
    selected: false,
  },
  {
    id: "cursor",
    icon: "⊡",
    iconBg: "rgba(255, 255, 255, 0.1)",
    iconColor: "rgb(208, 214, 224)",
    name: "Cursor",
    isAgent: true,
    selected: false,
  },
  {
    id: "meg",
    icon: "M",
    iconBg: "rgba(255, 255, 255, 0.1)",
    iconColor: "rgb(208, 214, 224)",
    name: "Meg",
    isAgent: false,
    selected: false,
  },
];

function TerminalPanel() {
  return (
    <div
      style={{
        width: "50%",
        borderRight: "1px solid rgba(255, 255, 255, 0.06)",
        padding: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          height: 40,
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "0 16px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <span style={{ color: "rgb(99, 102, 241)", fontSize: 14 }}>⬡</span>
        <span
          style={{
            fontSize: 13,
            fontWeight: 510,
            color: "rgb(247, 248, 248)",
            flex: 1,
          }}
        >
          Codex
        </span>
        <span style={{ color: "rgb(138, 143, 152)", fontSize: 16 }}>···</span>
      </div>

      {/* Terminal content */}
      <div
        style={{
          padding: 16,
          fontFamily: "monospace",
          fontSize: 12,
          lineHeight: "20px",
          flex: 1,
          overflow: "hidden",
        }}
      >
        <div style={{ color: "rgb(208, 214, 224)" }}>
          On it! I&apos;ve received your request.
        </div>
        <div style={{ height: 8 }} />
        <div>
          <span style={{ color: "rgb(208, 214, 224)" }}>Kicked off a task in </span>
          <span
            style={{
              color: "rgb(147, 197, 253)",
              backgroundColor: "rgba(147, 197, 253, 0.08)",
              borderRadius: 3,
              padding: "0 4px",
            }}
          >
            kinetic/kinetic-iOS
          </span>
          <span style={{ color: "rgb(138, 143, 152)" }}> environment.</span>
        </div>
        <div style={{ height: 8 }} />
        <div style={{ color: "rgb(208, 214, 224)" }}>Searching for root AGENTS file</div>
        <div style={{ color: "rgb(87, 91, 100)" }}></div>
        <div>
          <span style={{ color: "rgb(87, 91, 100)" }}>kinetic/kinetic-iOS$ </span>
          <span style={{ color: "rgb(147, 197, 253)" }}>
            /bin/bash -lc rg --files -g &apos;AGENTS.md&apos;
          </span>
        </div>
        <div style={{ color: "rgb(134, 239, 172)" }}>AGENTS.md</div>
        <div style={{ height: 8 }} />
        <div>
          <span style={{ color: "rgb(208, 214, 224)" }}>Locating initialization logic for </span>
          <span
            style={{
              color: "rgb(147, 197, 253)",
              backgroundColor: "rgba(147, 197, 253, 0.08)",
              borderRadius: 3,
              padding: "0 4px",
            }}
          >
            vehicle_state
          </span>
        </div>
        <div style={{ height: 8 }} />
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span
            style={{
              color: "rgb(138, 143, 152)",
              display: "inline-block",
              animation: "spin 1s linear infinite",
            }}
          >
            ⠙
          </span>
          <span style={{ color: "rgb(138, 143, 152)" }}>Thinking...</span>
          <span
            style={{
              display: "inline-block",
              width: 2,
              height: 14,
              backgroundColor: "rgb(208, 214, 224)",
              animation: "blink 1s step-end infinite",
              verticalAlign: "middle",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

function AssignPanel() {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      {/* Search input */}
      <div style={{ margin: 16 }}>
        <div
          style={{
            borderRadius: 8,
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "8px 12px",
            fontSize: 13,
            color: "rgb(138, 143, 152)",
          }}
        >
          Assign to...
        </div>
      </div>

      {/* List items */}
      {assignees.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 16px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.04)",
            backgroundColor: item.selected ? "rgba(255, 255, 255, 0.05)" : "transparent",
            cursor: "pointer",
          }}
        >
          {/* Avatar */}
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 9999,
              backgroundColor: item.iconBg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 12,
              fontWeight: 600,
              color: item.iconColor,
              flexShrink: 0,
            }}
          >
            {item.icon}
          </div>

          {/* Name */}
          <span
            style={{
              fontSize: 13,
              color: "rgb(208, 214, 224)",
              flex: 1,
            }}
          >
            {item.name}
          </span>

          {/* Agent badge */}
          {item.isAgent && (
            <span
              style={{
                fontSize: 11,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                color: "rgb(208, 214, 224)",
                borderRadius: 4,
                padding: "2px 6px",
                marginLeft: 6,
              }}
            >
              Agent
            </span>
          )}

          {/* Check mark for selected */}
          {item.selected && (
            <span style={{ color: "rgb(99, 102, 241)", fontSize: 14, marginLeft: 4 }}>✓</span>
          )}
        </div>
      ))}
    </div>
  );
}

export function BuildSection() {
  return (
    <FeatureSection
      heading={"Move work forward\nacross teams and agents"}
      description="Build and deploy AI agents that work alongside your team. Work on complex tasks together or delegate fully."
      actionNumber="3.0"
      actionLabel="Build"
      actionHref="/build"
    >
      <TerminalPanel />
      <AssignPanel />
    </FeatureSection>
  );
}
