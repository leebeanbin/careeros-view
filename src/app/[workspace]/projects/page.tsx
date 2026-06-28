import { PROJECTS, MEMBERS } from "@/data/mock";

const STATUS_LABELS: Record<string, string> = {
  planned: "Planned", in_progress: "In Progress", completed: "Completed", cancelled: "Cancelled",
};
const STATUS_COLORS: Record<string, string> = {
  planned: "rgb(138,143,152)", in_progress: "rgb(234,179,8)",
  completed: "rgb(34,197,94)", cancelled: "rgb(239,68,68)",
};
const PROJECT_COLORS = ["rgb(139,92,246)", "rgb(59,130,246)", "rgb(34,197,94)", "rgb(234,179,8)"];

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ workspace: string }>;
}) {
  await params;

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", backgroundColor: "rgb(8,9,10)" }}>
      <div style={{
        height: "48px", display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 20px", borderBottom: "1px solid rgba(255,255,255,0.06)", flexShrink: 0,
      }}>
        <span style={{ fontSize: "13px", fontWeight: 500, color: "rgb(247,248,248)" }}>Projects</span>
        <button type="button" style={{
          backgroundColor: "rgb(96,121,241)", color: "#fff", border: "none",
          borderRadius: "6px", padding: "5px 12px", fontSize: "12px", fontWeight: 500, cursor: "pointer",
        }}>
          + New project
        </button>
      </div>

      <div style={{ flex: 1, overflow: "auto", padding: "24px 20px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {["Name", "Status", "Progress", "Lead", "Target", "Issues"].map((h) => (
                <th key={h} style={{
                  textAlign: "left", fontSize: "11px", fontWeight: 500, color: "rgb(138,143,152)",
                  padding: "0 12px 10px", textTransform: "uppercase", letterSpacing: "0.04em",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PROJECTS.map((project, idx) => {
              const lead = project.leadId ? MEMBERS.find((m) => m.id === project.leadId) : null;
              const color = PROJECT_COLORS[idx % PROJECT_COLORS.length];
              return (
                <tr key={project.id} style={{ cursor: "pointer" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.02)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}>
                  <td style={{ padding: "12px", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: color, flexShrink: 0 }} />
                      <span style={{ fontSize: "13px", fontWeight: 500, color: "rgb(247,248,248)" }}>{project.name}</span>
                    </div>
                  </td>
                  <td style={{ padding: "12px", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <span style={{
                      fontSize: "11px", padding: "2px 8px", borderRadius: "4px",
                      backgroundColor: `${STATUS_COLORS[project.status]}20`,
                      color: STATUS_COLORS[project.status],
                      border: `1px solid ${STATUS_COLORS[project.status]}30`,
                    }}>
                      {STATUS_LABELS[project.status]}
                    </span>
                  </td>
                  <td style={{ padding: "12px", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ width: "80px", height: "4px", borderRadius: "2px", backgroundColor: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
                        <div style={{ width: `${project.progress}%`, height: "100%", borderRadius: "2px", backgroundColor: color }} />
                      </div>
                      <span style={{ fontSize: "11px", color: "rgb(138,143,152)" }}>{project.progress}%</span>
                    </div>
                  </td>
                  <td style={{ padding: "12px", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    {lead ? (
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <div style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: lead.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "8px", fontWeight: 600, color: "#fff" }}>{lead.initials}</div>
                        <span style={{ fontSize: "12px", color: "rgb(208,214,224)" }}>{lead.name}</span>
                      </div>
                    ) : <span style={{ fontSize: "12px", color: "rgba(138,143,152,0.5)" }}>—</span>}
                  </td>
                  <td style={{ padding: "12px", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <span style={{ fontSize: "12px", color: "rgb(138,143,152)" }}>{project.targetDate}</span>
                  </td>
                  <td style={{ padding: "12px", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <span style={{ fontSize: "12px", color: "rgb(138,143,152)" }}>{project.issueCount}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
