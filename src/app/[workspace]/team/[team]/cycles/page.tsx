import { CYCLES, ISSUES } from "@/data/mock";
import { StatusIcon } from "@/components/app/StatusIcon";

export default async function CyclesPage({
  params,
}: {
  params: Promise<{ workspace: string; team: string }>;
}) {
  await params;

  const activeCycle = CYCLES.find((c) => c.status === "active");
  const upcomingCycles = CYCLES.filter((c) => c.status === "upcoming");
  const completedCycles = CYCLES.filter((c) => c.status === "completed");

  const activeIssues = activeCycle
    ? ISSUES.filter((i) => i.cycleId === activeCycle.id).slice(0, 5)
    : [];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", backgroundColor: "rgb(8,9,10)" }}>
      <div style={{
        height: "48px", display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 20px", borderBottom: "1px solid rgba(255,255,255,0.06)", flexShrink: 0,
      }}>
        <span style={{ fontSize: "13px", fontWeight: 500, color: "rgb(247,248,248)" }}>Cycles</span>
        <button type="button" style={{
          backgroundColor: "transparent", color: "rgb(208,214,224)", border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "6px", padding: "5px 12px", fontSize: "12px", cursor: "pointer",
        }}>
          + New cycle
        </button>
      </div>

      <div style={{ flex: 1, overflow: "auto", padding: "24px 20px" }}>
        {activeCycle && (
          <div style={{
            backgroundColor: "rgb(13,14,15)", border: "1px solid rgba(34,197,94,0.25)",
            borderRadius: "10px", padding: "20px", marginBottom: "16px",
            boxShadow: "0 0 20px rgba(34,197,94,0.06)",
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "rgb(34,197,94)", boxShadow: "0 0 6px rgb(34,197,94)" }} />
                <span style={{ fontSize: "14px", fontWeight: 500, color: "rgb(247,248,248)" }}>{activeCycle.name}</span>
                <span style={{ fontSize: "11px", padding: "2px 7px", borderRadius: "4px", backgroundColor: "rgba(34,197,94,0.15)", color: "rgb(34,197,94)" }}>Active</span>
              </div>
              <span style={{ fontSize: "12px", color: "rgb(138,143,152)" }}>{activeCycle.startDate} – {activeCycle.endDate}</span>
            </div>

            <div style={{ marginBottom: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <span style={{ fontSize: "12px", color: "rgb(138,143,152)" }}>{activeCycle.completedCount} of {activeCycle.issueCount} issues complete</span>
                <span style={{ fontSize: "12px", color: "rgb(34,197,94)" }}>{activeCycle.progress}%</span>
              </div>
              <div style={{ height: "4px", borderRadius: "2px", backgroundColor: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
                <div style={{ width: `${activeCycle.progress}%`, height: "100%", borderRadius: "2px", backgroundColor: "rgb(34,197,94)", transition: "width 0.3s ease" }} />
              </div>
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "12px" }}>
              {activeIssues.map((issue) => (
                <div key={issue.id} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 0" }}>
                  <StatusIcon status={issue.status} size={13} />
                  <span style={{ fontSize: "11px", color: "rgb(138,143,152)", flexShrink: 0 }}>{issue.id}</span>
                  <span style={{ fontSize: "13px", color: "rgb(208,214,224)", flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{issue.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {upcomingCycles.map((cycle) => (
          <div key={cycle.id} style={{
            backgroundColor: "rgb(13,14,15)", border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "10px", padding: "20px", marginBottom: "16px", opacity: 0.8,
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "rgb(138,143,152)", border: "1.5px dashed rgba(138,143,152,0.5)" }} />
                <span style={{ fontSize: "14px", fontWeight: 500, color: "rgb(208,214,224)" }}>{cycle.name}</span>
                <span style={{ fontSize: "11px", padding: "2px 7px", borderRadius: "4px", backgroundColor: "rgba(138,143,152,0.12)", color: "rgb(138,143,152)" }}>Upcoming</span>
              </div>
              <span style={{ fontSize: "12px", color: "rgb(138,143,152)" }}>{cycle.startDate} – {cycle.endDate}</span>
            </div>
            <p style={{ fontSize: "12px", color: "rgba(138,143,152,0.6)", margin: "12px 0 0" }}>No issues added yet.</p>
          </div>
        ))}

        <div>
          <div style={{ fontSize: "12px", fontWeight: 500, color: "rgb(138,143,152)", padding: "8px 0", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}>
            <span>▶</span>
            <span>Completed · {completedCycles.length} cycle{completedCycles.length !== 1 ? "s" : ""}</span>
          </div>
          {completedCycles.map((cycle) => (
            <div key={cycle.id} style={{
              backgroundColor: "rgb(13,14,15)", border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: "8px", padding: "14px 16px", marginBottom: "8px", opacity: 0.6,
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "rgb(34,197,94)" }} />
                  <span style={{ fontSize: "13px", color: "rgb(208,214,224)" }}>{cycle.name}</span>
                </div>
                <span style={{ fontSize: "11px", color: "rgb(138,143,152)" }}>{cycle.startDate} – {cycle.endDate} · {cycle.completedCount}/{cycle.issueCount} issues</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
