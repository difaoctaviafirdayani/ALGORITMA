// src/hooks/usePokemon.js
// Custom hook untuk mengambil data dari PokéAPI (Endpoint 1 + 2)

import { useState, useEffect, useCallback } from "react";
import { API_BASE, POKEMON_LIMIT } from "../constants";

export default function usePokemon() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Endpoint 1: GET list pokemon
  // Endpoint 2: GET detail tiap pokemon (id, stats, types, sprites, moves, abilities)
  const fetchPokemon = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${API_BASE}/pokemon?limit=100&offset=0`);
      if (!res.ok) throw new Error("Gagal mengambil daftar Pokémon");
      const data = await res.json();

      const details = await Promise.all(
        data.results.map((p) =>
          fetch(p.url)
            .then((r) => r.json())
            .catch(() => null)
        )
      );

      setAllPokemon(details.filter(Boolean));
    } catch (err) {
      setError("Gagal memuat data Pokémon. Periksa koneksi internet Anda.");
      console.error("API Error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]);

  return { allPokemon, loading, error, refetch: fetchPokemon };
}
