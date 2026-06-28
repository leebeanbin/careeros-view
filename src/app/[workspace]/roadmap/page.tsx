"use client";

const MONTHS = ["MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT"];
const COL_W = 160;

const PROJECTS = [
  { name: "UI refresh",      color: "rgb(139,92,246)",  startCol: 2, endCol: 4.5, progress: 65, status: "In Progress" },
  { name: "API v2",          color: "rgb(59,130,246)",  startCol: 3, endCol: 5,   progress: 40, status: "In Progress" },
  { name: "Tokyo launch",    color: "rgb(34,197,94)",   startCol: 4, endCol: 6,   progress: 10, status: "Planned" },
  { name: "iOS offline mode",color: "rgb(234,179,8)",   startCol: 5, endCol: 7,   progress: 5,  status: "Planned" },
];

// Jun 28: JUN = index 3, 28/30 * COL_W ≈ 149px from start of JUN
const TODAY_X = 3 * COL_W + Math.round((28 / 30) * COL_W);

const STATUS_COLORS: Record<string, string> = {
  "In Progress": "rgb(234,179,8)",
  "Planned": "rgb(138,143,152)",
  "Completed": "rgb(34,197,94)",
};

export default function RoadmapPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", backgroundColor: "rgb(8,9,10)" }}>
      <div style={{
        height: "48px", display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 20px", borderBottom: "1px solid rgba(255,255,255,0.06)", flexShrink: 0,
      }}>
        <span style={{ fontSize: "13px", fontWeight: 500, color: "rgb(247,248,248)" }}>Roadmap</span>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {["Q2 2026", "Q3 2026", "Q4 2026"].map((q, i) => (
            <button key={q} type="button" style={{
              fontSize: "11px", padding: "4px 10px", borderRadius: "5px", cursor: "pointer", border: "none",
              backgroundColor: i === 1 ? "rgba(255,255,255,0.1)" : "transparent",
              color: i === 1 ? "rgb(247,248,248)" : "rgb(138,143,152)",
            }}>
              {q}
            </button>
          ))}
          <button type="button" style={{
            backgroundColor: "rgb(96,121,241)", color: "#fff", border: "none",
            borderRadius: "6px", padding: "5px 12px", fontSize: "12px", fontWeight: 500, cursor: "pointer", marginLeft: "4px",
          }}>
            + New project
          </button>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        <div style={{ width: "240px", flexShrink: 0, borderRight: "1px solid rgba(255,255,255,0.06)", backgroundColor: "rgb(11,12,13)" }}>
          <div style={{ height: "40px", borderBottom: "1px solid rgba(255,255,255,0.06)" }} />
          {PROJECTS.map((p) => (
            <div key={p.name} style={{
              height: "52px", display: "flex", alignItems: "center", gap: "8px",
              padding: "0 16px", borderBottom: "1px solid rgba(255,255,255,0.04)",
            }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: p.color, flexShrink: 0 }} />
              <span style={{ fontSize: "13px", color: "rgb(247,248,248)", flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.name}</span>
              <span style={{
                fontSize: "10px", padding: "1px 6px", borderRadius: "3px",
                backgroundColor: `${STATUS_COLORS[p.status]}20`,
                color: STATUS_COLORS[p.status], flexShrink: 0,
              }}>
                {p.status}
              </span>
            </div>
          ))}
        </div>

        <div style={{ flex: 1, overflow: "auto" }}>
          <div style={{ minWidth: `${MONTHS.length * COL_W}px` }}>
            <div style={{
              height: "40px", display: "flex", borderBottom: "1px solid rgba(255,255,255,0.06)",
              position: "sticky", top: 0, backgroundColor: "rgb(11,12,13)", zIndex: 10,
            }}>
              {MONTHS.map((m, i) => {
                const isCurrentMonth = m === "JUN" || m === "JUL";
                return (
                  <div key={m} style={{
                    width: `${COL_W}px`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "11px", fontWeight: 500,
                    color: isCurrentMonth ? "rgb(247,248,248)" : "rgb(138,143,152)",
                    borderRight: "1px solid rgba(255,255,255,0.04)",
                    backgroundColor: isCurrentMonth ? "rgba(255,255,255,0.02)" : "transparent",
                  }}>
                    {m}
                  </div>
                );
              })}
            </div>

            <div style={{ position: "relative" }}>
              {PROJECTS.map((p, idx) => (
                <div key={p.name} style={{
                  height: "52px", display: "flex", alignItems: "center",
                  borderBottom: "1px solid rgba(255,255,255,0.04)", position: "relative",
                }}>
                  {MONTHS.map((_, i) => (
                    <div key={i} style={{
                      width: `${COL_W}px`, flexShrink: 0, height: "100%",
                      borderRight: "1px solid rgba(255,255,255,0.03)",
                      backgroundColor: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.005)",
                    }} />
                  ))}

                  <div style={{
                    position: "absolute",
                    left: `${p.startCol * COL_W}px`,
                    width: `${(p.endCol - p.startCol) * COL_W}px`,
                    height: "28px", borderRadius: "6px",
                    backgroundColor: `${p.color}CC`,
                    overflow: "hidden",
                    display: "flex", alignItems: "center",
                  }}>
                    <div style={{ width: `${p.progress}%`, height: "100%", backgroundColor: p.color, opacity: 0.5, position: "absolute", left: 0, top: 0 }} />
                    <span style={{ position: "relative", fontSize: "11px", fontWeight: 500, color: "#fff", paddingLeft: "10px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {p.name}
                    </span>
                  </div>
                </div>
              ))}

              <div style={{
                position: "absolute", top: 0, bottom: 0,
                left: `${TODAY_X}px`, width: "1px",
                backgroundColor: "rgb(96,121,241)", opacity: 0.7,
                pointerEvents: "none",
              }}>
                <div style={{
                  position: "absolute", top: "-4px", left: "-3px",
                  width: "7px", height: "7px", borderRadius: "50%",
                  backgroundColor: "rgb(96,121,241)",
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
