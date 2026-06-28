import React from "react";
import { FeatureSection } from "../FeatureSection";

type TokenType =
  | "keyword"
  | "string"
  | "function"
  | "jsx"
  | "prop"
  | "default"
  | "comment";

interface CodeToken {
  text: string;
  type: TokenType;
}

type DiffLineType = "removed" | "added" | "unchanged";

interface CodeLine {
  lineNum: number;
  tokens: CodeToken[];
  diffType: DiffLineType;
}

function tokenColor(type: TokenType): string {
  switch (type) {
    case "keyword":
      return "rgb(196, 181, 253)";
    case "string":
      return "rgb(134, 239, 172)";
    case "function":
      return "rgb(147, 197, 253)";
    case "jsx":
      return "rgb(249, 168, 212)";
    case "prop":
      return "rgb(147, 197, 253)";
    case "comment":
      return "rgb(87, 91, 100)";
    case "default":
    default:
      return "rgb(208, 214, 224)";
  }
}

function t(text: string, type: TokenType = "default"): CodeToken {
  return { text, type };
}

const kw = (text: string) => t(text, "keyword");
const str = (text: string) => t(text, "string");
const fn = (text: string) => t(text, "function");
const jsx = (text: string) => t(text, "jsx");

const oldLines: CodeLine[] = [
  {
    lineNum: 1,
    diffType: "unchanged",
    tokens: [kw("import"), t(" React "), kw("from"), t(" "), str("'react'")],
  },
  {
    lineNum: 2,
    diffType: "unchanged",
    tokens: [
      kw("import"),
      t(" { "),
      fn("View"),
      t(", "),
      fn("ActivityIndicator"),
      t(" } "),
      kw("from"),
      t(" "),
      str("'react-native'"),
    ],
  },
  {
    lineNum: 3,
    diffType: "removed",
    tokens: [
      kw("import"),
      t(" { "),
      fn("useVehicleState"),
      t(" } "),
      kw("from"),
      t(" "),
      str("'@hooks/useVehicleState'"),
    ],
  },
  {
    lineNum: 4,
    diffType: "unchanged",
    tokens: [
      kw("import"),
      t(" { "),
      fn("Dashboard"),
      t(" } "),
      kw("from"),
      t(" "),
      str("'@components/Dashboard'"),
    ],
  },
  { lineNum: 5, diffType: "unchanged", tokens: [t("")] },
  {
    lineNum: 6,
    diffType: "unchanged",
    tokens: [
      kw("export"),
      t(" "),
      kw("const"),
      t(" "),
      fn("HomeScreen"),
      t(" = () => {"),
    ],
  },
  {
    lineNum: 7,
    diffType: "removed",
    tokens: [
      t("  "),
      kw("const"),
      t(" { "),
      t("vehicleState"),
      t(", "),
      t("isFullySynced"),
      t(" } = "),
      fn("useVehicleState"),
      t("()"),
    ],
  },
  { lineNum: 8, diffType: "unchanged", tokens: [t("")] },
  {
    lineNum: 9,
    diffType: "removed",
    tokens: [
      t("  "),
      kw("if"),
      t(" (!isFullySynced) {"),
    ],
  },
  {
    lineNum: 10,
    diffType: "unchanged",
    tokens: [
      t("    "),
      kw("return"),
      t(" "),
      jsx("<ActivityIndicator"),
      t(" size="),
      str('"large"'),
      jsx(" />"),
    ],
  },
  { lineNum: 11, diffType: "unchanged", tokens: [t("  }")] },
  { lineNum: 12, diffType: "unchanged", tokens: [t("")] },
  {
    lineNum: 13,
    diffType: "unchanged",
    tokens: [t("  "), kw("return"), t(" (")],
  },
  { lineNum: 14, diffType: "unchanged", tokens: [t("    "), jsx("<View>")] },
  {
    lineNum: 15,
    diffType: "unchanged",
    tokens: [
      t("      "),
      jsx("<Dashboard"),
      t(" state={vehicleState} "),
      jsx("/>"),
    ],
  },
  { lineNum: 16, diffType: "unchanged", tokens: [t("    "), jsx("</View>")] },
  { lineNum: 17, diffType: "unchanged", tokens: [t("  )")] },
  { lineNum: 18, diffType: "unchanged", tokens: [t("}")] },
];

const newLines: CodeLine[] = [
  {
    lineNum: 1,
    diffType: "unchanged",
    tokens: [kw("import"), t(" React "), kw("from"), t(" "), str("'react'")],
  },
  {
    lineNum: 2,
    diffType: "unchanged",
    tokens: [
      kw("import"),
      t(" { "),
      fn("View"),
      t(", "),
      fn("ActivityIndicator"),
      t(" } "),
      kw("from"),
      t(" "),
      str("'react-native'"),
    ],
  },
  {
    lineNum: 3,
    diffType: "added",
    tokens: [
      kw("import"),
      t(" { "),
      fn("useVehicleState"),
      t(", "),
      fn("SyncStatus"),
      t(" } "),
      kw("from"),
      t(" "),
      str("'@hooks/...'"),
    ],
  },
  {
    lineNum: 4,
    diffType: "unchanged",
    tokens: [
      kw("import"),
      t(" { "),
      fn("Dashboard"),
      t(" } "),
      kw("from"),
      t(" "),
      str("'@components/Dashboard'"),
    ],
  },
  { lineNum: 5, diffType: "unchanged", tokens: [t("")] },
  {
    lineNum: 6,
    diffType: "unchanged",
    tokens: [
      kw("export"),
      t(" "),
      kw("const"),
      t(" "),
      fn("HomeScreen"),
      t(" = () => {"),
    ],
  },
  {
    lineNum: 7,
    diffType: "added",
    tokens: [
      t("  "),
      kw("const"),
      t(" { "),
      t("vehicleState"),
      t(", "),
      t("syncStatus"),
      t(" } = "),
      fn("useVehicleState"),
      t("()"),
    ],
  },
  { lineNum: 8, diffType: "unchanged", tokens: [t("")] },
  {
    lineNum: 9,
    diffType: "added",
    tokens: [
      t("  "),
      kw("if"),
      t(" (syncStatus === SyncStatus.PENDING) {"),
    ],
  },
  {
    lineNum: 10,
    diffType: "unchanged",
    tokens: [
      t("    "),
      kw("return"),
      t(" "),
      jsx("<ActivityIndicator"),
      t(" size="),
      str('"large"'),
      jsx(" />"),
    ],
  },
  { lineNum: 11, diffType: "unchanged", tokens: [t("  }")] },
  { lineNum: 12, diffType: "unchanged", tokens: [t("")] },
  {
    lineNum: 13,
    diffType: "unchanged",
    tokens: [t("  "), kw("return"), t(" (")],
  },
  { lineNum: 14, diffType: "unchanged", tokens: [t("    "), jsx("<View>")] },
  {
    lineNum: 15,
    diffType: "added",
    tokens: [
      t("      "),
      jsx("<Dashboard"),
      t(" state={vehicleState} syncStatus={...} "),
      jsx("/>"),
    ],
  },
  { lineNum: 16, diffType: "unchanged", tokens: [t("    "), jsx("</View>")] },
  { lineNum: 17, diffType: "unchanged", tokens: [t("  )")] },
  { lineNum: 18, diffType: "unchanged", tokens: [t("}")] },
];

function lineBg(diffType: DiffLineType): string {
  if (diffType === "removed") return "rgba(220, 38, 38, 0.12)";
  if (diffType === "added") return "rgba(34, 197, 94, 0.1)";
  return "transparent";
}

function CodePanel({
  lines,
  side,
}: {
  lines: CodeLine[];
  side: "left" | "right";
}) {
  return (
    <div
      style={{
        flex: 1,
        borderRight:
          side === "left" ? "1px solid rgba(255, 255, 255, 0.06)" : "none",
        fontFamily: "monospace",
        fontSize: 12,
        lineHeight: "20px",
        overflow: "hidden",
      }}
    >
      {lines.map((line) => (
        <div
          key={line.lineNum}
          style={{
            display: "flex",
            backgroundColor: lineBg(line.diffType),
            paddingLeft: 0,
          }}
        >
          {/* Line number */}
          <span
            style={{
              width: 32,
              textAlign: "right",
              paddingRight: 8,
              color: "rgb(87, 91, 100)",
              userSelect: "none",
              flexShrink: 0,
              lineHeight: "20px",
            }}
          >
            {String(line.lineNum).padStart(2, "0")}
          </span>
          {/* Code */}
          <span
            style={{
              flex: 1,
              paddingLeft: 8,
              whiteSpace: "pre",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {line.tokens.map((tok, i) => (
              <span key={i} style={{ color: tokenColor(tok.type) }}>
                {tok.text}
              </span>
            ))}
          </span>
        </div>
      ))}
    </div>
  );
}

function DiffViewer() {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0 }}>
      {/* Top bar */}
      <div
        style={{
          height: 40,
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontSize: 12,
            fontFamily: "monospace",
            color: "rgb(138, 143, 152)",
          }}
        >
          kinetic-ios/src/screens/Home/HomeScreen.tsx
        </span>
        <span
          style={{
            fontSize: 12,
            color: "rgb(138, 143, 152)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderRadius: 4,
            padding: "2px 8px",
          }}
        >
          Linear ◇
        </span>
      </div>

      {/* Diff grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          flex: 1,
          overflow: "hidden",
        }}
      >
        <CodePanel lines={oldLines} side="left" />
        <CodePanel lines={newLines} side="right" />
      </div>
    </div>
  );
}

export function DiffsSection() {
  return (
    <FeatureSection
      heading="Review PRs and agent output"
      description="Understand code changes at a glance with structural diffs for human and agent output. Review, discuss, and merge within Linear."
      actionNumber="4.0"
      actionLabel="Diffs"
      actionHref="/diffs"
    >
      <DiffViewer />
    </FeatureSection>
  );
}
