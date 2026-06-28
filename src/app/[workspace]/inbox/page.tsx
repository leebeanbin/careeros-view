import type { CSSProperties } from "react";
import { ISSUES, MEMBERS } from "@/data/mock";
import type { Member } from "@/data/mock";

interface Notification {
  id: string;
  actorId: string;
  type: "mention" | "assign" | "comment" | "status_change";
  issueId: string;
  relativeTime: string;
}

const NOTIFICATIONS: Notification[] = [
  { id: "n1", actorId: "m2", type: "assign", issueId: "JAK-2088", relativeTime: "2m ago" },
  { id: "n2", actorId: "m3", type: "comment", issueId: "JAK-926", relativeTime: "14m ago" },
  { id: "n3", actorId: "m5", type: "mention", issueId: "JAK-2187", relativeTime: "1h ago" },
  { id: "n4", actorId: "m4", type: "status_change", issueId: "JAK-1182", relativeTime: "2h ago" },
  { id: "n5", actorId: "m6", type: "comment", issueId: "JAK-1487", relativeTime: "3h ago" },
  { id: "n6", actorId: "m2", type: "mention", issueId: "JAK-924", relativeTime: "5h ago" },
  { id: "n7", actorId: "m3", type: "assign", issueId: "JAK-1028", relativeTime: "Yesterday" },
  { id: "n8", actorId: "m5", type: "comment", issueId: "JAK-2103", relativeTime: "Yesterday" },
  { id: "n9", actorId: "m1", type: "status_change", issueId: "JAK-2201", relativeTime: "2d ago" },
  { id: "n10", actorId: "m4", type: "mention", issueId: "JAK-2198", relativeTime: "2d ago" },
];

const NOTIFICATION_TEXT: Record<Notification["type"], (name: string, issueTitle: string) => string> = {
  mention: (name, issueTitle) => `${name} mentioned you in ${issueTitle}`,
  assign: (name, issueTitle) => `${name} assigned ${issueTitle} to you`,
  comment: (name, issueTitle) => `${name} commented on ${issueTitle}`,
  status_change: (name, issueTitle) => `${name} updated the status of ${issueTitle}`,
};

function MemberAvatar({ member, size = 28 }: { member: Member; size?: number }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        backgroundColor: member.color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: `${size * 0.36}px`,
        fontWeight: 600,
        color: "white",
        flexShrink: 0,
      }}
    >
      {member.initials}
    </div>
  );
}

export default async function InboxPage({
  params,
}: {
  params: Promise<{ workspace: string }>;
}) {
  await params;

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
        <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>
          Inbox
        </span>
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
          }}
        >
          Mark all read
        </button>
      </div>

      <div style={{ flex: 1 }}>
        {NOTIFICATIONS.map((notif) => {
          const actor = MEMBERS.find((m) => m.id === notif.actorId);
          const issue = ISSUES.find((i) => i.id === notif.issueId);
          if (!actor || !issue) return null;

          const text = NOTIFICATION_TEXT[notif.type](actor.name, issue.title);

          return (
            <div
              key={notif.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 16px",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
                cursor: "pointer",
              }}
            >
              <MemberAvatar member={actor} size={28} />
              <div style={{ flex: 1, overflow: "hidden" }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.75)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    lineHeight: "1.4",
                  }}
                >
                  {text}
                </p>
                <p
                  style={{
                    margin: "2px 0 0",
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.3)",
                    lineHeight: "1.4",
                  }}
                >
                  {issue.id}
                </p>
              </div>
              <span
                style={{
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.3)",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {notif.relativeTime}
              </span>
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "rgb(99,102,241)",
                  flexShrink: 0,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
