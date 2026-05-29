// src/components/PokemonGrid.jsx

import { s } from "../styles";
import PokemonCard from "./PokemonCard";

export default function PokemonGrid({ pokemon, onSelect, page, LIMIT }) {
  if (pokemon.length === 0) {
    return (
      <div style={s.emptyState}>
        <div style={s.emptyIcon}>🔍</div>
        <p>Pokémon tidak ditemukan. Coba kata kunci atau filter lain.</p>
      </div>
    );
  }

  return (
    <div className="poke-grid" style={s.grid}>
      {pokemon.map((p, i) => (
        <div
          key={p.id}
          style={{
            animation: `fadeIn 0.4s ease ${(i % LIMIT) * 0.04}s both`,
          }}
        >
          <PokemonCard pokemon={p} onClick={onSelect} />
        </div>
      ))}
    </div>
  );
}
