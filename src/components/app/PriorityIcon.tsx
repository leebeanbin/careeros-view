import type { Priority } from "@/data/mock";

interface PriorityIconProps {
  priority: Priority;
  size?: number;
}

export function PriorityIcon({ priority, size = 16 }: PriorityIconProps) {
  const s = size;

  if (priority === 0) {
    return (
      <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none">
        <line
          x1={s * 0.2}
          y1={s * 0.5}
          x2={s * 0.8}
          y2={s * 0.5}
          stroke="rgb(138,143,152)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (priority === 1) {
    return (
      <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none">
        <circle cx={s / 2} cy={s / 2} r={s / 2 - 1} fill="rgb(239,68,68)" />
        <text
          x={s / 2}
          y={s / 2 + 4}
          textAnchor="middle"
          fontSize={s * 0.65}
          fontWeight="700"
          fill="white"
          fontFamily="system-ui"
        >
          !
        </text>
      </svg>
    );
  }

  const barW = Math.floor(s * 0.22);
  const gap = Math.floor(s * 0.1);
  const totalW = barW * 3 + gap * 2;
  const startX = (s - totalW) / 2;
  const maxH = s * 0.72;
  const baseY = s * 0.84;

  const heights = [maxH * 0.4, maxH * 0.7, maxH];
  const filled = priority === 2 ? 3 : priority === 3 ? 2 : 1;

  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none">
      {heights.map((h, i) => {
        const x = startX + i * (barW + gap);
        const y = baseY - h;
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={barW}
            height={h}
            rx={1}
            fill={i < filled ? "rgb(234,179,8)" : "rgb(60,63,68)"}
          />
        );
      })}
    </svg>
  );
}
