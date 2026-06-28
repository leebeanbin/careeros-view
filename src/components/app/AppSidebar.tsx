"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  href: string;
  badge?: number;
  isSelected?: boolean;
  indent?: number;
}

function SidebarItem({ icon, label, href, badge, isSelected, indent = 0 }: SidebarItemProps) {
  const style: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    height: "32px",
    paddingLeft: `${8 + indent * 16}px`,
    paddingRight: "8px",
    borderRadius: "4px",
    cursor: "pointer",
    textDecoration: "none",
    backgroundColor: isSelected ? "rgba(255,255,255,0.06)" : "transparent",
    color: isSelected ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.5)",
    fontSize: "13px",
    fontWeight: isSelected ? 500 : 400,
    transition: "background-color 0.1s",
    userSelect: "none",
  };

  return (
    <Link href={href} style={style}>
      <span style={{ display: "flex", alignItems: "center", flexShrink: 0, opacity: isSelected ? 1 : 0.7 }}>
        {icon}
      </span>
      <span style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
        {label}
      </span>
      {badge !== undefined && badge > 0 && (
        <span
          style={{
            backgroundColor: "rgba(255,255,255,0.12)",
            color: "rgba(255,255,255,0.6)",
            borderRadius: "10px",
            fontSize: "11px",
            fontWeight: 500,
            padding: "0 6px",
            lineHeight: "18px",
            flexShrink: 0,
          }}
        >
          {badge}
        </span>
      )}
    </Link>
  );
}

function InboxIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path d="M1 2h13v9a2 2 0 01-2 2H3a2 2 0 01-2-2V2z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1 8h4l1.5 2h2L10 8h4" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

function IssuesIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="7.5" cy="7.5" r="2" fill="currentColor" />
    </svg>
  );
}

function ViewsIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <rect x="1" y="1" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <rect x="8.5" y="1" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <rect x="1" y="8.5" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <rect x="8.5" y="8.5" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function TeamIssuesIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="7" cy="7" r="1.8" fill="currentColor" />
    </svg>
  );
}

function ProjectsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4 7h6M4 4.5h6M4 9.5h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function CyclesIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2.5 7A4.5 4.5 0 0 1 7 2.5v0a4.5 4.5 0 0 1 4.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M11.5 7A4.5 4.5 0 0 1 7 11.5v0a4.5 4.5 0 0 1-4.5-4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <polyline points="9.5,2 11.5,4.5 9,4.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MembersIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="5" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1 12c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="10" cy="5" r="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M12 12c0-1.7-1.3-3-3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7 1v1.5M7 11.5V13M1 7h1.5M11.5 7H13M2.9 2.9l1 1M10.1 10.1l1 1M2.9 11.1l1-1M10.1 3.9l1-1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function AppSidebar({ workspace, team }: { workspace: string; team: string }) {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  const sidebarStyle: CSSProperties = {
    width: "240px",
    minWidth: "240px",
    height: "100vh",
    backgroundColor: "rgb(11,12,13)",
    borderRight: "1px solid rgba(255,255,255,0.06)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    flexShrink: 0,
  };

  const sectionStyle: CSSProperties = {
    padding: "0 8px",
  };

  const sectionLabelStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    height: "28px",
    paddingLeft: "8px",
    paddingRight: "8px",
    color: "rgba(255,255,255,0.35)",
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    cursor: "pointer",
    userSelect: "none",
  };

  const dividerStyle: CSSProperties = {
    height: "1px",
    backgroundColor: "rgba(255,255,255,0.06)",
    margin: "4px 0",
  };

  return (
    <div style={sidebarStyle}>
      <div
        style={{
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 12px",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "4px",
              backgroundColor: "rgb(139,92,246)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "11px",
              fontWeight: 700,
              color: "white",
              flexShrink: 0,
            }}
          >
            K
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            <span style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.9)", lineHeight: 1 }}>
              Kinetic
            </span>
            <span style={{ fontSize: "11px", fontWeight: 400, color: "rgba(255,255,255,0.4)", lineHeight: 1 }}>
              {workspace}
            </span>
          </div>
        </div>
        <button
          style={{
            background: "none",
            border: "none",
            color: "rgba(255,255,255,0.4)",
            fontSize: "16px",
            cursor: "pointer",
            padding: "4px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            letterSpacing: "1px",
          }}
        >
          ···
        </button>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "4px 0" }}>
        <div style={sectionStyle}>
          <SidebarItem
            icon={<InboxIcon />}
            label="Inbox"
            href={`/${workspace}/inbox`}
            badge={3}
            isSelected={isActive(`/${workspace}/inbox`)}
          />
          <SidebarItem
            icon={<IssuesIcon />}
            label="My Issues"
            href={`/${workspace}/my-issues/assigned`}
            isSelected={isActive(`/${workspace}/my-issues`)}
          />
          <SidebarItem
            icon={<ViewsIcon />}
            label="Views"
            href={`/${workspace}/views`}
            isSelected={isActive(`/${workspace}/views`)}
          />
        </div>

        <div style={dividerStyle} />

        <div style={sectionStyle}>
          <div style={sectionLabelStyle}>
            <ChevronDown />
            <span>{team}</span>
          </div>

          <SidebarItem
            icon={<TeamIssuesIcon />}
            label="Issues"
            href={`/${workspace}/team/${team}/active`}
            isSelected={
              isActive(`/${workspace}/team/${team}/active`) ||
              isActive(`/${workspace}/team/${team}/backlog`)
            }
            indent={0}
          />

          <SidebarItem
            icon={<span style={{ width: "14px", display: "block" }} />}
            label="Active"
            href={`/${workspace}/team/${team}/active`}
            isSelected={isActive(`/${workspace}/team/${team}/active`)}
            badge={15}
            indent={1}
          />

          <SidebarItem
            icon={<span style={{ width: "14px", display: "block" }} />}
            label="Backlog"
            href={`/${workspace}/team/${team}/backlog`}
            isSelected={isActive(`/${workspace}/team/${team}/backlog`)}
            badge={8}
            indent={1}
          />

          <SidebarItem
            icon={<span style={{ width: "14px", display: "block" }} />}
            label="All Issues"
            href={`/${workspace}/team/${team}/all`}
            isSelected={isActive(`/${workspace}/team/${team}/all`)}
            indent={1}
          />

          <SidebarItem
            icon={<ProjectsIcon />}
            label="Projects"
            href={`/${workspace}/team/${team}/projects`}
            isSelected={isActive(`/${workspace}/team/${team}/projects`)}
          />

          <SidebarItem
            icon={<CyclesIcon />}
            label="Cycles"
            href={`/${workspace}/team/${team}/cycles`}
            isSelected={isActive(`/${workspace}/team/${team}/cycles`)}
          />

          <SidebarItem
            icon={<MembersIcon />}
            label="Members"
            href={`/${workspace}/team/${team}/members`}
            isSelected={isActive(`/${workspace}/team/${team}/members`)}
          />

          <SidebarItem
            icon={<SettingsIcon />}
            label="Settings"
            href={`/${workspace}/team/${team}/settings`}
            isSelected={isActive(`/${workspace}/team/${team}/settings`)}
          />
        </div>
      </div>

      <div
        style={{
          padding: "8px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          flexShrink: 0,
        }}
      >
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            width: "100%",
            height: "32px",
            padding: "0 8px",
            background: "none",
            border: "none",
            borderRadius: "4px",
            color: "rgba(255,255,255,0.4)",
            fontSize: "13px",
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          <PlusIcon />
          Add team
        </button>
      </div>
    </div>
  );
}
