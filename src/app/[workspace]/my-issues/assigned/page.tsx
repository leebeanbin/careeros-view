import type { CSSProperties } from "react";
import { ISSUES, MEMBERS, LABELS } from "@/data/mock";
import type { Issue, IssueStatus, Member, Label } from "@/data/mock";
import { StatusIcon } from "@/components/app/StatusIcon";
import { PriorityIcon } from "@/components/app/PriorityIcon";

const ME = "m1";

const STATUS_ORDER: IssueStatus[] = ["in_progress", "todo", "in_review", "backlog", "done", "cancelled"];

const STATUS_LABEL: Record<IssueStatus, string> = {
  in_progress: "In Progress",
  todo: "Todo",
  in_review: "In Review",
  backlog: "Backlog",
  done: "Done",
  cancelled: "Cancelled",
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function MemberAvatar({ member }: { member: Member }) {
  return (
    <div
      style={{
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        backgroundColor: member.color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "9px",
        fontWeight: 600,
        color: "white",
        flexShrink: 0,
      }}
    >
      {member.initials}
    </div>
  );
}

function LabelPill({ label }: { label: Label }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        padding: "0 6px",
        height: "18px",
        borderRadius: "10px",
        border: `1px solid ${label.color}40`,
        backgroundColor: `${label.color}18`,
        fontSize: "11px",
        color: label.color,
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: label.color,
          flexShrink: 0,
        }}
      />
      {label.name}
    </span>
  );
}

function IssueRow({ issue }: { issue: Issue }) {
  const assignee = issue.assigneeId ? MEMBERS.find((m) => m.id === issue.assigneeId) ?? null : null;
  const labels = issue.labelIds.map((id) => LABELS.find((l) => l.id === id)).filter((l): l is Label => l !== undefined);

  const rowStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    height: "36px",
    padding: "0 16px",
    cursor: "pointer",
    borderBottom: "1px solid rgba(255,255,255,0.03)",
  };

  return (
    <div style={rowStyle}>
      <StatusIcon status={issue.status} size={16} />
      <PriorityIcon priority={issue.priority} size={16} />
      <span
        style={{
          fontSize: "12px",
          color: "rgba(255,255,255,0.35)",
          fontWeight: 400,
          whiteSpace: "nowrap",
          flexShrink: 0,
          minWidth: "62px",
        }}
      >
        {issue.id}
      </span>
      <span
        style={{
          flex: 1,
          fontSize: "13px",
          color: "rgba(255,255,255,0.85)",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {issue.title}
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}>
        {labels.slice(0, 1).map((label) => (
          <LabelPill key={label.id} label={label} />
        ))}
      </div>
      {assignee && <MemberAvatar member={assignee} />}
      {issue.dueDate && (
        <span
          style={{
            fontSize: "11px",
            color: "rgba(255,255,255,0.3)",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          {formatDate(issue.dueDate)}
        </span>
      )}
    </div>
  );
}

function GroupHeader({ label, count }: { label: string; count: number }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        height: "36px",
        padding: "0 16px",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <span
        style={{
          fontSize: "11px",
          fontWeight: 500,
          color: "rgba(255,255,255,0.4)",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        {label}
      </span>
      <span
        style={{
          backgroundColor: "rgba(255,255,255,0.08)",
          color: "rgba(255,255,255,0.4)",
          borderRadius: "10px",
          fontSize: "11px",
          fontWeight: 500,
          padding: "0 6px",
          lineHeight: "18px",
        }}
      >
        {count}
      </span>
    </div>
  );
}

function FilterPill({ label }: { label: string }) {
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        height: "26px",
        padding: "0 10px",
        borderRadius: "4px",
        border: "1px solid rgba(255,255,255,0.1)",
        backgroundColor: "transparent",
        color: "rgba(255,255,255,0.5)",
        fontSize: "12px",
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </button>
  );
}

export default async function AssignedPage({
  params,
}: {
  params: Promise<{ workspace: string }>;
}) {
  await params;

  const myIssues = ISSUES.filter((i) => i.assigneeId === ME);

  const grouped = STATUS_ORDER.reduce<Record<string, Issue[]>>((acc, status) => {
    const group = myIssues.filter((i) => i.status === status);
    if (group.length > 0) acc[status] = group;
    return acc;
  }, {});

  const headerStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "48px",
    padding: "0 16px",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    position: "sticky",
    top: 0,
    backgroundColor: "rgb(8,9,10)",
    zIndex: 10,
    flexShrink: 0,
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={headerStyle}>
        <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
          <span style={{ color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>My Issues</span>
          <span style={{ margin: "0 6px" }}>/</span>
          <span>Assigned</span>
        </span>
        <div style={{ display: "flex", gap: "6px" }}>
          <FilterPill label="Filter" />
          <FilterPill label="Group" />
          <FilterPill label="Display" />
        </div>
      </div>

      <div style={{ flex: 1 }}>
        {Object.entries(grouped).map(([status, issues]) => (
          <div key={status}>
            <GroupHeader label={STATUS_LABEL[status as IssueStatus]} count={issues.length} />
            {issues.map((issue) => (
              <IssueRow key={issue.id} issue={issue} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
