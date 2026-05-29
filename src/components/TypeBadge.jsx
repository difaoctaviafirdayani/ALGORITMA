// src/components/TypeBadge.jsx

import { TYPE_COLORS, TYPE_EMOJI } from "../constants";
import { s } from "../styles";

export default function TypeBadge({ type }) {
  const color = TYPE_COLORS[type] || "#999";
  const emoji = TYPE_EMOJI[type] || "❓";

  return (
    <span style={{ ...s.typeBadge, background: color }}>
      {emoji} {type}
    </span>
  );
}
