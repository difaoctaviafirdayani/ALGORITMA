// src/components/PokemonModal.jsx

import { TYPE_COLORS } from "../constants";
import { s } from "../styles";
import TypeBadge from "./TypeBadge";
import StatBar from "./StatBar";

export default function PokemonModal({ pokemon, ability, onClose }) {
  if (!pokemon) return null;

  const mainType = pokemon.types[0]?.type.name || "normal";
  const color = TYPE_COLORS[mainType] || "#ccc";
  const imgSrc =
    pokemon.sprites?.other?.["official-artwork"]?.front_default ||
    pokemon.sprites?.front_default;

  return (
    <div style={s.overlay} onClick={onClose}>
      <div
        className="poke-modal"
        style={{ ...s.modal, borderColor: color }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button onClick={onClose} style={s.closeBtn}>✕</button>

        {/* Header */}
        <div
          style={{
            ...s.modalHeader,
            background: `linear-gradient(135deg, ${color}44, transparent)`,
          }}
        >
          <div style={s.modalNum}>#{String(pokemon.id).padStart(3, "0")}</div>
          <img
            src={imgSrc}
            alt={pokemon.name}
            style={{ ...s.modalImg, filter: `drop-shadow(0 0 20px ${color})` }}
          />
          <h2 style={s.modalName}>{pokemon.name}</h2>
          <div style={s.cardTypes}>
            {pokemon.types.map((t) => (
              <TypeBadge key={t.type.name} type={t.type.name} />
            ))}
          </div>
        </div>

        {/* Body */}
        <div style={s.modalBody}>
          {/* Info grid */}
          <div style={s.infoGrid}>
            <div style={s.infoItem}>
              <span style={s.infoLabel}>Height</span>
              <span style={s.infoVal}>{pokemon.height / 10}m</span>
            </div>
            <div style={s.infoItem}>
              <span style={s.infoLabel}>Weight</span>
              <span style={s.infoVal}>{pokemon.weight / 10}kg</span>
            </div>
            <div style={s.infoItem}>
              <span style={s.infoLabel}>Base XP</span>
              <span style={s.infoVal}>{pokemon.base_experience}</span>
            </div>
            <div style={s.infoItem}>
              <span style={s.infoLabel}>Abilities</span>
              <span style={s.infoVal}>{pokemon.abilities?.length || 0}</span>
            </div>
          </div>

          {/* Stats */}
          <h4 style={s.sectionTitle}>Base Stats</h4>
          {pokemon.stats.map((st) => (
            <StatBar key={st.stat.name} stat={st.stat.name} value={st.base_stat} />
          ))}

          {/* Ability */}
          {ability && (
            <div style={{ ...s.abilityBox, borderColor: color }}>
              <h4 style={{ ...s.sectionTitle, marginTop: 0 }}>
                ✨ Ability:{" "}
                <span style={{ color }}>{ability.name}</span>
              </h4>
              <p style={s.abilityDesc}>
                {ability.effect_entries?.find((e) => e.language.name === "en")
                  ?.short_effect || "No description available."}
              </p>
            </div>
          )}

          {/* Moves */}
          <h4 style={s.sectionTitle}>Moves (first 8)</h4>
          <div style={s.movesGrid}>
            {pokemon.moves?.slice(0, 8).map((m) => (
              <span key={m.move.name} style={s.moveChip}>
                {m.move.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
