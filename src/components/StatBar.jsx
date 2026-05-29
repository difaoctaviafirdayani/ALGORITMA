// src/components/StatBar.jsx

import { STAT_COLORS } from "../constants";
import { s } from "../styles";

export default function StatBar({ stat, value }) {
  const max = 255;
  const pct = Math.round((value / max) * 100);
  const color = STAT_COLORS[stat] || "#78909c";

  return (
    <div style={s.statRow}>
      <span style={s.statName}>{stat.replace("-", " ")}</span>
      <span style={{ ...s.statValue, color }}>{value}</span>
      <div style={s.statBg}>
        <div
          style={{
            ...s.statFill,
            background: color,
            width: `${pct}%`,
            animation: "barFill 0.8s ease-out forwards",
          }}
        />
      </div>
    </div>
  );
}
