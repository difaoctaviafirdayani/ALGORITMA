// src/components/TypeFilter.jsx

import { TYPE_EMOJI } from "../constants";
import { s } from "../styles";

export default function TypeFilter({ value, onChange, types }) {
  return (
    <div style={s.filterWrap}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={s.select}
      >
        <option value="all">🌐 Semua Tipe</option>
        {types.map((t) => (
          <option key={t} value={t}>
            {TYPE_EMOJI[t] || "❓"} {t}
          </option>
        ))}
      </select>
    </div>
  );
}
