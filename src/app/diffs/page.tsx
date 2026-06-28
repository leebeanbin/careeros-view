import { Navbar } from "@/components/Navbar";
import { SubPageHero } from "@/components/SubPageHero";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

function DiffsBackground() {
  const lines = Array.from({ length: 28 }, (_, i) => i);
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      {lines.map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${8 + i * 3.2}%`,
            left: `${5 + (i % 3) * 8}%`,
            right: `${5 + ((i + 1) % 4) * 6}%`,
            height: "1px",
            backgroundColor: i % 5 === 0
              ? "rgba(220, 38, 38, 0.15)"
              : i % 7 === 0
              ? "rgba(34, 197, 94, 0.12)"
              : "rgba(255, 255, 255, 0.04)",
            borderRadius: "1px",
          }}
        />
      ))}
    </div>
  );
}

function FeatureSubSection({
  number, heading, description, linkLabel, illustration,
}: {
  number: string;
  heading: string;
  description: string;
  linkLabel: string;
  illustration?: React.ReactNode;
}) {
  return (
    <section style={{
      padding: "80px 64px",
      borderTop: "1px solid rgba(255, 255, 255, 0.05)",
      backgroundColor: "rgb(8, 9, 10)",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "0 80px",
        alignItems: "end",
        marginBottom: illustration ? "48px" : 0,
      }}>
        <h2 style={{
          fontSize: "48px",
          fontWeight: 510,
          lineHeight: "52px",
          letterSpacing: "-0.96px",
          color: "rgb(247, 248, 248)",
          margin: 0,
          whiteSpace: "pre-line",
        }}>
          {heading}
        </h2>
        <div>
          <p style={{ fontSize: "16px", lineHeight: "26px", color: "rgb(138, 143, 152)", margin: "0 0 20px" }}>
            {description}
          </p>
          <a href="#" style={{ fontSize: "14px", fontWeight: 510, color: "rgb(247, 248, 248)", textDecoration: "none" }}>
            <span style={{ color: "rgb(138, 143, 152)" }}>{linkLabel.split(" ")[0]}</span>
            {" "}{linkLabel.split(" ").slice(1).join(" ")} →
          </a>
        </div>
      </div>
      {illustration && (
        <div style={{
          backgroundColor: "rgb(13, 14, 15)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.06)",
          overflow: "hidden",
          minHeight: "400px",
        }}>
          {illustration}
        </div>
      )}
    </section>
  );
}

function DiffViewerIllustration() {
  const codeLines = [
    { num: "01", old: "import React from 'react'", new: "import React from 'react'" },
    { num: "02", old: "import { View, ActivityIndicator } from 'react-native'", new: "import { View, ActivityIndicator } from 'react-native'" },
    { num: "03", old: "import { useVehicleState } from '@hooks/useVehicleState'", new: "import { useVehicleState, SyncStatus } from '@hooks/useVehicleState'", oldRemoved: true, newAdded: true },
    { num: "04", old: "import { Dashboard } from '@components/Dashboard'", new: "import { Dashboard } from '@components/Dashboard'" },
    { num: "05", old: "", new: "" },
    { num: "06", old: "export const HomeScreen = () => {", new: "export const HomeScreen = () => {" },
    { num: "07", old: "  const { vehicleState, isFullySynced } = useVehicleState()", new: "  const { vehicleState, syncStatus } = useVehicleState()", oldRemoved: true, newAdded: true },
    { num: "08", old: "", new: "" },
    { num: "09", old: "  if (isFullySynced) {", new: "  if (syncStatus === SyncStatus.PENDING) {", oldRemoved: true, newAdded: true },
  ];

  return (
    <div style={{ padding: "0" }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 20px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "11px", color: "rgb(138, 143, 152)" }}>📄</span>
          <span style={{ fontSize: "12px", color: "rgb(208, 214, 224)", fontFamily: "monospace" }}>
            kinetic-ios/src/screens/Home/HomeScreen.tsx
          </span>
        </div>
        <span style={{
          fontSize: "11px",
          color: "rgb(138, 143, 152)",
          padding: "2px 8px",
          borderRadius: "4px",
          border: "1px solid rgba(255,255,255,0.08)",
        }}>
          Linear ◇
        </span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {/* Old */}
        <div style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}>
          {codeLines.map((line, i) => (
            <div key={i} style={{
              display: "flex",
              backgroundColor: line.oldRemoved ? "rgba(220, 38, 38, 0.12)" : "transparent",
              borderLeft: line.oldRemoved ? "2px solid rgba(220, 38, 38, 0.5)" : "2px solid transparent",
            }}>
              <span style={{ width: "32px", textAlign: "right", padding: "2px 8px", fontSize: "11px", color: "rgb(80, 85, 95)", fontFamily: "monospace", flexShrink: 0 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{ fontSize: "11px", color: line.oldRemoved ? "rgba(248, 113, 113, 0.9)" : "rgb(138, 143, 152)", fontFamily: "monospace", padding: "2px 8px", lineHeight: "20px" }}>
                {line.old}
              </span>
            </div>
          ))}
        </div>
        {/* New */}
        <div>
          {codeLines.map((line, i) => (
            <div key={i} style={{
              display: "flex",
              backgroundColor: line.newAdded ? "rgba(34, 197, 94, 0.10)" : "transparent",
              borderLeft: line.newAdded ? "2px solid rgba(34, 197, 94, 0.5)" : "2px solid transparent",
            }}>
              <span style={{ width: "32px", textAlign: "right", padding: "2px 8px", fontSize: "11px", color: "rgb(80, 85, 95)", fontFamily: "monospace", flexShrink: 0 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{ fontSize: "11px", color: line.newAdded ? "rgba(134, 239, 172, 0.9)" : "rgb(138, 143, 152)", fontFamily: "monospace", padding: "2px 8px", lineHeight: "20px" }}>
                {line.new}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DiffsPage() {
  return (
    <main style={{ backgroundColor: "rgb(8, 9, 10)", minHeight: "100vh" }}>
      <Navbar />
      <SubPageHero
        number="4.0"
        name="Diffs"
        heading={"A faster way\nto review code"}
        background={<DiffsBackground />}
        rightLink={{ text: "Code review should be fast", href: "#" }}
      />

      <FeatureSubSection
        number="4.1 Structural Diffs"
        heading={"Understand changes\nat a glance"}
        description="Understand code changes at a glance with structural diffs for human and agent output. Review, discuss, and merge within Linear."
        linkLabel="4.1 Structural Diffs"
        illustration={<DiffViewerIllustration />}
      />

      <FeatureSubSection
        number="4.2 PR Reviews"
        heading={"Review without\nleaving Linear"}
        description="Comment, approve, and merge pull requests directly from your issue. No context switching — everything you need is in one place."
        linkLabel="4.2 PR Reviews"
      />

      <FeatureSubSection
        number="4.3 Agent Output"
        heading={"Hold agents\naccountable"}
        description="Agents generate large volumes of code, but individuals are still accountable for the changes that merge. Review agent output with the same rigor as human code."
        linkLabel="4.3 Agent Output"
      />

      <CtaSection />
      <Footer />
    </main>
  );
}
