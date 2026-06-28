import { MEMBERS, ISSUES } from "@/data/mock";

const ROLES: Record<string, string> = { m1: "Admin", m2: "Admin", m3: "Member", m4: "Member", m5: "Member", m6: "Member" };
const JOINED: Record<string, string> = { m1: "Jan 2024", m2: "Jan 2024", m3: "Mar 2024", m4: "Apr 2024", m5: "Feb 2024", m6: "May 2024" };

export default async function MembersPage({
  params,
}: {
  params: Promise<{ workspace: string; team: string }>;
}) {
  await params;

  const activeIssueCount = (memberId: string) =>
    ISSUES.filter((i) => i.assigneeId === memberId && (i.status === "in_progress" || i.status === "todo")).length;

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", backgroundColor: "rgb(8,9,10)" }}>
      <div style={{
        height: "48px", display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 20px", borderBottom: "1px solid rgba(255,255,255,0.06)", flexShrink: 0,
      }}>
        <span style={{ fontSize: "13px", fontWeight: 500, color: "rgb(247,248,248)" }}>Members</span>
        <button type="button" style={{
          backgroundColor: "transparent", color: "rgb(208,214,224)", border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "6px", padding: "5px 12px", fontSize: "12px", cursor: "pointer",
        }}>
          Invite
        </button>
      </div>

      <div style={{ flex: 1, overflow: "auto", padding: "24px 20px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {["Member", "Role", "Active issues", "Joined"].map((h) => (
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
            {MEMBERS.map((member) => {
              const isAdmin = ROLES[member.id] === "Admin";
              return (
                <tr key={member.id}>
                  <td style={{ padding: "12px", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{
                        width: "28px", height: "28px", borderRadius: "50%", backgroundColor: member.color,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "10px", fontWeight: 600, color: "#fff",
                      }}>
                        {member.initials}
                      </div>
                      <span style={{ fontSize: "13px", color: "rgb(247,248,248)" }}>{member.name}</span>
                    </div>
                  </td>
                  <td style={{ padding: "12px", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <span style={{
                      fontSize: "11px", padding: "2px 8px", borderRadius: "4px",
                      backgroundColor: isAdmin ? "rgba(96,121,241,0.15)" : "rgba(138,143,152,0.12)",
                      color: isAdmin ? "rgb(96,121,241)" : "rgb(138,143,152)",
                    }}>
                      {ROLES[member.id]}
                    </span>
                  </td>
                  <td style={{ padding: "12px", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <span style={{ fontSize: "13px", color: "rgb(138,143,152)" }}>
                      {activeIssueCount(member.id)} active
                    </span>
                  </td>
                  <td style={{ padding: "12px", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <span style={{ fontSize: "12px", color: "rgb(138,143,152)" }}>{JOINED[member.id]}</span>
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
