export type Priority = 0 | 1 | 2 | 3 | 4;
export type IssueStatus = "backlog" | "todo" | "in_progress" | "in_review" | "done" | "cancelled";

export interface Member {
  id: string;
  name: string;
  initials: string;
  color: string;
}

export interface Label {
  id: string;
  name: string;
  color: string;
}

export interface Issue {
  id: string;
  title: string;
  status: IssueStatus;
  priority: Priority;
  assigneeId: string | null;
  labelIds: string[];
  projectId: string | null;
  cycleId: string | null;
  createdAt: string;
  dueDate: string | null;
  description: string;
  commentCount: number;
}

export interface Project {
  id: string;
  name: string;
  status: "planned" | "in_progress" | "completed" | "cancelled";
  progress: number;
  leadId: string | null;
  startDate: string;
  targetDate: string;
  issueCount: number;
}

export interface Cycle {
  id: string;
  name: string;
  number: number;
  status: "active" | "completed" | "upcoming";
  startDate: string;
  endDate: string;
  progress: number;
  issueCount: number;
  completedCount: number;
}

export const MEMBERS: Member[] = [
  { id: "m1", name: "jori", initials: "JL", color: "rgb(99, 102, 241)" },
  { id: "m2", name: "karri", initials: "KS", color: "rgb(234, 179, 8)" },
  { id: "m3", name: "lena", initials: "LE", color: "rgb(34, 197, 94)" },
  { id: "m4", name: "didier", initials: "DA", color: "rgb(239, 68, 68)" },
  { id: "m5", name: "andreas", initials: "AM", color: "rgb(168, 85, 247)" },
  { id: "m6", name: "romain", initials: "RD", color: "rgb(59, 130, 246)" },
];

export const LABELS: Label[] = [
  { id: "l1", name: "Bug", color: "rgb(239, 68, 68)" },
  { id: "l2", name: "Feature", color: "rgb(99, 102, 241)" },
  { id: "l3", name: "Design", color: "rgb(168, 85, 247)" },
  { id: "l4", name: "Performance", color: "rgb(234, 179, 8)" },
  { id: "l5", name: "AI", color: "rgb(34, 197, 94)" },
  { id: "l6", name: "Mobile", color: "rgb(59, 130, 246)" },
];

export const ISSUES: Issue[] = [
  { id: "JAK-926", title: "Remove UI inconsistencies", status: "in_progress", priority: 2, assigneeId: "m1", labelIds: ["l1", "l3"], projectId: "p1", cycleId: "c1", createdAt: "2026-06-20", dueDate: "2026-06-30", description: "Several UI inconsistencies have been identified across the iOS app. Need to audit and fix padding, colors, and typography.", commentCount: 4 },
  { id: "JAK-924", title: "Upgrade to Claude Opus 4.5", status: "in_progress", priority: 2, assigneeId: "m2", labelIds: ["l5"], projectId: "p2", cycleId: "c1", createdAt: "2026-06-18", dueDate: null, description: "Upgrade our AI integration from Claude 3 to Claude Opus 4.5 for improved performance.", commentCount: 7 },
  { id: "JAK-2088", title: "TypeError: Cannot read properties of undefined", status: "in_progress", priority: 1, assigneeId: "m3", labelIds: ["l1"], projectId: null, cycleId: "c1", createdAt: "2026-06-25", dueDate: "2026-06-27", description: "Critical error occurring in production on the settings screen when user has no payment method.", commentCount: 12 },
  { id: "JAK-1182", title: "Optimize load times on dashboard", status: "in_progress", priority: 2, assigneeId: "m4", labelIds: ["l4"], projectId: "p1", cycleId: "c1", createdAt: "2026-06-15", dueDate: null, description: "Dashboard load time is averaging 3.2s. Target is under 1s.", commentCount: 3 },
  { id: "JAK-2187", title: "Prevent duplicate ride requests on poor network", status: "in_progress", priority: 1, assigneeId: "m5", labelIds: ["l1", "l6"], projectId: null, cycleId: "c1", createdAt: "2026-06-24", dueDate: "2026-06-28", description: "Users on poor network connections sometimes trigger duplicate requests.", commentCount: 8 },
  { id: "JAK-1487", title: "Remove contentData from GraphQL API", status: "in_progress", priority: 3, assigneeId: "m6", labelIds: ["l2"], projectId: "p2", cycleId: null, createdAt: "2026-06-10", dueDate: null, description: "contentData field is deprecated and should be removed from the API.", commentCount: 2 },
  { id: "JAK-2103", title: "Implement offline mode for issue list", status: "in_progress", priority: 2, assigneeId: "m1", labelIds: ["l2", "l6"], projectId: "p3", cycleId: "c1", createdAt: "2026-06-22", dueDate: null, description: "Users need to be able to view their issues when offline.", commentCount: 5 },
  { id: "JAK-1028", title: "Launch page assets missing on CDN", status: "in_progress", priority: 1, assigneeId: "m3", labelIds: ["l3"], projectId: "p1", cycleId: "c1", createdAt: "2026-06-26", dueDate: "2026-06-27", description: "Several assets are returning 404 on the CDN edge nodes.", commentCount: 15 },
  { id: "JAK-2201", title: "Add haptic feedback to swipe actions", status: "todo", priority: 3, assigneeId: "m2", labelIds: ["l6"], projectId: "p1", cycleId: null, createdAt: "2026-06-23", dueDate: null, description: "Implement haptic feedback for swipe-to-complete and swipe-to-delete actions.", commentCount: 1 },
  { id: "JAK-2198", title: "Dark mode support for widgets", status: "todo", priority: 3, assigneeId: null, labelIds: ["l3", "l6"], projectId: "p1", cycleId: null, createdAt: "2026-06-23", dueDate: null, description: "Home screen widgets don't respect the system dark mode setting.", commentCount: 2 },
  { id: "JAK-2155", title: "Migrate analytics to PostHog", status: "todo", priority: 3, assigneeId: "m4", labelIds: ["l2"], projectId: "p2", cycleId: null, createdAt: "2026-06-20", dueDate: null, description: "Move from Mixpanel to PostHog for better data control.", commentCount: 3 },
  { id: "JAK-2122", title: "Add keyboard shortcut documentation", status: "todo", priority: 4, assigneeId: null, labelIds: ["l2"], projectId: null, cycleId: null, createdAt: "2026-06-18", dueDate: null, description: "Create in-app documentation for all keyboard shortcuts.", commentCount: 0 },
  { id: "JAK-2067", title: "Support custom status colors", status: "todo", priority: 3, assigneeId: "m1", labelIds: ["l2", "l3"], projectId: "p3", cycleId: null, createdAt: "2026-06-14", dueDate: null, description: "Allow teams to customize the colors of their workflow statuses.", commentCount: 4 },
  { id: "JAK-1993", title: "Export issues to CSV", status: "todo", priority: 4, assigneeId: null, labelIds: ["l2"], projectId: null, cycleId: null, createdAt: "2026-06-08", dueDate: null, description: "Add ability to export filtered issues to CSV for reporting.", commentCount: 6 },
  { id: "JAK-1876", title: "Push notification preferences per team", status: "todo", priority: 3, assigneeId: "m5", labelIds: ["l2", "l6"], projectId: "p3", cycleId: null, createdAt: "2026-05-30", dueDate: null, description: "Allow users to configure notification preferences at the team level.", commentCount: 2 },
  { id: "JAK-1654", title: "Bi-directional sync with GitHub Issues", status: "backlog", priority: 2, assigneeId: null, labelIds: ["l2"], projectId: null, cycleId: null, createdAt: "2026-05-15", dueDate: null, description: "Sync Linear issues with GitHub Issues in both directions.", commentCount: 11 },
  { id: "JAK-1521", title: "Roadmap view for sprints", status: "backlog", priority: 3, assigneeId: null, labelIds: ["l2"], projectId: null, cycleId: null, createdAt: "2026-05-05", dueDate: null, description: "Gantt-style view showing sprints across time.", commentCount: 8 },
  { id: "JAK-1498", title: "Time tracking integration", status: "backlog", priority: 4, assigneeId: null, labelIds: ["l2"], projectId: null, cycleId: null, createdAt: "2026-05-01", dueDate: null, description: "Integrate with Toggl and Harvest for time tracking.", commentCount: 5 },
  { id: "JAK-1432", title: "Recurring issues", status: "backlog", priority: 3, assigneeId: null, labelIds: ["l2"], projectId: null, cycleId: null, createdAt: "2026-04-22", dueDate: null, description: "Ability to create issues that automatically recur on a schedule.", commentCount: 14 },
  { id: "JAK-1301", title: "Bulk import from spreadsheet", status: "backlog", priority: 4, assigneeId: null, labelIds: ["l2"], projectId: null, cycleId: null, createdAt: "2026-04-10", dueDate: null, description: "Allow importing issues from CSV/Excel spreadsheets.", commentCount: 3 },
  { id: "JAK-1188", title: "Custom fields on issues", status: "backlog", priority: 2, assigneeId: null, labelIds: ["l2"], projectId: null, cycleId: null, createdAt: "2026-03-28", dueDate: null, description: "Allow teams to add custom metadata fields to issues.", commentCount: 22 },
  { id: "JAK-1045", title: "Native Windows app", status: "backlog", priority: 2, assigneeId: null, labelIds: ["l2", "l6"], projectId: null, cycleId: null, createdAt: "2026-03-10", dueDate: null, description: "Build a native Windows desktop application.", commentCount: 31 },
  { id: "JAK-987", title: "Video attachments on issues", status: "backlog", priority: 4, assigneeId: null, labelIds: ["l2"], projectId: null, cycleId: null, createdAt: "2026-02-20", dueDate: null, description: "Allow uploading and playing videos directly in issues.", commentCount: 7 },
  { id: "JAK-2089", title: "Fix login loop on token expiry", status: "done", priority: 1, assigneeId: "m3", labelIds: ["l1"], projectId: null, cycleId: "c2", createdAt: "2026-06-10", dueDate: null, description: "Users were being stuck in a login loop when their token expired.", commentCount: 6 },
  { id: "JAK-2045", title: "Add Siri shortcuts support", status: "done", priority: 3, assigneeId: "m2", labelIds: ["l6"], projectId: "p1", cycleId: "c2", createdAt: "2026-06-05", dueDate: null, description: "Added support for Siri shortcuts to quickly create and view issues.", commentCount: 2 },
  { id: "JAK-1998", title: "Redesign settings screen", status: "done", priority: 2, assigneeId: "m1", labelIds: ["l3"], projectId: "p1", cycleId: "c2", createdAt: "2026-05-28", dueDate: null, description: "Completely redesigned the settings screen with better organization.", commentCount: 8 },
  { id: "JAK-1945", title: "Update onboarding flow", status: "done", priority: 2, assigneeId: "m5", labelIds: ["l3", "l2"], projectId: "p3", cycleId: "c2", createdAt: "2026-05-20", dueDate: null, description: "Revamped the onboarding experience for new users.", commentCount: 4 },
  { id: "JAK-1756", title: "Integrate with Clubhouse", status: "cancelled", priority: 3, assigneeId: null, labelIds: ["l2"], projectId: null, cycleId: null, createdAt: "2026-05-01", dueDate: null, description: "Bi-directional sync with Shortcut (formerly Clubhouse). Deprioritized as team moved off.", commentCount: 1 },
  { id: "JAK-1623", title: "AR task visualization", status: "cancelled", priority: 4, assigneeId: null, labelIds: ["l2"], projectId: null, cycleId: null, createdAt: "2026-04-15", dueDate: null, description: "Experimental AR view for task boards. Cancelled due to complexity.", commentCount: 3 },
  { id: "JAK-1502", title: "NFT badge system for completed issues", status: "cancelled", priority: 4, assigneeId: null, labelIds: ["l2"], projectId: null, cycleId: null, createdAt: "2026-04-01", dueDate: null, description: "April fools concept. Cancelled.", commentCount: 42 },
];

export const PROJECTS: Project[] = [
  { id: "p1", name: "UI refresh", status: "in_progress", progress: 65, leadId: "m1", startDate: "2026-05-01", targetDate: "2026-07-15", issueCount: 24 },
  { id: "p2", name: "API v2", status: "in_progress", progress: 40, leadId: "m6", startDate: "2026-06-01", targetDate: "2026-08-01", issueCount: 18 },
  { id: "p3", name: "Tokyo launch", status: "planned", progress: 10, leadId: "m2", startDate: "2026-07-01", targetDate: "2026-09-01", issueCount: 31 },
  { id: "p4", name: "iOS offline mode", status: "planned", progress: 5, leadId: "m4", startDate: "2026-08-01", targetDate: "2026-10-01", issueCount: 12 },
];

export const CYCLES: Cycle[] = [
  { id: "c1", name: "Cycle 14", number: 14, status: "active", startDate: "2026-06-23", endDate: "2026-07-06", progress: 60, issueCount: 8, completedCount: 5 },
  { id: "c2", name: "Cycle 13", number: 13, status: "completed", startDate: "2026-06-09", endDate: "2026-06-22", progress: 100, issueCount: 10, completedCount: 10 },
  { id: "c3", name: "Cycle 15", number: 15, status: "upcoming", startDate: "2026-07-07", endDate: "2026-07-20", progress: 0, issueCount: 0, completedCount: 0 },
];
