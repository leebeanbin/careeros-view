import React from "react";
import { FeatureSection } from "../FeatureSection";

interface Message {
  initials: string;
  avatarColor: string;
  name: string;
  time: string;
  text: string;
}

const messages: Message[] = [
  {
    initials: "L",
    avatarColor: "rgb(59, 130, 246)",
    name: "lena",
    time: "2:49 PM",
    text: "Anyone else noticing the iOS app feels slow to open if you haven't used it in a bit?",
  },
  {
    initials: "D",
    avatarColor: "rgb(34, 197, 94)",
    name: "didier",
    time: "2:49 PM",
    text: "Yea, we're still blocking initial render on a full vehicle_state sync every time...",
  },
  {
    initials: "A",
    avatarColor: "rgb(249, 115, 22)",
    name: "andreas",
    time: "2:49 PM",
    text: "Feels like we could render sooner and load the rest in the background. Probably also worth tracking startup timing so we know how often this happens!",
  },
];

interface IssueCard {
  id: string;
  title: string;
  labels: string[];
}

const todoIssues: IssueCard[] = [
  { id: "ENG-926", title: "Remove UI inconsistencies", labels: ["Bug", "Design"] },
  { id: "ENG-2088", title: "TypeError: Cannot read properties", labels: ["Bug"] },
  { id: "ENG-924", title: "Upgrade to Claude Opus 4.5", labels: ["AI"] },
  { id: "ENG-1182", title: "Optimize load times", labels: ["Performance"] },
];

const inProgressIssues: IssueCard[] = [
  { id: "ENG-1487", title: "Remove contentData from GraphQL API", labels: [] },
  { id: "MKT-1028", title: "Launch page assets", labels: ["Design"] },
  { id: "ENG-2187", title: "Prevent duplicate ride requests on poor...", labels: ["Bug"] },
];

function IssueCardItem({ issue }: { issue: IssueCard }) {
  return (
    <div
      style={{
        backgroundColor: "rgb(20, 21, 22)",
        border: "1px solid rgba(255, 255, 255, 0.06)",
        borderRadius: 6,
        padding: "10px 12px",
        marginBottom: 6,
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontFamily: "monospace",
          color: "rgb(87, 91, 100)",
          marginBottom: 4,
        }}
      >
        {issue.id}
      </div>
      <div
        style={{
          fontSize: 13,
          color: "rgb(208, 214, 224)",
          lineHeight: "18px",
          marginBottom: issue.labels.length > 0 ? 6 : 0,
        }}
      >
        {issue.title}
      </div>
      {issue.labels.length > 0 && (
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
          {issue.labels.map((label) => (
            <span
              key={label}
              style={{
                fontSize: 11,
                borderRadius: 4,
                padding: "2px 6px",
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                color: "rgb(138, 143, 152)",
              }}
            >
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function SlackPanel() {
  return (
    <div
      style={{
        width: "42%",
        borderRight: "1px solid rgba(255, 255, 255, 0.06)",
        padding: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header bar */}
      <div
        style={{
          height: 44,
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "0 16px",
        }}
      >
        <span style={{ color: "rgb(138, 143, 152)", fontSize: 16 }}>#</span>
        <span
          style={{
            fontSize: 13,
            fontWeight: 510,
            color: "rgb(247, 248, 248)",
            flex: 1,
          }}
        >
          Thread in #feedback
        </span>
        <button
          style={{
            background: "none",
            border: "none",
            color: "rgb(138, 143, 152)",
            cursor: "pointer",
            fontSize: 18,
            padding: 0,
          }}
        >
          ⋮
        </button>
      </div>

      {/* Messages */}
      <div
        style={{
          padding: 16,
          overflow: "hidden",
          flex: 1,
        }}
      >
        {messages.map((msg) => (
          <div
            key={msg.name}
            style={{
              display: "flex",
              gap: 10,
              marginBottom: 16,
            }}
          >
            {/* Avatar */}
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                backgroundColor: msg.avatarColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
                fontWeight: 600,
                color: "white",
                flexShrink: 0,
              }}
            >
              {msg.initials}
            </div>
            {/* Content */}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 6,
                  marginBottom: 2,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 510,
                    color: "rgb(247, 248, 248)",
                  }}
                >
                  {msg.name}
                </span>
                <span
                  style={{
                    fontSize: 12,
                    color: "rgb(138, 143, 152)",
                  }}
                >
                  {msg.time}
                </span>
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "rgb(208, 214, 224)",
                  lineHeight: "18px",
                  margin: 0,
                }}
              >
                {msg.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom input */}
      <div
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          style={{
            backgroundColor: "rgba(59, 130, 246, 0.2)",
            color: "rgb(147, 197, 253)",
            borderRadius: 4,
            padding: "2px 6px",
            fontSize: 12,
          }}
        >
          @Linear
        </span>
        <span
          style={{
            fontSize: 13,
            color: "rgb(138, 143, 152)",
            flex: 1,
          }}
        >
          create urgent issues and assign to me
        </span>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            backgroundColor: "rgb(59, 130, 246)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            cursor: "pointer",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IssueBoardPanel() {
  return (
    <div style={{ flex: 1, overflow: "auto", display: "flex", flexDirection: "column" }}>
      {/* Top bar */}
      <div
        style={{
          height: 36,
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
          display: "flex",
          gap: 16,
          padding: "0 16px",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        {["+ ···", "Todo  71", "+ ···", "In Progress  3", "+ ···"].map((item, i) => (
          <span
            key={i}
            style={{
              fontSize: 12,
              color: i % 2 === 1 ? "rgb(247, 248, 248)" : "rgb(87, 91, 100)",
              fontWeight: i % 2 === 1 ? 510 : 400,
              whiteSpace: "nowrap",
            }}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Columns */}
      <div
        style={{
          display: "flex",
          gap: 0,
          overflow: "hidden",
          flex: 1,
        }}
      >
        {/* Todo column */}
        <div
          style={{
            flex: 1,
            padding: "12px 8px",
            borderRight: "1px solid rgba(255, 255, 255, 0.04)",
          }}
        >
          {todoIssues.map((issue) => (
            <IssueCardItem key={issue.id} issue={issue} />
          ))}
        </div>

        {/* In Progress column */}
        <div style={{ flex: 1, padding: "12px 8px" }}>
          {inProgressIssues.map((issue) => (
            <IssueCardItem key={issue.id} issue={issue} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function IntakeSection() {
  return (
    <FeatureSection
      heading={"Make product\noperations self-driving"}
      description="Turn conversations and customer feedback into actionable issues that are routed, labeled, and prioritized for the right team."
      actionNumber="1.0"
      actionLabel="Intake"
      actionHref="/intake"
    >
      <SlackPanel />
      <IssueBoardPanel />
    </FeatureSection>
  );
}
