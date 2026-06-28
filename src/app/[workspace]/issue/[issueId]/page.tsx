import { ISSUES, MEMBERS, LABELS, PROJECTS } from "@/data/mock";
import { StatusIcon } from "@/components/app/StatusIcon";
import { PriorityIcon } from "@/components/app/PriorityIcon";
import Link from "next/link";

const COMMENTS: Record<string, { author: string; initials: string; color: string; time: string; text: string }[]> = {
  "JAK-2088": [
    { author: "lena", initials: "LE", color: "rgb(34,197,94)", time: "2 hours ago", text: "Identified the root cause. The `user.paymentMethod` can be null but we're accessing `.last4` without a null check." },
    { author: "karri", initials: "KS", color: "rgb(234,179,8)", time: "1 hour ago", text: "Thanks for the quick investigation! Can you also check if billing history is affected?" },
    { author: "lena", initials: "LE", color: "rgb(34,197,94)", time: "45 min ago", text: "Yes, billing history too. I'll fix both in the same PR. ETA ~30 min." },
  ],
  "JAK-926": [
    { author: "jori", initials: "JL", color: "rgb(99,102,241)", time: "3 hours ago", text: "Found 14 inconsistencies in the audit. Main issues are in the tab bar and form inputs." },
    { author: "romain", initials: "RD", color: "rgb(59,130,246)", time: "2 hours ago", text: "I can take the tab bar, you take the forms?" },
  ],
  "JAK-2187": [
    { author: "andreas", initials: "AM", color: "rgb(168,85,247)", time: "5 hours ago", text: "Reproduced on Airplane mode. The request is being sent twice when the first one times out at 3s." },
    { author: "didier", initials: "DA", color: "rgb(239,68,68)", time: "4 hours ago", text: "We need idempotency keys on the request. I'll add a `X-Idempotency-Key` header." },
    { author: "karri", initials: "KS", color: "rgb(234,179,8)", time: "1 hour ago", text: "Good call. Make sure the key persists across retries but not across user-initiated retaps." },
  ],
};

export default async function IssuePage({
  params,
}: {
  params: Promise<{ workspace: string; issueId: string }>;
}) {
  const { workspace, issueId } = await params;
  const issue = ISSUES.find((i) => i.id === issueId) ?? ISSUES[0];
  const assignee = issue.assigneeId ? MEMBERS.find((m) => m.id === issue.assigneeId) : null;
  const labels = LABELS.filter((l) => issue.labelIds.includes(l.id));
  const project = issue.projectId ? PROJECTS.find((p) => p.id === issue.projectId) : null;
  const comments = COMMENTS[issue.id] ?? [];

  const priorityLabels: Record<number, string> = { 0: "No priority", 1: "Urgent", 2: "High", 3: "Medium", 4: "Low" };
  const statusLabels: Record<string, string> = {
    backlog: "Backlog", todo: "Todo", in_progress: "In Progress",
    in_review: "In Review", done: "Done", cancelled: "Cancelled",
  };
  const statusColors: Record<string, string> = {
    in_progress: "rgba(234,179,8,0.15)", todo: "rgba(138,143,152,0.12)",
    backlog: "rgba(138,143,152,0.12)", done: "rgba(34,197,94,0.15)",
    in_review: "rgba(96,121,241,0.15)", cancelled: "rgba(138,143,152,0.08)",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", backgroundColor: "rgb(8,9,10)" }}>
      <div style={{
        height: "48px", display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 20px", borderBottom: "1px solid rgba(255,255,255,0.06)", flexShrink: 0,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Link href={`/${workspace}/team/JAK/active`} style={{ fontSize: "13px", color: "rgb(138,143,152)", textDecoration: "none" }}>
            ← JAK
          </Link>
          <span style={{ color: "rgba(255,255,255,0.2)" }}>/</span>
          <span style={{ fontSize: "13px", color: "rgb(138,143,152)" }}>{issue.id}</span>
        </div>
        <button type="button" style={{ background: "none", border: "none", color: "rgb(138,143,152)", cursor: "pointer", fontSize: "16px" }}>···</button>
      </div>

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <div style={{ flex: 1, overflow: "auto", padding: "32px 40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <StatusIcon status={issue.status} size={16} />
            <PriorityIcon priority={issue.priority} size={14} />
          </div>

          <h1 style={{ fontSize: "22px", fontWeight: 500, color: "rgb(247,248,248)", margin: "0 0 24px", lineHeight: "1.3" }}>
            {issue.title}
          </h1>

          <div style={{ fontSize: "15px", lineHeight: "1.7", color: "rgb(138,143,152)", marginBottom: "40px", whiteSpace: "pre-line" }}>
            {issue.description || "No description provided."}
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "24px" }}>
            <div style={{ fontSize: "12px", fontWeight: 500, color: "rgb(138,143,152)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "16px" }}>
              Activity
            </div>
            {comments.length === 0 && (
              <p style={{ fontSize: "13px", color: "rgba(138,143,152,0.6)" }}>No comments yet.</p>
            )}
            {comments.map((c, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
                <div style={{
                  width: "28px", height: "28px", borderRadius: "50%", backgroundColor: c.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "10px", fontWeight: 600, color: "#fff", flexShrink: 0,
                }}>
                  {c.initials}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                    <span style={{ fontSize: "13px", fontWeight: 500, color: "rgb(208,214,224)" }}>{c.author}</span>
                    <span style={{ fontSize: "11px", color: "rgb(138,143,152)" }}>{c.time}</span>
                  </div>
                  <div style={{
                    fontSize: "13px", color: "rgb(138,143,152)", lineHeight: "1.6",
                    backgroundColor: "rgb(13,14,15)", border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "8px", padding: "10px 14px",
                  }}>
                    {c.text}
                  </div>
                </div>
              </div>
            ))}

            <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
              <div style={{
                width: "28px", height: "28px", borderRadius: "50%", backgroundColor: "rgb(99,102,241)",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 600, color: "#fff", flexShrink: 0,
              }}>JL</div>
              <div style={{ flex: 1 }}>
                <div style={{
                  backgroundColor: "rgb(13,14,15)", border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "8px", padding: "10px 14px", fontSize: "13px", color: "rgba(138,143,152,0.5)",
                }}>
                  Add a comment...
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          width: "280px", flexShrink: 0, borderLeft: "1px solid rgba(255,255,255,0.06)",
          backgroundColor: "rgb(11,12,13)", padding: "24px 20px", overflow: "auto",
        }}>
          {([
            { label: "Status", content: (
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                fontSize: "12px", padding: "3px 8px", borderRadius: "4px",
                backgroundColor: statusColors[issue.status],
                color: "rgb(208,214,224)",
              }}>
                <StatusIcon status={issue.status} size={12} />
                {statusLabels[issue.status]}
              </span>
            )},
            { label: "Priority", content: (
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "rgb(208,214,224)" }}>
                <PriorityIcon priority={issue.priority} size={13} />
                {priorityLabels[issue.priority]}
              </span>
            )},
            { label: "Assignee", content: assignee ? (
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "rgb(208,214,224)" }}>
                <span style={{ width: "18px", height: "18px", borderRadius: "50%", backgroundColor: assignee.color, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "8px", fontWeight: 600, color: "#fff" }}>{assignee.initials}</span>
                {assignee.name}
              </span>
            ) : <span style={{ fontSize: "12px", color: "rgba(138,143,152,0.5)" }}>No assignee</span> },
            { label: "Labels", content: labels.length > 0 ? (
              <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
                {labels.map((l) => (
                  <span key={l.id} style={{ fontSize: "11px", padding: "2px 7px", borderRadius: "4px", backgroundColor: `${l.color}20`, color: l.color, border: `1px solid ${l.color}40` }}>{l.name}</span>
                ))}
              </div>
            ) : <span style={{ fontSize: "12px", color: "rgba(138,143,152,0.5)" }}>No labels</span> },
            { label: "Project", content: <span style={{ fontSize: "12px", color: project ? "rgb(208,214,224)" : "rgba(138,143,152,0.5)" }}>{project?.name ?? "No project"}</span> },
            { label: "Created", content: <span style={{ fontSize: "12px", color: "rgb(138,143,152)" }}>{issue.createdAt}</span> },
            { label: "Due date", content: <span style={{ fontSize: "12px", color: issue.dueDate ? "rgb(208,214,224)" : "rgba(138,143,152,0.5)" }}>{issue.dueDate ?? "No due date"}</span> },
          ] as { label: string; content: React.ReactNode }[]).map(({ label, content }) => (
            <div key={label} style={{ marginBottom: "20px" }}>
              <div style={{ fontSize: "11px", color: "rgb(138,143,152)", marginBottom: "6px", fontWeight: 500 }}>{label}</div>
              {content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
