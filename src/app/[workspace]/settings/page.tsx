"use client";

import { useState } from "react";

const NAV = [
  { group: "Workspace", items: ["General", "Members", "Security", "Billing"] },
  { group: "Team JAK", items: ["General", "Workflow", "Labels", "Integrations", "Members"] },
];

function SettingRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <div>
        <div style={{ fontSize: "13px", fontWeight: 500, color: "rgb(247,248,248)", marginBottom: "2px" }}>{label}</div>
      </div>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  backgroundColor: "rgb(13,14,15)", border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "6px", padding: "7px 12px", fontSize: "13px", color: "rgb(247,248,248)",
  outline: "none", width: "240px",
};

export default function SettingsPage() {
  const [active, setActive] = useState("General");

  return (
    <div style={{ display: "flex", height: "100%", backgroundColor: "rgb(8,9,10)" }}>
      <div style={{ width: "200px", flexShrink: 0, borderRight: "1px solid rgba(255,255,255,0.06)", padding: "16px 8px", overflow: "auto" }}>
        {NAV.map(({ group, items }) => (
          <div key={group} style={{ marginBottom: "20px" }}>
            <div style={{ fontSize: "11px", fontWeight: 500, color: "rgb(138,143,152)", padding: "4px 8px 6px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
              {group}
            </div>
            {items.map((item) => (
              <button key={item} type="button" onClick={() => setActive(item)} style={{
                display: "block", width: "100%", textAlign: "left",
                fontSize: "13px", padding: "6px 10px", borderRadius: "5px", border: "none", cursor: "pointer",
                backgroundColor: active === item ? "rgba(255,255,255,0.07)" : "transparent",
                color: active === item ? "rgb(247,248,248)" : "rgb(138,143,152)",
              }}>
                {item}
              </button>
            ))}
          </div>
        ))}
      </div>

      <div style={{ flex: 1, overflow: "auto", padding: "32px 40px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 500, color: "rgb(247,248,248)", margin: "0 0 28px" }}>
          {active === "General" && active === "General" ? "Workspace / General" : active}
        </h2>

        {active === "General" && (
          <>
            <div style={{ marginBottom: "32px" }}>
              <div style={{ fontSize: "12px", fontWeight: 500, color: "rgb(138,143,152)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Profile</div>
              <SettingRow label="Workspace name">
                <input defaultValue="Kinetic" style={inputStyle} />
              </SettingRow>
              <SettingRow label="URL">
                <input defaultValue="linear.app/leebeanbin" readOnly style={{ ...inputStyle, color: "rgb(138,143,152)", cursor: "not-allowed" }} />
              </SettingRow>
            </div>

            <div style={{ marginBottom: "32px" }}>
              <div style={{ fontSize: "12px", fontWeight: 500, color: "rgb(138,143,152)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Appearance</div>
              <SettingRow label="Theme">
                <div style={{ display: "flex", gap: "4px" }}>
                  {["Dark", "Light", "System"].map((t, i) => (
                    <button key={t} type="button" style={{
                      padding: "5px 12px", fontSize: "12px", borderRadius: "5px", cursor: "pointer",
                      backgroundColor: i === 0 ? "rgba(255,255,255,0.1)" : "transparent",
                      color: i === 0 ? "rgb(247,248,248)" : "rgb(138,143,152)",
                      border: i === 0 ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(255,255,255,0.07)",
                    }}>
                      {t}
                    </button>
                  ))}
                </div>
              </SettingRow>
            </div>

            <div>
              <div style={{ fontSize: "12px", fontWeight: 500, color: "rgb(239,68,68)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.04em" }}>Danger zone</div>
              <div style={{ padding: "16px", backgroundColor: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)", borderRadius: "8px" }}>
                <div style={{ fontSize: "13px", color: "rgb(247,248,248)", marginBottom: "8px" }}>Delete workspace</div>
                <div style={{ fontSize: "12px", color: "rgb(138,143,152)", marginBottom: "12px" }}>
                  Permanently delete this workspace and all its data. This action cannot be undone.
                </div>
                <button type="button" style={{
                  backgroundColor: "transparent", color: "rgb(239,68,68)",
                  border: "1px solid rgba(239,68,68,0.4)", borderRadius: "6px",
                  padding: "6px 14px", fontSize: "12px", cursor: "pointer",
                }}>
                  Delete workspace
                </button>
              </div>
            </div>
          </>
        )}

        {active !== "General" && (
          <div style={{ color: "rgb(138,143,152)", fontSize: "13px" }}>
            {active} settings — coming soon.
          </div>
        )}
      </div>
    </div>
  );
}
