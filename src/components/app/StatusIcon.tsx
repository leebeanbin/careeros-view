import type { IssueStatus } from "@/data/mock";

interface StatusIconProps {
  status: IssueStatus;
  size?: number;
}

export function StatusIcon({ status, size = 16 }: StatusIconProps) {
  const s = size;
  const cx = s / 2;
  const cy = s / 2;
  const r = s / 2 - 1.5;

  if (status === "backlog") {
    return (
      <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none">
        <circle
          cx={cx}
          cy={cy}
          r={r}
          stroke="rgb(138,143,152)"
          strokeWidth="1.5"
          strokeDasharray="3 2"
        />
      </svg>
    );
  }

  if (status === "todo") {
    return (
      <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none">
        <circle cx={cx} cy={cy} r={r} stroke="rgb(138,143,152)" strokeWidth="1.5" />
      </svg>
    );
  }

  if (status === "in_progress") {
    const innerR = r - 2;
    const toRad = (deg: number) => (deg * Math.PI) / 180;
    const x1 = cx + innerR * Math.cos(toRad(-90));
    const y1 = cy + innerR * Math.sin(toRad(-90));
    const x2 = cx + innerR * Math.cos(toRad(90));
    const y2 = cy + innerR * Math.sin(toRad(90));
    return (
      <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none">
        <circle cx={cx} cy={cy} r={r} stroke="rgb(234,179,8)" strokeWidth="1.5" />
        <path
          d={`M ${cx} ${cy} L ${x1} ${y1} A ${innerR} ${innerR} 0 0 1 ${x2} ${y2} Z`}
          fill="rgb(234,179,8)"
        />
      </svg>
    );
  }

  if (status === "in_review") {
    return (
      <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none">
        <circle cx={cx} cy={cy} r={r} stroke="rgb(96,121,241)" strokeWidth="1.5" />
        <circle cx={cx} cy={cy} r={r - 3} fill="rgb(96,121,241)" />
      </svg>
    );
  }

  if (status === "done") {
    const checkSize = s * 0.38;
    return (
      <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none">
        <circle cx={cx} cy={cy} r={r + 1} fill="rgb(34,197,94)" />
        <polyline
          points={`${cx - checkSize * 0.6},${cy} ${cx - checkSize * 0.1},${cy + checkSize * 0.5} ${cx + checkSize * 0.7},${cy - checkSize * 0.45}`}
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none">
      <circle cx={cx} cy={cy} r={r} stroke="rgb(138,143,152)" strokeWidth="1.5" />
      <line
        x1={cx - r * 0.4}
        y1={cy - r * 0.4}
        x2={cx + r * 0.4}
        y2={cy + r * 0.4}
        stroke="rgb(138,143,152)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1={cx + r * 0.4}
        y1={cy - r * 0.4}
        x2={cx - r * 0.4}
        y2={cy + r * 0.4}
        stroke="rgb(138,143,152)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
