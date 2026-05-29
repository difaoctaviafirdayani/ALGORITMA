// src/components/PokemonCard.jsx

import { useState } from "react";
import { TYPE_COLORS } from "../constants";
import { s } from "../styles";
import TypeBadge from "./TypeBadge";

export default function PokemonCard({ pokemon, onClick }) {
  const [hovered, setHovered] = useState(false);
  const mainType = pokemon.types[0]?.type.name || "normal";
  const color = TYPE_COLORS[mainType] || "#ccc";
  const imgSrc =
    pokemon.sprites?.other?.["official-artwork"]?.front_default ||
    pokemon.sprites?.front_default;

  return (
    <div
      onClick={() => onClick(pokemon)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...s.card,
        background: hovered
          ? `linear-gradient(145deg, ${color}33, #1a1a2e)`
          : "linear-gradient(145deg, #1e1e3e, #0d0d1a)",
        transform: hovered
          ? "translateY(-8px) scale(1.02)"
          : "translateY(0) scale(1)",
        boxShadow: hovered
          ? `0 20px 40px ${color}40`
          : "0 4px 12px rgba(0,0,0,0.4)",
        borderColor: hovered ? color : "#2d2d4e",
      }}
    >
      {/* Top accent bar */}
      <div style={{ ...s.cardAccent, background: `${color}22` }} />

      {/* Pokemon number */}
      <div style={s.cardNum}>#{String(pokemon.id).padStart(3, "0")}</div>

      {/* Image */}
      <div style={s.cardImgWrap}>
        <div
          style={{
            ...s.cardImgBg,
            background: `radial-gradient(circle, ${color}20, transparent 70%)`,
          }}
        />
        <img
          src={imgSrc}
          alt={pokemon.name}
          style={{
            ...s.cardImg,
            filter: hovered ? `drop-shadow(0 0 12px ${color}80)` : "none",
          }}
        />
      </div>

      {/* Name */}
      <h3 style={s.cardName}>{pokemon.name}</h3>

      {/* Types */}
      <div style={s.cardTypes}>
        {pokemon.types.map((t) => (
          <TypeBadge key={t.type.name} type={t.type.name} />
        ))}
      </div>

      {/* Quick stats */}
      <div style={s.cardStatRow}>
        <span>HP {pokemon.stats[0]?.base_stat}</span>
        <span>ATK {pokemon.stats[1]?.base_stat}</span>
        <span>DEF {pokemon.stats[2]?.base_stat}</span>
      </div>
    </div>
  );
}
