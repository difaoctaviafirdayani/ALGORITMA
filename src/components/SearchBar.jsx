// src/components/SearchBar.jsx

import { s } from "../styles";

export default function SearchBar({ value, onChange }) {
  return (
    <div style={s.searchWrap}>
      <span style={s.searchIcon}>🔍</span>
      <input
        type="text"
        placeholder="Cari nama atau ID Pokémon..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={s.searchInput}
      />
      {value && (
        <button onClick={() => onChange("")} style={s.clearBtn}>
          ✕
        </button>
      )}
    </div>
  );
}
