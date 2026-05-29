// src/App.jsx

import { useState, useEffect } from "react";
import { POKEMON_LIMIT } from "./constants";
import { s, GLOBAL_CSS } from "./styles";

import usePokemon from "./hooks/usePokemon";
import useAbility from "./hooks/useAbility";

import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";
import SearchBar from "./components/SearchBar";
import TypeFilter from "./components/TypeFilter";
import PokemonGrid from "./components/PokemonGrid";
import PokemonModal from "./components/PokemonModal";

export default function App() {
  const { allPokemon, loading, error, refetch } = usePokemon();
  const { ability, fetchAbility } = useAbility();

  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);

  // Hitung data yang sudah difilter
  const filtered = allPokemon.filter((p) => {
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      String(p.id).includes(search);
    const matchType =
      filterType === "all" || p.types.some((t) => t.type.name === filterType);
    return matchSearch && matchType;
  });

  const displayed = filtered.slice(0, page * POKEMON_LIMIT);
  const uniqueTypes = [
    ...new Set(allPokemon.flatMap((p) => p.types.map((t) => t.type.name))),
  ].sort();

  // Reset page saat filter/search berubah
  useEffect(() => {
    setPage(1);
  }, [search, filterType]);

  const handleSelectPokemon = (pokemon) => {
    setSelected(pokemon);
    const firstAbilityUrl = pokemon.abilities?.[0]?.ability?.url;
    fetchAbility(firstAbilityUrl);
  };

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setPage((p) => p + 1);
      setLoadingMore(false);
    }, 400);
  };

  // Conditional rendering
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} onRetry={refetch} />;

  return (
    <div style={s.app}>
      <style>{GLOBAL_CSS}</style>

      {/* ===== HEADER ===== */}
      <header style={s.header}>
        <div style={s.headerInner}>
          <div style={s.logo}>
            <span style={s.logoBall}>⬤</span>
            <div>
              <h1 style={s.title}>Pokédex Dashboard</h1>
              <p style={s.subtitle}>React × PokéAPI Integration</p>
            </div>
          </div>
          <div style={s.headerStats}>
            <div style={s.statChip}>
              <span style={s.statChipNum}>{allPokemon.length}</span>
              <span>Total</span>
            </div>
            <div style={s.statChip}>
              <span style={s.statChipNum}>{filtered.length}</span>
              <span>Hasil</span>
            </div>
            <div style={s.statChip}>
              <span style={s.statChipNum}>{uniqueTypes.length}</span>
              <span>Tipe</span>
            </div>
          </div>
        </div>
      </header>

      {/* ===== CONTROLS (Search + Filter) ===== */}
      <div style={s.controls}>
        <SearchBar value={search} onChange={setSearch} />
        <TypeFilter
          value={filterType}
          onChange={setFilterType}
          types={uniqueTypes}
        />
      </div>

      {/* ===== INFO BAR ===== */}
      <div style={s.infoBar}>
        <span>
          Menampilkan{" "}
          <b style={{ color: "#7c6aff" }}>{displayed.length}</b> dari{" "}
          <b style={{ color: "#7c6aff" }}>{filtered.length}</b> Pokémon
        </span>
        {(search || filterType !== "all") && (
          <button
            onClick={() => {
              setSearch("");
              setFilterType("all");
            }}
            style={s.resetBtn}
          >
            ↺ Reset Filter
          </button>
        )}
      </div>

      {/* ===== GRID ===== */}
      <PokemonGrid
        pokemon={displayed}
        onSelect={handleSelectPokemon}
        page={page}
        LIMIT={POKEMON_LIMIT}
      />

      {/* ===== LOAD MORE ===== */}
      {displayed.length < filtered.length && (
        <div style={s.loadMoreWrap}>
          <button
            onClick={handleLoadMore}
            disabled={loadingMore}
            style={s.loadMoreBtn}
          >
            {loadingMore
              ? "⏳ Memuat..."
              : `Muat Lebih Banyak (${filtered.length - displayed.length} tersisa)`}
          </button>
        </div>
      )}

      {/* ===== MODAL ===== */}
      {selected && (
        <PokemonModal
          pokemon={selected}
          ability={ability}
          onClose={() => {
            setSelected(null);
          }}
        />
      )}

      {/* ===== FOOTER ===== */}
      <footer style={s.footer}>
        Data dari{" "}
        <a
          href="https://pokeapi.co"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#7c6aff" }}
        >
          PokéAPI
        </a>{" "}
        · Tugas Integrasi API — ReactJS
      </footer>
    </div>
  );
}
